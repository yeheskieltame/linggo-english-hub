import { LessonStage, LessonQuiz, PracticalTest } from '@/types/lesson';

// A2 Elementary Level - Business Pathway Lesson
export const lessonA2BusinessStages: LessonStage[] = [
  {
    id: 'a2-b-s1',
    title: 'Business Phone Calls',
    description: 'Learn essential vocabulary and phrases for making and receiving business phone calls',
    content: `In this lesson, you will learn how to make and receive business phone calls in English.

Making a Business Phone Call:
- Identify yourself: "Hello, this is [your name] from [your company]."
- Ask for the person you want to speak to: "Could I speak to [name], please?"
- Explain the reason for your call: "I'm calling about [topic/reason]."
- Leave a message: "Could you please tell him/her that I called? My number is [your number]."
- End the call: "Thank you for your help. Goodbye."

Receiving a Business Phone Call:
- Answer professionally: "[Company name], [your name] speaking. How can I help you?"
- Taking a message: "I'm afraid [name] isn't available at the moment. Can I take a message?"
- Transferring a call: "One moment, please. I'll transfer you to [name/department]."
- Asking for clarification: "Could you repeat that, please?" or "Could you spell that for me, please?"
- Ending the call: "Thank you for calling. Have a nice day."

Useful Phone Vocabulary:
- To call: To telephone someone
- To ring: Another word for "to call"
- To dial: To input a phone number
- To hang up: To end a call
- To put someone on hold: To ask someone to wait
- To transfer a call: To redirect a call to another person
- Voicemail: A system that records messages
- Extension: A specific number for a person within a company
- Line: A telephone connection
- To be on the line: To be currently on a phone call

Common Phone Phrases:
- "Could you speak up, please? I can't hear you very well."
- "I'm sorry, but the line is breaking up."
- "Would you mind holding for a moment?"
- "I'll put you through to [name/department]."
- "Can I call you back? I'm in a meeting right now."
- "Let me check if [name] is available."
- "I'll make sure [name] gets your message."
- "Is there anything else I can help you with?"

Remember to speak clearly and professionally during business phone calls. It's important to be polite and concise.`,
    videoId: 'Uw0DrMZMKqU',
    examples: [
      {
        english: "Hello, this is Sarah Johnson from ABC Marketing. Could I speak to Mr. Chen, please?",
        indonesian: "Halo, ini Sarah Johnson dari ABC Marketing. Bisakah saya berbicara dengan Pak Chen?"
      },
      {
        english: "I'm afraid Ms. Garcia isn't available at the moment. Would you like to leave a message?",
        indonesian: "Maaf, Bu Garcia sedang tidak ada. Apakah Anda ingin meninggalkan pesan?"
      },
      {
        english: "I'm calling about the meeting scheduled for next Tuesday. I need to confirm the time and location.",
        indonesian: "Saya menelepon tentang rapat yang dijadwalkan untuk Selasa depan. Saya perlu mengonfirmasi waktu dan lokasinya."
      },
      {
        english: "Could you speak more slowly, please? I didn't catch your email address.",
        indonesian: "Bisakah Anda berbicara lebih pelan? Saya tidak menangkap alamat email Anda."
      }
    ]
  },
  {
    id: 'a2-b-s2',
    title: 'Business Emails',
    description: 'Learn how to write effective business emails in English',
    content: `In this lesson, you will learn how to write clear and professional business emails in English.

Parts of a Business Email:
1. Subject Line: Brief and clear description of the email's purpose
2. Greeting: Formal or semi-formal salutation
3. Introduction: Purpose of the email
4. Body: Main content and details
5. Request or Action: What you want the recipient to do
6. Closing: Polite ending
7. Signature: Your name and contact information

Email Subject Lines:
- Keep them short and specific
- Include key information or reference numbers
- Examples: "Meeting Request: Marketing Strategy", "Invoice #12345", "Question about Project Timeline"

Email Greetings:
- Formal: "Dear Mr./Ms./Dr. [Last Name],"
- Semi-formal: "Dear [First Name],"
- When you don't know the name: "Dear Sir/Madam," or "To Whom It May Concern:"

Email Introductions:
- "I am writing to inquire about..."
- "I am writing in reference to..."
- "I am contacting you regarding..."
- "Thank you for your email about..."

Making Requests:
- "Could you please send me..."
- "I would appreciate it if you could..."
- "Would it be possible to..."
- "I would be grateful if you could..."

Email Closings:
- Formal: "Yours sincerely," (when you know the name), "Yours faithfully," (when you don't know the name)
- Semi-formal: "Best regards," "Kind regards," "Regards,"
- Informal but professional: "Thanks," "Many thanks," "Best wishes,"

Email Signature:
- Your full name
- Your position/title
- Company name
- Contact information (phone, email)
- Company website (optional)

Tips for Professional Emails:
- Be clear and concise
- Use proper grammar and spelling
- Maintain a professional tone
- Respond promptly
- Use a professional email address
- Proofread before sending
- Be careful with "Reply All"
- Use appropriate formatting (avoid ALL CAPS, excessive exclamation marks)

Remember that business emails create a written record. Always be professional and think carefully about what you write.`,
    imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    examples: [
      {
        english: "Subject: Meeting Request: Project Update\n\nDear Ms. Johnson,\n\nI am writing to request a meeting to discuss the progress of the marketing project. Would you be available next Tuesday at 10:00 AM?\n\nPlease let me know if this time works for you.\n\nBest regards,\nDavid Chen\nProject Manager\nABC Company\nPhone: 555-1234\nemail: d.chen@abccompany.com",
        indonesian: "Subjek: Permintaan Rapat: Pembaruan Proyek\n\nYang terhormat Ibu Johnson,\n\nSaya menulis untuk meminta pertemuan untuk membahas kemajuan proyek pemasaran. Apakah Anda tersedia Selasa depan pukul 10:00 pagi?\n\nMohon beri tahu saya jika waktu ini cocok untuk Anda.\n\nSalam hormat,\nDavid Chen\nManajer Proyek\nABC Company\nTelepon: 555-1234\nemail: d.chen@abccompany.com"
      },
      {
        english: "Subject: Invoice #12345\n\nDear Mr. Smith,\n\nI am writing in reference to invoice #12345, which was sent on May 15th. According to our records, this invoice has not yet been paid.\n\nCould you please confirm when we can expect payment?\n\nThank you for your attention to this matter.\n\nKind regards,\nSarah Wong\nAccounts Department\nXYZ Services",
        indonesian: "Subjek: Faktur #12345\n\nYang terhormat Bapak Smith,\n\nSaya menulis terkait faktur #12345, yang dikirim pada tanggal 15 Mei. Menurut catatan kami, faktur ini belum dibayar.\n\nBisakah Anda mengonfirmasi kapan kami dapat mengharapkan pembayaran?\n\nTerima kasih atas perhatian Anda terhadap masalah ini.\n\nSalam hormat,\nSarah Wong\nDepartemen Akuntansi\nXYZ Services"
      },
      {
        english: "Subject: Question about Product Specifications\n\nDear Alex,\n\nThank you for sending the product catalog. I have a question about the specifications of the XYZ model.\n\nCould you please provide more information about its dimensions and power requirements?\n\nI appreciate your help.\n\nBest wishes,\nMichael Johnson\nPurchasing Manager",
        indonesian: "Subjek: Pertanyaan tentang Spesifikasi Produk\n\nYang terhormat Alex,\n\nTerima kasih telah mengirimkan katalog produk. Saya memiliki pertanyaan tentang spesifikasi model XYZ.\n\nBisakah Anda memberikan informasi lebih lanjut tentang dimensi dan kebutuhan dayanya?\n\nSaya menghargai bantuan Anda.\n\nSalam hangat,\nMichael Johnson\nManajer Pembelian"
      },
      {
        english: "Subject: Application for Marketing Assistant Position\n\nDear Hiring Manager,\n\nI am writing to apply for the Marketing Assistant position advertised on your company website. Please find attached my resume and cover letter.\n\nI would welcome the opportunity to discuss how my skills and experience match your requirements.\n\nThank you for considering my application.\n\nYours sincerely,\nEmily Garcia\nPhone: 555-5678\nEmail: e.garcia@email.com",
        indonesian: "Subjek: Lamaran untuk Posisi Asisten Pemasaran\n\nYang terhormat Manajer Perekrutan,\n\nSaya menulis untuk melamar posisi Asisten Pemasaran yang diiklankan di situs web perusahaan Anda. Terlampir resume dan surat lamaran saya.\n\nSaya menyambut kesempatan untuk mendiskusikan bagaimana keterampilan dan pengalaman saya sesuai dengan persyaratan Anda.\n\nTerima kasih telah mempertimbangkan lamaran saya.\n\nHormat saya,\nEmily Garcia\nTelepon: 555-5678\nEmail: e.garcia@email.com"
      }
    ]
  }
];

