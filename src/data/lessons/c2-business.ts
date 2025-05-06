import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// C2 Proficiency Level - Business Pathway Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'c2-b-s1',
    title: 'Strategic Business Communication',
    description: 'Master sophisticated communication strategies for executive-level business contexts',
    content: `This lesson focuses on developing mastery of strategic communication at the executive level, enabling you to influence key stakeholders and drive organizational outcomes through sophisticated communication approaches.

Strategic Communication Framework:
- Audience analysis: Identifying stakeholders' interests, concerns, and communication preferences
- Message architecture: Structuring complex information for maximum impact
- Channel selection: Choosing optimal communication methods for different purposes
- Timing considerations: Strategic decisions about when and how to communicate
- Measurement: Evaluating communication effectiveness against objectives

Executive-Level Communication Principles:
1. Strategic clarity
   - Distilling complex issues to their essential elements
   - Articulating clear vision and direction
   - Connecting tactical details to strategic objectives
   - Maintaining focus on key priorities amid complexity
   - Communicating with precision and purpose

2. Stakeholder management
   - Tailoring messages for diverse audiences (board, investors, employees, media)
   - Anticipating stakeholder concerns and objections
   - Building coalitions through strategic messaging
   - Managing competing interests and priorities
   - Cultivating trust through transparent communication

3. Persuasive leadership
   - Crafting compelling narratives that drive action
   - Balancing data-driven and values-based appeals
   - Using rhetorical techniques effectively
   - Demonstrating executive presence and authority
   - Inspiring commitment rather than mere compliance

4. Crisis and change communication
   - Maintaining credibility during uncertainty
   - Balancing transparency with strategic discretion
   - Managing information flow during sensitive periods
   - Framing challenges as opportunities
   - Building resilience through communication

Advanced Business Communication Formats:
1. Executive presentations
   - Opening with strategic context and significance
   - Presenting complex data with clarity and insight
   - Addressing implications rather than just findings
   - Anticipating and addressing executive concerns
   - Closing with clear recommendations and next steps

2. Board communications
   - Focusing on governance and strategic oversight issues
   - Balancing detail with high-level perspective
   - Presenting balanced risk assessments
   - Connecting operational matters to strategic objectives
   - Preparing effectively for challenging questions

3. Investor relations
   - Balancing transparency with strategic positioning
   - Communicating long-term vision while addressing short-term results
   - Managing expectations effectively
   - Navigating disclosure requirements and constraints
   - Building credibility and trust with the investment community

4. Executive messaging cascade
   - Ensuring consistent messaging across organizational levels
   - Equipping leaders to communicate effectively
   - Balancing centralized control with authentic delivery
   - Monitoring message reception and addressing misalignment
   - Measuring communication effectiveness

Sophisticated Language for Executive Communication:
- Strategic framing: "This initiative addresses three critical business imperatives..."
- Balanced assessment: "While the data indicates significant opportunity, we must acknowledge several substantial risks..."
- Decision facilitation: "The key strategic question before us is whether to prioritize rapid market expansion or margin improvement..."
- Commitment building: "This approach not only addresses our immediate challenges but positions us for sustainable competitive advantage..."
- Future orientation: "As we navigate this transition, we're establishing the foundation for our next phase of growth..."

Remember that executive communication is ultimately about enabling informed decision-making and driving strategic outcomes. The most sophisticated communication balances complexity with clarity, conviction with openness to dialogue, and strategic vision with practical execution.`,
    videoId: 'Vp3GYRJDMkU',
    examples: [
      {
        english: "Board presentation opening: \"Before we examine the quarterly results, I'd like to frame our discussion within the broader market context and our three-year strategic plan. The volatility we're seeing in emerging markets represents both a near-term challenge to our growth targets and a potential opportunity to accelerate our digital transformation initiative. The key strategic question is how to balance defensive positioning with selective investment in high-potential segments.\"",
        indonesian: "Pembukaan presentasi dewan: \"Sebelum kita memeriksa hasil kuartalan, saya ingin membingkai diskusi kita dalam konteks pasar yang lebih luas dan rencana strategis tiga tahun kita. Volatilitas yang kita lihat di pasar berkembang merepresentasikan tantangan jangka pendek untuk target pertumbuhan kita dan juga potensi peluang untuk mempercepat inisiatif transformasi digital kita. Pertanyaan strategis utama adalah bagaimana menyeimbangkan posisi defensif dengan investasi selektif di segmen berpotensi tinggi.\""
      },
      {
        english: "Crisis communication to employees: \"I want to address the reports you may have seen in the media regarding potential regulatory action. While I can't comment on all aspects due to legal constraints, I can assure you that we anticipated this development and have been preparing our response strategy for several months. We have a strong legal position, robust operational contingency plans, and sufficient financial resources to navigate this challenge. Most importantly, our core business remains strong, and this situation does not affect our strategic direction or commitment to our customers and employees.\"",
        indonesian: "Komunikasi krisis kepada karyawan: \"Saya ingin membahas laporan yang mungkin telah Anda lihat di media mengenai potensi tindakan regulasi. Meskipun saya tidak dapat berkomentar tentang semua aspek karena kendala hukum, saya dapat memastikan bahwa kami telah mengantisipasi perkembangan ini dan telah mempersiapkan strategi respons kami selama beberapa bulan. Kami memiliki posisi hukum yang kuat, rencana kontingensi operasional yang kokoh, dan sumber daya keuangan yang cukup untuk menavigasi tantangan ini. Yang terpenting, bisnis inti kami tetap kuat, dan situasi ini tidak memengaruhi arah strategis atau komitmen kami kepada pelanggan dan karyawan.\""
      },
      {
        english: "Strategic initiative framing: \"The proposed supply chain transformation should be understood not merely as a cost reduction initiative, but as a fundamental reimagining of our operational model. By integrating advanced analytics, strategic supplier partnerships, and dynamic fulfillment capabilities, we're positioning ourselves to deliver three critical outcomes: enhanced resilience against disruption, improved sustainability performance, and the agility to respond to increasingly unpredictable demand patterns. The investment required is substantial, but the strategic necessity is clear and the projected returns compelling.\"",
        indonesian: "Pembingkaian inisiatif strategis: \"Transformasi rantai pasokan yang diusulkan harus dipahami bukan hanya sebagai inisiatif pengurangan biaya, tetapi sebagai pencitraan ulang yang fundamental dari model operasional kita. Dengan mengintegrasikan analitik canggih, kemitraan pemasok strategis, dan kemampuan pemenuhan dinamis, kita memposisikan diri untuk memberikan tiga hasil penting: ketahanan yang ditingkatkan terhadap gangguan, kinerja keberlanjutan yang lebih baik, dan kelincahan untuk merespons pola permintaan yang semakin tidak dapat diprediksi. Investasi yang diperlukan cukup besar, tetapi kebutuhan strategis jelas dan proyeksi pengembalian meyakinkan.\""
      },
      {
        english: "Investor communication on performance challenges: \"While our Q3 results fell short of expectations, with EBITDA margins contracting 240 basis points year-over-year, this performance reflects deliberate strategic choices rather than fundamental business deterioration. We accelerated investment in our digital platform migration, expanded our engineering team to support our product roadmap, and chose to maintain pricing discipline despite aggressive competitor discounting. These decisions created short-term margin pressure but strengthen our competitive position and support our long-term value creation strategy. We remain confident in our full-year guidance and our 2025 strategic targets.\"",
        indonesian: "Komunikasi investor tentang tantangan kinerja: \"Meskipun hasil Q3 kami tidak memenuhi harapan, dengan margin EBITDA menyusut 240 basis poin dibandingkan tahun sebelumnya, kinerja ini mencerminkan pilihan strategis yang disengaja daripada kemunduran bisnis fundamental. Kami mempercepat investasi dalam migrasi platform digital kami, memperluas tim teknik kami untuk mendukung roadmap produk kami, dan memilih untuk mempertahankan disiplin harga meskipun ada diskon agresif dari pesaing. Keputusan ini menciptakan tekanan margin jangka pendek tetapi memperkuat posisi kompetitif kami dan mendukung strategi penciptaan nilai jangka panjang kami. Kami tetap yakin dengan panduan tahun penuh kami dan target strategis 2025 kami.\""
      }
    ]
  },
  {
    id: 'c2-b-s2',
    title: 'Global Business Leadership',
    description: 'Develop sophisticated leadership capabilities for complex international business environments',
    content: `This lesson focuses on developing the advanced leadership capabilities required to navigate complex global business environments, lead diverse international teams, and drive organizational success across cultural and geographical boundaries.

Global Leadership Framework:
- Cultural intelligence: Understanding and adapting to diverse cultural contexts
- Strategic agility: Navigating complexity and ambiguity in global markets
- Inclusive leadership: Leveraging diversity for enhanced performance
- Ethical decision-making: Balancing competing values and stakeholder interests
- Transformational influence: Driving change across diverse organizational contexts

Advanced Global Leadership Capabilities:
1. Strategic global thinking
   - Analyzing complex global trends and interdependencies
   - Identifying emerging opportunities and threats across markets
   - Balancing global standardization with local adaptation
   - Developing strategies that leverage global scale and local insight
   - Navigating geopolitical complexities and regulatory environments

2. Cross-cultural leadership effectiveness
   - Adapting leadership style to diverse cultural contexts
   - Building trust across cultural boundaries
   - Recognizing and mitigating unconscious cultural biases
   - Leveraging cultural diversity for enhanced innovation
   - Resolving cross-cultural conflicts constructively

3. Global team leadership
   - Building cohesion in geographically dispersed teams
   - Establishing effective virtual collaboration practices
   - Managing across time zones and communication barriers
   - Developing talent in diverse international contexts
   - Creating inclusive environments that maximize diverse contributions

4. Stakeholder management in complex environments
   - Mapping and prioritizing diverse global stakeholders
   - Navigating competing interests and expectations
   - Building coalitions across organizational boundaries
   - Managing relationships with international partners and alliances
   - Engaging effectively with governments and regulatory bodies

Leading Global Strategic Initiatives:
1. Global transformation leadership
   - Articulating compelling change vision across cultures
   - Adapting change approaches to different cultural contexts
   - Building change coalitions across organizational boundaries
   - Overcoming resistance in diverse organizational settings
   - Sustaining momentum across extended global timelines

2. Global innovation leadership
   - Fostering innovation across diverse cultural contexts
   - Leveraging global knowledge networks
   - Balancing global innovation platforms with local creativity
   - Navigating different approaches to risk and experimentation
   - Scaling innovations across diverse markets

3. Global crisis leadership
   - Responding to international crises with cultural sensitivity
   - Coordinating responses across geographical boundaries
   - Communicating effectively during global uncertainty
   - Balancing centralized control with local responsiveness
   - Building organizational resilience across diverse contexts

Sophisticated Language for Global Leadership:
- Cultural bridging: "While our approaches differ, I see valuable complementary perspectives that can strengthen our solution..."
- Strategic alignment: "This initiative addresses our global priorities while respecting the unique needs of each region..."
- Inclusive decision-making: "Before we proceed, I'd like to ensure we've considered perspectives from all our key markets..."
- Nuanced direction: "We need to maintain consistent global standards while allowing thoughtful adaptation to local conditions..."
- Diplomatic challenge: "I appreciate the regional constraints you've highlighted. Let's explore how we might address those while still advancing our global objectives..."

Remember that effective global leadership requires both sophisticated capabilities and genuine humility—recognizing that no single cultural perspective has all the answers and that leadership approaches must continually evolve to address the complexities of our interconnected world.`,
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "Global strategy communication: \"Our new market entry strategy for Southeast Asia reflects both our global platform strengths and the unique characteristics of each market. Rather than simply exporting our European model, we've developed a regional framework that maintains our core value proposition while adapting our channel strategy, pricing architecture, and product features to address local customer preferences and competitive dynamics. This balanced approach will allow us to achieve economies of scale while delivering locally relevant customer experiences.\"",
        indonesian: "Komunikasi strategi global: \"Strategi masuk pasar baru kami untuk Asia Tenggara mencerminkan kekuatan platform global kami dan karakteristik unik dari setiap pasar. Alih-alih hanya mengekspor model Eropa kami, kami telah mengembangkan kerangka regional yang mempertahankan proposisi nilai inti kami sambil mengadaptasi strategi saluran, arsitektur harga, dan fitur produk kami untuk mengatasi preferensi pelanggan lokal dan dinamika kompetitif. Pendekatan seimbang ini akan memungkinkan kami mencapai skala ekonomi sambil memberikan pengalaman pelanggan yang relevan secara lokal.\""
      },
      {
        english: "Cross-cultural team leadership: \"As we integrate the teams following the acquisition, we need to recognize and respect the different working styles and communication preferences across our now more diverse organization. The direct communication approach common in our US operations may need to be balanced with the more contextual communication style valued by our new colleagues in Japan. Similarly, our decision-making processes should incorporate both the participative approach preferred in our Scandinavian offices and the more hierarchical expectations in some of our Asian locations. Our strength will come from integrating these diverse perspectives rather than imposing a single approach.\"",
        indonesian: "Kepemimpinan tim lintas budaya: \"Saat kami mengintegrasikan tim setelah akuisisi, kami perlu mengenali dan menghormati gaya kerja dan preferensi komunikasi yang berbeda di seluruh organisasi kami yang sekarang lebih beragam. Pendekatan komunikasi langsung yang umum dalam operasi AS kami mungkin perlu diseimbangkan dengan gaya komunikasi yang lebih kontekstual yang dihargai oleh rekan-rekan baru kami di Jepang. Demikian pula, proses pengambilan keputusan kami harus menggabungkan pendekatan partisipatif yang disukai di kantor Skandinavia kami dan harapan hierarkis yang lebih tinggi di beberapa lokasi Asia kami. Kekuatan kami akan berasal dari mengintegrasikan perspektif beragam ini daripada memaksakan pendekatan tunggal.\""
      },
      {
        english: "Global crisis response: \"The supply chain disruption affecting our Asian manufacturing operations requires a coordinated but locally tailored response. Our global crisis team will establish consistent principles and provide central support, but regional leaders are empowered to implement specific measures based on local conditions and regulatory requirements. Our priorities remain consistent globally: first, ensuring employee safety; second, maintaining business continuity for critical customer operations; and third, mitigating financial impact. However, how these priorities translate into specific actions will necessarily vary by location.\"",
        indonesian: "Respons krisis global: \"Gangguan rantai pasokan yang memengaruhi operasi manufaktur Asia kami memerlukan respons terkoordinasi tetapi disesuaikan secara lokal. Tim krisis global kami akan menetapkan prinsip-prinsip yang konsisten dan memberikan dukungan pusat, tetapi pemimpin regional diberdayakan untuk menerapkan langkah-langkah spesifik berdasarkan kondisi lokal dan persyaratan peraturan. Prioritas kami tetap konsisten secara global: pertama, memastikan keselamatan karyawan; kedua, mempertahankan kelangsungan bisnis untuk operasi pelanggan yang kritis; dan ketiga, mengurangi dampak keuangan. Namun, bagaimana prioritas ini diterjemahkan ke dalam tindakan spesifik akan bervariasi berdasarkan lokasi.\""
      },
      {
        english: "Global innovation initiative: \"Our new global innovation framework represents a significant evolution in our approach. Rather than centralizing R&D in our traditional Western hubs, we're establishing a networked innovation ecosystem that leverages specialized capabilities across our global footprint. Our Singapore center will lead digital experience innovation, our German team will drive manufacturing technology, and our Brazilian unit will focus on emerging market solutions. This distributed but connected approach will accelerate our innovation pipeline while ensuring our solutions address diverse market needs and incorporate multiple cultural perspectives.\"",
        indonesian: "Inisiatif inovasi global: \"Kerangka inovasi global baru kami merepresentasikan evolusi signifikan dalam pendekatan kami. Alih-alih memusatkan R&D di pusat Barat tradisional kami, kami membangun ekosistem inovasi berjaringan yang memanfaatkan kemampuan khusus di seluruh jejak global kami. Pusat Singapura kami akan memimpin inovasi pengalaman digital, tim Jerman kami akan mendorong teknologi manufaktur, dan unit Brasil kami akan fokus pada solusi pasar berkembang. Pendekatan terdistribusi namun terhubung ini akan mempercepat pipeline inovasi kami sambil memastikan solusi kami mengatasi kebutuhan pasar yang beragam dan menggabungkan berbagai perspektif budaya.\""
      }
    ]
  }
];

