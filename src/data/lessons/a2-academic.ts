import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// A2 Elementary Level - Academic Pathway Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'a2-a-s1',
    title: 'Academic Reading Strategies',
    description: 'Learn essential strategies for reading academic texts',
    content: `In this lesson, you will learn basic strategies for reading and understanding academic texts in English.

Before Reading:
- Preview the text: Look at the title, headings, and any images or charts
- Predict content: Think about what information the text might contain
- Identify purpose: Determine why you are reading (to find specific information, learn a concept, etc.)
- Activate prior knowledge: Think about what you already know about the topic

During Reading:
- Skim for main ideas: Read quickly to get the general meaning
- Scan for specific information: Look for particular facts or details
- Identify key vocabulary: Note important terms and concepts
- Use context clues: Figure out unfamiliar words from surrounding text
- Take notes: Write down main points and important details
- Monitor comprehension: Check if you understand what you're reading

After Reading:
- Summarize: Restate the main points in your own words
- Review: Go back to parts you didn't understand
- Reflect: Think about how the information connects to what you already know
- Apply: Consider how you can use this information

Common Academic Text Features:
- Abstract: A summary of the entire text
- Introduction: Presents the topic and main argument
- Body paragraphs: Develop the main ideas with supporting evidence
- Conclusion: Summarizes the main points and implications
- References: Lists sources cited in the text
- Appendices: Contains supplementary information

Reading Difficult Texts:
- Break it down: Read one section at a time
- Look up key terms: Use a dictionary for important unfamiliar words
- Reread challenging sections: Some parts may require multiple readings
- Discuss with others: Talk about difficult concepts with classmates
- Ask questions: Note questions to ask your teacher

Remember that academic reading is not always linear. It's normal to go back and reread sections to fully understand the content.`,
    videoId: 'bS9c7nJ9_lE',
    examples: [
      {
        english: "When I read a research article, I first look at the abstract to get an overview of the study.",
        indonesian: "Ketika saya membaca artikel penelitian, saya pertama-tama melihat abstrak untuk mendapatkan gambaran umum tentang penelitian tersebut."
      },
      {
        english: "I don't understand this paragraph. I need to read it again more carefully.",
        indonesian: "Saya tidak mengerti paragraf ini. Saya perlu membacanya lagi dengan lebih teliti."
      },
      {
        english: "This word is new to me, but from the context, I think it means 'to examine closely'.",
        indonesian: "Kata ini baru bagi saya, tetapi dari konteksnya, saya pikir artinya 'memeriksa dengan teliti'."
      },
      {
        english: "After reading the text, I wrote a summary of the main points to help me remember the information.",
        indonesian: "Setelah membaca teks, saya menulis ringkasan poin-poin utama untuk membantu saya mengingat informasi tersebut."
      }
    ]
  },
  {
    id: 'a2-a-s2',
    title: 'Note-Taking Skills',
    description: 'Learn effective techniques for taking notes in academic settings',
    content: `In this lesson, you will learn how to take effective notes during lectures, discussions, and while reading academic texts.

Why Take Notes?
- Helps you stay focused and engaged
- Improves your understanding and retention of information
- Creates a record for later review and study
- Helps identify key concepts and important details
- Assists in preparing for assignments and exams

Note-Taking Methods:
1. Outline Method
   - Organize information hierarchically
   - Use main topics, subtopics, and details
   - Use indentation to show relationships between ideas
   - Example:
     I. Main topic
        A. Subtopic
           1. Detail
           2. Detail
        B. Subtopic

2. Cornell Method
   - Divide your page into three sections:
     * Left column (cue column): Write questions or key words
     * Right column (note-taking column): Write your notes
     * Bottom section (summary area): Write a brief summary
   - Good for organizing information and creating study materials

3. Mind Mapping
   - Start with the main topic in the center
   - Branch out to related subtopics
   - Add details to each branch
   - Use colors, symbols, and images
   - Helps visualize connections between ideas

4. Sentence Method
   - Write down information in complete sentences
   - Number each new thought or piece of information
   - Simple but can be time-consuming

Effective Note-Taking Tips:
- Use abbreviations and symbols to write faster
- Focus on key points, not every word
- Use your own words when possible
- Leave space to add information later
- Review and organize your notes soon after class
- Highlight or underline important information
- Ask questions if you miss something important

Digital vs. Handwritten Notes:
- Handwritten: Better for retention, fewer distractions
- Digital: Easier to organize, search, and share

Remember that the best note-taking method depends on your learning style and the type of information. Experiment with different methods to find what works best for you.`,
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    examples: [
      {
        english: "During the lecture, I used the Cornell method to take notes on the causes of climate change.",
        indonesian: "Selama kuliah, saya menggunakan metode Cornell untuk mencatat tentang penyebab perubahan iklim."
      },
      {
        english: "I created a mind map to show the relationships between different literary movements.",
        indonesian: "Saya membuat peta pikiran untuk menunjukkan hubungan antara gerakan sastra yang berbeda."
      },
      {
        english: "When reading the textbook, I write down key definitions and examples in my own words.",
        indonesian: "Ketika membaca buku teks, saya menulis definisi kunci dan contoh dengan kata-kata saya sendiri."
      },
      {
        english: "After class, I review my notes and highlight the most important points for the exam.",
        indonesian: "Setelah kelas, saya meninjau catatan saya dan menyoroti poin-poin terpenting untuk ujian."
      }
    ]
  }
];

