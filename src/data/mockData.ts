
export interface Lesson {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  description: string;
  imageUrl: string;
  tags: string[];
  content: {
    sections: {
      title: string;
      text: string;
      examples?: {
        english: string;
        indonesian: string;
      }[];
    }[];
  };
}

export interface PracticeSentence {
  id: string;
  english: string;
  indonesian: string;
  audioUrl?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tips: string;
}

export const topicCategories = [
  'Daily Conversation', 
  'Business English', 
  'Travel', 
  'Academic', 
  'Pronunciation', 
  'Grammar', 
  'Idioms', 
  'Vocabulary'
];

export const mockLessons: Lesson[] = [
  {
    id: 'l1',
    title: 'Introducing Yourself',
    level: 'beginner',
    duration: '15 min',
    description: 'Learn how to confidently introduce yourself in English for social and professional situations.',
    imageUrl: '/placeholder.svg',
    tags: ['Daily Conversation', 'Beginner', 'Speaking'],
    content: {
      sections: [
        {
          title: 'Common Greetings',
          text: 'When meeting someone for the first time, you can use these common greetings:',
          examples: [
            {
              english: 'Hello, my name is [your name].',
              indonesian: 'Halo, nama saya [nama Anda].'
            },
            {
              english: "Hi there! I'm [your name]. Nice to meet you.",
              indonesian: 'Hai! Saya [nama Anda]. Senang bertemu dengan Anda.'
            },
            {
              english: "Good morning/afternoon/evening! I'm [your name].",
              indonesian: 'Selamat pagi/siang/malam! Saya [nama Anda].'
            }
          ]
        },
        {
          title: 'Sharing Basic Information',
          text: "After introducing your name, you can share some basic information about yourself:",
          examples: [
            {
              english: "I'm from Indonesia.",
              indonesian: 'Saya dari Indonesia.'
            },
            {
              english: "I work as a [job title] at [company name].",
              indonesian: 'Saya bekerja sebagai [jabatan] di [nama perusahaan].'
            },
            {
              english: "I'm studying [subject] at [school/university name].",
              indonesian: 'Saya sedang belajar [subjek] di [nama sekolah/universitas].'
            }
          ]
        },
        {
          title: 'Asking Questions',
          text: "To keep the conversation going, you can ask questions about the other person:",
          examples: [
            {
              english: "Where are you from?",
              indonesian: 'Anda berasal dari mana?'
            },
            {
              english: "What do you do for work?",
              indonesian: 'Apa pekerjaan Anda?'
            },
            {
              english: "How long have you been in [place]?",
              indonesian: 'Sudah berapa lama Anda berada di [tempat]?'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'l2',
    title: 'Ordering Food at a Restaurant',
    level: 'beginner',
    duration: '20 min',
    description: 'Master the essential phrases and vocabulary for ordering food and drinks at restaurants.',
    imageUrl: '/placeholder.svg',
    tags: ['Daily Conversation', 'Travel', 'Vocabulary'],
    content: {
      sections: [
        {
          title: 'Getting a Table',
          text: 'Use these phrases when you first enter a restaurant:',
          examples: [
            {
              english: 'A table for two, please.',
              indonesian: 'Meja untuk dua orang, tolong.'
            },
            {
              english: "Do you have any tables available?",
              indonesian: 'Apakah Anda memiliki meja yang tersedia?'
            },
            {
              english: "I have a reservation under the name [your name].",
              indonesian: 'Saya memiliki reservasi atas nama [nama Anda].'
            }
          ]
        },
        {
          title: 'Asking About the Menu',
          text: "When you're ready to order, you can ask about the menu:",
          examples: [
            {
              english: "Could you recommend something from the menu?",
              indonesian: 'Bisakah Anda merekomendasikan sesuatu dari menu ini?'
            },
            {
              english: "What's today's special?",
              indonesian: 'Apa menu spesial hari ini?'
            },
            {
              english: "Does this dish contain [ingredient]?",
              indonesian: 'Apakah hidangan ini mengandung [bahan]?'
            }
          ]
        }
      ]
    }
  },
  {
    id: 'l3',
    title: 'Business Email Writing',
    level: 'intermediate',
    duration: '25 min',
    description: 'Learn how to write effective and professional business emails in English.',
    imageUrl: '/placeholder.svg',
    tags: ['Business English', 'Writing', 'Communication'],
    content: {
      sections: [
        {
          title: 'Email Structure',
          text: 'A professional email typically includes these components:',
          examples: [
            {
              english: 'Subject Line: Clear and specific',
              indonesian: 'Subjek: Jelas dan spesifik'
            },
            {
              english: "Greeting: Dear Mr./Ms./Dr. [Last Name],",
              indonesian: 'Salam: Dear Mr./Ms./Dr. [Nama Belakang],'
            },
            {
              english: "Body: Introduction, main message, and conclusion",
              indonesian: 'Isi: Pendahuluan, pesan utama, dan kesimpulan'
            }
          ]
        }
      ]
    }
  }
];

export const practiceSentences: PracticeSentence[] = [
  {
    id: 'p1',
    english: 'Hello, my name is Sarah. Nice to meet you.',
    indonesian: 'Halo, nama saya Sarah. Senang bertemu dengan Anda.',
    difficulty: 'easy',
    tips: 'Focus on the "th" sound in "Sarah" and in "the".'
  },
  {
    id: 'p2',
    english: 'I would like to order a coffee with milk and sugar, please.',
    indonesian: 'Saya ingin memesan kopi dengan susu dan gula, tolong.',
    difficulty: 'medium',
    tips: 'Pay attention to the "w" sound in "would" and the "th" sound in "with".'
  },
  {
    id: 'p3',
    english: 'Could you tell me how to get to the nearest subway station?',
    indonesian: 'Bisakah Anda memberi tahu saya bagaimana cara ke stasiun kereta bawah tanah terdekat?',
    difficulty: 'medium',
    tips: 'Practice the "could you" contraction and the "st" sound in "nearest".'
  },
  {
    id: 'p4',
    english: 'The weather is beautiful today. I think I will go for a walk in the park.',
    indonesian: 'Cuaca hari ini indah. Saya pikir saya akan berjalan-jalan di taman.',
    difficulty: 'medium',
    tips: 'Focus on the "th" sound in "weather" and "think".'
  },
  {
    id: 'p5',
    english: 'I need to schedule an appointment with the doctor for next Thursday afternoon.',
    indonesian: 'Saya perlu menjadwalkan janji dengan dokter untuk Kamis sore minggu depan.',
    difficulty: 'hard',
    tips: 'Practice the "sch" sound in "schedule" and the rhythm of this longer sentence.'
  }
];

export const features = [
  {
    title: "AI-Powered Pronunciation Feedback",
    description: "Get instant feedback on your pronunciation with our advanced speech recognition technology.",
    icon: "🎯"
  },
  {
    title: "Personalized Learning Path",
    description: "Our system adapts to your level and learning goals to create a customized experience.",
    icon: "🛤️"
  },
  {
    title: "Interactive Speaking Practice",
    description: "Practice real conversations with our AI conversation partner that responds naturally.",
    icon: "💬"
  },
  {
    title: "Contextual Vocabulary Building",
    description: "Learn new words in context with examples that make them easy to understand and remember.",
    icon: "📚"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your improvement over time with detailed analytics and achievement badges.",
    icon: "📊"
  },
  {
    title: "Native Speaker Audio",
    description: "Listen to clear pronunciations from native English speakers for perfect learning.",
    icon: "🔊"
  }
];
