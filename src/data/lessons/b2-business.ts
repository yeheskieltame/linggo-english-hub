import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// B2 Upper Intermediate Level - Business Pathway Lesson Stages
const stages: LessonStage[] = [
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

// B2 Upper Intermediate Level - Business Pathway Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'b2-b-s1-quiz',
    title: 'Negotiation Skills Quiz',
    description: 'Test your knowledge of business negotiation strategies and language',
    skillType: 'speaking',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b2bs1',
        type: 'multiple-choice',
        question: 'What is BATNA in negotiation?',
        options: [
          'Best Approach To Negotiation Agreement',
          'Business And Trade Negotiation Association',
          'Best Alternative To a Negotiated Agreement',
          'Basic Agreement Terms for New Arrangements'
        ],
        correctAnswer: 'Best Alternative To a Negotiated Agreement',
        explanation: 'BATNA stands for Best Alternative To a Negotiated Agreement. It refers to what you would do if you fail to reach an agreement in the current negotiation, which helps you determine when to walk away from a deal.'
      },
      {
        id: 'q2-b2bs1',
        type: 'multiple-choice',
        question: 'Which negotiation strategy focuses on finding solutions that benefit all parties involved?',
        options: [
          'Competitive',
          'Win-Win (Collaborative)',
          'Avoiding',
          'Accommodating'
        ],
        correctAnswer: 'Win-Win (Collaborative)',
        explanation: 'A Win-Win or Collaborative strategy focuses on finding solutions that benefit all parties involved. It aims to expand the available options rather than dividing a fixed resource.'
      },
      {
        id: 'q3-b2bs1',
        type: 'multiple-choice',
        question: 'Which phrase would be most appropriate when making a concession during a negotiation?',
        options: [
          'This is our final offer. Take it or leave it.',
          'We\'re willing to adjust our position on the delivery timeline if you can be flexible on the payment terms.',
          'You need to give us a better price.',
          'We\'ll think about your proposal and get back to you.'
        ],
        correctAnswer: 'We\'re willing to adjust our position on the delivery timeline if you can be flexible on the payment terms.',
        explanation: 'This phrase demonstrates a willingness to compromise while also clearly stating what you expect in return, which is an effective way to make a concession during negotiations.'
      },
      {
        id: 'q4-b2bs1',
        type: 'multiple-choice',
        question: 'What is the purpose of the exploration phase in negotiations?',
        options: [
          'To make final decisions',
          'To establish rapport and set the tone',
          'To exchange information and identify interests',
          'To finalize the agreement and next steps'
        ],
        correctAnswer: 'To exchange information and identify interests',
        explanation: 'The exploration phase in negotiations is focused on exchanging information and identifying the interests and priorities of all parties involved. This helps create a foundation for finding mutually beneficial solutions.'
      },
      {
        id: 'q5-b2bs1',
        type: 'multiple-choice',
        question: 'Which cultural factor is important to consider when negotiating internationally?',
        options: [
          'The weather in the country you\'re visiting',
          'The size of the other company\'s office',
          'Communication styles (direct vs. indirect)',
          'The age of the negotiators'
        ],
        correctAnswer: 'Communication styles (direct vs. indirect)',
        explanation: 'Communication styles vary significantly across cultures, with some cultures preferring direct communication while others use more indirect approaches. Understanding these differences is crucial for successful international negotiations.'
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
        type: 'multiple-choice',
        question: 'What are the five stages of team development according to Tuckman\'s model?',
        options: [
          'Planning, Organizing, Leading, Controlling, Evaluating',
          'Forming, Storming, Norming, Performing, Adjourning',
          'Initiating, Planning, Executing, Monitoring, Closing',
          'Recruitment, Training, Development, Performance, Promotion'
        ],
        correctAnswer: 'Forming, Storming, Norming, Performing, Adjourning',
        explanation: 'Tuckman\'s model of team development includes five stages: Forming (team members get to know each other), Storming (conflicts emerge), Norming (team establishes rules), Performing (team works effectively), and Adjourning (team completes project or dissolves).'
      },
      {
        id: 'q2-b2bs2',
        type: 'multiple-choice',
        question: 'What does the acronym SMART stand for in goal setting?',
        options: [
          'Simple, Meaningful, Accurate, Realistic, Timely',
          'Strategic, Measurable, Actionable, Reasonable, Trackable',
          'Specific, Measurable, Achievable, Relevant, Time-bound',
          'Systematic, Motivational, Agreed, Recorded, Tested'
        ],
        correctAnswer: 'Specific, Measurable, Achievable, Relevant, Time-bound',
        explanation: 'SMART goals are Specific (clearly defined), Measurable (quantifiable), Achievable (realistic), Relevant (aligned with broader objectives), and Time-bound (with a deadline). This framework helps create effective goals for teams.'
      },
      {
        id: 'q3-b2bs2',
        type: 'multiple-choice',
        question: 'Which approach to providing feedback is most effective?',
        options: [
          'Giving all feedback in public to set an example for the team',
          'Focusing on personality traits that need improvement',
          'Providing specific, actionable feedback that balances positive and constructive elements',
          'Saving all feedback for annual performance reviews'
        ],
        correctAnswer: 'Providing specific, actionable feedback that balances positive and constructive elements',
        explanation: 'Effective feedback is specific (focused on particular behaviors or outcomes), actionable (gives clear guidance for improvement), and balanced (includes both positive elements and areas for development).'
      },
      {
        id: 'q4-b2bs2',
        type: 'multiple-choice',
        question: 'What is an effective approach to delegating tasks?',
        options: [
          'Assign tasks randomly to ensure fairness',
          'Match tasks to team members\' skills and development needs',
          'Always delegate the most difficult tasks to the most experienced team member',
          'Provide detailed instructions on exactly how to complete every aspect of the task'
        ],
        correctAnswer: 'Match tasks to team members\' skills and development needs',
        explanation: 'Effective delegation involves matching tasks to team members\' existing skills and development needs. This approach maximizes performance while also providing growth opportunities.'
      },
      {
        id: 'q5-b2bs2',
        type: 'multiple-choice',
        question: 'What is the best approach to managing team conflict?',
        options: [
          'Ignore minor conflicts to avoid making them worse',
          'Always take sides with the team member who has the strongest argument',
          'Address issues promptly, focusing on the problem rather than personalities',
          'Have team members resolve all conflicts themselves without manager intervention'
        ],
        correctAnswer: 'Address issues promptly, focusing on the problem rather than personalities',
        explanation: 'Effective conflict management involves addressing issues promptly before they escalate, and focusing on the specific problem or behavior rather than attacking personalities. This approach helps maintain team cohesion while resolving the underlying issue.'
      }
    ]
  }
];

