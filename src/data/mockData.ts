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
  lessonId: string;  // Link practice sentence to a specific lesson
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
  },
  {
    id: 'l4',
    title: 'Daily Conversations',
    level: 'beginner',
    cefrLevel: 'A2',
    path: 'general',
    duration: '20 min',
    description: 'Master everyday conversations in various common situations.',
    imageUrl: '/placeholder.svg',
    tags: ['Daily Conversation', 'Beginner', 'Speaking'],
    content: {
      sections: [
        {
          title: 'At the Restaurant',
          text: 'Use these phrases when dining at a restaurant:',
          examples: [
            {
              english: "I'd like to make a reservation for tonight at 7 PM.",
              indonesian: "Saya ingin membuat reservasi untuk malam ini pukul 7."
            },
            {
              english: "Could I have the menu, please?",
              indonesian: "Boleh saya minta menunya?"
            },
            {
              english: "I'll have the chicken with rice, please.",
              indonesian: "Saya akan memesan ayam dengan nasi."
            }
          ]
        },
        {
          title: 'Shopping Conversations',
          text: "Common phrases to use while shopping:",
          examples: [
            {
              english: "How much does this cost?",
              indonesian: "Berapa harga ini?"
            },
            {
              english: "Do you have this in a different size?",
              indonesian: "Apakah Anda memiliki ini dalam ukuran yang berbeda?"
            },
            {
              english: "I'm just looking, thank you.",
              indonesian: "Saya hanya melihat-lihat, terima kasih."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'l5',
    title: 'Business Negotiations',
    level: 'advanced',
    cefrLevel: 'C1',
    path: 'business',
    duration: '35 min',
    description: 'Advanced techniques for successful business negotiations in English.',
    imageUrl: '/placeholder.svg',
    tags: ['Business English', 'Negotiation', 'Professional'],
    content: {
      sections: [
        {
          title: 'Opening Negotiations',
          text: 'Professional ways to begin a negotiation:',
          examples: [
            {
              english: "Thank you for meeting with us today to discuss this opportunity.",
              indonesian: "Terima kasih telah bertemu dengan kami hari ini untuk membahas kesempatan ini."
            },
            {
              english: "Let me start by outlining what we hope to achieve today.",
              indonesian: "Izinkan saya mulai dengan menguraikan apa yang kami harapkan untuk dicapai hari ini."
            },
            {
              english: "Before we begin, I'd like to establish some common ground.",
              indonesian: "Sebelum kita mulai, saya ingin menetapkan beberapa kesamaan pandangan."
            }
          ]
        },
        {
          title: 'Negotiation Techniques',
          text: "Strategic phrases to use during negotiations:",
          examples: [
            {
              english: "We appreciate your offer, but we were looking for something more along the lines of...",
              indonesian: "Kami menghargai penawaran Anda, tetapi kami mencari sesuatu yang lebih seperti..."
            },
            {
              english: "Perhaps we can find a middle ground that addresses both our concerns.",
              indonesian: "Mungkin kita dapat menemukan jalan tengah yang mengatasi kekhawatiran kedua belah pihak."
            },
            {
              english: "Let's explore an alternative that might work better for both parties.",
              indonesian: "Mari kita jelajahi alternatif yang mungkin bekerja lebih baik bagi kedua belah pihak."
            }
          ]
        }
      ]
    }
  }
];

export const practiceSentences: PracticeSentence[] = [
  // Lesson 1: Introducing Yourself (beginner, B1, general)
  {
    id: 'p1-l1-1',
    english: 'Hello, my name is Sarah. Nice to meet you.',
    indonesian: 'Halo, nama saya Sarah. Senang bertemu dengan Anda.',
    difficulty: 'easy',
    cefrLevel: 'B1',
    tips: 'Focus on the "th" sound in "Sarah" and in "the".',
    skillFocus: 'pronunciation',
    lessonId: 'l1'
  },
  {
    id: 'p1-l1-2',
    english: "I'm from Jakarta, Indonesia. I've been living here for five years.",
    indonesian: 'Saya dari Jakarta, Indonesia. Saya telah tinggal di sini selama lima tahun.',
    difficulty: 'medium',
    cefrLevel: 'B1',
    tips: 'Pay attention to the contraction "I\'ve" and practice the "v" sound.',
    skillFocus: 'fluency',
    lessonId: 'l1'
  },
  {
    id: 'p1-l1-3',
    english: "I work as a software developer at a tech company.",
    indonesian: 'Saya bekerja sebagai pengembang perangkat lunak di perusahaan teknologi.',
    difficulty: 'medium',
    cefrLevel: 'B1',
    tips: 'Focus on clearly pronouncing "software developer" and the rhythm of the sentence.',
    skillFocus: 'pronunciation',
    lessonId: 'l1'
  },
  {
    id: 'p1-l1-4',
    english: "What about you? What do you do for work?",
    indonesian: 'Bagaimana dengan Anda? Apa pekerjaan Anda?',
    difficulty: 'easy',
    cefrLevel: 'B1',
    tips: 'Practice the rising intonation for questions.',
    skillFocus: 'pronunciation',
    lessonId: 'l1'
  },
  {
    id: 'p1-l1-5',
    english: "It's a pleasure to meet someone from your field of expertise.",
    indonesian: 'Senang bertemu dengan seseorang dari bidang keahlian Anda.',
    difficulty: 'hard',
    cefrLevel: 'B1',
    tips: 'Pay attention to the word stress in "expertise" and practice the "pleasure" pronunciation.',
    skillFocus: 'pronunciation',
    lessonId: 'l1'
  },
  
  // Lesson 2: Business Meetings (intermediate, B2, business)
  {
    id: 'p2-l2-1',
    english: 'In our quarterly meeting, we need to discuss the financial projections for next year.',
    indonesian: 'Dalam rapat triwulanan kita, kita perlu membahas proyeksi keuangan untuk tahun depan.',
    difficulty: 'medium',
    cefrLevel: 'B2',
    tips: 'Focus on the clarity of "quarterly" and the intonation when presenting business topics.',
    skillFocus: 'fluency',
    lessonId: 'l2'
  },
  {
    id: 'p2-l2-2',
    english: "I believe we should prioritize expanding our marketing efforts in the Asian market.",
    indonesian: 'Saya percaya kita harus memprioritaskan perluasan upaya pemasaran kita di pasar Asia.',
    difficulty: 'hard',
    cefrLevel: 'B2',
    tips: 'Practice the word "prioritize" and maintain a professional tone throughout.',
    skillFocus: 'vocabulary',
    lessonId: 'l2'
  },
  {
    id: 'p2-l2-3',
    english: "Let's start by reviewing the action items from our previous meeting.",
    indonesian: 'Mari kita mulai dengan meninjau item tindakan dari rapat sebelumnya.',
    difficulty: 'medium',
    cefrLevel: 'B2',
    tips: 'Focus on the "let\'s" contraction and the rhythm of the business phrase "action items".',
    skillFocus: 'fluency',
    lessonId: 'l2'
  },
  {
    id: 'p2-l2-4',
    english: "I'd like to propose an alternative approach to solving this issue.",
    indonesian: 'Saya ingin mengusulkan pendekatan alternatif untuk menyelesaikan masalah ini.',
    difficulty: 'hard',
    cefrLevel: 'B2',
    tips: 'Pay attention to the pronunciation of "alternative" and "approach".',
    skillFocus: 'vocabulary',
    lessonId: 'l2'
  },
  {
    id: 'p2-l2-5',
    english: "Are there any questions before we move on to the next agenda item?",
    indonesian: 'Apakah ada pertanyaan sebelum kita melanjutkan ke item agenda berikutnya?',
    difficulty: 'medium',
    cefrLevel: 'B2',
    tips: 'Practice the rising intonation for questions in a business context.',
    skillFocus: 'fluency',
    lessonId: 'l2'
  },
  
  // Lesson 3: Academic Research Writing (advanced, C1, academic)
  {
    id: 'p3-l3-1',
    english: 'The research paper demonstrates a significant correlation between the variables examined in the study.',
    indonesian: 'Makalah penelitian menunjukkan korelasi yang signifikan antara variabel-variabel yang diteliti dalam studi tersebut.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Pay attention to the academic vocabulary and formal structure of this complex sentence.',
    skillFocus: 'vocabulary',
    lessonId: 'l3'
  },
  {
    id: 'p3-l3-2',
    english: "The literature review reveals several gaps in the current understanding of the phenomenon.",
    indonesian: 'Tinjauan literatur mengungkapkan beberapa kesenjangan dalam pemahaman saat ini tentang fenomena tersebut.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Focus on the academic terms "literature review" and "phenomenon" with clear pronunciation.',
    skillFocus: 'vocabulary',
    lessonId: 'l3'
  },
  {
    id: 'p3-l3-3',
    english: "The methodology employed in this study has both strengths and limitations that must be acknowledged.",
    indonesian: 'Metodologi yang digunakan dalam penelitian ini memiliki kekuatan dan keterbatasan yang harus diakui.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Practice the academic vocabulary and the rhythm of this formal sentence.',
    skillFocus: 'grammar',
    lessonId: 'l3'
  },
  {
    id: 'p3-l3-4',
    english: "Further research is necessary to validate these preliminary findings.",
    indonesian: 'Penelitian lebih lanjut diperlukan untuk memvalidasi temuan awal ini.',
    difficulty: 'medium',
    cefrLevel: 'C1',
    tips: 'Focus on the formal academic tone and the pronunciation of "validate" and "preliminary".',
    skillFocus: 'vocabulary',
    lessonId: 'l3'
  },
  {
    id: 'p3-l3-5',
    english: "The hypothesis was partially supported by the empirical evidence collected.",
    indonesian: 'Hipotesis tersebut sebagian didukung oleh bukti empiris yang dikumpulkan.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Pay attention to the academic terms "hypothesis" and "empirical evidence".',
    skillFocus: 'vocabulary',
    lessonId: 'l3'
  },
  
  // Lesson 4: Daily Conversations (beginner, A2, general)
  {
    id: 'p4-l4-1',
    english: 'I would like to order a coffee with milk and sugar, please.',
    indonesian: 'Saya ingin memesan kopi dengan susu dan gula, tolong.',
    difficulty: 'easy',
    cefrLevel: 'A2',
    tips: 'Pay attention to the "w" sound in "would" and the "th" sound in "with".',
    skillFocus: 'pronunciation',
    lessonId: 'l4'
  },
  {
    id: 'p4-l4-2',
    english: "Could you tell me how to get to the nearest subway station?",
    indonesian: 'Bisakah Anda memberi tahu saya bagaimana cara ke stasiun kereta bawah tanah terdekat?',
    difficulty: 'medium',
    cefrLevel: 'A2',
    tips: 'Practice the "could you" contraction and the "st" sound in "nearest".',
    skillFocus: 'pronunciation',
    lessonId: 'l4'
  },
  {
    id: 'p4-l4-3',
    english: "I'd like to try on these shoes in size 42, please.",
    indonesian: 'Saya ingin mencoba sepatu ini dalam ukuran 42, tolong.',
    difficulty: 'easy',
    cefrLevel: 'A2',
    tips: 'Focus on the contraction "I'd" and the clear pronunciation of numbers.',
    skillFocus: 'pronunciation',
    lessonId: 'l4'
  },
  {
    id: 'p4-l4-4',
    english: "Do you accept credit cards or only cash?",
    indonesian: 'Apakah Anda menerima kartu kredit atau hanya uang tunai?',
    difficulty: 'easy',
    cefrLevel: 'A2',
    tips: 'Practice the rising intonation for yes/no questions.',
    skillFocus: 'pronunciation',
    lessonId: 'l4'
  },
  {
    id: 'p4-l4-5',
    english: "The food was delicious. Could I have the bill, please?",
    indonesian: 'Makanannya lezat. Boleh saya minta bonnya?',
    difficulty: 'medium',
    cefrLevel: 'A2',
    tips: 'Pay attention to the pronunciation of "delicious" and the polite request form.',
    skillFocus: 'fluency',
    lessonId: 'l4'
  },
  
  // Lesson 5: Business Negotiations (advanced, C1, business)
  {
    id: 'p5-l5-1',
    english: 'We appreciate your offer, but we're looking for more favorable payment terms.',
    indonesian: 'Kami menghargai penawaran Anda, tetapi kami mencari persyaratan pembayaran yang lebih menguntungkan.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Focus on the professional tone and the clear pronunciation of "favorable".',
    skillFocus: 'vocabulary',
    lessonId: 'l5'
  },
  {
    id: 'p5-l5-2',
    english: "If we can reach an agreement today, we're prepared to sign the contract immediately.",
    indonesian: 'Jika kita dapat mencapai kesepakatan hari ini, kami siap untuk menandatangani kontrak segera.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Practice the conditional structure and maintain a confident tone.',
    skillFocus: 'grammar',
    lessonId: 'l5'
  },
  {
    id: 'p5-l5-3',
    english: "Let's find a solution that benefits both our companies in the long term.",
    indonesian: 'Mari kita temukan solusi yang menguntungkan kedua perusahaan kita dalam jangka panjang.',
    difficulty: 'medium',
    cefrLevel: 'C1',
    tips: 'Focus on the positive, collaborative tone and the proper stress in "benefits".',
    skillFocus: 'fluency',
    lessonId: 'l5'
  },
  {
    id: 'p5-l5-4',
    english: "We need to address several key concerns before finalizing this deal.",
    indonesian: 'Kami perlu mengatasi beberapa kekhawatiran utama sebelum menyelesaikan kesepakatan ini.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Pay attention to the business vocabulary and the rhythm of the sentence.',
    skillFocus: 'vocabulary',
    lessonId: 'l5'
  },
  {
    id: 'p5-l5-5',
    english: "Our proposal includes a substantial discount if you commit to a three-year partnership.",
    indonesian: 'Proposal kami mencakup diskon substansial jika Anda berkomitmen untuk kemitraan tiga tahun.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Practice the business terms "substantial" and "partnership" with clear pronunciation.',
    skillFocus: 'vocabulary',
    lessonId: 'l5'
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
