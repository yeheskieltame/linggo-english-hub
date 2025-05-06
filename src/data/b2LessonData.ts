import { LessonStage, LessonQuiz, PracticalTest } from '@/types/lesson';

// B2 Upper Intermediate Level - Business Pathway Lesson
export const lessonB2BusinessStages: LessonStage[] = [
  {
    id: 'b2-b-s1',
    title: 'Negotiation Skills',
    description: 'Learn effective strategies and language for business negotiations',
    content: `Negotiation is a critical skill in business. In this lesson, you will learn effective strategies and language for successful business negotiations.

Preparation for negotiations:
- Research the other party (company, culture, negotiation style)
- Define your objectives (ideal outcome, minimum acceptable outcome, BATNA - Best Alternative To a Negotiated Agreement)
- Anticipate the other party's objectives and concerns
- Prepare supporting data and documentation
- Plan your concessions and trade-offs

Negotiation strategies:
1. Win-Win (Collaborative): Seek solutions that benefit both parties
2. Competitive: Focus on achieving your goals, potentially at the other's expense
3. Compromise: Both parties give up something to reach agreement
4. Accommodating: Prioritize the relationship over the outcome
5. Avoiding: Postpone or withdraw from the negotiation

Key negotiation phases:
1. Opening: Establish rapport and set the tone
2. Exploration: Exchange information and identify interests
3. Bargaining: Make offers and counteroffers
4. Closing: Finalize the agreement and next steps

Useful negotiation language:
- Opening: "I appreciate the opportunity to discuss this with you."
- Exploring interests: "What are your main concerns regarding...?"
- Making proposals: "We propose the following terms..."
- Seeking clarification: "Could you elaborate on that point?"
- Expressing disagreement: "I understand your position, but we see it differently because..."
- Making concessions: "We're willing to adjust our position on X if you can be flexible on Y."
- Summarizing: "Let me make sure I understand what we've agreed to so far."
- Closing: "I think we've reached a fair agreement that works for both parties."

Cultural considerations:
- Communication styles (direct vs. indirect)
- Attitude toward time (punctuality, pace of negotiations)
- Decision-making processes (individual vs. group)
- Importance of relationships vs. transactions
- Formality and protocol

Remember that successful negotiation is not about "winning" at all costs, but about finding solutions that meet the needs of all parties involved.`,
    videoId: 'pjlPgJ1wBdM',
    examples: [
      {
        english: "I understand your concern about the delivery timeline. If we can agree on a 10% deposit today, we could prioritize your order and guarantee delivery within three weeks.",
        indonesian: "Saya memahami kekhawatiran Anda tentang jadwal pengiriman. Jika kita dapat menyepakati deposit 10% hari ini, kami dapat memprioritaskan pesanan Anda dan menjamin pengiriman dalam tiga minggu."
      },
      {
        english: "While we can't meet your target price of $50 per unit, we could offer $55 per unit with free shipping and a 2-year warranty extension.",
        indonesian: "Meskipun kami tidak dapat memenuhi harga target Anda sebesar $50 per unit, kami dapat menawarkan $55 per unit dengan pengiriman gratis dan perpanjangan garansi 2 tahun."
      },
      {
        english: "Let me summarize what we've agreed to so far: a 12-month contract with quarterly reviews, pricing at $10,000 per month, and a 30-day notice period for any changes.",
        indonesian: "Izinkan saya merangkum apa yang telah kita sepakati sejauh ini: kontrak 12 bulan dengan peninjauan triwulanan, harga $10.000 per bulan, dan periode pemberitahuan 30 hari untuk setiap perubahan."
      },
      {
        english: "I think we need to take a step back and focus on our shared interests. Both our companies want to establish a long-term partnership that's profitable for everyone involved.",
        indonesian: "Saya pikir kita perlu mundur selangkah dan fokus pada kepentingan bersama kita. Kedua perusahaan kita ingin membangun kemitraan jangka panjang yang menguntungkan bagi semua pihak yang terlibat."
      }
    ]
  },
  {
    id: 'b2-b-s2',
    title: 'Managing Teams',
    description: 'Learn effective strategies for leading and managing teams in a business context',
    content: `Effective team management is crucial for business success. In this lesson, you will learn strategies and language for leading and managing teams in a professional environment.

Key aspects of team management:
1. Team formation and development
   - Forming: Team members get to know each other
   - Storming: Conflicts emerge as people assert themselves
   - Norming: Team establishes rules and standards
   - Performing: Team works effectively toward goals
   - Adjourning: Team completes project or dissolves

2. Setting clear expectations
   - Defining roles and responsibilities
   - Establishing goals and objectives (SMART: Specific, Measurable, Achievable, Relevant, Time-bound)
   - Creating performance standards
   - Communicating deadlines and deliverables

3. Communication strategies
   - Regular team meetings
   - One-on-one check-ins
   - Written updates and documentation
   - Open-door policy
   - Active listening

4. Providing feedback
   - Specific and actionable
   - Balanced (positive and constructive)
   - Timely and regular
   - Private for criticism, public for praise
   - Focused on behavior, not personality

5. Motivating team members
   - Recognizing achievements
   - Providing growth opportunities
   - Aligning tasks with interests and strengths
   - Creating a positive work environment
   - Offering appropriate incentives

6. Managing conflicts
   - Addressing issues promptly
   - Focusing on issues, not personalities
   - Encouraging direct communication
   - Finding win-win solutions
   - Knowing when to intervene

7. Delegating effectively
   - Matching tasks to skills and development needs
   - Providing clear instructions
   - Granting appropriate authority
   - Being available for support
   - Following up without micromanaging

Remember that effective team management requires adaptability. Different teams and situations may require different approaches.`,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "I'd like to clarify everyone's roles for this project. Sarah, you'll be responsible for client communication and requirements gathering. Michael, you'll lead the technical implementation. Elena, you'll oversee quality assurance and testing.",
        indonesian: "Saya ingin mengklarifikasi peran masing-masing untuk proyek ini. Sarah, Anda akan bertanggung jawab untuk komunikasi klien dan pengumpulan persyaratan. Michael, Anda akan memimpin implementasi teknis. Elena, Anda akan mengawasi jaminan kualitas dan pengujian."
      },
      {
        english: "I've noticed that you've been consistently exceeding your targets this quarter. Your attention to detail and proactive approach with clients has really contributed to the team's success. Keep up the excellent work.",
        indonesian: "Saya telah memperhatikan bahwa Anda telah secara konsisten melampaui target Anda kuartal ini. Perhatian Anda terhadap detail dan pendekatan proaktif dengan klien benar-benar berkontribusi pada keberhasilan tim. Pertahankan kerja yang sangat baik."
      },
      {
        english: "I understand there's been some tension between the marketing and development teams regarding the project timeline. Let's schedule a meeting to discuss everyone's concerns and find a solution that works for both teams.",
        indonesian: "Saya memahami telah ada beberapa ketegangan antara tim pemasaran dan pengembangan mengenai jadwal proyek. Mari kita jadwalkan pertemuan untuk membahas kekhawatiran semua orang dan menemukan solusi yang berfungsi untuk kedua tim."
      },
      {
        english: "For our next project, I'd like to implement a new approach to our weekly updates. Instead of lengthy email reports, let's have brief daily stand-ups and a more detailed weekly meeting. This should improve our communication and help us identify issues earlier.",
        indonesian: "Untuk proyek kita berikutnya, saya ingin menerapkan pendekatan baru untuk pembaruan mingguan kita. Alih-alih laporan email yang panjang, mari kita adakan stand-up harian yang singkat dan pertemuan mingguan yang lebih detail. Ini akan meningkatkan komunikasi kita dan membantu kita mengidentifikasi masalah lebih awal."
      }
    ]
  }
];

