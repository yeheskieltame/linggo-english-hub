import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// A2 Elementary Level - Business Pathway Lesson Stages
const stages: LessonStage[] = [
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
        english: "Hello, this is Sarah Johnson from ABC Company. Could I speak to Mr. Chen, please?",
        indonesian: "Halo, ini Sarah Johnson dari Perusahaan ABC. Bisakah saya berbicara dengan Pak Chen?"
      },
      {
        english: "I'm calling about our meeting scheduled for tomorrow. I need to reschedule it.",
        indonesian: "Saya menelepon tentang rapat kita yang dijadwalkan untuk besok. Saya perlu menjadwalkan ulang."
      },
      {
        english: "XYZ Corporation, David speaking. How can I help you?",
        indonesian: "Korporasi XYZ, David berbicara. Bagaimana saya bisa membantu Anda?"
      },
      {
        english: "I'm afraid Ms. Williams isn't available at the moment. Can I take a message?",
        indonesian: "Maaf, Bu Williams tidak tersedia saat ini. Bisakah saya mengambil pesan?"
      }
    ]
  },
  {
    id: 'a2-b-s2',
    title: 'Business Emails',
    description: 'Learn how to write effective business emails',
    content: `In this lesson, you will learn how to write clear and professional business emails in English.

Email Structure:
1. Subject Line: Clear, concise, and specific
2. Greeting: Formal or semi-formal depending on the recipient
3. Introduction: State the purpose of your email
4. Body: Provide details and information
5. Conclusion: Include any action items or next steps
6. Closing: Professional sign-off and your name/contact information

Subject Lines:
- Keep it short (5-7 words)
- Be specific: "Meeting on Tuesday, May 10" (not just "Meeting")
- Include action items if needed: "ACTION REQUIRED: Budget Approval"

Greetings:
- Formal: "Dear Mr./Ms./Dr. [Last Name],"
- Semi-formal: "Dear [First Name],"
- When you don't know the name: "Dear Sir/Madam," or "To Whom It May Concern:"
- For a group: "Dear Team," or "Dear Colleagues,"

Introduction:
- State your purpose clearly: "I am writing to inquire about..."
- Reference previous communication: "Thank you for your email dated..."
- Be direct: "I would like to request..."

Body:
- Use short paragraphs (3-4 sentences)
- Use bullet points for lists
- Be clear and concise
- Use simple language
- Avoid slang and jargon

Conclusion:
- Summarize any action items: "Please review the attached document by Friday."
- Indicate next steps: "I look forward to discussing this further at our meeting."
- Express appreciation: "Thank you for your attention to this matter."

Closings:
- Formal: "Yours sincerely," or "Sincerely,"
- Semi-formal: "Best regards," or "Kind regards,"
- Include your name and contact information

Email Etiquette:
- Respond promptly (within 24-48 hours)
- Use proper grammar and check spelling
- Be polite and professional
- Keep emails brief and to the point
- Use CC and BCC appropriately
- Include a professional email signature

Remember that business emails create a written record. Always be professional and think carefully about your message before sending.`,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "Subject: Meeting Request: Q2 Sales Strategy - May 15\n\nDear Ms. Johnson,\n\nI am writing to request a meeting to discuss our Q2 sales strategy. Would you be available on Monday, May 15 at 10:00 AM?\n\nPlease let me know if this time works for you, or suggest an alternative.\n\nThank you for your consideration.\n\nBest regards,\nMichael Smith\nSales Manager\nABC Company\nPhone: 555-123-4567",
        indonesian: "Subjek: Permintaan Rapat: Strategi Penjualan Q2 - 15 Mei\n\nYth. Bu Johnson,\n\nSaya menulis untuk meminta rapat untuk membahas strategi penjualan Q2 kami. Apakah Anda tersedia pada hari Senin, 15 Mei pukul 10:00 pagi?\n\nMohon beri tahu saya jika waktu ini cocok untuk Anda, atau sarankan alternatif.\n\nTerima kasih atas pertimbangan Anda.\n\nSalam hormat,\nMichael Smith\nManajer Penjualan\nPerusahaan ABC\nTelepon: 555-123-4567"
      },
      {
        english: "Subject: ACTION REQUIRED: Budget Approval for Project X\n\nDear Team,\n\nPlease review and approve the attached budget for Project X by Friday, April 28.\n\nThe key points are:\n• Total budget: $50,000\n• Timeline: May-August 2023\n• Resources: 3 team members\n\nIf you have any questions, please don't hesitate to contact me.\n\nThank you for your prompt attention to this matter.\n\nKind regards,\nSarah",
        indonesian: "Subjek: TINDAKAN DIPERLUKAN: Persetujuan Anggaran untuk Proyek X\n\nYth. Tim,\n\nMohon tinjau dan setujui anggaran terlampir untuk Proyek X paling lambat Jumat, 28 April.\n\nPoin-poin utama adalah:\n• Total anggaran: $50.000\n• Jadwal: Mei-Agustus 2023\n• Sumber daya: 3 anggota tim\n\nJika Anda memiliki pertanyaan, jangan ragu untuk menghubungi saya.\n\nTerima kasih atas perhatian cepat Anda terhadap hal ini.\n\nSalam hormat,\nSarah"
      }
    ]
  }
];