// C2 Proficiency Level - Business Pathway Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'c2-b-s1-quiz',
    title: 'Strategic Business Communication Quiz',
    description: 'Test your understanding of executive-level communication strategies',
    skillType: 'speaking',
    requiredScore: 85,
    questions: [
      {
        id: 'q1-c2bs1',
        type: 'multiple-choice',
        question: 'Which approach best demonstrates strategic clarity in executive communication?',
        options: [
          'Providing exhaustive detail on all aspects of a business situation',
          'Using technical jargon to demonstrate expertise',
          'Distilling complex issues to their essential elements and connecting tactical details to strategic objectives',
          'Focusing exclusively on positive information to maintain confidence'
        ],
        correctAnswer: 'Distilling complex issues to their essential elements and connecting tactical details to strategic objectives',
        explanation: 'Strategic clarity involves cutting through complexity to identify what truly matters, then articulating how specific actions or decisions connect to broader strategic goals. This approach helps stakeholders understand both the what and the why of business initiatives.'
      },
      {
        id: 'q2-c2bs1',
        type: 'multiple-choice',
        question: 'When communicating with the board of directors, which approach is most effective?',
        options: [
          'Providing detailed operational information to demonstrate thorough management',
          'Focusing on governance and strategic oversight issues while connecting operational matters to strategic objectives',
          'Emphasizing only positive developments to maintain board confidence',
          'Using highly technical language to establish credibility'
        ],
        correctAnswer: 'Focusing on governance and strategic oversight issues while connecting operational matters to strategic objectives',
        explanation: 'Effective board communication recognizes the board\'s governance and oversight role, focusing on strategic implications rather than operational details. When operational matters are discussed, they should be explicitly connected to strategic objectives and governance concerns.'
      },
      {
        id: 'q3-c2bs1',
        type: 'multiple-choice',
        question: 'Which statement best exemplifies sophisticated framing in crisis communication?',
        options: [
          '"We\'re facing a serious problem that will significantly impact our business."',
          '"This isn\'t really a crisis; the media is exaggerating the situation."',
          '"While we\'re navigating significant challenges in our European market, our diversified business model and strong balance sheet position us to manage through this disruption while continuing to invest in our highest-growth opportunities."',
          '"Let\'s wait and see what happens before we say anything definitive."'
        ],
        correctAnswer: '"While we\'re navigating significant challenges in our European market, our diversified business model and strong balance sheet position us to manage through this disruption while continuing to invest in our highest-growth opportunities."',
        explanation: 'This statement demonstrates sophisticated crisis framing by acknowledging the reality of the challenge while placing it in context (limited to one market), highlighting organizational strengths that mitigate the impact, and maintaining a forward-looking perspective that balances realism with confidence.'
      },
      {
        id: 'q4-c2bs1',
        type: 'multiple-choice',
        question: 'What is the most effective approach to stakeholder management in executive communication?',
        options: [
          'Communicating the same message to all stakeholders to ensure consistency',
          'Focusing primarily on shareholders as the most important stakeholder group',
          'Tailoring messages for diverse audiences while maintaining consistent core content, and anticipating stakeholder concerns and objections',
          'Limiting communication to minimize potential misinterpretation'
        ],
        correctAnswer: 'Tailoring messages for diverse audiences while maintaining consistent core content, and anticipating stakeholder concerns and objections',
        explanation: 'Effective stakeholder management involves recognizing that different stakeholders have different interests, concerns, and information needs. Messages should be tailored accordingly while maintaining consistency in core content. Anticipating concerns allows for proactive addressing of potential objections.'
      },
      {
        id: 'q5-c2bs1',
        type: 'multiple-choice',
        question: 'Which approach best demonstrates persuasive leadership in executive communication?',
        options: [
          'Relying primarily on authority and position power to drive compliance',
          'Presenting only data and facts, allowing people to draw their own conclusions',
          'Crafting compelling narratives that connect data-driven and values-based appeals, demonstrating executive presence while inspiring commitment',
          'Using aggressive language and setting demanding expectations'
        ],
        correctAnswer: 'Crafting compelling narratives that connect data-driven and values-based appeals, demonstrating executive presence while inspiring commitment',
        explanation: 'Persuasive leadership at the executive level balances rational appeals (data, analysis, logic) with emotional and values-based appeals. It uses narrative to create meaning and context, and focuses on building genuine commitment rather than mere compliance. This approach recognizes that sustainable change requires both intellectual understanding and emotional engagement.'
      }
    ]
  },
  {
    id: 'c2-b-s2-quiz',
    title: 'Global Business Leadership Quiz',
    description: 'Test your understanding of advanced leadership in international business contexts',
    skillType: 'speaking',
    requiredScore: 85,
    questions: [
      {
        id: 'q1-c2bs2',
        type: 'multiple-choice',
        question: 'Which approach best demonstrates strategic global thinking?',
        options: [
          'Standardizing business practices across all markets to maximize efficiency',
          'Allowing each local market to operate independently with minimal central oversight',
          'Analyzing complex global trends and interdependencies while balancing global standardization with local adaptation',
          'Focusing primarily on developed markets where business practices are most familiar'
        ],
        correctAnswer: 'Analyzing complex global trends and interdependencies while balancing global standardization with local adaptation',
        explanation: 'Strategic global thinking involves understanding how global trends and forces affect different markets in different ways, then developing approaches that capture the benefits of global scale and standardization while allowing appropriate adaptation to local market conditions. This balanced approach recognizes both the opportunities of globalization and the continuing importance of local context.'
      },
      {
        id: 'q2-c2bs2',
        type: 'multiple-choice',
        question: 'What is the most effective approach to leading global teams?',
        options: [
          'Establishing a dominant culture based on headquarters practices',
          'Allowing each location to operate according to local norms with minimal integration',
          'Building cohesion across geographically dispersed teams while creating inclusive environments that maximize diverse contributions',
          'Requiring all communication in a single language regardless of team members\' proficiency'
        ],
        correctAnswer: 'Building cohesion across geographically dispersed teams while creating inclusive environments that maximize diverse contributions',
        explanation: 'Effective global team leadership balances the need for team cohesion and shared purpose with respect for diversity and inclusion. It establishes common ground while creating space for diverse perspectives and approaches, recognizing that the team\'s strength comes from integrating different viewpoints rather than enforcing uniformity.'
      },
      {
        id: 'q3-c2bs2',
        type: 'multiple-choice',
        question: 'Which statement best exemplifies cross-cultural leadership effectiveness?',
        options: [
          '"Our company culture is based on our headquarters values, and all employees need to adapt to it."',
          '"Cultural differences aren\'t really important as long as we focus on business results."',
          '"I\'ve noticed that our decision-making process works well for our European team members but may unintentionally exclude perspectives from our Asian colleagues. Let\'s discuss how we might adapt our approach to ensure all voices are heard."',
          '"We should always defer to local practices in each market, even if they conflict with our global standards."'
        ],
        correctAnswer: '"I\'ve noticed that our decision-making process works well for our European team members but may unintentionally exclude perspectives from our Asian colleagues. Let\'s discuss how we might adapt our approach to ensure all voices are heard."',
        explanation: 'This statement demonstrates cross-cultural leadership effectiveness by showing awareness of how cultural differences affect business processes, recognizing potential unintended consequences of current approaches, and suggesting adaptation to create more inclusive practices. It shows both cultural intelligence and a commitment to leveraging diversity effectively.'
      },
      {
        id: 'q4-c2bs2',
        type: 'multiple-choice',
        question: 'What is the most effective approach to global innovation leadership?',
        options: [
          'Centralizing all innovation activities at headquarters to maintain control',
          'Allowing each market to innovate independently without coordination',
          'Fostering innovation across diverse cultural contexts while balancing global innovation platforms with local creativity',
          'Focusing innovation efforts exclusively on developed markets with advanced technological infrastructure'
        ],
        correctAnswer: 'Fostering innovation across diverse cultural contexts while balancing global innovation platforms with local creativity',
        explanation: 'Effective global innovation leadership recognizes that valuable ideas can emerge anywhere in the global organization and that different cultural contexts may foster different types of innovation. It creates systems to capture and scale innovations globally while allowing for local creativity and adaptation, leveraging the organization\'s diversity as a source of competitive advantage.'
      },
      {
        id: 'q5-c2bs2',
        type: 'multiple-choice',
        question: 'Which approach best demonstrates effective stakeholder management in complex global environments?',
        options: [
          'Focusing primarily on shareholders and financial stakeholders',
          'Treating all stakeholders identically regardless of local context',
          'Mapping and prioritizing diverse global stakeholders while navigating competing interests and building coalitions across boundaries',
          'Limiting stakeholder engagement to minimize complexity'
        ],
        correctAnswer: 'Mapping and prioritizing diverse global stakeholders while navigating competing interests and building coalitions across boundaries',
        explanation: 'Effective stakeholder management in global contexts involves recognizing the diverse and sometimes competing interests of different stakeholder groups across different markets. It requires sophisticated mapping and prioritization, thoughtful navigation of competing interests, and the ability to build coalitions that span organizational and cultural boundaries to advance strategic objectives.'
      }
    ]
  }
];