// B2 Upper Intermediate Level - Academic Pathway Lesson
export const lessonB2AcademicStages: LessonStage[] = [
  {
    id: 'b2-a-s1',
    title: 'Critical Thinking in Academic Contexts',
    description: 'Develop advanced critical thinking skills for academic analysis and discussion',
    content: `Critical thinking is essential for success in academic contexts. In this lesson, you will learn how to develop and apply critical thinking skills in your academic work.

What is critical thinking?
Critical thinking is the ability to analyze information objectively, evaluate evidence, and form reasoned judgments. It involves questioning assumptions, identifying biases, and considering multiple perspectives.

Key components of critical thinking:
1. Analysis: Breaking down complex information into parts
2. Evaluation: Assessing the credibility and relevance of information
3. Inference: Drawing logical conclusions based on evidence
4. Interpretation: Understanding the significance of information
5. Explanation: Clearly articulating your reasoning
6. Self-regulation: Reflecting on and improving your thinking process

Critical thinking questions to ask:
- What is the main claim or argument?
- What evidence supports this claim?
- Is the evidence reliable and sufficient?
- Are there any logical fallacies or flaws in reasoning?
- What assumptions underlie this argument?
- What alternative perspectives exist?
- What are the implications of this argument?

Common logical fallacies to identify:
- Ad hominem: Attacking the person rather than their argument
- Appeal to authority: Accepting a claim solely based on the source
- False dichotomy: Presenting only two options when more exist
- Hasty generalization: Drawing conclusions from insufficient evidence
- Post hoc fallacy: Assuming that because B followed A, A caused B
- Straw man: Misrepresenting an opponent's argument to make it easier to attack

Applying critical thinking in academic contexts:
1. Reading academic texts
   - Identify the author's main argument and supporting points
   - Evaluate the quality and relevance of evidence
   - Consider how the text relates to other works in the field
   - Note any limitations or gaps in the argument

2. Writing academic papers
   - Develop a clear, focused thesis based on evidence
   - Consider counterarguments and address them
   - Use evidence selectively and appropriately
   - Acknowledge limitations in your own argument

3. Participating in academic discussions
   - Listen actively to others' perspectives
   - Ask probing questions that deepen understanding
   - Respectfully challenge unsupported claims
   - Be open to revising your views based on new evidence

Language for critical analysis:
- "The author argues that... however, this overlooks..."
- "While X presents compelling evidence for..., it fails to address..."
- "This interpretation is problematic because..."
- "A more nuanced understanding would consider..."
- "The strength of this argument lies in..., but its weakness is..."

Remember that critical thinking is not about being negative or critical in the everyday sense. It's about thoughtful, reasoned evaluation that leads to deeper understanding.`,
    videoId: 'HnJ1bqXUnIM',
    examples: [
      {
        english: "The author argues that economic globalization has primarily benefited developed nations. However, this perspective overlooks significant evidence of poverty reduction in countries like China and India, where hundreds of millions have risen above the poverty line since their integration into the global economy.",
        indonesian: "Penulis berpendapat bahwa globalisasi ekonomi terutama menguntungkan negara-negara maju. Namun, perspektif ini mengabaikan bukti signifikan pengurangan kemiskinan di negara-negara seperti China dan India, di mana ratusan juta orang telah naik di atas garis kemiskinan sejak integrasi mereka ke dalam ekonomi global."
      },
      {
        english: "While the study presents compelling evidence for the correlation between screen time and reduced attention spans in adolescents, it fails to address potential confounding variables such as sleep quality, physical activity levels, and pre-existing attention difficulties. A more robust analysis would control for these factors.",
        indonesian: "Meskipun studi ini menyajikan bukti yang meyakinkan tentang korelasi antara waktu layar dan rentang perhatian yang berkurang pada remaja, studi ini gagal mengatasi variabel perancu potensial seperti kualitas tidur, tingkat aktivitas fisik, dan kesulitan perhatian yang sudah ada sebelumnya. Analisis yang lebih kuat akan mengontrol faktor-faktor ini."
      },
      {
        english: "The claim that standardized testing is the most objective measure of student achievement relies on the assumption that all students have equal access to educational resources and test preparation. This assumption is problematic because it ignores well-documented disparities in school funding, teacher quality, and socioeconomic factors that significantly impact test performance.",
        indonesian: "Klaim bahwa tes standar adalah ukuran paling objektif dari prestasi siswa bergantung pada asumsi bahwa semua siswa memiliki akses yang sama ke sumber daya pendidikan dan persiapan tes. Asumsi ini bermasalah karena mengabaikan disparitas yang terdokumentasi dengan baik dalam pendanaan sekolah, kualitas guru, dan faktor sosial ekonomi yang secara signifikan memengaruhi kinerja tes."
      },
      {
        english: "A more nuanced understanding of climate change policy would consider not only environmental impacts but also economic transitions, social equity, and technological innovation. By examining these interconnected dimensions, we can develop more comprehensive and effective approaches to addressing this complex global challenge.",
        indonesian: "Pemahaman yang lebih bernuansa tentang kebijakan perubahan iklim akan mempertimbangkan tidak hanya dampak lingkungan tetapi juga transisi ekonomi, keadilan sosial, dan inovasi teknologi. Dengan memeriksa dimensi yang saling berhubungan ini, kita dapat mengembangkan pendekatan yang lebih komprehensif dan efektif untuk mengatasi tantangan global yang kompleks ini."
      }
    ]
  },
  {
    id: 'b2-a-s2',
    title: 'Academic Presentations and Debates',
    description: 'Master the skills needed for effective academic presentations and participation in debates',
    content: `Academic presentations and debates are important ways to communicate ideas and engage with others in academic settings. In this lesson, you will learn how to prepare and deliver effective academic presentations and participate in formal debates.

Academic Presentations:

Structure of an academic presentation:
1. Introduction
   - Greeting and self-introduction
   - Topic overview and significance
   - Clear thesis or main argument
   - Outline of the presentation

2. Main body
   - Logical organization of points
   - Supporting evidence (data, research, examples)
   - Visual aids to enhance understanding
   - Transitions between sections

3. Conclusion
   - Summary of key points
   - Restatement of main argument
   - Implications or recommendations
   - Thank audience and invite questions

Delivery techniques:
- Maintain appropriate pace and volume
- Use pauses effectively for emphasis
- Vary your tone to maintain interest
- Make eye contact with different parts of the audience
- Use gestures naturally to reinforce points
- Manage time effectively

Visual aids:
- Keep slides simple and uncluttered
- Use visuals that enhance understanding (graphs, diagrams, images)
- Ensure text is readable (font size, contrast)
- Don't read directly from slides
- Practice with your visual aids before presenting

Handling questions:
- Listen carefully to the entire question
- Thank the questioner
- Respond concisely and directly
- Admit if you don't know the answer
- Redirect to relevant research if appropriate
- Maintain a respectful tone even with challenging questions

Academic Debates:

Structure of a formal academic debate:
1. Opening statements (affirmative team, then negative team)
2. Rebuttals (alternating between teams)
3. Cross-examination (teams question each other)
4. Closing arguments (negative team, then affirmative team)

Preparing for a debate:
- Research both sides of the issue thoroughly
- Anticipate opposing arguments
- Gather strong evidence to support your position
- Prepare clear, concise speaking notes
- Practice your delivery and timing

Effective argumentation:
- Make clear, specific claims
- Support claims with relevant evidence
- Explain the reasoning that connects evidence to claims
- Address counterarguments directly
- Avoid logical fallacies
- Use rhetorical techniques effectively

Language for debates:
- "The evidence clearly demonstrates that..."
- "Our opponents claim that..., however..."
- "This argument fails to consider..."
- "A critical flaw in this reasoning is..."
- "When we examine the research on this issue..."
- "The implications of this position are..."

Remember that both presentations and debates are about communicating ideas effectively, not just displaying knowledge. Focus on clarity, coherence, and engagement with your audience.`,
    imageUrl: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "Good morning everyone. Today I'll be presenting my research on the impact of microplastics on marine ecosystems. This topic is significant because microplastic pollution has increased dramatically in recent decades, with potentially far-reaching consequences for ocean health and food security. My presentation will cover three main areas: first, the sources and distribution of microplastics in marine environments; second, their effects on marine organisms; and finally, potential mitigation strategies.",
        indonesian: "Selamat pagi semuanya. Hari ini saya akan mempresentasikan penelitian saya tentang dampak mikroplastik pada ekosistem laut. Topik ini penting karena polusi mikroplastik telah meningkat secara dramatis dalam beberapa dekade terakhir, dengan konsekuensi yang potensial luas untuk kesehatan laut dan ketahanan pangan. Presentasi saya akan mencakup tiga area utama: pertama, sumber dan distribusi mikroplastik di lingkungan laut; kedua, efeknya pada organisme laut; dan akhirnya, strategi mitigasi potensial."
      },
      {
        english: "As you can see from this graph, concentrations of microplastics are particularly high in coastal areas near urban centers. This suggests that urban runoff and wastewater discharge are significant contributors to marine microplastic pollution. The red areas indicate hotspots where concentrations exceed 100 particles per cubic meter of seawater, which is well above the threshold associated with negative impacts on marine life.",
        indonesian: "Seperti yang Anda lihat dari grafik ini, konsentrasi mikroplastik sangat tinggi di daerah pesisir dekat pusat perkotaan. Ini menunjukkan bahwa limpasan perkotaan dan pembuangan air limbah adalah kontributor signifikan terhadap polusi mikroplastik laut. Area merah menunjukkan hotspot di mana konsentrasi melebihi 100 partikel per meter kubik air laut, yang jauh di atas ambang batas yang terkait dengan dampak negatif pada kehidupan laut."
      },
      {
        english: "Our opponents claim that implementing a carbon tax would harm economic growth. However, this argument fails to consider the substantial economic costs of inaction on climate change. Research from the Stern Review indicates that the costs of not addressing climate change could reduce global GDP by up to 20% over the long term, while mitigation actions would require only about 1% of global GDP annually. Furthermore, multiple studies have shown that properly designed carbon pricing can stimulate innovation and create new economic opportunities in renewable energy and clean technology sectors.",
        indonesian: "Lawan kami mengklaim bahwa menerapkan pajak karbon akan membahayakan pertumbuhan ekonomi. Namun, argumen ini gagal mempertimbangkan biaya ekonomi yang substansial dari tidak adanya tindakan terhadap perubahan iklim. Penelitian dari Stern Review menunjukkan bahwa biaya tidak mengatasi perubahan iklim dapat mengurangi PDB global hingga 20% dalam jangka panjang, sementara tindakan mitigasi hanya akan membutuhkan sekitar 1% dari PDB global setiap tahunnya. Selain itu, beberapa studi telah menunjukkan bahwa penetapan harga karbon yang dirancang dengan baik dapat menstimulasi inovasi dan menciptakan peluang ekonomi baru di sektor energi terbarukan dan teknologi bersih."
      },
      {
        english: "In conclusion, my research demonstrates that while microplastic pollution poses significant threats to marine ecosystems, there are several promising approaches to addressing this issue. These include improved waste management systems, innovations in biodegradable plastics, and policy interventions such as bans on single-use plastics. The evidence suggests that a multi-faceted approach combining technological innovation, policy reform, and public education offers the best path forward. Thank you for your attention. I'm now happy to take any questions you might have about my research.",
        indonesian: "Sebagai kesimpulan, penelitian saya menunjukkan bahwa sementara polusi mikroplastik menimbulkan ancaman signifikan terhadap ekosistem laut, ada beberapa pendekatan menjanjikan untuk mengatasi masalah ini. Ini termasuk sistem pengelolaan limbah yang ditingkatkan, inovasi dalam plastik biodegradable, dan intervensi kebijakan seperti larangan plastik sekali pakai. Bukti menunjukkan bahwa pendekatan multi-faset yang menggabungkan inovasi teknologi, reformasi kebijakan, dan pendidikan publik menawarkan jalan terbaik ke depan. Terima kasih atas perhatian Anda. Saya sekarang senang untuk menjawab pertanyaan yang mungkin Anda miliki tentang penelitian saya."
      }
    ]
  }
];