// A2 Elementary Level - Business Pathway Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'a2-b-s1-quiz',
    title: 'Business Phone Calls Quiz',
    description: 'Test your knowledge of business phone call vocabulary and phrases',
    skillType: 'speaking',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a2bs1',
        type: 'multiple-choice',
        question: 'How should you answer a business phone call professionally?',
        options: [
          'Hello?',
          'Yes, who is this?',
          '[Company name], [your name] speaking. How can I help you?',
          'Hi there!'
        ],
        correctAnswer: '[Company name], [your name] speaking. How can I help you?',
        explanation: 'A professional phone greeting includes your company name and your name, followed by an offer to help.'
      },
      {
        id: 'q2-a2bs1',
        type: 'multiple-choice',
        question: 'What does "to put someone on hold" mean?',
        options: [
          'To end a call',
          'To transfer a call',
          'To ask someone to wait',
          'To call someone back later'
        ],
        correctAnswer: 'To ask someone to wait',
        explanation: 'When you put someone on hold, you ask them to wait while you do something else, such as check information or speak to another person.'
      },
      {
        id: 'q3-a2bs1',
        type: 'multiple-choice',
        question: 'Which phrase would you use to leave a message?',
        options: [
          'I\'ll call back tomorrow.',
          'Could you please tell him that I called? My number is 555-1234.',
          'Is there anything else I can help you with?',
          'I\'ll transfer you now.'
        ],
        correctAnswer: 'Could you please tell him that I called? My number is 555-1234.',
        explanation: 'When leaving a message, it\'s important to clearly state that you called and provide your contact information.'
      },
      {
        id: 'q4-a2bs1',
        type: 'multiple-choice',
        question: 'What should you say when you can\'t hear the caller clearly?',
        options: [
          'I don\'t understand you.',
          'Could you speak up, please? I can\'t hear you very well.',
          'The connection is bad.',
          'Call me back later.'
        ],
        correctAnswer: 'Could you speak up, please? I can\'t hear you very well.',
        explanation: 'This is a polite way to ask someone to speak louder when you can\'t hear them clearly on the phone.'
      },
      {
        id: 'q5-a2bs1',
        type: 'multiple-choice',
        question: 'What is an "extension" in the context of business phone calls?',
        options: [
          'A specific number for a person within a company',
          'An extra long phone call',
          'A request to speak longer',
          'A type of phone'
        ],
        correctAnswer: 'A specific number for a person within a company',
        explanation: 'An extension is a specific number assigned to an individual or department within a company\'s phone system.'
      }
    ]
  },
  {
    id: 'a2-b-s2-quiz',
    title: 'Business Emails Quiz',
    description: 'Test your knowledge of writing effective business emails',
    skillType: 'writing',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-a2bs2',
        type: 'multiple-choice',
        question: 'What should a good email subject line be?',
        options: [
          'Long and detailed',
          'Vague and general',
          'Clear, concise, and specific',
          'Written in all capital letters'
        ],
        correctAnswer: 'Clear, concise, and specific',
        explanation: 'A good email subject line should be clear, concise, and specific so the recipient immediately understands what the email is about.'
      },
      {
        id: 'q2-a2bs2',
        type: 'multiple-choice',
        question: 'Which is an appropriate formal greeting for a business email?',
        options: [
          'Hey there,',
          'Dear Mr. Johnson,',
          'Hi everybody,',
          'What\'s up?'
        ],
        correctAnswer: 'Dear Mr. Johnson,',
        explanation: 'In formal business emails, it\'s appropriate to use "Dear" followed by the recipient\'s title and last name.'
      },
      {
        id: 'q3-a2bs2',
        type: 'multiple-choice',
        question: 'What is the purpose of the introduction in a business email?',
        options: [
          'To tell a personal story',
          'To state the purpose of your email',
          'To ask about the weather',
          'To make small talk'
        ],
        correctAnswer: 'To state the purpose of your email',
        explanation: 'The introduction of a business email should clearly state why you are writing, so the recipient immediately understands the purpose.'
      },
      {
        id: 'q4-a2bs2',
        type: 'multiple-choice',
        question: 'Which is an appropriate closing for a semi-formal business email?',
        options: [
          'Love,',
          'See ya!',
          'Best regards,',
          'Yours faithfully,'
        ],
        correctAnswer: 'Best regards,',
        explanation: '"Best regards," is an appropriate semi-formal closing for business emails. It\'s professional but not overly formal.'
      },
      {
        id: 'q5-a2bs2',
        type: 'multiple-choice',
        question: 'What should you do before sending a business email?',
        options: [
          'Add as many people as possible to the CC field',
          'Use lots of exclamation marks for emphasis',
          'Check grammar and spelling',
          'Write everything in capital letters so it stands out'
        ],
        correctAnswer: 'Check grammar and spelling',
        explanation: 'Always check grammar and spelling before sending a business email. Errors can make your message look unprofessional.'
      }
    ]
  }
];