// A2 Elementary Level - Academic Pathway Lesson
export const lessonA2AcademicStages: LessonStage[] = [
  {
    id: 'a2-a-s1',
    title: 'Academic Presentations',
    description: 'Learn how to give simple academic presentations in English',
    content: `In this lesson, you will learn how to prepare and deliver simple academic presentations in English.

Structure of an Academic Presentation:
1. Introduction: Greet the audience, introduce yourself, and state your topic
2. Outline: Tell the audience what you will cover
3. Main Content: Present your main points with supporting details
4. Conclusion: Summarize your main points
5. Questions: Invite questions from the audience

Introduction Phrases:
- "Good morning/afternoon everyone. My name is [your name]."
- "Today, I'm going to talk about [topic]."
- "The purpose of my presentation is to [purpose]."
- "My presentation is about [topic]."

Outline Phrases:
- "First, I will discuss [point 1]."
- "Then, I will explain [point 2]."
- "Finally, I will talk about [point 3]."
- "My presentation has three parts: [part 1], [part 2], and [part 3]."

Transition Phrases:
- "Now, let's move on to [next point]."
- "Next, I'd like to talk about [next point]."
- "Let's now turn to [next point]."
- "The next point I want to discuss is [next point]."

Visual Aid Phrases:
- "As you can see in this slide/graph/chart..."
- "This diagram shows..."
- "This image illustrates..."
- "Let me show you this [visual aid]..."

Conclusion Phrases:
- "To summarize the main points..."
- "In conclusion..."
- "To sum up..."
- "Let me finish by saying..."

Question Phrases:
- "Do you have any questions?"
- "I'd be happy to answer any questions."
- "If you have any questions, I'll try to answer them."
- "Are there any questions about what I've presented?"

Tips for Effective Presentations:
- Speak clearly and not too quickly
- Make eye contact with the audience
- Use simple language and explain technical terms
- Practice your presentation beforehand
- Use visual aids to support your points
- Be aware of your body language and posture
- Respect the time limit

Remember that preparation is key to a successful presentation. Practice your delivery and be ready to answer questions about your topic.`,
    videoId: 'V8eLdbKXGzk',
    examples: [
      {
        english: "Good morning everyone. My name is Maria Santos. Today, I'm going to talk about the water cycle. My presentation has three parts: first, I will explain what the water cycle is; then, I will describe each stage of the cycle; and finally, I will discuss why the water cycle is important for our planet.",
        indonesian: "Selamat pagi semuanya. Nama saya Maria Santos. Hari ini, saya akan berbicara tentang siklus air. Presentasi saya memiliki tiga bagian: pertama, saya akan menjelaskan apa itu siklus air; kemudian, saya akan menjelaskan setiap tahap siklus; dan akhirnya, saya akan membahas mengapa siklus air penting bagi planet kita."
      },
      {
        english: "As you can see in this diagram, the water cycle has four main stages: evaporation, condensation, precipitation, and collection. The sun heats the water in oceans and lakes, causing it to evaporate and rise into the atmosphere.",
        indonesian: "Seperti yang Anda lihat dalam diagram ini, siklus air memiliki empat tahap utama: penguapan, kondensasi, presipitasi, dan pengumpulan. Matahari memanaskan air di lautan dan danau, menyebabkannya menguap dan naik ke atmosfer."
      },
      {
        english: "Now, let's move on to the importance of the water cycle. The water cycle is essential for all life on Earth because it provides fresh water for plants, animals, and humans. It also helps regulate the Earth's temperature.",
        indonesian: "Sekarang, mari kita beralih ke pentingnya siklus air. Siklus air sangat penting bagi semua kehidupan di Bumi karena menyediakan air tawar untuk tanaman, hewan, dan manusia. Ini juga membantu mengatur suhu Bumi."
      },
      {
        english: "To summarize the main points, the water cycle is a natural process with four stages that continuously recycles water on our planet. It is vital for all living things and plays a key role in our climate system. Thank you for your attention. Do you have any questions?",
        indonesian: "Untuk merangkum poin-poin utama, siklus air adalah proses alami dengan empat tahap yang terus-menerus mendaur ulang air di planet kita. Ini sangat penting bagi semua makhluk hidup dan memainkan peran kunci dalam sistem iklim kita. Terima kasih atas perhatian Anda. Apakah Anda memiliki pertanyaan?"
      }
    ]
  },
  {
    id: 'a2-a-s2',
    title: 'Note-Taking Skills',
    description: 'Learn effective techniques for taking notes during lectures and readings',
    content: `In this lesson, you will learn effective techniques for taking notes during lectures, classes, and from reading materials.

Why Take Notes?
- To record important information
- To help you remember key points
- To organize information for studying later
- To identify what you understand and what you need to clarify
- To stay focused and engaged during lectures

Note-Taking Methods:
1. The Outline Method:
   - Use headings and subheadings
   - Organize information hierarchically
   - Use numbers, letters, or bullet points
   - Example:
     I. Main Topic
        A. Subtopic
           1. Detail
           2. Detail
        B. Subtopic

2. The Cornell Method:
   - Divide your page into three sections:
     * Left column (cue column): Write questions or key words
     * Right column (note-taking column): Write your notes
     * Bottom section (summary): Write a brief summary
   - Review and test yourself using the cue column

3. Mind Mapping:
   - Start with the main topic in the center
   - Branch out with related subtopics
   - Add details to each branch
   - Use colors, symbols, or images to enhance memory

4. The Sentence Method:
   - Write down each important point as a complete sentence
   - Number each new thought or topic
   - Simple but can be time-consuming

Tips for Effective Note-Taking:
- Use abbreviations and symbols to save time
- Focus on key words, concepts, and examples
- Don't try to write everything—be selective
- Leave space to add information later
- Review and organize your notes soon after class
- Highlight or underline important points
- Ask questions if you don't understand something

Common Abbreviations and Symbols:
- w/ = with
- w/o = without
- e.g. = for example
- i.e. = that is
- vs. = versus
- & = and
- → = leads to, results in
- ↑ = increase, rise
- ↓ = decrease, fall
- ≈ = approximately
- ∴ = therefore
- ∵ = because

Remember that good note-taking is a skill that improves with practice. Find the method that works best for you and adapt it to different subjects and situations.`,
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "Outline Method Example:\nI. Water Cycle\n   A. Definition\n      1. Natural process of water circulation\n      2. Continuous movement of water on Earth\n   B. Stages\n      1. Evaporation\n      2. Condensation\n      3. Precipitation\n      4. Collection\n   C. Importance\n      1. Provides fresh water\n      2. Regulates temperature\n      3. Supports ecosystems",
        indonesian: "Contoh Metode Garis Besar:\nI. Siklus Air\n   A. Definisi\n      1. Proses alami sirkulasi air\n      2. Pergerakan air yang berkelanjutan di Bumi\n   B. Tahapan\n      1. Penguapan\n      2. Kondensasi\n      3. Presipitasi\n      4. Pengumpulan\n   C. Pentingnya\n      1. Menyediakan air tawar\n      2. Mengatur suhu\n      3. Mendukung ekosistem"
      },
      {
        english: "Cornell Method Example:\n[Left column]\nWhat is photosynthesis?\nWhat do plants need?\nWhat is produced?\n\n[Right column]\nPhotosynthesis is the process by which plants make their own food.\nPlants need sunlight, water, and carbon dioxide.\nThe process produces glucose (sugar) and oxygen.\n\n[Summary]\nPhotosynthesis is a vital process where plants use sunlight, water, and CO2 to produce food (glucose) and release oxygen.",
        indonesian: "Contoh Metode Cornell:\n[Kolom kiri]\nApa itu fotosintesis?\nApa yang dibutuhkan tanaman?\nApa yang dihasilkan?\n\n[Kolom kanan]\nFotosintesis adalah proses di mana tanaman membuat makanan mereka sendiri.\nTanaman membutuhkan sinar matahari, air, dan karbon dioksida.\nProses ini menghasilkan glukosa (gula) dan oksigen.\n\n[Ringkasan]\nFotosintesis adalah proses vital di mana tanaman menggunakan sinar matahari, air, dan CO2 untuk menghasilkan makanan (glukosa) dan melepaskan oksigen."
      },
      {
        english: "Abbreviations Example:\nGlobal warming → ↑ in Earth's avg temp\nCauses: fossil fuels, deforestation, etc.\nEffects: ↑ sea levels, extreme weather, & habitat loss\n∴ need to reduce carbon emissions\n∵ current levels unsustainable",
        indonesian: "Contoh Singkatan:\nPemanasan global → ↑ dalam suhu rata-rata Bumi\nPenyebab: bahan bakar fosil, deforestasi, dll.\nEfek: ↑ permukaan laut, cuaca ekstrem, & hilangnya habitat\n∴ perlu mengurangi emisi karbon\n∵ tingkat saat ini tidak berkelanjutan"
      },
      {
        english: "Mind Map Example:\n[Center: Ancient Rome]\n- Branch 1: Government\n  - Republic (509-27 BCE)\n  - Empire (27 BCE-476 CE)\n  - Senate and consuls\n- Branch 2: Society\n  - Patricians\n  - Plebeians\n  - Slaves\n- Branch 3: Achievements\n  - Roads and aqueducts\n  - Legal system\n  - Military tactics",
        indonesian: "Contoh Peta Pikiran:\n[Pusat: Roma Kuno]\n- Cabang 1: Pemerintahan\n  - Republik (509-27 SM)\n  - Kekaisaran (27 SM-476 M)\n  - Senat dan konsul\n- Cabang 2: Masyarakat\n  - Bangsawan\n  - Rakyat biasa\n  - Budak\n- Cabang 3: Pencapaian\n  - Jalan dan saluran air\n  - Sistem hukum\n  - Taktik militer"
      }
    ]
  }
];

