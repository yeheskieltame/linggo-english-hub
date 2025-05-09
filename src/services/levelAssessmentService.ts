
import { llmRequest } from './llmService';

export interface LevelAssessmentQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'fill-in-blank' | 'matching' | 'listening' | 'speaking' | 'image-based' | 'ordering';
  options?: string[];
  correctAnswer?: string;
  imageUrl?: string;
  audioUrl?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  instruction?: string;
  expectedPhrases?: string[];
  pairs?: Array<{ left: string; right: string }>;
  items?: string[];
  correctOrder?: number[];
}

export interface LevelAssessmentResult {
  level: 'beginner' | 'intermediate' | 'advanced';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  feedback: string;
  strengths: string[];
  areasToImprove: string[];
  recommendedLessons: string[];
}

// Enhanced assessment questions covering different levels, skills, and question types
export const levelAssessmentQuestions: LevelAssessmentQuestion[] = [
  // A1-A2 (Beginner) Questions
  {
    id: 'q1',
    question: 'What is the correct way to introduce yourself?',
    type: 'multiple-choice',
    options: [
      'My name is John.',
      'I John.',
      'John I am.',
      'Name John.'
    ],
    correctAnswer: 'My name is John.',
    difficulty: 'beginner',
    cefrLevel: 'A1',
    instruction: 'Choose the correct way to introduce yourself in English.'
  },
  {
    id: 'q2',
    question: 'Complete the sentence: "She _____ like coffee."',
    type: 'fill-in-blank',
    options: [
      "don't",
      "doesn't",
      "not",
      "isn't"
    ],
    correctAnswer: "doesn't",
    difficulty: 'beginner',
    cefrLevel: 'A1',
    instruction: 'Select the correct word to complete the negative sentence.'
  },
  {
    id: 'q3',
    question: 'What is this person doing?',
    type: 'image-based',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    options: [
      'Working on a computer',
      'Reading a book',
      'Eating dinner',
      'Watching television'
    ],
    correctAnswer: 'Working on a computer',
    difficulty: 'beginner',
    cefrLevel: 'A2',
    instruction: 'Look at the image and select the option that best describes what the person is doing.'
  },
  {
    id: 'q4',
    question: 'Match the verb to its past tense form:',
    type: 'matching',
    pairs: [
      { left: 'go', right: 'went' },
      { left: 'eat', right: 'ate' },
      { left: 'see', right: 'saw' },
      { left: 'buy', right: 'bought' }
    ],
    difficulty: 'beginner',
    cefrLevel: 'A2',
    instruction: 'Draw lines to match each verb with its correct past tense form.'
  },
  
  // B1-B2 (Intermediate) Questions
  {
    id: 'q5',
    question: 'Record yourself describing this image',
    type: 'speaking',
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    expectedPhrases: ['lights', 'trees', 'night', 'forest', 'yellow', 'dark'],
    difficulty: 'intermediate',
    cefrLevel: 'B1',
    instruction: 'Look at the image and describe what you see in at least 3 sentences. Mention the main elements and the atmosphere.'
  },
  {
    id: 'q6',
    question: 'Put the words in the correct order to form a question:',
    type: 'ordering',
    items: [
      'you',
      'have',
      'how long',
      'learning English',
      'been'
    ],
    correctOrder: [2, 0, 4, 3, 1],
    difficulty: 'intermediate',
    cefrLevel: 'B1',
    instruction: 'Arrange the words to create a grammatically correct question.'
  },
  {
    id: 'q7',
    question: 'Listen to the audio and answer the question: What is the speaker\'s plan for the weekend?',
    type: 'listening',
    audioUrl: '/audio/weekend-plans.mp3',
    options: [
      'Going to the beach',
      'Studying at the library',
      'Visiting family',
      'Attending a concert'
    ],
    correctAnswer: 'Visiting family',
    difficulty: 'intermediate',
    cefrLevel: 'B2',
    instruction: 'Listen to the audio clip carefully (you can play it up to 3 times) and select the correct answer.'
  },
  {
    id: 'q8',
    question: 'In the image, what programming language is shown on the screen?',
    type: 'image-based',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    options: [
      'Python',
      'JavaScript',
      'Java',
      'C++'
    ],
    correctAnswer: 'Java',
    difficulty: 'intermediate',
    cefrLevel: 'B2',
    instruction: 'Examine the code on the screen in the image and identify the programming language being used.'
  },
  
  // C1-C2 (Advanced) Questions
  {
    id: 'q9',
    question: 'Complete the following idiomatic expression: "It\'s raining _____"',
    type: 'fill-in-blank',
    options: [
      'dogs and cats',
      'cats and dogs',
      'heavily',
      'a lot'
    ],
    correctAnswer: 'cats and dogs',
    difficulty: 'advanced',
    cefrLevel: 'C1',
    instruction: 'Select the correct option to complete this common English idiom that describes heavy rain.'
  },
  {
    id: 'q10',
    question: 'Record yourself explaining the advantages and disadvantages of remote work.',
    type: 'speaking',
    expectedPhrases: ['flexibility', 'work-life balance', 'isolation', 'communication', 'productivity', 'challenges'],
    difficulty: 'advanced',
    cefrLevel: 'C1',
    instruction: 'Speak for at least 45 seconds about the pros and cons of remote work. Include at least 3 advantages and 3 disadvantages.'
  },
  {
    id: 'q11',
    question: 'Choose the sentence with the correct subjunctive form.',
    type: 'multiple-choice',
    options: [
      'I suggest that he goes to the doctor.',
      'I suggest that he go to the doctor.',
      'I suggest that he will go to the doctor.',
      'I suggest that he should to go to the doctor.'
    ],
    correctAnswer: 'I suggest that he go to the doctor.',
    difficulty: 'advanced',
    cefrLevel: 'C2',
    instruction: 'Select the sentence that correctly uses the subjunctive mood.'
  },
  {
    id: 'q12',
    question: 'Match each term with its definition:',
    type: 'matching',
    pairs: [
      { left: 'Procrastination', right: 'Delaying or postponing tasks' },
      { left: 'Ambivalence', right: 'Having mixed feelings or contradictory ideas' },
      { left: 'Pragmatic', right: 'Dealing with things sensibly and realistically' },
      { left: 'Meticulous', right: 'Showing great attention to detail' }
    ],
    difficulty: 'advanced',
    cefrLevel: 'C2',
    instruction: 'Match each advanced vocabulary term with its correct definition.'
  }
];