// A2 Elementary Level - Business Final Test
const finalTest: PracticalTest = {
  id: 'a2-b-final',
  title: 'Business Communication Test',
  description: 'Demonstrate your ability to communicate in business situations through multiple skills',
  type: 'writing', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your business communication skills at the A2 level.',
  criteria: [
    'Appropriate business communication format',
    'Clear communication of information',
    'Correct use of business vocabulary',
    'Proper grammar and punctuation',
    'Professional tone and politeness'
  ],
  minScore: 70,
  sections: [
    {
      id: 'a2-b-final-s1',
      title: 'Business Email Writing',
      type: 'writing',
      description: 'Write a professional business email',
      prompt: 'Write a short business email (5-8 sentences) to a colleague about scheduling a meeting. Include the purpose of the meeting, proposed date and time, location, and ask for confirmation.',
      criteria: [
        'Appropriate email format and structure',
        'Clear communication of meeting details',
        'Correct use of business vocabulary',
        'Proper grammar and punctuation',
        'Professional tone and politeness'
      ],
      weight: 40
    },
    {
      id: 'a2-b-final-s2',
      title: 'Business Phone Call',
      type: 'speaking',
      description: 'Demonstrate your ability to handle a business phone call',
      prompt: 'Record a 1-2 minute business phone call where you call a colleague to discuss a project update. Introduce yourself properly, explain the purpose of your call, ask at least two questions about the project status, and end the call professionally.',
      criteria: [
        'Appropriate phone call opening and closing',
        'Clear explanation of call purpose',
        'Proper use of business phone vocabulary',
        'Appropriate questions and responses',
        'Professional tone and politeness'
      ],
      weight: 30
    },
    {
      id: 'a2-b-final-s3',
      title: 'Business Vocabulary Comprehension',
      type: 'reading',
      description: 'Demonstrate understanding of business vocabulary and concepts',
      prompt: 'Read the short business memo below and answer the questions that follow. Focus on understanding the key information and business terminology used.',
      text: `MEMO

TO: All Sales Department Staff
FROM: Jennifer Lee, Sales Director
DATE: July 15, 2023
SUBJECT: Quarterly Sales Meeting and New Product Launch

The quarterly sales meeting will be held on Friday, July 28, 2023, from 9:00 AM to 12:00 PM in the Main Conference Room. Attendance is mandatory for all sales representatives and team leaders.

Agenda:
1. Q2 Sales Performance Review (9:00 - 9:45 AM)
2. Introduction of New CRM Software (9:45 - 10:30 AM)
3. Coffee Break (10:30 - 10:45 AM)
4. New Product Launch: XTech Pro Series (10:45 - 11:30 AM)
5. Q&A and Next Steps (11:30 - 12:00 PM)

Please note:
- Bring your laptops for the CRM software demonstration
- Review your Q2 sales reports before the meeting
- Prepare questions about the new product line
- Sales targets for Q3 will be distributed at the meeting

Marketing materials for the XTech Pro Series will be available after the meeting. The official product launch to customers is scheduled for August 15.

If you have any questions, please contact my assistant, Mark Wilson, at extension 4567 or mark.wilson@company.com.`,
      imageUrl: '/images/a2-business-memo.png',
      criteria: [
        'Accurate comprehension of business text',
        'Understanding of business vocabulary',
        'Ability to identify key information',
        'Recognition of memo format and purpose'
      ],
      weight: 30
    }
  ]
};

// Export the complete lesson structure
export const a2BusinessLesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};