// B2 Upper Intermediate Level - Business Pathway Quizzes
export const lessonB2BusinessQuizzes: LessonQuiz[] = [
  {
    id: 'b2-b-s1-quiz',
    title: 'Negotiation Skills Quiz',
    description: 'Test your knowledge of business negotiation strategies and language',
    skillType: 'speaking',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b2bs1',
        question: 'What does BATNA stand for in negotiation?',
        options: [
          'Best Approach To Negotiation Agreement',
          'Business And Trade Negotiation Association',
          'Best Alternative To a Negotiated Agreement',
          'Basic Agreement Terms for New Arrangements'
        ],
        correctAnswer: 'Best Alternative To a Negotiated Agreement',
        explanation: 'BATNA stands for Best Alternative To a Negotiated Agreement. It represents your best option if the current negotiation fails, and helps you determine when to walk away from a deal.'
      },
      {
        id: 'q2-b2bs1',
        question: 'Which negotiation strategy focuses on finding solutions that benefit all parties involved?',
        options: [
          'Competitive',
          'Win-Win (Collaborative)',
          'Avoiding',
          'Accommodating'
        ],
        correctAnswer: 'Win-Win (Collaborative)',
        explanation: 'The Win-Win or Collaborative strategy focuses on finding solutions that benefit all parties involved. It aims to expand the available options rather than dividing a fixed set of resources.'
      },
      {
        id: 'q3-b2bs1',
        question: 'Which phrase would be most appropriate when making a concession during a negotiation?',
        options: [
          'This is our final offer. Take it or leave it.',
          'We\'re willing to adjust our position on X if you can be flexible on Y.',
          'We\'ve already compromised enough.',
          'You need to be more reasonable with your demands.'
        ],
        correctAnswer: 'We\'re willing to adjust our position on X if you can be flexible on Y.',
        explanation: 'The phrase "We\'re willing to adjust our position on X if you can be flexible on Y" is appropriate when making a concession because it clearly states what you\'re offering while also specifying what you expect in return, maintaining a collaborative approach.'
      },
      {
        id: 'q4-b2bs1',
        question: 'What is an important cultural consideration when negotiating internationally?',
        options: [
          'Always use the same negotiation style regardless of the country',
          'Insist that others adapt to your cultural norms',
          'Communication styles (direct vs. indirect)',
          'Focus only on the financial aspects of the deal'
        ],
        correctAnswer: 'Communication styles (direct vs. indirect)',
        explanation: 'Communication styles (direct vs. indirect) are an important cultural consideration in international negotiations. Some cultures prefer direct, explicit communication while others rely more on context, implication, and non-verbal cues.'
      },
      {
        id: 'q5-b2bs1',
        question: 'Which of these is NOT one of the key negotiation phases?',
        options: [
          'Opening',
          'Exploration',
          'Confrontation',
          'Closing'
        ],
        correctAnswer: 'Confrontation',
        explanation: 'Confrontation is NOT one of the key negotiation phases. The main phases are Opening (establishing rapport), Exploration (exchanging information), Bargaining (making offers and counteroffers), and Closing (finalizing the agreement).'
      }
    ]
  },
  {
    id: 'b2-b-s2-quiz',
    title: 'Team Management Quiz',
    description: 'Test your knowledge of effective team management strategies',
    skillType: 'speaking',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b2bs2',
        question: 'What does the acronym SMART stand for in goal setting?',
        options: [
          'Simple, Manageable, Accurate, Realistic, Timely',
          'Specific, Measurable, Achievable, Relevant, Time-bound',
          'Strategic, Motivational, Actionable, Reasonable, Trackable',
          'Systematic, Meaningful, Agreed, Responsive, Targeted'
        ],
        correctAnswer: 'Specific, Measurable, Achievable, Relevant, Time-bound',
        explanation: 'SMART stands for Specific, Measurable, Achievable, Relevant, and Time-bound. This framework helps ensure that goals are clear and attainable within a specific timeframe.'
      },
      {
        id: 'q2-b2bs2',
        question: 'According to the team development model, which stage is characterized by conflicts emerging as team members assert themselves?',
        options: [
          'Forming',
          'Storming',
          'Norming',
          'Performing'
        ],
        correctAnswer: 'Storming',
        explanation: 'The Storming stage is characterized by conflicts emerging as team members assert themselves and compete for positions of influence. It\'s a natural part of team development where different ideas compete for consideration.'
      },
      {
        id: 'q3-b2bs2',
        question: 'Which of the following is a best practice for providing constructive feedback?',
        options: [
          'Focus on personality traits rather than behaviors',
          'Provide criticism in public to set an example',
          'Be specific and actionable',
          'Wait until annual reviews to address issues'
        ],
        correctAnswer: 'Be specific and actionable',
        explanation: 'Being specific and actionable is a best practice for providing constructive feedback. This helps the recipient understand exactly what behaviors to change and how to improve.'
      },
      {
        id: 'q4-b2bs2',
        question: 'What is an effective approach to managing team conflicts?',
        options: [
          'Ignore the conflict and hope it resolves itself',
          'Always take sides with the most senior team member',
          'Focus on issues, not personalities',
          'Encourage team members to handle conflicts privately without management involvement'
        ],
        correctAnswer: 'Focus on issues, not personalities',
        explanation: 'Focusing on issues, not personalities, is an effective approach to managing team conflicts. This keeps discussions productive and prevents conflicts from becoming personal attacks.'
      },
      {
        id: 'q5-b2bs2',
        question: 'Which of the following is a key principle of effective delegation?',
        options: [
          'Delegate only the least important tasks',
          'Provide detailed instructions for every step',
          'Match tasks to skills and development needs',
          'Maintain tight control over all aspects of the delegated work'
        ],
        correctAnswer: 'Match tasks to skills and development needs',
        explanation: 'Matching tasks to skills and development needs is a key principle of effective delegation. This ensures that team members can successfully complete their assigned tasks while also growing professionally.'
      }
    ]
  }
];

