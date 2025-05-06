import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// B1 Intermediate Level - Business Pathway Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'b1-b-s1',
    title: 'Business Meeting Skills',
    description: 'Learn essential vocabulary and phrases for participating in business meetings',
    content: `In this lesson, you will learn how to effectively participate in business meetings in English.

Types of Business Meetings:
- Status update meetings: Regular meetings to discuss progress
- Decision-making meetings: Meetings to make important choices
- Problem-solving meetings: Meetings to address specific issues
- Brainstorming meetings: Meetings to generate new ideas
- One-on-one meetings: Meetings between two people
- Team meetings: Meetings with your immediate team
- Client meetings: Meetings with customers or clients

Meeting Preparation:
- Review the agenda beforehand
- Prepare any necessary materials or presentations
- Research topics that will be discussed
- Think about questions you might be asked
- Arrive a few minutes early

Meeting Vocabulary:
- Agenda: A list of topics to be discussed
- Minutes: A written record of what was discussed and decided
- Action items: Tasks assigned during the meeting
- AOB (Any Other Business): Additional topics not on the agenda
- Chair/Chairperson: The person leading the meeting
- Attendees/Participants: People at the meeting

Starting a Meeting:
- "Good morning/afternoon everyone. Shall we begin?"
- "Thank you all for coming today."
- "Let's get started with the first item on the agenda."
- "The purpose of today's meeting is to discuss..."
- "Before we begin, let's go around the table and introduce ourselves."

During a Meeting:
- Giving opinions: "In my opinion..." / "I think that..." / "From my perspective..."
- Agreeing: "I completely agree with..." / "That's a good point." / "Exactly."
- Disagreeing politely: "I understand your point, however..." / "I see it differently because..." / "I'm not sure I agree with that."
- Asking for clarification: "Could you elaborate on that?" / "What exactly do you mean by...?" / "Could you give an example?"
- Making suggestions: "I suggest that we..." / "What if we...?" / "Have we considered...?"
- Interrupting politely: "Sorry to interrupt, but..." / "If I could just add something..." / "Excuse me, may I comment on that?"

Ending a Meeting:
- Summarizing: "To summarize the main points discussed today..."
- Confirming action items: "So, John will prepare the report by Friday, and Sarah will contact the client."
- Setting next meeting: "Let's schedule our next meeting for [date/time]."
- Thanking participants: "Thank you all for your contributions today."
- Closing: "If there's nothing else to discuss, we can end the meeting here."

Virtual Meeting Etiquette:
- Test your technology before the meeting
- Mute your microphone when not speaking
- Use the chat function for questions or comments
- Be aware of your background and appearance
- Minimize distractions in your environment

Remember that effective meetings require active participation and good communication skills. Being prepared and respectful will help make meetings more productive.`,
    videoId: 'qJKzdtBz7Io',
    examples: [
      {
        english: "Good morning everyone. The purpose of today's meeting is to discuss our quarterly sales results and set targets for the next quarter.",
        indonesian: "Selamat pagi semua. Tujuan rapat hari ini adalah untuk membahas hasil penjualan kuartalan kita dan menetapkan target untuk kuartal berikutnya."
      },
      {
        english: "I understand your concern about the timeline, however, I think we need to prioritize quality over speed in this case.",
        indonesian: "Saya memahami kekhawatiran Anda tentang jadwal, namun, saya pikir kita perlu memprioritaskan kualitas daripada kecepatan dalam kasus ini."
      },
      {
        english: "Could you elaborate on the marketing strategy you're proposing? I'm not clear on how it will target our key demographic.",
        indonesian: "Bisakah Anda menjelaskan lebih detail tentang strategi pemasaran yang Anda usulkan? Saya tidak jelas bagaimana itu akan menargetkan demografi utama kita."
      },
      {
        english: "To summarize, we've agreed to launch the new product in May, increase our marketing budget by 15%, and review progress in two weeks. Does everyone agree with these action items?",
        indonesian: "Untuk merangkum, kita telah sepakat untuk meluncurkan produk baru pada bulan Mei, meningkatkan anggaran pemasaran sebesar 15%, dan meninjau kemajuan dalam dua minggu. Apakah semua orang setuju dengan item tindakan ini?"
      }
    ]
  },
  {
    id: 'b1-b-s2',
    title: 'Business Presentations',
    description: 'Learn how to create and deliver effective business presentations',
    content: `In this lesson, you will learn how to create and deliver effective business presentations in English.

Presentation Structure:
1. Introduction
   - Greet the audience
   - Introduce yourself and your role
   - State the purpose of your presentation
   - Outline what you will cover
   - Explain when questions will be taken

2. Main Content
   - Organize information logically
   - Use clear transitions between sections
   - Support main points with evidence, examples, or data
   - Use visual aids effectively
   - Keep content relevant to your purpose

3. Conclusion
   - Summarize key points
   - Restate the main message
   - Provide recommendations or next steps
   - Thank the audience
   - Invite questions

Presentation Language:
- Introduction phrases:
  * "Good morning/afternoon everyone."
  * "Today, I'm going to talk about..."
  * "My presentation is divided into three parts..."
  * "I'll be covering the following points..."
  * "Please feel free to ask questions at the end."

- Transition phrases:
  * "Now, let's move on to..."
  * "The next point I'd like to discuss is..."
  * "Having looked at X, let's now consider Y."
  * "This brings us to the question of..."
  * "Let me now turn to..."

- Visual aid phrases:
  * "As you can see on this slide..."
  * "This graph shows..."
  * "Looking at this chart, we can see that..."
  * "This diagram illustrates how..."
  * "The figures here represent..."

- Conclusion phrases:
  * "To conclude/sum up..."
  * "Let me summarize the main points..."
  * "Based on what we've discussed, I recommend..."
  * "Thank you for your attention."
  * "I'm now happy to answer any questions."

Delivery Tips:
- Body language:
  * Stand straight and maintain good posture
  * Make eye contact with different audience members
  * Use natural hand gestures to emphasize points
  * Move around the space naturally (if appropriate)
  * Smile and show enthusiasm

- Voice:
  * Speak clearly and at an appropriate volume
  * Vary your tone to maintain interest
  * Control your pace - not too fast, not too slow
  * Pause after important points
  * Practice pronunciation of difficult terms

- Handling questions:
  * Listen carefully to the entire question
  * Thank the person for their question
  * Answer concisely and directly
  * If you don't know, say so honestly
  * Ask if your answer was satisfactory

Visual Aids:
- Keep slides simple and uncluttered
- Use large, readable fonts
- Include relevant images, charts, or graphs
- Limit text (6x6 rule: max 6 bullet points, max 6 words each)
- Ensure visuals support your message, not distract from it

Remember that preparation is key to a successful presentation. Practice your delivery multiple times, prepare for potential questions, and check all technology in advance.`,
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    examples: [
      {
        english: "Good morning everyone. Today, I'm going to present our quarterly sales results and discuss our strategy for the upcoming quarter. My presentation is divided into three parts: first, I'll review our performance; second, I'll analyze market trends; and finally, I'll propose our strategy moving forward.",
        indonesian: "Selamat pagi semua. Hari ini, saya akan mempresentasikan hasil penjualan kuartalan kami dan membahas strategi kami untuk kuartal mendatang. Presentasi saya dibagi menjadi tiga bagian: pertama, saya akan meninjau kinerja kami; kedua, saya akan menganalisis tren pasar; dan akhirnya, saya akan mengusulkan strategi kami ke depan."
      },
      {
        english: "As you can see on this slide, our sales increased by 15% compared to the same period last year. This graph shows the monthly breakdown, with the strongest performance in March.",
        indonesian: "Seperti yang Anda lihat pada slide ini, penjualan kami meningkat sebesar 15% dibandingkan dengan periode yang sama tahun lalu. Grafik ini menunjukkan rincian bulanan, dengan kinerja terkuat pada bulan Maret."
      },
      {
        english: "Now, let's move on to the challenges we're facing in the current market. The main issues are increased competition and changing customer preferences.",
        indonesian: "Sekarang, mari kita lanjutkan ke tantangan yang kita hadapi di pasar saat ini. Masalah utamanya adalah peningkatan persaingan dan perubahan preferensi pelanggan."
      },
      {
        english: "To conclude, I recommend that we focus on three key areas: expanding our online presence, developing new product lines, and improving customer service. Thank you for your attention. I'm now happy to answer any questions you may have.",
        indonesian: "Sebagai kesimpulan, saya merekomendasikan agar kita fokus pada tiga area utama: memperluas kehadiran online kita, mengembangkan lini produk baru, dan meningkatkan layanan pelanggan. Terima kasih atas perhatian Anda. Saya sekarang siap menjawab pertanyaan yang mungkin Anda miliki."
      }
    ]
  }
];