// A2 Elementary Level - Business Final Test
export const lessonA2BusinessFinalTest: PracticalTest = {
  id: 'a2-b-final',
  title: 'Business Communication Test',
  description: 'Demonstrate your ability to communicate in business situations',
  type: 'writing',
  prompt: 'Write a short business email (5-8 sentences) to a colleague about scheduling a meeting. Include the purpose of the meeting, proposed date and time, location, and ask for confirmation.',
  criteria: [
    'Appropriate email format and structure',
    'Clear communication of meeting details',
    'Correct use of business vocabulary',
    'Proper grammar and punctuation',
    'Professional tone and politeness'
  ],
  minScore: 70
};

// A2 Elementary Level - Academic Final Test
export const lessonA2AcademicFinalTest: PracticalTest = {
  id: 'a2-a-final',
  title: 'Academic Communication Test',
  description: 'Demonstrate your ability to communicate in academic situations',
  type: 'writing',
  prompt: 'Write a short email (5-8 sentences) to your teacher explaining why you missed a class and asking about the homework assignment. Include an apology, the reason for your absence, and specific questions about what you missed.',
  criteria: [
    'Appropriate email format and structure',
    'Clear explanation of absence',
    'Correct use of academic vocabulary',
    'Proper grammar and punctuation',
    'Respectful tone and politeness'
  ],
  minScore: 70
};

