
import { LessonStage, LessonQuiz, PracticalTest } from '@/types/lesson';
import { lessonC1Stages, lessonC1Quizzes, lessonC1FinalTest } from './c1LessonData';
import { lessonC2BusinessStages, lessonC2AcademicStages, lessonC2BusinessQuizzes, lessonC2AcademicQuizzes, lessonC2BusinessFinalTest, lessonC2AcademicFinalTest } from './c2LessonData';
import { lessonA1BusinessStages, lessonA1AcademicStages, lessonA1BusinessQuizzes, lessonA1AcademicQuizzes, lessonA1BusinessFinalTest, lessonA1AcademicFinalTest } from './a1LessonData';
import { lessonA2BusinessStages, lessonA2AcademicStages, lessonA2BusinessQuizzes, lessonA2AcademicQuizzes, lessonA2BusinessFinalTest, lessonA2AcademicFinalTest } from './a2LessonData';
import { lessonB1BusinessStages, lessonB1AcademicStages, lessonB1BusinessQuizzes, lessonB1AcademicQuizzes, lessonB1BusinessFinalTest, lessonB1AcademicFinalTest } from './b1LessonData';
import { lessonB2BusinessStages, lessonB2AcademicStages, lessonB2BusinessQuizzes, lessonB2AcademicQuizzes, lessonB2BusinessFinalTest, lessonB2AcademicFinalTest } from './b2LessonData';

// Mock lesson stages for lesson 1
export const lessonL1Stages: LessonStage[] = [
  {
    id: 'l1-s1',
    title: 'Introduction to Present Simple',
    description: 'Learn when and how to use the present simple tense',
    content: `The present simple tense is used to express habits, facts, and regular actions. It's an important grammatical structure in English.
    
    We use the present simple for:
    
    1. Regular habits and daily routines: "I wake up at 7 AM every day."
    2. General facts and truths: "The Earth revolves around the Sun."
    3. Scheduled events in the near future: "The train leaves at 3 PM tomorrow."
    
    For most verbs, we form the present simple by using the base form of the verb. However, for third-person singular subjects (he, she, it), we add -s or -es to the verb.`,
    videoId: 'GrPkuk1ezyo',
    examples: [
      {
        english: "I work in an office.",
        indonesian: "Saya bekerja di kantor."
      },
      {
        english: "She lives in Jakarta.",
        indonesian: "Dia tinggal di Jakarta."
      },
      {
        english: "They don't speak English.",
        indonesian: "Mereka tidak berbicara bahasa Inggris."
      },
      {
        english: "Does he like coffee?",
        indonesian: "Apakah dia suka kopi?"
      }
    ]
  },
  {
    id: 'l1-s2',
    title: 'Forming Questions & Negatives',
    description: 'Learn how to form questions and negative statements',
    content: `To form questions in the present simple tense, we use the auxiliary verbs "do" and "does" followed by the subject and the base form of the main verb.
    
    For negatives, we use "do not" (don't) or "does not" (doesn't) followed by the base form of the verb.
    
    Remember:
    - Use "do" with I, you, we, they
    - Use "does" with he, she, it
    
    The main verb is always in the base form after do/does (without -s ending).`,
    examples: [
      {
        english: "Do you work on weekends?",
        indonesian: "Apakah kamu bekerja pada akhir pekan?"
      },
      {
        english: "Does she speak Indonesian?",
        indonesian: "Apakah dia berbicara bahasa Indonesia?"
      },
      {
        english: "I don't like spicy food.",
        indonesian: "Saya tidak suka makanan pedas."
      },
      {
        english: "He doesn't play football.",
        indonesian: "Dia tidak bermain sepak bola."
      }
    ]
  },
  {
    id: 'l1-s3',
    title: 'Present Simple with Frequency Adverbs',
    description: 'Using adverbs of frequency with present simple',
    content: `Frequency adverbs tell us how often something happens. In English, they are often used with the present simple tense.
    
    Common frequency adverbs (from most to least frequent):
    - Always (100%)
    - Usually / Normally (80-90%)
    - Often / Frequently (70-80%)
    - Sometimes (30-60%)
    - Occasionally (20-30%)
    - Rarely / Seldom (10-20%)
    - Never (0%)
    
    Position of frequency adverbs:
    - Before the main verb: "She always arrives on time."
    - After the verb "to be": "He is never late."
    - At the beginning or end of a sentence for emphasis: "Sometimes, I go to the cinema." or "I go to the cinema sometimes."`,
    videoId: 'BPEqG9cZP8o',
    examples: [
      {
        english: "I always drink coffee in the morning.",
        indonesian: "Saya selalu minum kopi di pagi hari."
      },
      {
        english: "She usually takes the bus to work.",
        indonesian: "Dia biasanya naik bus ke tempat kerja."
      },
      {
        english: "They sometimes visit their grandparents on Sundays.",
        indonesian: "Mereka terkadang mengunjungi kakek-nenek mereka pada hari Minggu."
      },
      {
        english: "He is never late for meetings.",
        indonesian: "Dia tidak pernah terlambat untuk rapat."
      }
    ]
  }
];