// B1 Intermediate Level - Business Pathway Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'b1-b-s1-quiz',
    title: 'Business Meeting Skills Quiz',
    description: 'Test your knowledge of business meeting vocabulary and phrases',
    skillType: 'speaking',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b1bs1',
        type: 'multiple-choice',
        question: 'What is an agenda in a business meeting?',
        options: [
          'A list of people attending the meeting',
          'The room where the meeting is held',
          'A list of topics to be discussed',
          'The written record of what was discussed'
        ],
        correctAnswer: 'A list of topics to be discussed',
        explanation: 'An agenda is a list of topics or items to be discussed during a meeting. It helps keep the meeting organized and on track.'
      },
      {
        id: 'q2-b1bs1',
        type: 'multiple-choice',
        question: 'Which phrase would you use to express disagreement politely in a meeting?',
        options: [
          'That\'s a terrible idea.',
          'You\'re completely wrong about that.',
          'I understand your point, however, I have a different view on this.',
          'I don\'t agree with anything you just said.'
        ],
        correctAnswer: 'I understand your point, however, I have a different view on this.',
        explanation: 'The phrase "I understand your point, however, I have a different view on this" acknowledges the other person\'s perspective while politely introducing your disagreement.'
      },
      {
        id: 'q3-b1bs1',
        type: 'multiple-choice',
        question: 'What are "minutes" in the context of a business meeting?',
        options: [
          'The duration of the meeting',
          'A written record of what was discussed and decided',
          'Short breaks during the meeting',
          'The time allocated for each agenda item'
        ],
        correctAnswer: 'A written record of what was discussed and decided',
        explanation: 'Minutes are the official written record of a meeting, documenting what was discussed, decisions made, and actions to be taken.'
      },
      {
        id: 'q4-b1bs1',
        type: 'multiple-choice',
        question: 'Which phrase would you use to make a suggestion in a meeting?',
        options: [
          'You should do this.',
          'I suggest that we consider increasing our marketing budget.',
          'This is what we\'re going to do.',
          'Does anyone have any ideas?'
        ],
        correctAnswer: 'I suggest that we consider increasing our marketing budget.',
        explanation: 'The phrase "I suggest that we..." is a polite and constructive way to propose an idea or course of action in a meeting.'
      },
      {
        id: 'q5-b1bs1',
        type: 'multiple-choice',
        question: 'What is the best way to end a business meeting?',
        options: [
          'Simply stop talking and leave the room',
          'Say "That\'s all" and close your notebook',
          'Summarize key points, confirm action items, and thank participants',
          'Ask if anyone has anything else to say and wait in silence'
        ],
        correctAnswer: 'Summarize key points, confirm action items, and thank participants',
        explanation: 'A proper meeting conclusion includes summarizing what was discussed, confirming who is responsible for which tasks (action items), and thanking everyone for their participation.'
      }
    ]
  },
  {
    id: 'b1-b-s2-quiz',
    title: 'Business Presentations Quiz',
    description: 'Test your knowledge of creating and delivering effective business presentations',
    skillType: 'speaking',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b1bs2',
        type: 'multiple-choice',
        question: 'What should you include in the introduction of a business presentation?',
        options: [
          'A detailed explanation of all your points',
          'A joke to make everyone laugh',
          'Your name, role, purpose of the presentation, and outline',
          'A list of everyone in the audience'
        ],
        correctAnswer: 'Your name, role, purpose of the presentation, and outline',
        explanation: 'A good introduction should include who you are, your role, the purpose of your presentation, and a brief outline of what you will cover.'
      },
      {
        id: 'q2-b1bs2',
        type: 'multiple-choice',
        question: 'Which phrase would you use to transition to a new topic in your presentation?',
        options: [
          'Anyway...',
          'Now, let\'s move on to discuss our marketing strategy.',
          'I\'m bored with this topic.',
          'Does anyone have questions before I continue?'
        ],
        correctAnswer: 'Now, let\'s move on to discuss our marketing strategy.',
        explanation: 'The phrase "Now, let\'s move on to..." is a clear and professional way to transition between topics in a presentation.'
      },
      {
        id: 'q3-b1bs2',
        type: 'multiple-choice',
        question: 'What is the 6x6 rule for presentation slides?',
        options: [
          'Each presentation should have exactly 6 slides with 6 images each',
          'Maximum 6 bullet points per slide, maximum 6 words per bullet point',
          'Presentations should last 6 minutes with 6 seconds per slide',
          'Use 6 colors and 6 different fonts for visual interest'
        ],
        correctAnswer: 'Maximum 6 bullet points per slide, maximum 6 words per bullet point',
        explanation: 'The 6x6 rule suggests keeping slides simple with no more than 6 bullet points per slide and no more than 6 words per bullet point to avoid overwhelming the audience.'
      },
      {
        id: 'q4-b1bs2',
        type: 'multiple-choice',
        question: 'What should you do when someone asks a question during your presentation?',
        options: [
          'Ignore it and continue with your presentation',
          'Tell them to wait until the end',
          'Listen carefully to the entire question before responding',
          'Answer quickly and move on immediately'
        ],
        correctAnswer: 'Listen carefully to the entire question before responding',
        explanation: 'Listening carefully to the entire question before responding is most important when handling questions after a presentation. This ensures you understand what\'s being asked and can provide a relevant, thoughtful response.'
      },
      {
        id: 'q5-b1bs2',
        type: 'multiple-choice',
        question: 'What is effective body language during a presentation?',
        options: [
          'Standing completely still behind the podium',
          'Maintaining eye contact with only one person',
          'Using natural hand gestures and making eye contact with different audience members',
          'Crossing your arms to appear authoritative'
        ],
        correctAnswer: 'Using natural hand gestures and making eye contact with different audience members',
        explanation: 'Effective body language includes using natural hand gestures to emphasize points and making eye contact with different audience members to engage the entire room.'
      }
    ]
  }
];

