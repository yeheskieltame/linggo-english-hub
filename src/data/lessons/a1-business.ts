import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// A1 Beginner Level - Business Pathway Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'a1-b-s1',
    title: 'Office Basics',
    description: 'Learn essential vocabulary and phrases for the workplace environment',
    content: `In this lesson, you will learn basic vocabulary and phrases for communicating in an office environment.

Basic Office Vocabulary:
- Office: A place where people work at desks
- Desk: A table where you work
- Chair: What you sit on
- Computer: An electronic device used for work
- Keyboard: Used to type on a computer
- Mouse: Used to control the cursor on a computer
- Monitor/Screen: The display part of a computer
- Printer: A machine that makes paper copies
- Phone: Device used to make and receive calls
- Meeting room: A room where people gather to discuss work
- Break room: A place to rest and have meals
- Colleague: A person you work with
- Manager/Boss: The person in charge
- Employee: A person who works for a company

Common Office Phrases:
- "Good morning/afternoon."
- "How are you today?"
- "My name is... / I am..."
- "Nice to meet you."
- "This is my colleague, [name]."
- "I work in the [department] department."
- "Could you help me, please?"
- "Excuse me, where is the printer?"
- "Can I use your pen, please?"
- "What time is the meeting?"
- "The meeting is at [time]."
- "I don't understand. Could you repeat that, please?"
- "Thank you for your help."
- "Have a nice day."

Remember to speak clearly and politely in the workplace. It's important to use basic greetings and be respectful to your colleagues.`,
    videoId: 'xGywYMfvDg0',
    examples: [
      {
        english: "Good morning! My name is John. I'm the new employee in the marketing department.",
        indonesian: "Selamat pagi! Nama saya John. Saya karyawan baru di departemen pemasaran."
      },
      {
        english: "Excuse me, where is the meeting room?",
        indonesian: "Permisi, di mana ruang rapat?"
      },
      {
        english: "Could you help me with the printer, please?",
        indonesian: "Bisakah Anda membantu saya dengan printer, tolong?"
      },
      {
        english: "Thank you for your help. Have a nice day!",
        indonesian: "Terima kasih atas bantuan Anda. Semoga hari Anda menyenangkan!"
      }
    ]
  },
  {
    id: 'a1-b-s2',
    title: 'Business Introductions',
    description: 'Learn how to introduce yourself and others in a business context',
    content: `In this lesson, you will learn how to introduce yourself and others in a business or professional setting.

Introducing Yourself:
- "Hello, my name is [your name]."
- "Good morning/afternoon. I'm [your name]."
- "Nice to meet you. I'm [your name] from [company/department]."
- "Hello, I'm [your name]. I work as a [job title]."

Asking for Names:
- "What's your name?"
- "May I know your name, please?"
- "Could you tell me your name?"
- "I'm sorry, I didn't catch your name."

Introducing Others:
- "This is my colleague, [name]."
- "I'd like to introduce [name]. He/She works in [department]."
- "Let me introduce you to [name]. He/She is our [job title]."
- "Have you met [name]? He/She is from [department/company]."

Responding to Introductions:
- "Nice to meet you."
- "Pleased to meet you."
- "It's a pleasure to meet you."
- "Good to meet you."

Sharing Job Information:
- "I work as a [job title]."
- "I'm in the [department] department."
- "I've been with the company for [time period]."
- "I'm responsible for [job duties]."

Ending the Conversation:
- "It was nice talking to you."
- "I hope we can work together soon."
- "Please let me know if you need anything."
- "Here's my business card. Feel free to contact me."

Remember to maintain eye contact, offer a firm handshake (in cultures where this is appropriate), and speak clearly when making introductions in a business setting.`,
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    examples: [
      {
        english: "Hello, my name is Sarah Johnson. I'm the new marketing manager.",
        indonesian: "Halo, nama saya Sarah Johnson. Saya manajer pemasaran baru."
      },
      {
        english: "This is David Chen. He works in the IT department.",
        indonesian: "Ini David Chen. Dia bekerja di departemen IT."
      },
      {
        english: "I work as a sales representative. I've been with the company for two years.",
        indonesian: "Saya bekerja sebagai perwakilan penjualan. Saya sudah bekerja di perusahaan ini selama dua tahun."
      },
      {
        english: "It was nice meeting you. Here's my business card.",
        indonesian: "Senang bertemu dengan Anda. Ini kartu nama saya."
      }
    ]
  }
];

