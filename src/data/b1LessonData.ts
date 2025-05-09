// Import the necessary types
import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// B1 Intermediate Level Lesson Data
const stages: LessonStage[] = [
  {
    id: 'b1-s1',
    title: 'Present Simple vs Present Continuous',
    description: 'Learn when to use the present simple and present continuous tenses',
    content: `The present simple is used for habits, routines, general truths, and facts. The present continuous is used for actions happening now, temporary situations, and future arrangements.

    Examples:
    - Present Simple: I work every day.
    - Present Continuous: I am working now.`,
    examples: [
      {
        english: "I work in an office.",
        indonesian: "Saya bekerja di kantor."
      },
      {
        english: "She is studying English.",
        indonesian: "Dia sedang belajar bahasa Inggris."
      }
    ]
  },
  {
    id: 'b1-s2',
    title: 'Past Simple vs Past Continuous',
    description: 'Learn when to use the past simple and past continuous tenses',
    content: `The past simple is used for completed actions in the past. The past continuous is used for actions in progress at a specific time in the past.

    Examples:
    - Past Simple: I worked yesterday.
    - Past Continuous: I was working at 8 PM last night.`,
    examples: [
      {
        english: "I worked yesterday.",
        indonesian: "Saya bekerja kemarin."
      },
      {
        english: "She was watching TV when I called.",
        indonesian: "Dia sedang menonton TV ketika saya menelepon."
      }
    ]
  },
  {
    id: 'b1-s3',
    title: 'Future Simple vs Future Continuous',
    description: 'Learn when to use the future simple and future continuous tenses',
    content: `The future simple is used for predictions and spontaneous decisions. The future continuous is used for actions that will be in progress at a specific time in the future.
    
    Examples:
    - Future Simple: I will work tomorrow.
    - Future Continuous: I will be working at 8 PM tomorrow.`,
    examples: [
      {
        english: "I will work tomorrow.",
        indonesian: "Saya akan bekerja besok."
      },
      {
        english: "She will be studying all day tomorrow.",
        indonesian: "Dia akan belajar sepanjang hari besok."
      }
    ]
  }
];

