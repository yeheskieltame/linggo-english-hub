// Conversation service for role-playing with LLM
import { ConversationScenario } from '@/data/conversationScenarios';
import { speakText } from './textToSpeech';

export interface ConversationMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ConversationFeedback {
  score: number;
  overallFeedback: string;
  strengthPoints: string[];
  improvementAreas: string[];
  vocabularyFeedback: string;
  grammarFeedback: string;
  fluencyFeedback: string;
  recommendedPhrases: string[];
}

// Initialize a conversation with a scenario
export const initializeConversation = async (
  scenario: ConversationScenario
): Promise<ConversationMessage[]> => {
  // Create the initial system message that sets up the role-play
  const systemMessage: ConversationMessage = {
    role: 'system',
    content: `You are role-playing as ${scenario.aiRole} in the following scenario: "${scenario.description}".
    
    The user is playing the role of ${scenario.userRole}.
    
    Respond naturally as your character would in this situation. Keep responses concise (1-3 sentences) to maintain conversation flow.
    Do not break character or provide meta-commentary about the role-play.
    
    This is a language learning exercise, so use natural, conversational English appropriate for the scenario.`
  };

  // Add the initial prompt from the AI to start the conversation
  const initialPrompt: ConversationMessage = {
    role: 'assistant',
    content: scenario.initialPrompt
  };

  // Return the initial conversation state
  return [systemMessage, initialPrompt];
};

// Send a user message and get AI response
export const sendMessage = async (
  messages: ConversationMessage[],
  userMessage: string
): Promise<ConversationMessage> => {
  try {
    // Get API key from environment variables
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    if (!apiKey) {
      console.error('GROQ API key not found');
      return {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting. Let's continue our conversation in a moment."
      };
    }

    // Add the user message to the conversation history
    const updatedMessages = [
      ...messages,
      { role: 'user', content: userMessage }
    ];

    // Filter out system messages for the API call
    const apiMessages = updatedMessages.filter(msg => msg.role !== 'system');

    // Make API call to Groq
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          updatedMessages[0], // System message
          ...apiMessages.slice(-4) // Last 4 messages for context
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from Groq API:', errorText);
      throw new Error('Failed to get response from AI');
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Return the AI response
    return {
      role: 'assistant',
      content: aiResponse
    };
  } catch (error) {
    console.error('Error in conversation:', error);
    return {
      role: 'assistant',
      content: "I'm sorry, there was an error in our conversation. Let's try to continue."
    };
  }
};

// Speak the AI message aloud
export const speakAIMessage = async (message: string): Promise<void> => {
  try {
    await speakText(message);
  } catch (error) {
    console.error('Error speaking AI message:', error);
  }
};

// Generate conversation feedback
export const generateConversationFeedback = async (
  messages: ConversationMessage[],
  scenario: ConversationScenario
): Promise<ConversationFeedback> => {
  try {
    // Get API key from environment variables
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    if (!apiKey) {
      console.error('GROQ API key not found');
      return getFallbackFeedback();
    }

    // Filter out system messages and get only user messages for analysis
    const userMessages = messages
      .filter(msg => msg.role === 'user')
      .map(msg => msg.content);
    
    // Create a prompt for the LLM to analyze the conversation
    const systemPrompt = `You are an expert English language teacher and communication coach.
    
    Analyze the following conversation where the student was role-playing as ${scenario.userRole} in this scenario: "${scenario.description}".
    
    The student was speaking with ${scenario.aiRole}.
    
    Provide detailed feedback on:
    1. Overall communication effectiveness
    2. Language accuracy (grammar, vocabulary)
    3. Fluency and natural expression
    4. Appropriateness for the scenario
    5. Specific strengths
    6. Areas for improvement
    
    Return your analysis in JSON format with these fields:
    - score: A number from 0-100 representing overall performance
    - overallFeedback: A helpful, encouraging paragraph with your main feedback
    - strengthPoints: Array of 2-3 specific strengths
    - improvementAreas: Array of 2-3 specific areas to improve
    - vocabularyFeedback: Feedback on vocabulary usage
    - grammarFeedback: Feedback on grammar
    - fluencyFeedback: Feedback on fluency and natural expression
    - recommendedPhrases: Array of 3-5 useful phrases the student could use in similar situations`;

    // Make API call to Groq
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessages.join('\n\n') }
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from Groq API:', errorText);
      return getFallbackFeedback();
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    try {
      // Parse the JSON response
      const feedbackData = JSON.parse(content);
      return {
        score: feedbackData.score || 70,
        overallFeedback: feedbackData.overallFeedback || "You did well in this conversation practice.",
        strengthPoints: feedbackData.strengthPoints || ["Good effort in the conversation"],
        improvementAreas: feedbackData.improvementAreas || ["Continue practicing regularly"],
        vocabularyFeedback: feedbackData.vocabularyFeedback || "Your vocabulary was appropriate for the scenario.",
        grammarFeedback: feedbackData.grammarFeedback || "Your grammar was generally correct.",
        fluencyFeedback: feedbackData.fluencyFeedback || "You maintained good conversation flow.",
        recommendedPhrases: feedbackData.recommendedPhrases || ["Consider using more varied expressions"]
      };
    } catch (parseError) {
      console.error('Error parsing LLM response:', parseError);
      return getFallbackFeedback();
    }
  } catch (error) {
    console.error('Error generating conversation feedback:', error);
    return getFallbackFeedback();
  }
};

// Fallback feedback in case of API failure
const getFallbackFeedback = (): ConversationFeedback => {
  return {
    score: 70,
    overallFeedback: "Thank you for participating in this conversation practice. Due to technical limitations, we couldn't generate personalized feedback this time, but your practice is still valuable for improving your skills.",
    strengthPoints: [
      "Participating in conversation practice",
      "Attempting to communicate in a realistic scenario"
    ],
    improvementAreas: [
      "Continue practicing with different scenarios",
      "Try recording yourself to self-evaluate your responses"
    ],
    vocabularyFeedback: "Try to incorporate more varied vocabulary in your conversations.",
    grammarFeedback: "Focus on sentence structure and tense consistency in your responses.",
    fluencyFeedback: "Practice speaking more regularly to improve your fluency and response time.",
    recommendedPhrases: [
      "I appreciate your perspective on this matter.",
      "Could you elaborate on that point?",
      "That's an interesting approach to consider.",
      "I understand your concerns about this issue."
    ]
  };
};