// A1 Beginner Level - Business Pathway Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'a1-b-s1-quiz',
    title: 'Office Basics Quiz',
    description: 'Test your knowledge of basic office vocabulary and phrases',
    skillType: 'vocabulary',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a1bs1',
        type: 'multiple-choice',
        question: 'What is a "colleague"?',
        options: [
          'Your boss',
          'A person you work with',
          'A client',
          'A computer'
        ],
        correctAnswer: 'A person you work with',
        explanation: 'A colleague is a person who works with you, typically in the same department or company.'
      },
      {
        id: 'q2-a1bs1',
        type: 'multiple-choice',
        question: 'Which phrase would you use to ask for help?',
        options: [
          'Have a nice day.',
          'I work in the marketing department.',
          'Could you help me, please?',
          'The meeting is at 2 PM.'
        ],
        correctAnswer: 'Could you help me, please?',
        explanation: '"Could you help me, please?" is a polite way to ask someone for assistance.'
      },
      {
        id: 'q3-a1bs1',
        type: 'multiple-choice',
        question: 'Where would you typically have lunch at an office?',
        options: [
          'Meeting room',
          'Break room',
          'Printer room',
          'Manager\'s office'
        ],
        correctAnswer: 'Break room',
        explanation: 'A break room is a place in an office where employees can rest and have meals.'
      },
      {
        id: 'q4-a1bs1',
        type: 'multiple-choice',
        question: 'What is the correct greeting for the morning?',
        options: [
          'Good night',
          'Good afternoon',
          'Good morning',
          'Good evening'
        ],
        correctAnswer: 'Good morning',
        explanation: '"Good morning" is the appropriate greeting to use before noon.'
      },
      {
        id: 'q5-a1bs1',
        type: 'multiple-choice',
        question: 'Which of these is NOT typically found on a desk?',
        options: [
          'Computer',
          'Keyboard',
          'Printer',
          'Mouse'
        ],
        correctAnswer: 'Printer',
        explanation: 'A printer is usually a shared device in an office and is not typically found on individual desks.'
      }
    ]
  },
  {
    id: 'a1-b-s2-quiz',
    title: 'Business Introductions Quiz',
    description: 'Test your knowledge of business introductions',
    skillType: 'speaking',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a1bs2',
        type: 'multiple-choice',
        question: 'Which phrase is appropriate for introducing yourself?',
        options: [
          'What\'s your name?',
          'Hello, my name is John.',
          'This is my colleague, Sarah.',
          'Have a nice day.'
        ],
        correctAnswer: 'Hello, my name is John.',
        explanation: '"Hello, my name is John" is a standard phrase for introducing yourself in a business setting.'
      },
      {
        id: 'q2-a1bs2',
        type: 'multiple-choice',
        question: 'How would you introduce a colleague named Maria?',
        options: [
          'She is Maria.',
          'This is Maria. She works in the HR department.',
          'Do you know Maria?',
          'Maria is not here today.'
        ],
        correctAnswer: 'This is Maria. She works in the HR department.',
        explanation: 'When introducing someone, it\'s helpful to provide their name and some context, such as their department or role.'
      },
      {
        id: 'q3-a1bs2',
        type: 'multiple-choice',
        question: 'What is an appropriate response when someone introduces themselves to you?',
        options: [
          'Goodbye',
          'What do you do?',
          'Nice to meet you.',
          'I don\'t understand.'
        ],
        correctAnswer: 'Nice to meet you.',
        explanation: '"Nice to meet you" is a polite and standard response when someone introduces themselves.'
      },
      {
        id: 'q4-a1bs2',
        type: 'multiple-choice',
        question: 'Which phrase would you use to ask someone\'s name?',
        options: [
          'Where are you from?',
          'What\'s your name?',
          'How are you?',
          'Do you work here?'
        ],
        correctAnswer: 'What\'s your name?',
        explanation: '"What\'s your name?" is a direct and common way to ask someone for their name.'
      },
      {
        id: 'q5-a1bs2',
        type: 'multiple-choice',
        question: 'What information is typically shared when introducing yourself in a business context?',
        options: [
          'Your age and hobbies',
          'Your family background',
          'Your name and job title/department',
          'Your educational history'
        ],
        correctAnswer: 'Your name and job title/department',
        explanation: 'In a business introduction, it\'s common to share your name and professional information such as your job title or department.'
      }
    ]
  }
];

