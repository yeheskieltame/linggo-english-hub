import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// A1 Beginner Level - Academic Pathway Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'a1-a-s1',
    title: 'Classroom Vocabulary',
    description: 'Learn essential vocabulary and phrases for the classroom environment',
    content: `In this lesson, you will learn basic vocabulary and phrases for communicating in a classroom or academic environment.

Basic Classroom Vocabulary:
- Classroom: A room where students learn
- Desk: A table where students work
- Chair: What you sit on
- Board/Whiteboard: Where the teacher writes information
- Marker/Chalk: Used to write on the board
- Notebook: Where you write notes
- Textbook: A book used for studying a subject
- Pen/Pencil: Used for writing
- Eraser: Used to remove pencil marks
- Backpack/Bag: Used to carry school supplies
- Teacher/Professor: The person who teaches
- Student: A person who studies
- Classmate: Another student in your class
- Assignment: Work that must be completed
- Exam/Test: An assessment of knowledge

Common Classroom Phrases:
- "Good morning/afternoon, teacher/professor."
- "May I come in?"
- "I'm sorry I'm late."
- "Could you repeat that, please?"
- "I don't understand."
- "How do you spell that?"
- "What page are we on?"
- "May I borrow your pen/pencil?"
- "Could you explain that again, please?"
- "When is the assignment due?"
- "May I ask a question?"
- "The answer is..."
- "Thank you for your help."
- "Have a nice day."

Remember to be respectful and attentive in the classroom. It's important to listen carefully and ask questions when you don't understand something.`,
    videoId: 'wdgX1YqLtw0',
    examples: [
      {
        english: "Excuse me, professor. Could you explain that again, please?",
        indonesian: "Permisi, profesor. Bisakah Anda menjelaskan itu lagi, tolong?"
      },
      {
        english: "I'm sorry I'm late. May I come in?",
        indonesian: "Maaf saya terlambat. Bolehkah saya masuk?"
      },
      {
        english: "When is the assignment due?",
        indonesian: "Kapan batas waktu pengumpulan tugas?"
      },
      {
        english: "Could I borrow your pen, please? I forgot mine.",
        indonesian: "Bolehkah saya meminjam pena Anda, tolong? Saya lupa membawa pena saya."
      }
    ]
  },
  {
    id: 'a1-a-s2',
    title: 'Academic Introductions',
    description: 'Learn how to introduce yourself and others in an academic context',
    content: `In this lesson, you will learn how to introduce yourself and others in an academic or educational setting.

Introducing Yourself:
- "Hello, my name is [your name]."
- "Good morning/afternoon. I'm [your name]."
- "Nice to meet you. I'm [your name] from [country/city]."
- "Hello, I'm [your name]. I'm studying [subject]."

Asking for Names:
- "What's your name?"
- "May I know your name, please?"
- "Could you tell me your name?"
- "I'm sorry, I didn't catch your name."

Introducing Others:
- "This is my classmate, [name]."
- "I'd like to introduce [name]. He/She is also studying [subject]."
- "Let me introduce you to [name]. He/She is in my [class/group]."
- "Have you met [name]? He/She is from [country/city]."

Responding to Introductions:
- "Nice to meet you."
- "Pleased to meet you."
- "It's a pleasure to meet you."
- "Good to meet you."

Sharing Academic Information:
- "I'm studying [subject/major]."
- "I'm in my [first/second/etc.] year."
- "My favorite subject is [subject]."
- "I'm interested in [topic/field]."

Ending the Conversation:
- "It was nice talking to you."
- "I hope we can study together sometime."
- "See you in class tomorrow."
- "Let me know if you need help with [subject]."

Remember to be friendly and open when meeting new people in academic settings. Building connections with classmates can help you in your studies.`,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "Hello, my name is Michael. I'm a new student in the English language program.",
        indonesian: "Halo, nama saya Michael. Saya mahasiswa baru di program bahasa Inggris."
      },
      {
        english: "This is Emma. She's my classmate in Biology class.",
        indonesian: "Ini Emma. Dia teman sekelas saya di kelas Biologi."
      },
      {
        english: "I'm studying Computer Science. I'm in my first year.",
        indonesian: "Saya belajar Ilmu Komputer. Saya di tahun pertama."
      },
      {
        english: "It was nice meeting you. See you in class tomorrow!",
        indonesian: "Senang bertemu dengan Anda. Sampai jumpa di kelas besok!"
      }
    ]
  }
];