// B1 Intermediate Level Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'b1-q1',
    title: 'Present Continuous vs Present Simple',
    description: 'Test your understanding of when to use present continuous vs present simple',
    skillType: 'grammar',
    requiredScore: 70,
    questions: [
      {
        id: 'b1-q1-1',
        type: 'multiple-choice',
        question: 'Which sentence uses the present continuous correctly?',
        options: [
          'I am thinking Italian food is delicious.',
          'She is owning three cars.',
          'They are playing tennis every Saturday.',
          'We are having dinner with friends tonight.'
        ],
        correctAnswer: 'We are having dinner with friends tonight.',
        explanation: 'The present continuous can be used for fixed arrangements in the near future. "We are having dinner with friends tonight" expresses a planned future arrangement.'
      },
      {
        id: 'b1-q1-2',
        type: 'multiple-choice',
        question: 'Which sentence uses the present simple correctly?',
        options: [
          'I am going to work by bus every day.',
          'The Earth revolves around the Sun.',
          'They are playing football now.',
          'She is cooking dinner at the moment.'
        ],
        correctAnswer: 'The Earth revolves around the Sun.',
        explanation: 'The present simple is used for facts, general truths, and habits. "The Earth revolves around the Sun" is a scientific fact.'
      },
      {
        id: 'b1-q1-3',
        type: 'multiple-choice',
        question: 'What are you doing? I _____ (cook) dinner.',
        options: [
          'cook',
          'am cooking',
          'was cooking',
          'will cook'
        ],
        correctAnswer: 'am cooking',
        explanation: 'The present continuous is used for actions happening now. "I am cooking dinner" describes an action in progress.'
      },
      {
        id: 'b1-q1-4',
        type: 'multiple-choice',
        question: 'She _____ (work) at the bank every day.',
        options: [
          'is working',
          'work',
          'works',
          'worked'
        ],
        correctAnswer: 'works',
        explanation: 'The present simple is used for habits and routines. "She works at the bank every day" describes a regular habit.'
      }
    ]
  },
  {
    id: 'b1-q2',
    title: 'Past Simple vs Past Continuous',
    description: 'Test your understanding of when to use past simple vs past continuous',
    skillType: 'grammar',
    requiredScore: 70,
    questions: [
      {
        id: 'b1-q2-1',
        type: 'multiple-choice',
        question: 'Which sentence uses the past continuous correctly?',
        options: [
          'I was seeing a movie yesterday.',
          'She was living in London last year.',
          'They were playing football when it started to rain.',
          'We were going to the party last night.'
        ],
        correctAnswer: 'They were playing football when it started to rain.',
        explanation: 'The past continuous is used for actions in progress when another action interrupted it. "They were playing football when it started to rain" describes an action in progress interrupted by another action.'
      },
      {
        id: 'b1-q2-2',
        type: 'multiple-choice',
        question: 'Which sentence uses the past simple correctly?',
        options: [
          'I was going to the store yesterday.',
          'She was studying English last night.',
          'They were playing tennis when I arrived.',
          'We went to the beach last weekend.'
        ],
        correctAnswer: 'We went to the beach last weekend.',
        explanation: 'The past simple is used for completed actions in the past. "We went to the beach last weekend" describes a completed action.'
      },
      {
        id: 'b1-q2-3',
        type: 'multiple-choice',
        question: 'I _____ (watch) TV when she called.',
        options: [
          'watched',
          'was watching',
          'am watching',
          'will watch'
        ],
        correctAnswer: 'was watching',
        explanation: 'The past continuous is used for actions in progress at a specific time in the past. "I was watching TV when she called" describes an action in progress when another action occurred.'
      },
      {
        id: 'b1-q2-4',
        type: 'multiple-choice',
        question: 'She _____ (arrive) late yesterday.',
        options: [
          'is arriving',
          'arrives',
          'arrived',
          'was arriving'
        ],
        correctAnswer: 'arrived',
        explanation: 'The past simple is used for completed actions in the past. "She arrived late yesterday" describes a completed action.'
      }
    ]
  },
  {
    id: 'b1-q3',
    title: 'Future Simple vs Future Continuous',
    description: 'Test your understanding of when to use future simple vs future continuous',
    skillType: 'grammar',
    requiredScore: 70,
    questions: [
      {
        id: 'b1-q3-1',
        type: 'multiple-choice',
        question: 'Which sentence uses the future continuous correctly?',
        options: [
          'I will go to the store tomorrow.',
          'She will study English next year.',
          'They will play football on Saturday.',
          'We will be having dinner at 8 PM tonight.'
        ],
        correctAnswer: 'We will be having dinner at 8 PM tonight.',
        explanation: 'The future continuous is used for actions that will be in progress at a specific time in the future. "We will be having dinner at 8 PM tonight" describes an action in progress at a specific future time.'
      },
      {
        id: 'b1-q3-2',
        type: 'multiple-choice',
        question: 'Which sentence uses the future simple correctly?',
        options: [
          'I will be going to the store tomorrow.',
          'She will be studying English next year.',
          'They will be playing football on Saturday.',
          'We will go to the party next week.'
        ],
        correctAnswer: 'We will go to the party next week.',
        explanation: 'The future simple is used for predictions and spontaneous decisions. "We will go to the party next week" describes a planned future action.'
      },
      {
        id: 'b1-q3-3',
        type: 'multiple-choice',
        question: 'I _____ (work) tomorrow.',
        options: [
          'am working',
          'work',
          'will be working',
          'will work'
        ],
        correctAnswer: 'will work',
        explanation: 'The future simple is used for planned future actions. "I will work tomorrow" describes a planned action.'
      },
      {
        id: 'b1-q3-4',
        type: 'multiple-choice',
        question: 'She _____ (study) at 7 PM tonight.',
        options: [
          'is studying',
          'studies',
          'will study',
          'will be studying'
        ],
        correctAnswer: 'will be studying',
        explanation: 'The future continuous is used for actions that will be in progress at a specific time in the future. "She will be studying at 7 PM tonight" describes an action in progress at a specific future time.'
      }
    ]
  }
];

// B1 Intermediate Level Final Test
const finalTest: PracticalTest = {
  id: 'b1-final',
  title: 'B1 Grammar Test',
  description: 'Test your overall understanding of B1 grammar concepts',
  type: 'writing',
  prompt: 'Write a short paragraph using present simple, present continuous, past simple, past continuous, future simple, and future continuous tenses.',
  criteria: [
    'Correct use of tenses',
    'Proper sentence structure',
    'Clear and coherent writing'
  ],
  minScore: 70
};

// Export the complete lesson structure
export const b1Lesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};