// B1 Intermediate Level - Business Final Test
const finalTest: PracticalTest = {
  id: 'b1-b-final',
  title: 'Business Meeting Skills Test',
  description: 'Demonstrate your ability to communicate effectively in business meetings through multiple skills',
  type: 'speaking', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your business meeting skills at the B1 level.',
  criteria: [
    'Clear organization and structure',
    'Appropriate use of business vocabulary',
    'Effective communication techniques',
    'Proper grammar and language use',
    'Professional tone and confidence'
  ],
  minScore: 70,
  sections: [
    {
      id: 'b1-b-final-s1',
      title: 'Business Presentation',
      type: 'speaking',
      description: 'Deliver a presentation for a business meeting',
      prompt: 'Record a 2-minute presentation for a business meeting. Present a new product or service idea to your team. Include a brief introduction, key features or benefits, potential challenges, and conclude with next steps or recommendations.',
      criteria: [
        'Clear organization and structure',
        'Appropriate use of business vocabulary',
        'Effective presentation techniques',
        'Proper grammar and pronunciation',
        'Professional tone and confidence'
      ],
      weight: 40
    },
    {
      id: 'b1-b-final-s2',
      title: 'Meeting Minutes',
      type: 'writing',
      description: 'Write minutes for a business meeting',
      prompt: 'Write meeting minutes (150-200 words) for a business meeting about quarterly sales results. Include the date, attendees, main discussion points, decisions made, and action items assigned to team members. Use appropriate format and language for business meeting minutes.',
      criteria: [
        'Appropriate meeting minutes format',
        'Clear and concise summary of key points',
        'Accurate recording of decisions and action items',
        'Proper business vocabulary and expressions',
        'Correct grammar and professional tone'
      ],
      weight: 30
    },
    {
      id: 'b1-b-final-s3',
      title: 'Meeting Participation',
      type: 'listening',
      description: 'Demonstrate understanding of business meeting discussions',
      prompt: 'Listen to the recording of a business meeting discussion about marketing strategy. Then answer questions about the main points discussed, different opinions expressed, and decisions made.',
      audioUrl: '/audio/b1-business-meeting.mp3',
      criteria: [
        'Accurate comprehension of meeting content',
        'Understanding of business terminology',
        'Recognition of different opinions and perspectives',
        'Identification of key decisions and action items'
      ],
      weight: 30
    }
  ]
};

// Export the complete lesson structure
export const b1BusinessLesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};