// Mock quiz for lesson 1 stages
export const lessonL1Quizzes: LessonQuiz[] = [
  {
    id: 'l1-s1-quiz',
    title: 'Present Simple Quiz',
    description: 'Test your understanding of the present simple tense',
    skillType: 'grammar',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-l1s1',
        question: 'When do we use the present simple tense?',
        options: [
          'Only for actions happening right now',
          'For habits, facts, and regular actions',
          'Only for past events',
          'Only for future plans'
        ],
        correctAnswer: 'For habits, facts, and regular actions',
        explanation: 'The present simple is used for habits, facts, general truths, and regular actions.'
      },
      {
        id: 'q2-l1s1',
        question: 'Which sentence uses the present simple correctly?',
        options: [
          'She work in a bank.',
          'She working in a bank.',
          'She works in a bank.',
          'She is works in a bank.'
        ],
        correctAnswer: 'She works in a bank.',
        explanation: 'For third-person singular subjects (he, she, it), we add -s to the verb in present simple.'
      },
      {
        id: 'q3-l1s1',
        question: 'The Earth _____ around the Sun.',
        options: [
          'revolve',
          'revolves',
          'revolving',
          'is revolve'
        ],
        correctAnswer: 'revolves',
        explanation: 'For general facts and with third-person singular subjects (the Earth), we add -s to the verb.'
      },
      {
        id: 'q4-l1s1',
        question: 'Which sentence is NOT in the present simple tense?',
        options: [
          'I eat breakfast every day.',
          'She is studying right now.',
          'They play football on Saturdays.',
          'Water boils at 100 degrees Celsius.'
        ],
        correctAnswer: 'She is studying right now.',
        explanation: 'This sentence uses the present continuous tense (is + verb-ing), not the present simple.'
      }
    ]
  },
  {
    id: 'l1-s2-quiz',
    title: 'Questions & Negatives Quiz',
    description: 'Test your understanding of forming questions and negatives',
    skillType: 'grammar',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-l1s2',
        question: 'Which question is correctly formed in the present simple?',
        options: [
          'Do she like ice cream?',
          'Does she likes ice cream?',
          'Does she like ice cream?',
          'Is she like ice cream?'
        ],
        correctAnswer: 'Does she like ice cream?',
        explanation: 'For questions with third-person singular subjects, we use "does" followed by the base form of the verb (without -s).'
      },
      {
        id: 'q2-l1s2',
        question: 'Which negative statement is correct?',
        options: [
          'I not work on Sundays.',
          'I don\'t works on Sundays.',
          'I doesn\'t work on Sundays.',
          'I don\'t work on Sundays.'
        ],
        correctAnswer: 'I don\'t work on Sundays.',
        explanation: 'For first-person negatives, we use "don\'t" (do not) followed by the base form of the verb.'
      },
      {
        id: 'q3-l1s2',
        question: '_____ they live in Bali?',
        options: [
          'Do',
          'Does',
          'Are',
          'Is'
        ],
        correctAnswer: 'Do',
        explanation: 'For plural subjects (they), we use "do" to form questions in the present simple.'
      },
      {
        id: 'q4-l1s2',
        question: 'He _____ understand the lesson.',
        options: [
          'don\'t',
          'doesn\'t',
          'isn\'t',
          'not'
        ],
        correctAnswer: 'doesn\'t',
        explanation: 'For third-person singular subjects (he), we use "doesn\'t" (does not) in negative statements.'
      }
    ]
  },
  {
    id: 'l1-s3-quiz',
    title: 'Frequency Adverbs Quiz',
    description: 'Test your understanding of frequency adverbs',
    skillType: 'grammar',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-l1s3',
        question: 'Where is the correct position for the frequency adverb in this sentence? "She _____ arrives _____ on time _____ ."',
        options: [
          'always / -- / --',
          '-- / always / --',
          '-- / -- / always',
          'Any of these positions is correct'
        ],
        correctAnswer: 'always / -- / --',
        explanation: 'Frequency adverbs usually come before the main verb (arrives).'
      },
      {
        id: 'q2-l1s3',
        question: 'Which sentence uses a frequency adverb correctly?',
        options: [
          'He watches never TV.',
          'He never watches TV.',
          'He watches TV never.',
          'Never he watches TV.'
        ],
        correctAnswer: 'He never watches TV.',
        explanation: 'The frequency adverb "never" should come before the main verb (watches).'
      },
      {
        id: 'q3-l1s3',
        question: 'Which adverb indicates the highest frequency?',
        options: [
          'Sometimes',
          'Usually',
          'Often',
          'Always'
        ],
        correctAnswer: 'Always',
        explanation: '"Always" indicates 100% of the time, which is the highest frequency.'
      },
      {
        id: 'q4-l1s3',
        question: 'Where should the frequency adverb go in this sentence? "They are _____ late _____ for class _____."',
        options: [
          'never / -- / --',
          '-- / never / --',
          '-- / -- / never',
          'Both A and C are correct'
        ],
        correctAnswer: '-- / never / --',
        explanation: 'With the verb "to be", the frequency adverb comes after the verb. So "They are never late for class" is correct.'
      }
    ]
  }
];