// B2 Upper Intermediate Level - Academic Pathway Quizzes
export const lessonB2AcademicQuizzes: LessonQuiz[] = [
  {
    id: 'b2-a-s1-quiz',
    title: 'Critical Thinking Quiz',
    description: 'Test your understanding of critical thinking concepts and applications',
    skillType: 'reading',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b2as1',
        question: 'Which of the following is NOT a key component of critical thinking?',
        options: [
          'Analysis',
          'Evaluation',
          'Memorization',
          'Inference'
        ],
        correctAnswer: 'Memorization',
        explanation: 'Memorization is NOT a key component of critical thinking. While memory is important for learning, critical thinking involves higher-order cognitive skills like analysis, evaluation, inference, interpretation, explanation, and self-regulation.'
      },
      {
        id: 'q2-b2as1',
        question: 'What is a straw man fallacy?',
        options: [
          'Assuming that because B followed A, A caused B',
          'Accepting a claim solely based on the source',
          'Misrepresenting an opponent\'s argument to make it easier to attack',
          'Drawing conclusions from insufficient evidence'
        ],
        correctAnswer: 'Misrepresenting an opponent\'s argument to make it easier to attack',
        explanation: 'A straw man fallacy involves misrepresenting an opponent\'s argument to make it easier to attack. Rather than addressing the actual argument, someone creates a distorted version (the "straw man") and then refutes that instead.'
      },
      {
        id: 'q3-b2as1',
        question: 'Which of the following questions best demonstrates critical thinking when reading an academic text?',
        options: [
          'How many pages is this text?',
          'When was this published?',
          'What evidence supports the author\'s main claim?',
          'Is this topic interesting?'
        ],
        correctAnswer: 'What evidence supports the author\'s main claim?',
        explanation: 'Asking "What evidence supports the author\'s main claim?" demonstrates critical thinking because it involves evaluating the quality and sufficiency of evidence used to support an argument, which is a core aspect of critical analysis.'
      },
      {
        id: 'q4-b2as1',
        question: 'Which phrase would be most appropriate in a critical analysis of an academic text?',
        options: [
          'This article is completely wrong.',
          'The author is clearly biased and untrustworthy.',
          'While the author presents compelling evidence for X, they fail to address Y.',
          'I don\'t like the author\'s writing style.'
        ],
        correctAnswer: 'While the author presents compelling evidence for X, they fail to address Y.',
        explanation: 'The phrase "While the author presents compelling evidence for X, they fail to address Y" is appropriate for critical analysis because it acknowledges the strengths of the argument while also identifying limitations in a specific, objective way.'
      },
      {
        id: 'q5-b2as1',
        question: 'What is the purpose of considering alternative perspectives in critical thinking?',
        options: [
          'To confuse the reader with too many options',
          'To show off how much you know about a topic',
          'To develop a more comprehensive understanding of an issue',
          'To avoid taking a clear position on controversial topics'
        ],
        correctAnswer: 'To develop a more comprehensive understanding of an issue',
        explanation: 'The purpose of considering alternative perspectives in critical thinking is to develop a more comprehensive understanding of an issue. Examining multiple viewpoints helps identify assumptions, recognize limitations in any single perspective, and develop more nuanced conclusions.'
      }
    ]
  },
  {
    id: 'b2-a-s2-quiz',
    title: 'Academic Presentations and Debates Quiz',
    description: 'Test your knowledge of effective academic presentation and debate techniques',
    skillType: 'speaking',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b2as2',
        question: 'What should be included in the introduction of an academic presentation?',
        options: [
          'Detailed analysis of all your research findings',
          'Personal anecdotes unrelated to the topic',
          'Topic overview, significance, and outline of the presentation',
          'Criticism of other researchers in your field'
        ],
        correctAnswer: 'Topic overview, significance, and outline of the presentation',
        explanation: 'The introduction of an academic presentation should include a topic overview, its significance, and an outline of what will be covered. This orients the audience and establishes the importance of your presentation.'
      },
      {
        id: 'q2-b2as2',
        question: 'Which of the following is a best practice for creating effective visual aids?',
        options: [
          'Include as much text as possible on each slide',
          'Use complex, detailed graphs without explanation',
          'Keep slides simple and uncluttered',
          'Use many different fonts and colors for visual interest'
        ],
        correctAnswer: 'Keep slides simple and uncluttered',
        explanation: 'Keeping slides simple and uncluttered is a best practice for creating effective visual aids. This helps the audience focus on key information without being overwhelmed by excessive text or visual elements.'
      },
      {
        id: 'q3-b2as2',
        question: 'What is the correct order of a formal academic debate?',
        options: [
          'Opening statements, closing arguments, rebuttals, cross-examination',
          'Opening statements, rebuttals, cross-examination, closing arguments',
          'Cross-examination, opening statements, rebuttals, closing arguments',
          'Rebuttals, opening statements, cross-examination, closing arguments'
        ],
        correctAnswer: 'Opening statements, rebuttals, cross-examination, closing arguments',
        explanation: 'The correct order of a formal academic debate is: opening statements (affirmative team, then negative team), rebuttals (alternating between teams), cross-examination (teams question each other), and closing arguments (negative team, then affirmative team).'
      },
      {
        id: 'q4-b2as2',
        question: 'Which of the following is most important when handling questions after a presentation?',
        options: [
          'Providing lengthy, detailed answers to every question',
          'Defending your position aggressively if challenged',
          'Listening carefully to the entire question before responding',
          'Redirecting all difficult questions to other experts'
        ],
        correctAnswer: 'Listening carefully to the entire question before responding',
        explanation: 'Listening carefully to the entire question before responding is most important when handling questions after a presentation. This ensures you understand what\'s being asked and can provide a relevant, thoughtful response.'
      },
      {
        id: 'q5-b2as2',
        question: 'What is effective argumentation in an academic debate?',
        options: [
          'Speaking loudly and quickly to overwhelm opponents',
          'Making clear claims supported by relevant evidence',
          'Using emotional appeals instead of logical reasoning',
          'Introducing as many different arguments as possible'
        ],
        correctAnswer: 'Making clear claims supported by relevant evidence',
        explanation: 'Effective argumentation in an academic debate involves making clear claims supported by relevant evidence. This demonstrates the validity of your position through logical reasoning and credible support.'
      }
    ]
  }
];

