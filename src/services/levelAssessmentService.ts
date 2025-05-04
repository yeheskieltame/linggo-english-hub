import { llmRequest } from './llmService';

export interface LevelAssessmentQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
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

// Sample assessment questions covering different levels and skills
export const levelAssessmentQuestions: LevelAssessmentQuestion[] = [
  // A1-A2 (Beginner) Questions
  {
    id: 'q1',
    question: 'What is the correct way to introduce yourself?',
    options: [
      'My name is John.',
      'I John.',
      'John I am.',
      'Name John.'
    ],
    correctAnswer: 'My name is John.',
    difficulty: 'beginner',
    cefrLevel: 'A1'
  },
  {
    id: 'q2',
    question: 'Choose the correct sentence:',
    options: [
      'She don\'t like coffee.',
      'She doesn\'t likes coffee.',
      'She doesn\'t like coffee.',
      'She not like coffee.'
    ],
    correctAnswer: 'She doesn\'t like coffee.',
    difficulty: 'beginner',
    cefrLevel: 'A1'
  },
  {
    id: 'q3',
    question: 'What is the past tense of "go"?',
    options: [
      'Goed',
      'Gone',
      'Went',
      'Going'
    ],
    correctAnswer: 'Went',
    difficulty: 'beginner',
    cefrLevel: 'A2'
  },
  {
    id: 'q4',
    question: 'Which sentence is correct?',
    options: [
      'I have been to Paris last year.',
      'I went to Paris last year.',
      'I have gone to Paris last year.',
      'I am going to Paris last year.'
    ],
    correctAnswer: 'I went to Paris last year.',
    difficulty: 'beginner',
    cefrLevel: 'A2'
  },
  
  // B1-B2 (Intermediate) Questions
  {
    id: 'q5',
    question: 'Choose the correct phrasal verb: "I need to _____ this project by Friday."',
    options: [
      'finish up',
      'finish on',
      'finish in',
      'finish at'
    ],
    correctAnswer: 'finish up',
    difficulty: 'intermediate',
    cefrLevel: 'B1'
  },
  {
    id: 'q6',
    question: 'Which sentence uses the present perfect correctly?',
    options: [
      'I\'ve lived here since five years.',
      'I\'ve lived here for five years.',
      'I live here for five years.',
      'I\'m living here since five years.'
    ],
    correctAnswer: 'I\'ve lived here for five years.',
    difficulty: 'intermediate',
    cefrLevel: 'B1'
  },
  {
    id: 'q7',
    question: 'Choose the correct conditional sentence:',
    options: [
      'If I will see him, I will tell him.',
      'If I would see him, I will tell him.',
      'If I see him, I will tell him.',
      'If I see him, I would tell him.'
    ],
    correctAnswer: 'If I see him, I will tell him.',
    difficulty: 'intermediate',
    cefrLevel: 'B2'
  },
  {
    id: 'q8',
    question: 'Which is the correct passive form? "They are building a new bridge."',
    options: [
      'A new bridge is building.',
      'A new bridge is being built.',
      'A new bridge has been built.',
      'A new bridge builds.'
    ],
    correctAnswer: 'A new bridge is being built.',
    difficulty: 'intermediate',
    cefrLevel: 'B2'
  },
  
  // C1-C2 (Advanced) Questions
  {
    id: 'q9',
    question: 'Choose the most appropriate word: "The professor gave a _____ lecture on quantum physics."',
    options: [
      'compelling',
      'nice',
      'good',
      'okay'
    ],
    correctAnswer: 'compelling',
    difficulty: 'advanced',
    cefrLevel: 'C1'
  },
  {
    id: 'q10',
    question: 'Which sentence contains a correct subjunctive form?',
    options: [
      'I suggest that he goes to the doctor.',
      'I suggest that he go to the doctor.',
      'I suggest that he will go to the doctor.',
      'I suggest that he should to go to the doctor.'
    ],
    correctAnswer: 'I suggest that he go to the doctor.',
    difficulty: 'advanced',
    cefrLevel: 'C1'
  },
  {
    id: 'q11',
    question: 'Choose the correct idiomatic expression: "The project was very difficult, but we _____ and completed it on time."',
    options: [
      'pulled our socks up',
      'hit the nail on the head',
      'bit the bullet',
      'cut corners'
    ],
    correctAnswer: 'bit the bullet',
    difficulty: 'advanced',
    cefrLevel: 'C2'
  },
  {
    id: 'q12',
    question: 'Which sentence uses advanced vocabulary most appropriately?',
    options: [
      'The government implemented austerity measures to address the economic crisis.',
      'The government made some money rules to fix the economy.',
      'The government did things to make the economy better.',
      'The government tried to help the economy with new ideas.'
    ],
    correctAnswer: 'The government implemented austerity measures to address the economic crisis.',
    difficulty: 'advanced',
    cefrLevel: 'C2'
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
    const isCorrect = userAnswer === question.correctAnswer;
    
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