// A2 Elementary Level - Business Pathway Quizzes
export const lessonA2BusinessQuizzes: LessonQuiz[] = [
  {
    id: 'a2-b-s1-quiz',
    title: 'Business Phone Calls Quiz',
    description: 'Test your knowledge of business phone call vocabulary and phrases',
    skillType: 'speaking',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a2bs1',
        question: 'How should you identify yourself when making a business phone call?',
        options: [
          'Hello, how are you?',
          'Hello, this is [your name] from [your company].',
          'Hello, can I speak to someone?',
          'Hello, I need information.'
        ],
        correctAnswer: 'Hello, this is [your name] from [your company].',
        explanation: 'When making a business phone call, you should identify yourself by stating your name and company to establish a professional context.'
      },
      {
        id: 'q2-a2bs1',
        question: 'What does "to put someone on hold" mean?',
        options: [
          'To end a call',
          'To transfer a call',
          'To ask someone to wait',
          'To call someone back later'
        ],
        correctAnswer: 'To ask someone to wait',
        explanation: '"To put someone on hold" means to ask the caller to wait temporarily while you do something else, such as checking information or speaking to another person.'
      },
      {
        id: 'q3-a2bs1',
        question: 'Which phrase would you use to answer a business phone call professionally?',
        options: [
          'Hello?',
          'Yes, who is this?',
          '[Company name], [your name] speaking. How can I help you?',
          'What do you want?'
        ],
        correctAnswer: '[Company name], [your name] speaking. How can I help you?',
        explanation: 'A professional way to answer a business phone call is to state your company name and your name, followed by an offer to help.'
      },
      {
        id: 'q4-a2bs1',
        question: 'What should you say if you need to transfer a call?',
        options: [
          'Wait a minute.',
          'One moment, please. I\'ll transfer you to [name/department].',
          'You need to speak to someone else.',
          'Call this other number instead.'
        ],
        correctAnswer: 'One moment, please. I\'ll transfer you to [name/department].',
        explanation: 'When transferring a call, it\'s polite to ask the caller to wait a moment and inform them who you are transferring them to.'
      },
      {
        id: 'q5-a2bs1',
        question: 'What should you say if you can\'t hear the caller clearly?',
        options: [
          'What? Speak up!',
          'I can\'t hear you.',
          'Could you speak up, please? I can\'t hear you very well.',
          'There\'s something wrong with your phone.'
        ],
        correctAnswer: 'Could you speak up, please? I can\'t hear you very well.',
        explanation: 'If you can\'t hear the caller clearly, it\'s polite to ask them to speak up using a phrase like "Could you speak up, please? I can\'t hear you very well."'
      }
    ]
  },
  {
    id: 'a2-b-s2-quiz',
    title: 'Business Emails Quiz',
    description: 'Test your knowledge of business email writing',
    skillType: 'writing',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a2bs2',
        question: 'What should a good email subject line be?',
        options: [
          'Long and detailed',
          'Vague and general',
          'Short and specific',
          'Attention-grabbing with exclamation marks'
        ],
        correctAnswer: 'Short and specific',
        explanation: 'A good email subject line should be short and specific, clearly indicating the purpose or content of the email.'
      },
      {
        id: 'q2-a2bs2',
        question: 'Which is an appropriate formal greeting when you know the recipient\'s name?',
        options: [
          'Hey there,',
          'Dear Sir/Madam,',
          'Dear Mr./Ms./Dr. [Last Name],',
          'Hello,'
        ],
        correctAnswer: 'Dear Mr./Ms./Dr. [Last Name],',
        explanation: 'In formal business emails, when you know the recipient\'s name, the appropriate greeting is "Dear Mr./Ms./Dr. [Last Name],".'
      },
      {
        id: 'q3-a2bs2',
        question: 'Which phrase would you use to make a polite request in a business email?',
        options: [
          'I want you to...',
          'You need to...',
          'Could you please...',
          'Do this immediately:'
        ],
        correctAnswer: 'Could you please...',
        explanation: 'To make a polite request in a business email, you should use phrases like "Could you please..." which sound respectful and not demanding.'
      },
      {
        id: 'q4-a2bs2',
        question: 'What is an appropriate closing for a formal business email?',
        options: [
          'See ya!',
          'Yours sincerely,',
          'Thanks,',
          'Bye for now,'
        ],
        correctAnswer: 'Yours sincerely,',
        explanation: '"Yours sincerely," is an appropriate formal closing for a business email when you know the recipient\'s name.'
      },
      {
        id: 'q5-a2bs2',
        question: 'What should be included in an email signature?',
        options: [
          'Only your name',
          'Your full name, position, company name, and contact information',
          'Your personal social media accounts',
          'A motivational quote'
        ],
        correctAnswer: 'Your full name, position, company name, and contact information',
        explanation: 'A professional email signature should include your full name, position/title, company name, and contact information such as phone number and email address.'
      }
    ]
  }
];