// A2 Elementary Level - Academic Pathway Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'a2-a-s1-quiz',
    title: 'Academic Reading Strategies Quiz',
    description: 'Test your knowledge of strategies for reading academic texts',
    skillType: 'reading',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a2as1',
        type: 'multiple-choice',
        question: 'What does "skimming" a text mean?',
        options: [
          'Reading every word carefully',
          'Reading quickly to get the general meaning',
          'Looking for specific information',
          'Highlighting important words'
        ],
        correctAnswer: 'Reading quickly to get the general meaning',
        explanation: 'Skimming means reading a text quickly to get a general understanding of the content without focusing on every detail.'
      },
      {
        id: 'q2-a2as1',
        type: 'multiple-choice',
        question: 'What should you do before reading an academic text?',
        options: [
          'Memorize all the vocabulary',
          'Read the entire text quickly first',
          'Preview the title, headings, and images',
          'Write a summary of what you think it will be about'
        ],
        correctAnswer: 'Preview the title, headings, and images',
        explanation: 'Previewing the text by looking at the title, headings, and images helps you get an overview and prepare for the content.'
      },
      {
        id: 'q3-a2as1',
        type: 'multiple-choice',
        question: 'What is "scanning" used for?',
        options: [
          'Understanding the main idea',
          'Finding specific information or details',
          'Analyzing the author\'s argument',
          'Checking grammar and spelling'
        ],
        correctAnswer: 'Finding specific information or details',
        explanation: 'Scanning is a reading technique used to find specific information or details in a text, such as dates, names, or statistics.'
      },
      {
        id: 'q4-a2as1',
        type: 'multiple-choice',
        question: 'What is an "abstract" in an academic text?',
        options: [
          'A difficult concept that is hard to understand',
          'A summary of the entire text',
          'The list of references at the end',
          'A type of chart or graph'
        ],
        correctAnswer: 'A summary of the entire text',
        explanation: 'An abstract is a brief summary of an academic text that provides an overview of the content, methodology, and findings.'
      },
      {
        id: 'q5-a2as1',
        type: 'multiple-choice',
        question: 'What should you do if you don\'t understand a section of an academic text?',
        options: [
          'Skip it and continue reading',
          'Stop reading the text completely',
          'Reread the section and try to understand it',
          'Assume it\'s not important'
        ],
        correctAnswer: 'Reread the section and try to understand it',
        explanation: 'When you don\'t understand a section, it\'s best to reread it more carefully. If you still don\'t understand, you might need to look up key terms or ask for help.'
      }
    ]
  },
  {
    id: 'a2-a-s2-quiz',
    title: 'Note-Taking Skills Quiz',
    description: 'Test your knowledge of effective note-taking techniques',
    skillType: 'writing',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a2as2',
        type: 'multiple-choice',
        question: 'Which note-taking method uses a hierarchical structure with main topics, subtopics, and details?',
        options: [
          'Cornell Method',
          'Mind Mapping',
          'Outline Method',
          'Sentence Method'
        ],
        correctAnswer: 'Outline Method',
        explanation: 'The Outline Method organizes information hierarchically using main topics, subtopics, and details with indentation to show relationships.'
      },
      {
        id: 'q2-a2as2',
        type: 'multiple-choice',
        question: 'What are the three sections in the Cornell note-taking method?',
        options: [
          'Title, body, conclusion',
          'Introduction, main points, summary',
          'Questions, answers, references',
          'Cue column, note-taking column, summary area'
        ],
        correctAnswer: 'Cue column, note-taking column, summary area',
        explanation: 'The Cornell Method divides the page into three sections: a left column for cues/questions, a right column for notes, and a bottom section for a summary.'
      },
      {
        id: 'q3-a2as2',
        type: 'multiple-choice',
        question: 'Which note-taking method starts with the main topic in the center and branches out to related subtopics?',
        options: [
          'Outline Method',
          'Cornell Method',
          'Mind Mapping',
          'Sentence Method'
        ],
        correctAnswer: 'Mind Mapping',
        explanation: 'Mind Mapping is a visual note-taking method that starts with the main topic in the center and branches out to related subtopics, helping to visualize connections between ideas.'
      },
      {
        id: 'q4-a2as2',
        type: 'multiple-choice',
        question: 'What is an effective way to take notes faster?',
        options: [
          'Write down every word the lecturer says',
          'Record the lecture instead of taking notes',
          'Use abbreviations and symbols',
          'Type instead of writing by hand'
        ],
        correctAnswer: 'Use abbreviations and symbols',
        explanation: 'Using abbreviations and symbols helps you write faster and capture more information during lectures or while reading.'
      },
      {
        id: 'q5-a2as2',
        type: 'multiple-choice',
        question: 'When should you review your notes?',
        options: [
          'Only before exams',
          'Never, just take new notes',
          'Soon after class',
          'At the end of the semester'
        ],
        correctAnswer: 'Soon after class',
        explanation: 'Reviewing your notes soon after class helps reinforce the information while it\'s still fresh in your mind and allows you to clarify any confusing points.'
      }
    ]
  }
];