// C2 Proficiency Level - Business Final Test
const finalTest: PracticalTest = {
  id: 'c2-b-final',
  title: 'Executive-Level Business Communication',
  description: 'Demonstrate mastery of sophisticated business communication at the executive level',
  type: 'writing', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your mastery of executive-level business communication at the C2 level.',
  criteria: [
    'Comprehensive strategic analysis of business opportunities and risks',
    'Sophisticated understanding of global business dynamics',
    'Executive-level clarity, precision, and persuasiveness',
    'Nuanced consideration of diverse stakeholder perspectives',
    'Masterful organization of complex information'
  ],
  minScore: 85,
  sections: [
    {
      id: 'c2-b-final-s1',
      title: 'Strategic Business Analysis',
      type: 'reading',
      description: 'Analyze complex business case information and identify strategic implications',
      prompt: 'Review the attached business case study about a global technology company facing disruption from new market entrants and changing consumer preferences. Analyze the company\'s current market position, identify key strategic challenges, and evaluate the options presented by the management team. Your analysis should demonstrate sophisticated business acumen and critical thinking.',
      text: `# NexGen Technologies: Strategic Crossroads

## Company Background
NexGen Technologies is a global technology company with annual revenue of $12 billion. Founded in 1995, the company initially specialized in enterprise hardware solutions before expanding into software and services. Its current business portfolio includes:

- Enterprise Hardware (45% of revenue): Servers, storage systems, and networking equipment
- Enterprise Software (30% of revenue): Security, data management, and analytics solutions
- Professional Services (15% of revenue): Implementation, integration, and managed services
- Consumer Products (10% of revenue): Premium laptops and accessories

The company has historically maintained strong profit margins (18-22% operating margin) through technological differentiation and premium positioning. NexGen has operations in 35 countries, with headquarters in Boston and major development centers in the United States, India, and Germany.

## Current Market Position

### Strengths
- Strong brand reputation for reliability and performance in enterprise markets
- Extensive global customer base across multiple industries
- Robust intellectual property portfolio (1,200+ patents)
- Healthy balance sheet with $3.5 billion in cash and minimal debt
- Established relationships with Fortune 500 companies

### Weaknesses
- Legacy cost structure with high fixed costs
- Slow product development cycles (12-18 months)
- Limited presence in high-growth emerging markets
- Fragmented software portfolio from multiple acquisitions
- Declining margins in hardware business

## Market Dynamics and Disruption

NexGen faces significant disruption on multiple fronts:

1. **Cloud Computing Shift**: Enterprise customers are rapidly migrating from on-premises infrastructure to cloud-based solutions. This transition is accelerating, with IDC projecting that 60% of enterprise IT spending will be cloud-based by 2025, up from 35% today.

2. **New Competitors**: Cloud-native startups are gaining market share with more agile development approaches and consumption-based pricing models. These competitors operate with fundamentally different cost structures and business models.

3. **Changing Customer Preferences**: Enterprise buyers increasingly prefer:
   - Subscription-based offerings over capital expenditures
   - Integrated solutions over point products
   - Self-service procurement and implementation
   - Faster innovation cycles with continuous updates

4. **Technological Shifts**: Emerging technologies including AI/ML, edge computing, and quantum computing are creating new market opportunities but require significant R&D investment and different technical capabilities.

## Financial Trends

| Business Segment | 3-Year Revenue CAGR | Current Operating Margin | Projected 5-Year Market Growth |
|------------------|---------------------|--------------------------|--------------------------------|
| Enterprise Hardware | -5% | 15% (declining) | -2% |
| Enterprise Software | +8% | 28% | +12% |
| Professional Services | +3% | 20% | +5% |
| Consumer Products | -2% | 12% (volatile) | +1% |

## Strategic Options

The management team has developed three potential strategic options:

### Option 1: Accelerate Cloud Transformation
- Aggressively shift business model toward cloud-based offerings
- Acquire 2-3 cloud-native software companies ($1.5-2B investment)
- Restructure hardware business for profitability over growth
- Implement subscription pricing across all product lines
- Estimated 3-year investment: $3.5 billion
- Expected outcome: Initial revenue decline followed by 10-12% growth by year 4

### Option 2: Focus and Specialize
- Divest consumer products division and non-core software assets
- Double down on enterprise infrastructure for regulated industries with specific security and compliance requirements
- Develop specialized AI solutions for financial services, healthcare, and government sectors
- Form strategic partnerships for cloud integration
- Estimated 3-year investment: $1.8 billion
- Expected outcome: Stable 5-7% growth with improved margins

### Option 3: Conglomerate Approach
- Maintain current business portfolio but operate divisions more independently
- Implement holding company structure with separate P&Ls
- Pursue targeted acquisitions in adjacent markets
- Gradually evolve business mix through capital allocation
- Estimated 3-year investment: $2.2 billion
- Expected outcome: Modest 3-5% growth with stable margins

## Key Considerations

- The company's stock has underperformed the tech sector by 25% over the past three years
- Several activist investors have recently taken positions in the company
- The current CEO is retiring in 18 months
- Employee attrition has increased to 15% annually, with higher rates among software engineers
- The company's debt capacity would allow for additional borrowing of up to $5 billion while maintaining investment-grade rating`,
      criteria: [
        'Sophisticated analysis of complex business information',
        'Identification of implicit strategic implications',
        'Evaluation of business options against multiple criteria',
        'Understanding of global market dynamics',
        'Recognition of stakeholder considerations'
      ],
      weight: 25
    },
    {
      id: 'c2-b-final-s2',
      title: 'Executive Communication',
      type: 'writing',
      description: 'Craft a sophisticated executive communication for multiple stakeholders',
      prompt: 'You are the CEO of a global company facing a significant strategic decision: whether to expand into an emerging market with high growth potential but significant political and economic risks. Write a 300-350 word executive communication that could serve as both an internal briefing for your board of directors and a framework for external stakeholder communications. Your response should demonstrate sophisticated business analysis, strategic thinking, and executive-level communication skills.',
      criteria: [
        'Executive-level clarity, precision, and persuasiveness',
        'Balanced presentation of options with clear recommendations',
        'Elegant and impactful language appropriate for C-suite communication',
        'Nuanced consideration of diverse stakeholder perspectives',
        'Masterful organization of complex information'
      ],
      weight: 35
    },
    {
      id: 'c2-b-final-s3',
      title: 'Crisis Communication Simulation',
      type: 'speaking',
      description: 'Respond to a business crisis scenario with executive-level communication',
      prompt: 'Listen to the following news report about a crisis affecting your company: a major data breach has exposed customer information and is receiving significant media attention. Record a 3-minute executive response that addresses key stakeholders (customers, employees, investors, and regulators). Your response should demonstrate leadership, strategic thinking, and sophisticated crisis communication skills.',
      audioUrl: '/audio/c2-business-crisis.mp3',
      hiddenText: `Breaking news this hour: Global financial services provider FinSecure is facing a major crisis after confirming a significant data breach affecting an estimated 4.7 million customers worldwide. According to a statement released by the company just hours ago, unauthorized access to customer data occurred over a three-month period before being detected by the company's security team last week.

The compromised information includes names, email addresses, phone numbers, and in some cases, transaction histories. While FinSecure claims that complete financial account details and passwords were not accessed, cybersecurity experts we've spoken with express concern that the exposed information could still put customers at risk for sophisticated phishing attempts and identity theft.

This breach comes at a particularly challenging time for FinSecure, which recently launched its new digital banking platform and has been aggressively expanding into Asian markets. The company's stock has already fallen 8% in after-hours trading following the announcement.

Regulatory authorities in multiple countries have been notified, with the European Data Protection Board already announcing a formal investigation into potential violations of GDPR requirements. In the United States, several senators have called for congressional hearings on the matter.

Consumer advocacy groups are questioning why it took FinSecure nearly a week to publicly disclose the breach after its discovery, and whether the company followed proper notification protocols. Several class-action lawsuits have already been filed in U.S. courts.

FinSecure CEO James Reynolds is expected to make a public statement addressing the situation within the next hour. The company faces mounting pressure to explain how the breach occurred, what specific measures are being taken to secure customer data, and how affected customers will be protected from potential harm resulting from their exposed information.

For more on this developing story, stay tuned to Business Network News. I'm Catherine Winters reporting.`,
      criteria: [
        'Immediate and appropriate crisis response strategy',
        'Clear prioritization of stakeholder concerns',
        'Balanced transparency and protection of company interests',
        'Confident and authoritative delivery',
        'Strategic framing of next steps and resolution path'
      ],
      weight: 40
    }
  ]
};