// A2 Elementary Level - Academic Pathway Quizzes
export const lessonA2AcademicQuizzes: LessonQuiz[] = [
  {
    id: 'a2-a-s1-quiz',
    title: 'Academic Presentations Quiz',
    description: 'Test your knowledge of academic presentation skills',
    skillType: 'speaking',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a2as1',
        question: 'What should you include in the introduction of an academic presentation?',
        options: [
          'Only your name',
          'A joke to make people laugh',
          'Your name, topic, and purpose of the presentation',
          'A long personal story'
        ],
        correctAnswer: 'Your name, topic, and purpose of the presentation',
        explanation: 'The introduction of an academic presentation should include your name, the topic you will discuss, and the purpose or goal of your presentation.'
      },
      {
        id: 'q2-a2as1',
        question: 'Which phrase would you use to move to the next point in your presentation?',
        options: [
          'Anyway...',
          'Now, let\'s move on to [next point].',
          'I\'m bored with this topic.',
          'Oh, I forgot to mention...'
        ],
        correctAnswer: 'Now, let\'s move on to [next point].',
        explanation: 'To transition smoothly between points in a presentation, you can use phrases like "Now, let\'s move on to [next point]."'
      },
      {
        id: 'q3-a2as1',
        question: 'How would you refer to a visual aid in your presentation?',
        options: [
          'Look at this thing here.',
          'I made this last night.',
          'As you can see in this graph...',
          'This is probably confusing for you.'
        ],
        correctAnswer: 'As you can see in this graph...',
        explanation: 'When referring to visual aids in a presentation, use clear phrases like "As you can see in this graph..." to direct the audience\'s attention.'
      },
      {
        id: 'q4-a2as1',
        question: 'Which phrase would you use to begin your conclusion?',
        options: [
          'Finally, I\'m almost done.',
          'To summarize the main points...',
          'I\'m running out of time.',
          'That\'s all I have to say.'
        ],
        correctAnswer: 'To summarize the main points...',
        explanation: 'To begin your conclusion in an academic presentation, you can use phrases like "To summarize the main points..." which signals to the audience that you are wrapping up.'
      },
      {
        id: 'q5-a2as1',
        question: 'What is an important tip for effective presentations?',
        options: [
          'Speak as quickly as possible to include more information',
          'Avoid eye contact with the audience',
          'Use complex language to sound intelligent',
          'Practice your presentation beforehand'
        ],
        correctAnswer: 'Practice your presentation beforehand',
        explanation: 'Practicing your presentation beforehand is an important tip for effective presentations as it helps you become familiar with the content, improve your delivery, and manage your time.'
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
        question: 'What is the Cornell Method of note-taking?',
        options: [
          'Writing everything the teacher says word for word',
          'Using only mind maps for all notes',
          'Dividing your page into sections for notes, questions, and summary',
          'Taking notes only on what will be on the test'
        ],
        correctAnswer: 'Dividing your page into sections for notes, questions, and summary',
        explanation: 'The Cornell Method involves dividing your page into three sections: a left column for questions or key words, a right column for notes, and a bottom section for a summary.'
      },
      {
        id: 'q2-a2as2',
        question: 'What is the main advantage of using abbreviations in note-taking?',
        options: [
          'It makes your notes look more professional',
          'It saves time',
          'It impresses your teachers',
          'It helps you memorize better'
        ],
        correctAnswer: 'It saves time',
        explanation: 'Using abbreviations in note-taking saves time, allowing you to capture more information during lectures or readings.'
      },
      {
        id: 'q3-a2as2',
        question: 'In the Outline Method, how is information organized?',
        options: [
          'In a circular pattern',
          'In complete sentences only',
          'Hierarchically with headings and subheadings',
          'Randomly as you hear it'
        ],
        correctAnswer: 'Hierarchically with headings and subheadings',
        explanation: 'The Outline Method organizes information hierarchically using headings, subheadings, and details, often with numbers, letters, or bullet points.'
      },
      {
        id: 'q4-a2as2',
        question: 'What does the symbol "→" commonly represent in notes?',
        options: [
          'And',
          'Because',
          'Leads to or results in',
          'Important'
        ],
        correctAnswer: 'Leads to or results in',
        explanation: 'In note-taking, the arrow symbol "→" commonly represents "leads to" or "results in," showing a cause-and-effect relationship.'
      },
      {
        id: 'q5-a2as2',
        question: 'What should you do with your notes soon after class?',
        options: [
          'Throw them away',
          'Review and organize them',
          'Share them with everyone',
          'Wait until the exam to look at them'
        ],
        correctAnswer: 'Review and organize them',
        explanation: 'It\'s important to review and organize your notes soon after class while the information is still fresh in your mind, which helps with understanding and retention.'
      }
    ]
  }
];