// B2 Upper Intermediate Level - Business Final Test
export const lessonB2BusinessFinalTest: PracticalTest = {
  id: 'b2-b-final',
  title: 'Advanced Business Communication Test',
  description: 'Demonstrate your advanced business communication skills',
  type: 'speaking',
  prompt: 'Record a 3-4 minute business presentation proposing a solution to a workplace challenge (e.g., improving team collaboration, increasing efficiency, enhancing customer satisfaction). Include an analysis of the problem, your proposed solution with supporting evidence, potential implementation challenges, and expected benefits. Use appropriate business vocabulary and presentation techniques.',
  criteria: [
    'Clear problem analysis and solution proposal',
    'Strategic thinking and business acumen',
    'Advanced business vocabulary and expressions',
    'Persuasive argumentation with supporting evidence',
    'Professional delivery and presentation structure',
    'Consideration of stakeholder perspectives'
  ],
  minScore: 75
};

// B2 Upper Intermediate Level - Business Pathway Practical Test
export const lessonB2BusinessPracticalTest: PracticalTest = {
  id: 'b2-b-practical',
  title: 'Negotiation Scenario',
  description: 'Demonstrate your negotiation skills in a business scenario',
  type: 'speaking',
  prompt: 'You are a sales manager negotiating with a potential client who wants to purchase your company\'s software services. The client is interested but has concerns about the price and implementation timeline. Record a 2-3 minute response where you address these concerns and propose a solution that could satisfy both parties. Use appropriate negotiation language and strategies from the lesson.',
  criteria: [
    'Clear understanding of both parties\' interests',
    'Effective use of negotiation language',
    'Balanced approach (not too aggressive or too accommodating)',
    'Creative problem-solving to find mutual benefits',
    'Professional tone and language',
    'Logical structure to the negotiation',
    'Appropriate handling of objections',
    'Clear proposal for moving forward'
  ],
  minScore: 75
};