/**
 * Evaluates the user's answers and determines their English level
 * @param userAnswers An object mapping question IDs to the user's selected answers
 * @returns A promise that resolves to the assessment result
 */
export const evaluateAssessment = async (userAnswers: Record<string, string>): Promise<LevelAssessmentResult> => {
  // Count correct answers by difficulty level
  let beginnerCorrect = 0;
  let intermediateCorrect = 0;
  let advancedCorrect = 0;
  let totalCorrect = 0;
  
  // Track which questions were answered correctly
  const correctQuestionIds: string[] = [];
  const incorrectQuestionIds: string[] = [];
  
  // Evaluate each answer
  levelAssessmentQuestions.forEach(question => {
    const userAnswer = userAnswers[question.id];
    let isCorrect = false;
    
    if (question.type === 'multiple-choice' || question.type === 'fill-in-blank' || question.type === 'image-based' || question.type === 'listening') {
      isCorrect = userAnswer === question.correctAnswer;
    } 
    // For speaking questions, we would need more sophisticated evaluation, but for now we'll mark them correct
    else if (question.type === 'speaking') {
      isCorrect = !!userAnswer; // Mark as correct if there's any answer
    }
    // For matching, we would need to compare pairs, simplified check for now
    else if (question.type === 'matching') {
      isCorrect = !!userAnswer; // Simplified check
    }
    // For ordering questions
    else if (question.type === 'ordering') {
      isCorrect = !!userAnswer; // Simplified check
    }
    
    if (isCorrect) {
      totalCorrect++;
      correctQuestionIds.push(question.id);
      
      // Increment the counter for the appropriate difficulty level
      if (question.difficulty === 'beginner') beginnerCorrect++;
      else if (question.difficulty === 'intermediate') intermediateCorrect++;
      else if (question.difficulty === 'advanced') advancedCorrect++;
    } else {
      incorrectQuestionIds.push(question.id);
    }
  });
  
  // Determine the user's level based on their performance
  let level: 'beginner' | 'intermediate' | 'advanced';
  let cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  
  const beginnerScore = beginnerCorrect / 4; // 4 beginner questions
  const intermediateScore = intermediateCorrect / 4; // 4 intermediate questions
  const advancedScore = advancedCorrect / 4; // 4 advanced questions
  
  // Determine level based on scores at each level
  if (advancedScore >= 0.75) {
    level = 'advanced';
    cefrLevel = advancedScore >= 0.9 ? 'C2' : 'C1';
  } else if (intermediateScore >= 0.75) {
    level = 'intermediate';
    cefrLevel = intermediateScore >= 0.9 ? 'B2' : 'B1';
  } else {
    level = 'beginner';
    cefrLevel = beginnerScore >= 0.75 ? 'A2' : 'A1';
  }
  
  // Calculate overall score as a percentage
  const score = (totalCorrect / levelAssessmentQuestions.length) * 100;
  
  // Generate feedback using LLM
  const feedbackPrompt = `
    Generate personalized feedback for an English language learner based on their assessment results:
    - Overall level: ${level} (CEFR: ${cefrLevel})
    - Score: ${score.toFixed(1)}%
    - Correct answers: ${totalCorrect}/${levelAssessmentQuestions.length}
    - Performance by level: Beginner (${beginnerCorrect}/4), Intermediate (${intermediateCorrect}/4), Advanced (${advancedCorrect}/4)
    
    Provide:
    1. A brief, encouraging paragraph about their current level
    2. Three specific strengths based on the questions they answered correctly
    3. Three specific areas to improve based on questions they missed
    4. Three recommended lesson topics that would help them progress
    
    Format the response as a JSON object with these fields: feedback (string), strengths (array of strings), areasToImprove (array of strings), recommendedLessons (array of strings).
  `;
  
  try {
    // Use the llmRequest function with JSON response format (true is the default)
    const feedbackResponse = await llmRequest(feedbackPrompt, true);
    
    try {
      // Try to parse the JSON response
      const feedbackData = JSON.parse(feedbackResponse);
      
      // Check if the response has all the required fields
      if (feedbackData.feedback && 
          Array.isArray(feedbackData.strengths) && 
          Array.isArray(feedbackData.areasToImprove) && 
          Array.isArray(feedbackData.recommendedLessons)) {
        
        return {
          level,
          cefrLevel,
          score,
          totalQuestions: levelAssessmentQuestions.length,
          correctAnswers: totalCorrect,
          feedback: feedbackData.feedback,
          strengths: feedbackData.strengths,
          areasToImprove: feedbackData.areasToImprove,
          recommendedLessons: feedbackData.recommendedLessons
        };
      } else {
        // If the response is missing required fields, throw an error to use the fallback
        throw new Error('LLM response missing required fields');
      }
    } catch (parseError) {
      console.error('Error parsing LLM response:', parseError);
      throw parseError; // Re-throw to use the fallback
    }
  } catch (error) {
    console.error('Error generating assessment feedback:', error);
    
    // Generate default feedback based on the user's level
    let defaultFeedback = `You've completed the assessment and your current English level is ${level} (CEFR: ${cefrLevel}). You answered ${totalCorrect} out of ${levelAssessmentQuestions.length} questions correctly.`;
    let defaultStrengths = ['Basic grammar understanding', 'Vocabulary recognition', 'Sentence structure'];
    let defaultAreasToImprove = ['Advanced grammar concepts', 'Idiomatic expressions', 'Complex sentence structures'];
    let defaultLessons = ['Basic Conversations', 'Grammar Fundamentals', 'Vocabulary Building'];
    
    // Customize default feedback based on level
    if (level === 'intermediate') {
      defaultFeedback = `Great job! You've demonstrated an intermediate level of English proficiency (CEFR: ${cefrLevel}). You answered ${totalCorrect} out of ${levelAssessmentQuestions.length} questions correctly.`;
      defaultStrengths = ['Intermediate grammar usage', 'Good vocabulary range', 'Ability to understand context'];
      defaultAreasToImprove = ['Advanced tenses', 'Idiomatic expressions', 'Complex grammatical structures'];
      defaultLessons = ['Business English', 'Everyday Conversations', 'Intermediate Grammar'];
    } else if (level === 'advanced') {
      defaultFeedback = `Excellent work! You've demonstrated an advanced level of English proficiency (CEFR: ${cefrLevel}). You answered ${totalCorrect} out of ${levelAssessmentQuestions.length} questions correctly.`;
      defaultStrengths = ['Advanced grammar mastery', 'Extensive vocabulary', 'Nuanced language understanding'];
      defaultAreasToImprove = ['Native-like fluency', 'Academic writing', 'Professional terminology'];
      defaultLessons = ['Advanced Business English', 'Academic Writing', 'Professional Communication'];
    }
    
    // Provide default feedback if LLM request fails
    return {
      level,
      cefrLevel,
      score,
      totalQuestions: levelAssessmentQuestions.length,
      correctAnswers: totalCorrect,
      feedback: defaultFeedback,
      strengths: defaultStrengths,
      areasToImprove: defaultAreasToImprove,
      recommendedLessons: defaultLessons
    };
  }
};