// A2 Elementary Level - Business Pathway Practical Test
export const lessonA2BusinessPracticalTest: PracticalTest = {
  id: 'a2-b-practical',
  title: 'Business Email Writing Practice',
  description: 'Demonstrate your ability to write a professional business email',
  type: 'writing',
  prompt: 'Write a business email to request information about a product or service. Your email should include a clear subject line, appropriate greeting, introduction explaining why you are writing, specific questions about the product or service, and a professional closing with your name and position. Use the vocabulary and phrases you learned in this lesson.',
  criteria: [
    'Clear and specific subject line',
    'Appropriate greeting',
    'Clear purpose statement',
    'Specific questions or requests',
    'Professional tone and language',
    'Appropriate closing',
    'Proper email signature',
    'Correct grammar and spelling'
  ],
  minScore: 70
};

// A2 Elementary Level - Academic Pathway Practical Test
export const lessonA2AcademicPracticalTest: PracticalTest = {
  id: 'a2-a-practical',
  title: 'Mini Academic Presentation',
  description: 'Demonstrate your ability to prepare and deliver a short academic presentation',
  type: 'speaking',
  prompt: 'Prepare and record a 2-minute presentation on a topic of your choice (e.g., a hobby, your hometown, or a simple scientific concept). Your presentation should include an introduction, main points with some details, and a conclusion. Use the presentation structure and phrases you learned in this lesson.',
  criteria: [
    'Clear introduction with name and topic',
    'Organized structure with main points',
    'Appropriate transition phrases',
    'Clear conclusion summarizing main points',
    'Appropriate pace and clarity',
    'Correct pronunciation',
    'Appropriate academic language',
    'Stays within the time limit (1.5-2.5 minutes)'
  ],
  minScore: 70
};