// B2 Upper Intermediate Level - Academic Final Test
export const lessonB2AcademicFinalTest: PracticalTest = {
  id: 'b2-a-final',
  title: 'Advanced Academic Communication Test',
  description: 'Demonstrate your advanced academic communication and critical thinking skills',
  type: 'writing',
  prompt: 'Write a 300-400 word critical analysis essay on a topic of your choice. Your essay should demonstrate critical thinking by examining multiple perspectives, evaluating evidence, and presenting a nuanced argument. Include an introduction with a clear thesis statement, body paragraphs with supporting evidence, and a conclusion. Use appropriate academic language and citation style.',
  criteria: [
    'Clear thesis statement and argument development',
    'Critical analysis of multiple perspectives',
    'Evaluation of evidence quality and relevance',
    'Logical organization and paragraph structure',
    'Advanced academic vocabulary and expressions',
    'Proper citation of sources and references'
  ],
  minScore: 75
};

// B2 Upper Intermediate Level - Academic Pathway Practical Test
export const lessonB2AcademicPracticalTest: PracticalTest = {
  id: 'b2-a-practical',
  title: 'Critical Analysis Presentation',
  description: 'Demonstrate your critical thinking and academic presentation skills',
  type: 'speaking',
  prompt: 'Prepare and record a 3-4 minute academic presentation analyzing a controversial topic of your choice (e.g., social media\'s impact on society, climate change policies, educational reform). Your presentation should demonstrate critical thinking by examining multiple perspectives, evaluating evidence, and presenting a nuanced argument. Include an introduction, main points with supporting evidence, and a conclusion. Use appropriate academic language and presentation techniques.',
  criteria: [
    'Clear introduction with topic overview and main argument',
    'Logical organization of ideas',
    'Critical analysis of multiple perspectives',
    'Evaluation of evidence quality',
    'Nuanced rather than simplistic conclusions',
    'Appropriate academic language',
    'Effective delivery (pace, clarity, engagement)',
    'Proper time management'
  ],
  minScore: 75
};