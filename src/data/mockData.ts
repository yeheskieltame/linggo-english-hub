export interface Lesson {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  path: 'general' | 'business' | 'academic';
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
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  tips: string;
  skillFocus: 'pronunciation' | 'fluency' | 'vocabulary' | 'grammar';
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
    cefrLevel: 'B1',
    path: 'general',
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
    title: 'Business Meetings',
    level: 'intermediate',
    cefrLevel: 'B2',
    path: 'business',
    duration: '25 min',
    description: 'Master the essential phrases and vocabulary for participating in and leading business meetings.',
    imageUrl: '/placeholder.svg',
    tags: ['Business English', 'Meetings', 'Professional'],
    content: {
      sections: [
        {
          title: 'Opening a Meeting',
          text: 'Use these phrases to formally begin a business meeting:',
          examples: [
            {
              english: "Good morning everyone. Thank you for coming today.",
              indonesian: "Selamat pagi semua. Terima kasih telah hadir hari ini."
            },
            {
              english: "Let's get started with today's agenda.",
              indonesian: "Mari kita mulai dengan agenda hari ini."
            },
            {
              english: "First, I'd like to welcome our new team member, [name].",
              indonesian: "Pertama, saya ingin menyambut anggota tim baru kita, [nama]."
            }
          ]
        },
        {
          title: 'Expressing Opinions in Meetings',
          text: "Use these phrases to express your thoughts professionally:",
          examples: [
            {
              english: "In my opinion, we should focus on the marketing strategy first.",
              indonesian: "Menurut pendapat saya, kita harus fokus pada strategi pemasaran terlebih dahulu."
            },
            {
              english: "I think we need to reconsider our approach to this problem.",
              indonesian: "Saya pikir kita perlu mempertimbangkan kembali pendekatan kita terhadap masalah ini."
            },
            {
              english: "From my perspective, this solution offers the best long-term benefits.",
              indonesian: "Dari perspektif saya, solusi ini menawarkan manfaat jangka panjang yang terbaik."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'l3',
    title: 'Academic Research Writing',
    level: 'advanced',
    cefrLevel: 'C1',
    path: 'academic',
    duration: '30 min',
    description: 'Learn how to write effective and professional academic research papers in English.',
    imageUrl: '/placeholder.svg',
    tags: ['Academic English', 'Writing', 'Research'],
    content: {
      sections: [
        {
          title: 'Structuring a Research Paper',
          text: 'An academic research paper typically includes these components:',
          examples: [
            {
              english: 'Abstract: A concise summary of your research and findings.',
              indonesian: 'Abstrak: Ringkasan singkat tentang penelitian dan temuan Anda.'
            },
            {
              english: "Introduction: Background information and your research question.",
              indonesian: 'Pendahuluan: Informasi latar belakang dan pertanyaan penelitian Anda.'
            },
            {
              english: "Literature Review: Analysis of existing research on the topic.",
              indonesian: 'Tinjauan Pustaka: Analisis penelitian yang ada tentang topik tersebut.'
            }
          ]
        },
        {
          title: 'Academic Vocabulary and Phrases',
          text: "Use these formal expressions in your academic writing:",
          examples: [
            {
              english: "This study aims to investigate the relationship between X and Y.",
              indonesian: "Penelitian ini bertujuan untuk menyelidiki hubungan antara X dan Y."
            },
            {
              english: "The findings suggest that there is a strong correlation between the variables.",
              indonesian: "Temuan menunjukkan bahwa ada korelasi kuat antara variabel-variabel tersebut."
            },
            {
              english: "It can be concluded that the hypothesis is partially supported by the evidence.",
              indonesian: "Dapat disimpulkan bahwa hipotesis tersebut sebagian didukung oleh bukti."
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
    cefrLevel: 'B1',
    tips: 'Focus on the "th" sound in "Sarah" and in "the".',
    skillFocus: 'pronunciation'
  },
  {
    id: 'p2',
    english: 'I would like to order a coffee with milk and sugar, please.',
    indonesian: 'Saya ingin memesan kopi dengan susu dan gula, tolong.',
    difficulty: 'medium',
    cefrLevel: 'B1',
    tips: 'Pay attention to the "w" sound in "would" and the "th" sound in "with".',
    skillFocus: 'pronunciation'
  },
  {
    id: 'p3',
    english: 'Could you tell me how to get to the nearest subway station?',
    indonesian: 'Bisakah Anda memberi tahu saya bagaimana cara ke stasiun kereta bawah tanah terdekat?',
    difficulty: 'medium',
    cefrLevel: 'B1',
    tips: 'Practice the "could you" contraction and the "st" sound in "nearest".',
    skillFocus: 'pronunciation'
  },
  {
    id: 'p4',
    english: 'In our quarterly meeting, we need to discuss the financial projections for next year.',
    indonesian: 'Dalam rapat triwulanan kita, kita perlu membahas proyeksi keuangan untuk tahun depan.',
    difficulty: 'medium',
    cefrLevel: 'B2',
    tips: 'Focus on the clarity of "quarterly" and the intonation when presenting business topics.',
    skillFocus: 'fluency'
  },
  {
    id: 'p5',
    english: 'The research paper demonstrates a significant correlation between the variables examined in the study.',
    indonesian: 'Makalah penelitian menunjukkan korelasi yang signifikan antara variabel-variabel yang diteliti dalam studi tersebut.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Pay attention to the academic vocabulary and formal structure of this complex sentence.',
    skillFocus: 'vocabulary'
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