// Mock final test for lesson 1
export const lessonL1FinalTest: PracticalTest = {
  id: 'l1-final',
  title: 'Present Simple Mastery Test',
  description: 'Demonstrate your mastery of present simple tense in a practical writing exercise',
  type: 'writing',
  prompt: 'Write a short paragraph (5-8 sentences) about your daily routine using the present simple tense. Include at least two frequency adverbs and form both positive and negative sentences.',
  criteria: [
    'Correct use of present simple verb forms',
    'Appropriate use of frequency adverbs',
    'Correctly formed negative sentences',
    'Proper subject-verb agreement',
    'Overall clarity and coherence'
  ],
  minScore: 70
};

// Export mock data for other lessons
export const lessonStagesMockData: Record<string, {
  stages: LessonStage[],
  quizzes: LessonQuiz[],
  finalTest: PracticalTest
}> = {
  'l1': {
    stages: lessonL1Stages,
    quizzes: lessonL1Quizzes,
    finalTest: lessonL1FinalTest
  },
  'c1': {
    stages: lessonC1Stages,
    quizzes: lessonC1Quizzes,
    finalTest: lessonC1FinalTest
  },
  'c2-business': {
    stages: lessonC2BusinessStages,
    quizzes: lessonC2BusinessQuizzes,
    finalTest: lessonC2BusinessFinalTest
  },
  'c2-academic': {
    stages: lessonC2AcademicStages,
    quizzes: lessonC2AcademicQuizzes,
    finalTest: lessonC2AcademicFinalTest
  },
  'a1-business': {
    stages: lessonA1BusinessStages,
    quizzes: lessonA1BusinessQuizzes,
    finalTest: lessonA1BusinessFinalTest
  },
  'a1-academic': {
    stages: lessonA1AcademicStages,
    quizzes: lessonA1AcademicQuizzes,
    finalTest: lessonA1AcademicFinalTest
  },
  'a2-business': {
    stages: lessonA2BusinessStages,
    quizzes: lessonA2BusinessQuizzes,
    finalTest: lessonA2BusinessFinalTest
  },
  'a2-academic': {
    stages: lessonA2AcademicStages,
    quizzes: lessonA2AcademicQuizzes,
    finalTest: lessonA2AcademicFinalTest
  },
  'b1-business': {
    stages: lessonB1BusinessStages,
    quizzes: lessonB1BusinessQuizzes,
    finalTest: lessonB1BusinessFinalTest
  },
  'b1-academic': {
    stages: lessonB1AcademicStages,
    quizzes: lessonB1AcademicQuizzes,
    finalTest: lessonB1AcademicFinalTest
  },
  'b2-business': {
    stages: lessonB2BusinessStages,
    quizzes: lessonB2BusinessQuizzes,
    finalTest: lessonB2BusinessFinalTest
  },
  'b2-academic': {
    stages: lessonB2AcademicStages,
    quizzes: lessonB2AcademicQuizzes,
    finalTest: lessonB2AcademicFinalTest
  },
  'l2': {
    stages: [
      // Mock stages for lesson 2
      {
        id: 'l2-s1',
        title: 'Past Simple: Regular Verbs',
        description: 'Learn how to use regular verbs in the past simple tense',
        content: 'The past simple is used to talk about completed actions in the past. For regular verbs, we add -ed to the base form...',
        videoId: 'u9CPQ5RQN9g',
        examples: [
          {
            english: "I worked yesterday.",
            indonesian: "Saya bekerja kemarin."
          },
          {
            english: "She played tennis last weekend.",
            indonesian: "Dia bermain tenis akhir pekan lalu."
          }
        ]
      },
      {
        id: 'l2-s2',
        title: 'Past Simple: Irregular Verbs',
        description: 'Learn about common irregular verbs in the past tense',
        content: 'Many common verbs in English have irregular past forms that must be memorized...',
        examples: [
          {
            english: "I went to the store.",
            indonesian: "Saya pergi ke toko."
          },
          {
            english: "She saw a movie yesterday.",
            indonesian: "Dia menonton film kemarin."
          }
        ]
      }
    ],
    quizzes: [
      // Mock quiz for lesson 2
      {
        id: 'l2-s1-quiz',
        title: 'Regular Past Tense Quiz',
        description: 'Test your knowledge of regular past tense verbs',
        skillType: 'grammar',
        requiredScore: 70,
        questions: [
          {
            id: 'q1-l2s1',
            question: 'What is the past tense of "work"?',
            options: ['work', 'worked', 'working', 'works'],
            correctAnswer: 'worked',
            explanation: 'Regular verbs form the past tense by adding -ed.'
          },
          {
            id: 'q2-l2s1',
            question: 'Which sentence uses the past simple correctly?',
            options: [
              'I play tennis yesterday.',
              'I playing tennis yesterday.',
              'I played tennis yesterday.',
              'I am played tennis yesterday.'
            ],
            correctAnswer: 'I played tennis yesterday.',
            explanation: 'The past simple of "play" is "played".'
          }
        ]
      }
    ],
    finalTest: {
      id: 'l2-final',
      title: 'Past Tense Mastery Test',
      description: 'Show your understanding of past tense in English',
      type: 'writing',
      prompt: 'Write about what you did last weekend using past tense verbs. Include at least 3 regular and 3 irregular verbs.',
      criteria: [
        'Correct use of past tense',
        'Mix of regular and irregular verbs',
        'Proper time expressions',
        'Overall clarity'
      ],
      minScore: 70
    }
  },
  'l3': {
    stages: [
      {
        id: 'l3-s1',
        title: 'Future Forms: Will vs Going To',
        description: 'Understanding different ways to express the future',
        content: 'English has several ways to talk about the future. The two most common are "will" and "going to"...',
        videoId: 'bPlO19Z4RWk',
        examples: [
          {
            english: "I will help you tomorrow.",
            indonesian: "Saya akan membantu Anda besok."
          },
          {
            english: "I'm going to visit my parents this weekend.",
            indonesian: "Saya akan mengunjungi orangtua saya akhir pekan ini."
          }
        ]
      }
    ],
    quizzes: [
      {
        id: 'l3-s1-quiz',
        title: 'Future Forms Quiz',
        description: 'Test your understanding of future tenses',
        skillType: 'grammar',
        requiredScore: 70,
        questions: [
          {
            id: 'q1-l3s1',
            question: 'Which expresses a spontaneous decision?',
            options: [
              'I will answer the phone.',
              'I am going to answer the phone.',
              'I answer the phone.',
              'I answered the phone.'
            ],
            correctAnswer: 'I will answer the phone.',
            explanation: '"Will" is often used for spontaneous decisions made at the time of speaking.'
          }
        ]
      }
    ],
    finalTest: {
      id: 'l3-final',
      title: 'Future Tense Mastery',
      description: 'Demonstrate your ability to express future events',
      type: 'writing',
      prompt: 'Write about your plans for the next year. Use different future forms (will, going to, present continuous for future) appropriately.',
      criteria: [
        'Correct use of future forms',
        'Variety of expressions',
        'Logical time references',
        'Overall clarity'
      ],
      minScore: 70
    }
  },
  // Default structure for any other lesson ID
  'default': {
    stages: [
      {
        id: 'default-s1',
        title: 'Introduction to the Topic',
        description: 'Basic overview of the lesson content',
        content: 'This lesson covers the fundamental concepts of the topic...',
        examples: [
          {
            english: "Example sentence in English",
            indonesian: "Contoh kalimat dalam bahasa Indonesia"
          }
        ]
      }
    ],
    quizzes: [
      {
        id: 'default-s1-quiz',
        title: 'Basic Comprehension Quiz',
        description: 'Test your understanding of the basics',
        skillType: 'grammar',
        requiredScore: 70,
        questions: [
          {
            id: 'q1-default',
            question: 'Sample question about the topic?',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 'Option A',
            explanation: 'Explanation of why Option A is correct.'
          }
        ]
      }
    ],
    finalTest: {
      id: 'default-final',
      title: 'Topic Mastery Test',
      description: 'Demonstrate your understanding of the topic',
      type: 'writing',
      prompt: 'Write a paragraph showing your understanding of the key concepts from this lesson.',
      criteria: [
        'Correct use of concepts',
        'Clear explanation',
        'Proper examples',
        'Overall coherence'
      ],
      minScore: 70
    }
  }
};

// Helper function to get lesson stage data
export const getLessonStageData = (lessonId: string) => {
  return lessonStagesMockData[lessonId] || lessonStagesMockData.default;
};
