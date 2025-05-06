
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
      imageUrl?: string; // Optional image URL for each section
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
    id: 'a1-business',
    title: 'Office Basics and Business Introductions',
    level: 'beginner',
    cefrLevel: 'A1',
    path: 'business',
    duration: '30 min',
    description: 'Learn essential vocabulary and phrases for the workplace environment and business introductions.',
    imageUrl: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    tags: ['Business English', 'Beginner', 'Vocabulary', 'Introductions'],
    content: {
      sections: [
        {
          title: 'Office Basics',
          text: 'Learn essential vocabulary and phrases for the workplace environment.',
          examples: [
            {
              english: "Good morning! My name is John. I'm the new employee in the marketing department.",
              indonesian: "Selamat pagi! Nama saya John. Saya karyawan baru di departemen pemasaran."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a1-academic',
    title: 'Classroom Language and Academic Introductions',
    level: 'beginner',
    cefrLevel: 'A1',
    path: 'academic',
    duration: '30 min',
    description: 'Learn essential vocabulary and phrases for the classroom environment and academic introductions.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80',
    tags: ['Academic English', 'Beginner', 'Vocabulary', 'Classroom Language'],
    content: {
      sections: [
        {
          title: 'Classroom Language',
          text: 'Learn essential vocabulary and phrases for the classroom environment.',
          examples: [
            {
              english: "Excuse me, professor. Could you repeat that, please? I didn't understand.",
              indonesian: "Permisi, profesor. Bisakah Anda mengulanginya? Saya tidak mengerti."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a2-business',
    title: 'Business Phone Calls and Emails',
    level: 'elementary',
    cefrLevel: 'A2',
    path: 'business',
    duration: '35 min',
    description: 'Learn essential vocabulary and phrases for making business phone calls and writing professional emails.',
    imageUrl: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    tags: ['Business English', 'Elementary', 'Phone Calls', 'Emails'],
    content: {
      sections: [
        {
          title: 'Business Phone Calls',
          text: 'Learn essential vocabulary and phrases for making and receiving business phone calls.',
          examples: [
            {
              english: "Hello, this is John Smith from ABC Company. Could I speak to Ms. Johnson, please?",
              indonesian: "Halo, ini John Smith dari Perusahaan ABC. Bisakah saya berbicara dengan Ibu Johnson?"
            }
          ]
        }
      ]
    }
  },
  {
    id: 'a2-academic',
    title: 'Academic Discussions and Presentations',
    level: 'elementary',
    cefrLevel: 'A2',
    path: 'academic',
    duration: '35 min',
    description: 'Learn essential vocabulary and phrases for participating in academic discussions and giving simple presentations.',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    tags: ['Academic English', 'Elementary', 'Discussions', 'Presentations'],
    content: {
      sections: [
        {
          title: 'Academic Discussions',
          text: 'Learn essential vocabulary and phrases for participating in academic discussions.',
          examples: [
            {
              english: "I think that's an interesting point. Could you explain more about it?",
              indonesian: "Saya pikir itu adalah poin yang menarik. Bisakah Anda menjelaskan lebih lanjut tentang hal itu?"
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b1-business',
    title: 'Business Meetings and Negotiations',
    level: 'intermediate',
    cefrLevel: 'B1',
    path: 'business',
    duration: '40 min',
    description: 'Learn vocabulary and phrases for participating effectively in business meetings and basic negotiations.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    tags: ['Business English', 'Intermediate', 'Meetings', 'Negotiations'],
    content: {
      sections: [
        {
          title: 'Business Meetings',
          text: 'Learn vocabulary and phrases for participating effectively in business meetings.',
          examples: [
            {
              english: "I'd like to add something to that point if I may.",
              indonesian: "Saya ingin menambahkan sesuatu pada poin itu jika boleh."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b1-academic',
    title: 'Academic Research and Essays',
    level: 'intermediate',
    cefrLevel: 'B1',
    path: 'academic',
    duration: '40 min',
    description: 'Learn vocabulary and structures for conducting academic research and writing essays.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Academic English', 'Intermediate', 'Research', 'Essays'],
    content: {
      sections: [
        {
          title: 'Academic Research',
          text: 'Learn vocabulary and structures for conducting academic research.',
          examples: [
            {
              english: "According to Smith (2020), there is a strong correlation between these variables.",
              indonesian: "Menurut Smith (2020), ada korelasi yang kuat antara variabel-variabel ini."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b2-business',
    title: 'Negotiation Skills and Business Strategy',
    level: 'upper intermediate',
    cefrLevel: 'B2',
    path: 'business',
    duration: '45 min',
    description: 'Learn effective strategies and language for business negotiations and discussing business strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    tags: ['Business English', 'Upper Intermediate', 'Negotiations', 'Strategy'],
    content: {
      sections: [
        {
          title: 'Negotiation Skills',
          text: 'Learn effective strategies and language for business negotiations.',
          examples: [
            {
              english: "I understand your position, but I think we can find a solution that works for both parties.",
              indonesian: "Saya memahami posisi Anda, tetapi saya pikir kita dapat menemukan solusi yang berfungsi untuk kedua belah pihak."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'b2-academic',
    title: 'Academic Debates and Critical Thinking',
    level: 'upper intermediate',
    cefrLevel: 'B2',
    path: 'academic',
    duration: '45 min',
    description: 'Learn vocabulary and structures for participating in academic debates and developing critical thinking skills.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    tags: ['Academic English', 'Upper Intermediate', 'Debates', 'Critical Thinking'],
    content: {
      sections: [
        {
          title: 'Academic Debates',
          text: 'Learn vocabulary and structures for participating in academic debates.',
          examples: [
            {
              english: "While I see the merit in your argument, I would like to offer an alternative perspective.",
              indonesian: "Meskipun saya melihat manfaat dalam argumen Anda, saya ingin menawarkan perspektif alternatif."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'c1-business',
    title: 'Advanced Business Communication',
    level: 'advanced',
    cefrLevel: 'C1',
    path: 'business',
    duration: '45 min',
    description: 'Master sophisticated business language, negotiation strategies, and persuasive communication for high-level business contexts.',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    tags: ['Business English', 'Advanced', 'Negotiation', 'Persuasive Communication'],
    content: {
      sections: [
        {
          title: 'Advanced Business Communication',
          text: 'Master sophisticated business language and communication strategies.',
          examples: [
            {
              english: "I appreciate your perspective on this matter, and I'd like to propose an alternative approach that might address your concerns while still meeting our objectives.",
              indonesian: "Saya menghargai perspektif Anda tentang masalah ini, dan saya ingin mengusulkan pendekatan alternatif yang mungkin mengatasi kekhawatiran Anda sambil tetap memenuhi tujuan kami."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'c1-academic',
    title: 'Academic Discourse and Critical Analysis',
    level: 'advanced',
    cefrLevel: 'C1',
    path: 'academic',
    duration: '45 min',
    description: 'Master sophisticated academic language, critical analysis, and persuasive argumentation for advanced academic contexts.',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80',
    tags: ['Academic English', 'Critical Thinking', 'Advanced Grammar', 'Formal Writing'],
    content: {
      sections: [
        {
          title: 'Advanced Passive Structures',
          text: 'Master complex passive constructions for academic and professional contexts, including passive infinitives, passive gerunds, and passive reporting structures.',
          imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          examples: [
            {
              english: "The findings are believed to have been manipulated to support the hypothesis.",
              indonesian: "Temuan tersebut diyakini telah dimanipulasi untuk mendukung hipotesis."
            },
            {
              english: "It has been suggested that the policy should be reconsidered in light of recent developments.",
              indonesian: "Telah disarankan bahwa kebijakan tersebut harus dipertimbangkan kembali mengingat perkembangan terbaru."
            }
          ]
        },
        {
          title: 'Academic Vocabulary and Nominalisation',
          text: "Enhance your formal writing with sophisticated vocabulary and nominalisation techniques to create concise, objective academic discourse.",
          imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80',
          examples: [
            {
              english: "The implementation of the new policy resulted in a significant reduction in carbon emissions.",
              indonesian: "Implementasi kebijakan baru menghasilkan pengurangan signifikan dalam emisi karbon."
            },
            {
              english: "Their failure to address the underlying issues led to the deterioration of diplomatic relations.",
              indonesian: "Kegagalan mereka untuk mengatasi masalah mendasar menyebabkan memburuknya hubungan diplomatik."
            }
          ]
        },
        {
          title: 'Critical Analysis and Argumentation',
          text: "Develop sophisticated critical thinking and persuasive argumentation skills for academic discourse and professional contexts.",
          imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          examples: [
            {
              english: "While the author presents compelling statistical evidence to support their main claim, they fail to address several significant counterarguments that undermine their conclusion.",
              indonesian: "Meskipun penulis menyajikan bukti statistik yang meyakinkan untuk mendukung klaim utama mereka, mereka gagal mengatasi beberapa argumen tandingan signifikan yang melemahkan kesimpulan mereka."
            },
            {
              english: "The research methodology appears robust; however, the small sample size and lack of demographic diversity raise questions about the generalizability of the findings.",
              indonesian: "Metodologi penelitian tampak kuat; namun, ukuran sampel yang kecil dan kurangnya keragaman demografis menimbulkan pertanyaan tentang kemampuan generalisasi temuan."
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
    tips: 'Focus on the contraction "I\'d" and the clear pronunciation of numbers.',
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
    english: 'We appreciate your offer, but we\'re looking for more favorable payment terms.',
    indonesian: 'Kami menghargai penawaran Anda, tetapi kami mencari persyaratan pembayaran yang lebih menguntungkan.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Focus on the professional tone and the clear pronunciation of "favorable".',
    skillFocus: 'vocabulary',
    lessonId: 'l5'
  },
  {
    id: 'p5-l5-2',
    english: "If we can reach an agreement today, we\'re prepared to sign the contract immediately.",
    indonesian: 'Jika kita dapat mencapai kesepakatan hari ini, kami siap untuk menandatangani kontrak segera.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Practice the conditional structure and maintain a confident tone.',
    skillFocus: 'grammar',
    lessonId: 'l5'
  },
  {
    id: 'p5-l5-3',
    english: "Let\'s find a solution that benefits both our companies in the long term.",
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
  },
  // C1 Lesson: Academic Discourse and Critical Analysis
  {
    id: 'p6-c1-1',
    english: "The findings are believed to have been manipulated to support the hypothesis.",
    indonesian: "Temuan tersebut diyakini telah dimanipulasi untuk mendukung hipotesis.",
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Focus on the complex passive structure "are believed to have been manipulated" and maintain a formal academic tone.',
    skillFocus: 'grammar',
    lessonId: 'c1'
  },
  {
    id: 'p6-c1-2',
    english: "Had the government implemented stricter regulations, we wouldn't be facing this environmental crisis now.",
    indonesian: "Seandainya pemerintah menerapkan peraturan yang lebih ketat, kita tidak akan menghadapi krisis lingkungan ini sekarang.",
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Pay attention to the inverted conditional structure and the stress patterns in the longer sentence.',
    skillFocus: 'grammar',
    lessonId: 'c1'
  },
  {
    id: 'p6-c1-3',
    english: "The implementation of the new policy resulted in a significant reduction in carbon emissions.",
    indonesian: "Implementasi kebijakan baru menghasilkan pengurangan signifikan dalam emisi karbon.",
    difficulty: 'medium',
    cefrLevel: 'C1',
    tips: 'Focus on the nominalised forms "implementation" and "reduction" and the academic vocabulary.',
    skillFocus: 'vocabulary',
    lessonId: 'c1'
  },
  {
    id: 'p6-c1-4',
    english: "Notwithstanding the challenges faced, the research team managed to complete the project ahead of schedule.",
    indonesian: "Terlepas dari tantangan yang dihadapi, tim penelitian berhasil menyelesaikan proyek lebih cepat dari jadwal.",
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Practice the advanced discourse marker "notwithstanding" and maintain a smooth rhythm throughout the sentence.',
    skillFocus: 'fluency',
    lessonId: 'c1'
  },
  {
    id: 'p6-c1-5',
    english: "While the author presents compelling evidence, they fail to address several significant counterarguments.",
    indonesian: "Meskipun penulis menyajikan bukti yang meyakinkan, mereka gagal mengatasi beberapa argumen tandingan yang signifikan.",
    difficulty: 'hard',
    cefrLevel: 'C1',
    tips: 'Focus on the critical analysis vocabulary and the balanced structure of the sentence.',
    skillFocus: 'vocabulary',
    lessonId: 'c1'
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