// A1 Beginner Level - Academic Pathway Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'a1-a-s1-quiz',
    title: 'Classroom Vocabulary Quiz',
    description: 'Test your knowledge of basic classroom vocabulary and phrases',
    skillType: 'vocabulary',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a1as1',
        type: 'multiple-choice',
        question: 'What is a "textbook"?',
        options: [
          'A room where students learn',
          'A book used for studying a subject',
          'A person who teaches',
          'Work that must be completed'
        ],
        correctAnswer: 'A book used for studying a subject',
        explanation: 'A textbook is a book containing information about a specific subject that is used for studying.'
      },
      {
        id: 'q2-a1as1',
        type: 'multiple-choice',
        question: 'Which phrase would you use to ask for clarification?',
        options: [
          'I\'m sorry I\'m late.',
          'May I come in?',
          'Could you repeat that, please?',
          'The answer is...'
        ],
        correctAnswer: 'Could you repeat that, please?',
        explanation: '"Could you repeat that, please?" is a polite way to ask someone to say something again when you didn\'t hear or understand it.'
      },
      {
        id: 'q3-a1as1',
        type: 'multiple-choice',
        question: 'What do you call another student in your class?',
        options: [
          'Teacher',
          'Professor',
          'Classmate',
          'Assignment'
        ],
        correctAnswer: 'Classmate',
        explanation: 'A classmate is another student who is in the same class as you.'
      },
      {
        id: 'q4-a1as1',
        type: 'multiple-choice',
        question: 'Which phrase would you use to ask about a deadline?',
        options: [
          'What page are we on?',
          'When is the assignment due?',
          'May I borrow your pen?',
          'How do you spell that?'
        ],
        correctAnswer: 'When is the assignment due?',
        explanation: '"When is the assignment due?" is used to ask about the deadline or the date by which an assignment must be completed.'
      },
      {
        id: 'q5-a1as1',
        type: 'multiple-choice',
        question: 'What is used to write on a whiteboard?',
        options: [
          'Pen',
          'Pencil',
          'Marker',
          'Eraser'
        ],
        correctAnswer: 'Marker',
        explanation: 'A marker (or whiteboard marker) is used to write on a whiteboard. It contains ink that can be wiped off easily.'
      }
    ]
  },
  {
    id: 'a1-a-s2-quiz',
    title: 'Academic Introductions Quiz',
    description: 'Test your knowledge of academic introductions',
    skillType: 'speaking',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a1as2',
        type: 'multiple-choice',
        question: 'Which phrase is appropriate for introducing yourself to a classmate?',
        options: [
          'What\'s your name?',
          'Hello, my name is Lisa. I\'m studying Economics.',
          'This is my friend, Tom.',
          'See you tomorrow.'
        ],
        correctAnswer: 'Hello, my name is Lisa. I\'m studying Economics.',
        explanation: 'When introducing yourself in an academic context, it\'s common to share your name and what you\'re studying.'
      },
      {
        id: 'q2-a1as2',
        type: 'multiple-choice',
        question: 'How would you introduce a classmate named David?',
        options: [
          'He is David.',
          'This is my classmate, David. He\'s also in my Math class.',
          'Do you know David?',
          'David is not here today.'
        ],
        correctAnswer: 'This is my classmate, David. He\'s also in my Math class.',
        explanation: 'When introducing someone, it\'s helpful to provide their name and some context, such as which class you share.'
      },
      {
        id: 'q3-a1as2',
        type: 'multiple-choice',
        question: 'What is an appropriate response when someone introduces themselves to you?',
        options: [
          'Goodbye',
          'What do you study?',
          'Nice to meet you.',
          'I don\'t understand.'
        ],
        correctAnswer: 'Nice to meet you.',
        explanation: '"Nice to meet you" is a polite and standard response when someone introduces themselves.'
      },
      {
        id: 'q4-a1as2',
        type: 'multiple-choice',
        question: 'Which phrase would you use to ask someone\'s name?',
        options: [
          'Where are you from?',
          'What\'s your name?',
          'What are you studying?',
          'Are you new here?'
        ],
        correctAnswer: 'What\'s your name?',
        explanation: '"What\'s your name?" is a direct and common way to ask someone for their name.'
      },
      {
        id: 'q5-a1as2',
        type: 'multiple-choice',
        question: 'What information is typically shared when introducing yourself in an academic context?',
        options: [
          'Your age and hobbies',
          'Your family background',
          'Your name and what you\'re studying',
          'Your previous schools'
        ],
        correctAnswer: 'Your name and what you\'re studying',
        explanation: 'In an academic introduction, it\'s common to share your name and what subject or program you\'re studying.'
      }
    ]
  }
];