// A1 Beginner Level - Business Final Test
const finalTest: PracticalTest = {
  id: 'a1-b-final',
  title: 'Office Communication Basics Test',
  description: 'Demonstrate your ability to communicate in basic office situations through multiple skills',
  type: 'speaking', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your office communication skills at the A1 level.',
  criteria: [
    'Clear pronunciation of basic office vocabulary',
    'Appropriate use of introduction phrases',
    'Correct grammar in simple sentences',
    'Appropriate questions for an office context',
    'Overall fluency and confidence'
  ],
  minScore: 70,
  sections: [
    {
      id: 'a1-b-final-s1',
      title: 'Listening Comprehension',
      type: 'listening',
      description: 'Listen to a short office conversation and answer questions',
      prompt: 'Listen to the conversation between two colleagues and answer the questions that follow.',
      audioUrl: '/audio/a1-office-conversation.mp3',
      hiddenText: `Sarah: Good morning, David. How are you today?
David: Good morning, Sarah. I'm fine, thank you. How about you?
Sarah: I'm good. Do you have time for a quick meeting about the Johnson project?
David: Yes, I do. What time would you like to meet?
Sarah: Is 2:30 this afternoon OK for you?
David: Let me check my calendar. Yes, 2:30 works for me. Where should we meet?
Sarah: Let's meet in the small conference room on the second floor.
David: OK. Should I bring anything to the meeting?
Sarah: Please bring your laptop and the sales report from last week.
David: No problem. I'll see you at 2:30 in the small conference room.
Sarah: Great. Thank you, David.
David: You're welcome. See you later.`,
      criteria: [
        'Understanding of basic office vocabulary',
        'Comprehension of simple conversations',
        'Ability to identify key information'
      ],
      weight: 25
    },
    {
      id: 'a1-b-final-s2',
      title: 'Self-Introduction',
      type: 'speaking',
      description: 'Introduce yourself in a business context',
      prompt: 'Record a 30-60 second introduction of yourself for your first day at a new job. Include your name, position, department, and one or two simple sentences about your experience or skills.',
      criteria: [
        'Clear pronunciation',
        'Appropriate introduction phrases',
        'Relevant content',
        'Simple but correct grammar',
        'Natural delivery'
      ],
      weight: 30
    },
    {
      id: 'a1-b-final-s3',
      title: 'Reading Comprehension',
      type: 'reading',
      description: 'Read a short business email and answer questions',
      prompt: 'Read the following email from a colleague and answer the questions that follow.',
      text: `From: michael.chen@example.com
To: alex.smith@example.com
Subject: Team Meeting Next Monday

Dear Alex,

I hope you are well.

I am writing to remind you about our team meeting next Monday, May 15th at 10:00 AM in Conference Room B. 

Please bring your sales report for April and be ready to discuss your current projects.

If you have any questions, please let me know.

Thank you,
Michael Chen
Sales Manager
ABC Company
Tel: 555-123-4567`,
      imageUrl: '/images/a1-business-email.png',
      criteria: [
        'Understanding of basic email format',
        'Comprehension of simple business messages',
        'Ability to identify key information'
      ],
      weight: 20
    },
    {
      id: 'a1-b-final-s4',
      title: 'Writing Test',
      type: 'writing',
      description: 'Write a short business email',
      prompt: 'Write a short email (30-50 words) to a colleague asking to reschedule a meeting. Include the original meeting time, reason for rescheduling, and propose a new time.',
      criteria: [
        'Appropriate email format and greetings',
        'Clear communication of the main message',
        'Correct use of simple present tense',
        'Appropriate closing phrases'
      ],
      weight: 25
    }
  ]
};

// Export the complete lesson structure
export const a1BusinessLesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};