// C2 Proficiency Level - Business Practical Test
const practicalTest: PracticalTest = {
  id: 'c2-b-practical',
  title: 'Strategic Communication Case Analysis',
  description: 'Demonstrate your ability to analyze and develop sophisticated communication strategies for complex business situations',
  type: 'speaking',
  prompt: 'You are a senior communication advisor for a multinational corporation facing a complex situation: the company needs to announce a major restructuring that will involve closing some regional offices while expanding others, resulting in both job losses and new opportunities. Different stakeholders (employees, investors, local communities, and media) have different concerns and information needs.\n\nPrepare a 4-5 minute strategic communication analysis addressing:\n1. Key stakeholder analysis and their primary concerns\n2. Potential communication challenges and sensitivities\n3. Recommended communication approach, including timing, messaging, and channels\n4. How you would tailor the message for at least two different stakeholder groups\n5. How you would measure the effectiveness of your communication strategy\n\nYour response should demonstrate sophisticated understanding of strategic communication principles and global business awareness.',
  criteria: [
    'Comprehensive stakeholder analysis with nuanced understanding of diverse perspectives',
    'Sophisticated identification of communication challenges and sensitivities',
    'Strategic approach to message development, timing, and channel selection',
    'Masterful message tailoring for different audiences while maintaining consistency',
    'Thoughtful approach to measuring communication effectiveness',
    'Executive-level language and delivery',
    'Demonstration of global business awareness and cultural sensitivity'
  ],
  minScore: 80
};

// Export the complete lesson structure
export const c2BusinessLesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};