// A1 Beginner Level - Academic Final Test
const finalTest: PracticalTest = {
  id: 'a1-a-final',
  title: 'Academic Communication Basics Test',
  description: 'Demonstrate your ability to communicate in basic academic situations through multiple skills',
  type: 'speaking', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your academic English skills at the A1 level.',
  criteria: [
    'Clear pronunciation of basic academic vocabulary',
    'Appropriate use of introduction phrases',
    'Correct grammar in simple sentences',
    'Appropriate questions for an academic context',
    'Overall fluency and confidence'
  ],
  minScore: 70,
  sections: [
    {
      id: 'a1-a-final-s1',
      title: 'Listening Comprehension',
      type: 'listening',
      description: 'Listen to a short classroom conversation and answer questions',
      prompt: 'Listen to the conversation between a student and a teacher and answer the questions that follow.',
      audioUrl: '/audio/a1-classroom-conversation.mp3',
      hiddenText: `Teacher: Good morning, Emma. Do you have your homework?
Emma: Good morning, Professor Johnson. I'm sorry, but I don't have my homework today.
Teacher: Why not?
Emma: I was sick yesterday. I couldn't finish it.
Teacher: I understand. When can you give it to me?
Emma: Is tomorrow OK?
Teacher: Yes, that's fine. Please bring it to my office before 3:00 PM.
Emma: Thank you, Professor. Where is your office?
Teacher: It's in Building B, Room 205.
Emma: Building B, Room 205. I'll be there. Thank you for understanding.
Teacher: You're welcome. I hope you feel better now.
Emma: Yes, I do. Thank you.`,
      criteria: [
        'Understanding of basic classroom vocabulary',
        'Comprehension of simple conversations',
        'Ability to identify key information'
      ],
      weight: 25
    },
    {
      id: 'a1-a-final-s2',
      title: 'Self-Introduction',
      type: 'speaking',
      description: 'Introduce yourself in an academic context',
      prompt: 'Record a 30-60 second introduction of yourself for your first day in a new class. Include your name, what you\'re studying, and one or two simple sentences about your interests or goals.',
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
      id: 'a1-a-final-s3',
      title: 'Reading Comprehension',
      type: 'reading',
      description: 'Read a short academic notice and answer questions',
      prompt: 'Read the following notice from your school and answer the questions that follow.',
      text: `IMPORTANT NOTICE

LIBRARY HOURS CHANGE

Starting Monday, June 5th, 2023

New Library Hours:
Monday - Friday: 8:00 AM - 9:00 PM
Saturday: 10:00 AM - 6:00 PM
Sunday: CLOSED

Computer Lab:
Available during all library hours
Printing: $0.10 per page (black & white)
           $0.50 per page (color)

Please note:
- Student ID required for entry
- No food or drinks allowed
- Group study rooms must be reserved 24 hours in advance
- Return all books by due date to avoid late fees

For questions, contact library@university.edu or call 555-123-4567`,
      imageUrl: '/images/a1-academic-notice.png',
      criteria: [
        'Understanding of basic academic notices',
        'Comprehension of simple instructions',
        'Ability to identify key information'
      ],
      weight: 20
    },
    {
      id: 'a1-a-final-s4',
      title: 'Writing Test',
      type: 'writing',
      description: 'Write a short email to a teacher',
      prompt: 'Write a short email (30-50 words) to your teacher explaining why you missed a class. Include an apology, the reason for your absence, and ask what you missed.',
      criteria: [
        'Appropriate email format and greetings',
        'Clear explanation of absence',
        'Correct use of simple present tense',
        'Appropriate closing phrases'
      ],
      weight: 25
    }
  ]
};

// Export the complete lesson structure
export const a1AcademicLesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};