// B2 Upper Intermediate Level - Business Final Test
const finalTest: PracticalTest = {
  id: 'b2-b-final',
  title: 'Advanced Business Communication Test',
  description: 'Demonstrate your advanced business communication skills through multiple formats',
  type: 'speaking', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your advanced business communication skills at the B2 level.',
  criteria: [
    'Clear problem analysis and solution proposal',
    'Strategic thinking and business acumen',
    'Advanced business vocabulary and expressions',
    'Persuasive argumentation with supporting evidence',
    'Professional communication across multiple formats'
  ],
  minScore: 75,
  sections: [
    {
      id: 'b2-b-final-s1',
      title: 'Business Presentation',
      type: 'speaking',
      description: 'Deliver a professional business presentation',
      prompt: 'Record a 2-3 minute business presentation proposing a solution to a workplace challenge (e.g., improving team collaboration, increasing efficiency, enhancing customer satisfaction). Include an analysis of the problem, your proposed solution with supporting evidence, potential implementation challenges, and expected benefits. Use appropriate business vocabulary and presentation techniques.',
      criteria: [
        'Clear problem analysis and solution proposal',
        'Strategic thinking and business acumen',
        'Advanced business vocabulary and expressions',
        'Persuasive argumentation with supporting evidence',
        'Professional delivery and presentation structure'
      ],
      weight: 40
    },
    {
      id: 'b2-b-final-s2',
      title: 'Business Report',
      type: 'writing',
      description: 'Write a professional business report',
      prompt: 'Write a 200-250 word business report analyzing a company\'s performance in a specific area (e.g., sales, marketing, customer service). Include an introduction stating the purpose, findings with supporting data, analysis of the findings, and recommendations for improvement. Use appropriate business report structure and language.',
      criteria: [
        'Clear purpose statement and executive summary',
        'Logical organization following report structure',
        'Inclusion of relevant data and analysis',
        'Practical and specific recommendations',
        'Professional business language and formatting'
      ],
      weight: 30
    },
    {
      id: 'b2-b-final-s3',
      title: 'Business Case Analysis',
      type: 'reading',
      description: 'Analyze a business case and identify key issues and solutions',
      prompt: 'Read the business case study below about a company facing challenges with remote work transition. Identify the key issues, analyze the underlying causes, and recommend solutions based on the information provided.',
      text: `# GlobalTech Solutions: Remote Work Transition Challenges

GlobalTech Solutions is a mid-sized software development company with 250 employees across three office locations. Before the pandemic, the company operated primarily in-person with occasional work-from-home days. When the pandemic hit, they quickly transitioned to fully remote operations.

## Current Situation
After two years of remote work, the company is planning its long-term workplace strategy. A recent employee survey revealed:

- 65% of employees prefer a hybrid model (3 days remote, 2 days in office)
- 25% want to remain fully remote
- 10% prefer returning to full-time office work

The executive team is divided on the best approach:
- The CEO believes a hybrid model would provide the best balance
- The CTO is concerned about collaboration and innovation suffering in remote settings
- The CFO sees an opportunity to reduce real estate costs with remote work
- The HR Director worries about maintaining company culture and employee engagement

## Key Challenges
1. Productivity data shows mixed results: Some teams report increased productivity while working remotely, while others show declining output and missed deadlines.

2. Middle managers report difficulties in:
   - Monitoring performance fairly
   - Maintaining team cohesion
   - Onboarding new employees effectively

3. IT infrastructure is struggling to support remote collaboration:
   - VPN capacity issues during peak hours
   - Inconsistent home internet quality among employees
   - Security concerns with remote access to sensitive data

4. Employee wellbeing concerns:
   - Increasing reports of burnout and work-life boundary issues
   - Junior employees feeling disconnected and lacking mentorship
   - Some employees facing challenging home working environments

## Financial Considerations
- Current office leases expire in 8 months
- Maintaining all three offices costs $2.5M annually
- Upgrading IT infrastructure for better remote work support would require a $500K investment

The company needs to decide on its workplace strategy within the next two months to allow time for implementation before the lease renewals.`,
      imageUrl: '/images/b2-business-case.png',
      criteria: [
        'Accurate identification of key business issues',
        'Thoughtful analysis of underlying causes',
        'Strategic recommendations aligned with business goals',
        'Understanding of business concepts and terminology',
        'Consideration of multiple stakeholder perspectives'
      ],
      weight: 30
    }
  ]
};

// B2 Upper Intermediate Level - Business Practical Test
const practicalTest: PracticalTest = {
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
    'Confidence and persuasiveness'
  ],
  minScore: 75
};

// Export the complete lesson structure
export const b2BusinessLesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};