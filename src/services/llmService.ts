// LLM Service for Groq integration
interface LLMFeedbackResponse {
  score: number;
  feedback: string;
  detailedFeedback?: { word: string, issue: string }[];
}

/**
 * Makes a general request to the LLM API with a prompt
 * @param prompt The prompt to send to the LLM
 * @param requestJson Whether to request a JSON response format
 * @returns A promise that resolves to the LLM's response as a string
 */
export const llmRequest = async (prompt: string, requestJson: boolean = true): Promise<string> => {
  try {
    // Get API key from environment variables
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    if (!apiKey) {
      console.error('GROQ API key not found');
      if (requestJson) {
        return JSON.stringify({
          feedback: "Error: API key not found. Please check your environment variables.",
          strengths: ["Unable to assess due to system error"],
          areasToImprove: ["Unable to assess due to system error"],
          recommendedLessons: ["Basic English", "Grammar Fundamentals", "Vocabulary Building"]
        });
      }
      return "Error: API key not found. Please check your environment variables.";
    }

    // Add a system message to help ensure proper JSON formatting if requested
    const messages = requestJson 
      ? [
          {
            role: 'system',
            content: 'You are a helpful assistant that always responds in valid JSON format. Make sure your response can be parsed with JSON.parse().'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      : [
          {
            role: 'user',
            content: prompt
          }
        ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: messages,
        temperature: 0.7,
        response_format: requestJson ? { type: 'json_object' } : undefined
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from Groq API:', errorText);
      if (requestJson) {
        return JSON.stringify({
          feedback: "Error: Failed to get a response from the language model.",
          strengths: ["Unable to assess due to system error"],
          areasToImprove: ["Unable to assess due to system error"],
          recommendedLessons: ["Basic English", "Grammar Fundamentals", "Vocabulary Building"]
        });
      }
      return "Error: Failed to get a response from the language model.";
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling Groq API:', error);
    if (requestJson) {
      return JSON.stringify({
        feedback: "Error: An unexpected error occurred while processing your request.",
        strengths: ["Unable to assess due to system error"],
        areasToImprove: ["Unable to assess due to system error"],
        recommendedLessons: ["Basic English", "Grammar Fundamentals", "Vocabulary Building"]
      });
    }
    return "Error: An unexpected error occurred while processing your request.";
  }
};

/**
 * Analyzes user speech using Groq LLM API
 * @param userSpeech The transcribed speech from the user
 * @param prompt The speaking prompt/instruction given to the user
 * @param targetLanguage The language being practiced (default: 'english')
 * @returns Feedback object with score, general feedback, and detailed feedback
 */
export const analyzeSpeechWithLLM = async (
  userSpeech: string,
  prompt: string,
  targetLanguage: string = 'english'
): Promise<LLMFeedbackResponse> => {
  try {
    const systemPrompt = `You are an expert language teacher specializing in ${targetLanguage}. 
    Analyze the following speech from a language learner who was responding to this prompt: "${prompt}".
    
    Provide constructive feedback on:
    1. Grammar and sentence structure
    2. Vocabulary usage and appropriateness
    3. Fluency and natural expression
    4. Overall effectiveness in addressing the prompt
    
    Return your analysis in JSON format with these fields:
    - score: A number from 0-100 representing overall quality
    - feedback: A helpful, encouraging paragraph with your main feedback
    - detailedFeedback: An array of objects with {word: string, issue: string} highlighting specific words or phrases that need improvement`;

    // Use the llmRequest function with JSON response format
    const fullPrompt = `${systemPrompt}\n\nUser speech: "${userSpeech}"`;
    const content = await llmRequest(fullPrompt, true);
    
    try {
      // Parse the JSON response
      const feedbackData = JSON.parse(content);
      return {
        score: feedbackData.score || 70,
        feedback: feedbackData.feedback || "Your response was analyzed. Keep practicing!",
        detailedFeedback: feedbackData.detailedFeedback || []
      };
    } catch (parseError) {
      console.error('Error parsing LLM response:', parseError);
      return getFallbackFeedback(userSpeech);
    }
  } catch (error) {
    console.error('Error calling Groq API:', error);
    return getFallbackFeedback(userSpeech);
  }
};

// Fallback function in case the API call fails
const getFallbackFeedback = (userSpeech: string): LLMFeedbackResponse => {
  const wordCount = userSpeech.split(/\s+/).length;
  
  // Basic scoring based on response length
  let score = 0;
  let feedback = '';
  
  if (wordCount > 20) {
    score = 75;
    feedback = "Good attempt! You provided a detailed response. Continue practicing to improve fluency and vocabulary.";
  } else if (wordCount > 10) {
    score = 60;
    feedback = "Fair attempt. Try to expand your response with more details and complex sentence structures.";
  } else {
    score = 40;
    feedback = "Keep practicing! Try to provide more complete responses to demonstrate your language skills.";
  }
  
  return {
    score,
    feedback,
    detailedFeedback: [
      {
        word: "Note",
        issue: "Our analysis system is currently unavailable. This is automated feedback based on response length."
      }
    ]
  };
};