// A2 Elementary Level - Academic Final Test
const finalTest: PracticalTest = {
  id: 'a2-a-final',
  title: 'Academic Communication Test',
  description: 'Demonstrate your ability to communicate in academic situations through multiple skills',
  type: 'writing', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your academic communication skills at the A2 level.',
  criteria: [
    'Appropriate academic communication format',
    'Clear communication of information',
    'Correct use of academic vocabulary',
    'Proper grammar and punctuation',
    'Respectful tone and politeness'
  ],
  minScore: 70,
  sections: [
    {
      id: 'a2-a-final-s1',
      title: 'Academic Email Writing',
      type: 'writing',
      description: 'Write an email to a teacher or professor',
      prompt: 'Write a short email (5-8 sentences) to your teacher explaining why you missed a class and asking about the homework assignment. Include an apology, the reason for your absence, and specific questions about what you missed.',
      criteria: [
        'Appropriate email format and structure',
        'Clear explanation of absence',
        'Correct use of academic vocabulary',
        'Proper grammar and punctuation',
        'Respectful tone and politeness'
      ],
      weight: 35
    },
    {
      id: 'a2-a-final-s2',
      title: 'Classroom Discussion',
      type: 'speaking',
      description: 'Demonstrate your ability to participate in a classroom discussion',
      prompt: 'Record a 1-2 minute response to the following discussion question from your teacher: "What was the most interesting thing you learned in this course and why?" Include an introduction, at least two main points with examples, and a conclusion.',
      criteria: [
        'Clear organization of ideas',
        'Appropriate academic vocabulary',
        'Proper pronunciation and intonation',
        'Relevant examples to support points',
        'Appropriate classroom language'
      ],
      weight: 35
    },
    {
      id: 'a2-a-final-s3',
      title: 'Academic Reading Comprehension',
      type: 'reading',
      description: 'Demonstrate understanding of academic text',
      prompt: 'Read the short academic passage below about study skills and answer the questions that follow. Focus on understanding the main ideas and supporting details.',
      imageUrl: '/images/a2-academic-text.png',
      criteria: [
        'Accurate comprehension of academic text',
        'Understanding of academic vocabulary',
        'Ability to identify main ideas and supporting details',
        'Recognition of text structure and purpose'
      ],
      weight: 30
    }
  ]
};

// Export the complete lesson structure
export const a2AcademicLesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};