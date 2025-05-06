import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// C1 Advanced Level Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'c1-s1',
    title: 'Advanced Academic Writing',
    description: 'Master sophisticated techniques for academic writing at an advanced level',
    content: `This lesson will help you develop advanced academic writing skills, focusing on sophisticated argumentation, nuanced expression, and scholarly conventions.

Characteristics of Advanced Academic Writing:
- Precision and clarity in expressing complex ideas
- Sophisticated vocabulary and sentence structures
- Nuanced argumentation with acknowledgment of complexity
- Critical engagement with scholarly discourse
- Meticulous attention to disciplinary conventions

Developing Complex Arguments:
1. Thesis development
   - Move beyond simple claims to complex, multi-faceted theses
   - Acknowledge the limitations and scope of your argument
   - Position your work within existing scholarly conversations
   - Articulate the significance and implications of your argument

2. Evidence and reasoning
   - Integrate multiple types of evidence (empirical, theoretical, textual)
   - Evaluate the quality and limitations of evidence
   - Develop sophisticated reasoning chains
   - Address potential counterarguments and alternative interpretations
   - Use qualifiers appropriately (may, might, suggests, indicates)

3. Analytical depth
   - Move beyond description to analysis, synthesis, and evaluation
   - Identify patterns, contradictions, and implications
   - Consider multiple perspectives and interpretations
   - Examine underlying assumptions and theoretical frameworks
   - Connect specific observations to broader principles

Advanced Structural Techniques:
- Complex thesis statements with multiple components
- Sophisticated organizational patterns (problem-solution, comparative, dialectical)
- Strategic use of topic sentences that advance the argument
- Effective transitions between complex ideas
- Conclusions that extend rather than merely summarize

Language for Sophisticated Academic Writing:
1. Hedging and qualifying
   - "The evidence suggests that..." rather than "The evidence proves that..."
   - "This approach may offer insights into..." rather than "This approach shows..."
   - "While X is generally associated with Y, certain cases indicate..."

2. Boosting and emphasizing
   - "The data clearly demonstrate..."
   - "It is particularly noteworthy that..."
   - "This finding is especially significant because..."

3. Concession and counterargument
   - "While some scholars argue X, this interpretation overlooks..."
   - "Although X is a compelling explanation, it fails to account for..."
   - "Proponents of X make valid points regarding Y; however..."

4. Synthesizing perspectives
   - "Smith's framework (2018), when considered alongside Jones's findings (2020), suggests that..."
   - "The apparent contradiction between X and Y can be reconciled by considering..."
   - "These divergent perspectives can be integrated through..."

Disciplinary Conventions:
- Citation practices specific to your field
- Discipline-specific terminology and concepts
- Expected organizational patterns
- Conventional sections and their functions
- Appropriate level of formality and objectivity

Revision Strategies for Advanced Writing:
- Global revision: Evaluate overall argument structure and coherence
- Paragraph-level revision: Assess topic development and transitions
- Sentence-level revision: Refine syntax for clarity and sophistication
- Word-level revision: Select precise terminology and eliminate redundancy
- Seek feedback from expert readers in your field

Remember that advanced academic writing is not about using unnecessarily complex language, but about expressing complex ideas with precision, nuance, and scholarly rigor.`,
    videoId: 'eGWO1ldEhtQ',
    examples: [
      {
        english: "Basic thesis: Social media has negative effects on teenagers.\n\nAdvanced thesis: While social media platforms offer unprecedented opportunities for connection and self-expression, their algorithmic design and attention-based business models may contribute to concerning patterns of anxiety, social comparison, and diminished well-being among adolescents—effects that appear to be moderated by pre-existing vulnerabilities, digital literacy, and the specific nature of platform engagement.",
        indonesian: "Tesis dasar: Media sosial memiliki efek negatif pada remaja.\n\nTesis lanjutan: Sementara platform media sosial menawarkan peluang koneksi dan ekspresi diri yang belum pernah terjadi sebelumnya, desain algoritmik dan model bisnis berbasis perhatian mereka dapat berkontribusi pada pola kekhawatiran, perbandingan sosial, dan kesejahteraan yang berkurang di kalangan remaja—efek yang tampaknya dimoderasi oleh kerentanan yang sudah ada sebelumnya, literasi digital, dan sifat spesifik dari keterlibatan platform."
      },
      {
        english: "Basic evidence use: A study found that students who used laptops in class had lower test scores.\n\nAdvanced evidence use: While Sana et al. (2013) demonstrated a negative correlation between laptop use and test performance in lecture-based courses, subsequent research by Martinez (2019) suggests this relationship is mediated by the nature of the learning task, instructional design, and students' metacognitive strategies. These findings align with Mueller and Oppenheimer's (2014) theoretical framework proposing that digital tools may enhance learning when deployed for generative rather than merely transcriptive purposes.",
        indonesian: "Penggunaan bukti dasar: Sebuah studi menemukan bahwa siswa yang menggunakan laptop di kelas memiliki nilai tes yang lebih rendah.\n\nPenggunaan bukti lanjutan: Sementara Sana et al. (2013) menunjukkan korelasi negatif antara penggunaan laptop dan kinerja tes dalam kursus berbasis kuliah, penelitian selanjutnya oleh Martinez (2019) menunjukkan bahwa hubungan ini dimediasi oleh sifat tugas pembelajaran, desain instruksional, dan strategi metakognitif siswa. Temuan ini sejalan dengan kerangka teoretis Mueller dan Oppenheimer (2014) yang mengusulkan bahwa alat digital dapat meningkatkan pembelajaran ketika digunakan untuk tujuan generatif daripada hanya tujuan transkriptif."
      },
      {
        english: "Basic counterargument: Some people say online education is as good as traditional education, but studies show traditional education is better.\n\nAdvanced counterargument: Proponents of online education often cite its flexibility, accessibility, and personalization potential as evidence of its equivalence or superiority to traditional instruction (Allen & Seaman, 2017). While these advantages are significant, particularly for non-traditional and geographically isolated learners, this perspective tends to underestimate the complex social dimensions of learning documented in Vygotsky's sociocultural theory and subsequent empirical work on collaborative knowledge construction (Garrison, 2016). A more nuanced analysis suggests that educational modality should be evaluated not as universally superior or inferior, but in terms of its alignment with specific learning objectives, student characteristics, and pedagogical approaches.",
        indonesian: "Argumen tandingan dasar: Beberapa orang mengatakan pendidikan online sama baiknya dengan pendidikan tradisional, tetapi studi menunjukkan pendidikan tradisional lebih baik.\n\nArgumen tandingan lanjutan: Pendukung pendidikan online sering mengutip fleksibilitas, aksesibilitas, dan potensi personalisasinya sebagai bukti kesetaraan atau keunggulannya dibandingkan instruksi tradisional (Allen & Seaman, 2017). Meskipun keunggulan ini signifikan, terutama bagi pelajar non-tradisional dan terisolasi secara geografis, perspektif ini cenderung meremehkan dimensi sosial kompleks dari pembelajaran yang didokumentasikan dalam teori sosiokultural Vygotsky dan karya empiris selanjutnya tentang konstruksi pengetahuan kolaboratif (Garrison, 2016). Analisis yang lebih bernuansa menunjukkan bahwa modalitas pendidikan tidak boleh dievaluasi sebagai secara universal lebih unggul atau lebih rendah, tetapi dalam hal keselarasannya dengan tujuan pembelajaran spesifik, karakteristik siswa, dan pendekatan pedagogis."
      },
      {
        english: "Basic conclusion: In conclusion, climate change is a serious problem that needs immediate action.\n\nAdvanced conclusion: This analysis suggests that addressing climate change requires not merely technological solutions or policy adjustments, but a fundamental reconsideration of the relationship between economic systems, social structures, and ecological sustainability. By integrating insights from environmental science, political economy, and ethics, we can move beyond reductive approaches that have thus far proven inadequate to the scale and complexity of the challenge. Future research might productively explore how diverse knowledge systems, including indigenous ecological perspectives, could inform more holistic and equitable responses to our shared planetary crisis.",
        indonesian: "Kesimpulan dasar: Sebagai kesimpulan, perubahan iklim adalah masalah serius yang membutuhkan tindakan segera.\n\nKesimpulan lanjutan: Analisis ini menunjukkan bahwa mengatasi perubahan iklim tidak hanya memerlukan solusi teknologi atau penyesuaian kebijakan, tetapi pertimbangan ulang yang mendasar tentang hubungan antara sistem ekonomi, struktur sosial, dan keberlanjutan ekologis. Dengan mengintegrasikan wawasan dari ilmu lingkungan, ekonomi politik, dan etika, kita dapat bergerak melampaui pendekatan reduktif yang sejauh ini terbukti tidak memadai untuk skala dan kompleksitas tantangan. Penelitian masa depan mungkin secara produktif mengeksplorasi bagaimana sistem pengetahuan yang beragam, termasuk perspektif ekologis masyarakat adat, dapat menginformasikan respons yang lebih holistik dan adil terhadap krisis planet bersama kita."
      }
    ]
  },
  {
    id: 'c1-s2',
    title: 'Advanced Academic Speaking',
    description: 'Develop sophisticated speaking skills for academic presentations, discussions, and debates',
    content: `This lesson will help you develop advanced academic speaking skills for formal academic contexts such as conferences, seminars, and high-level discussions.

Key Aspects of Advanced Academic Speaking:
- Precision and clarity in articulating complex ideas
- Sophisticated vocabulary and grammatical structures
- Nuanced expression of arguments and counterarguments
- Effective use of rhetorical devices and techniques
- Appropriate handling of questions and challenges

Academic Presentation Skills:
1. Structure and organization
   - Develop compelling introductions that establish significance
   - Create clear conceptual frameworks to guide listeners
   - Balance theoretical discussion with concrete examples
   - Build cohesive arguments with explicit transitions
   - Craft conclusions that extend beyond summary to implications

2. Delivery techniques
   - Modulate pace, volume, and intonation for emphasis
   - Use strategic pauses to highlight key points
   - Maintain appropriate eye contact and body language
   - Employ gestures to reinforce conceptual relationships
   - Project confidence and authority while remaining approachable

3. Visual support
   - Design slides that complement rather than duplicate speech
   - Use visuals to clarify complex concepts or data
   - Ensure text is minimal and highly relevant
   - Incorporate effective data visualization techniques
   - Transition smoothly between visual elements

Advanced Discussion and Debate Skills:
1. Sophisticated argumentation
   - Articulate nuanced positions with appropriate qualifiers
   - Support claims with multiple types of evidence
   - Acknowledge limitations and counterarguments
   - Distinguish between facts, interpretations, and assumptions
   - Connect specific points to broader theoretical frameworks

2. Responsive engagement
   - Listen actively to understand rather than merely respond
   - Identify underlying assumptions in others' arguments
   - Ask incisive questions that probe deeper understanding
   - Acknowledge valid points before offering counterarguments
   - Build upon others' contributions constructively

3. Managing challenging situations
   - Respond to criticism without defensiveness
   - Clarify misunderstandings diplomatically
   - Redirect unproductive tangents tactfully
   - Mediate between conflicting perspectives
   - Acknowledge when you need to reconsider your position

Language for Academic Speaking:
1. Introducing presentations
   - "This presentation examines the intersection of X and Y, with particular attention to..."
   - "The central question guiding this research is..."
   - "I will argue that conventional approaches to X overlook the critical role of Y..."

2. Transitioning between sections
   - "Having established X, I will now turn to its implications for Y..."
   - "This framework provides a foundation for understanding the more complex case of..."
   - "These findings prompt us to reconsider the conventional wisdom regarding..."

3. Expressing nuanced positions
   - "While X is generally accepted, certain contexts suggest a more complex relationship..."
   - "The evidence points toward X, though important caveats must be acknowledged..."
   - "This pattern appears robust across multiple contexts, with some notable exceptions..."

4. Handling questions
   - "That's an insightful question that highlights the tension between X and Y..."
   - "Your question touches on a limitation of this approach that warrants further investigation..."
   - "I would distinguish between X and Y in addressing your question..."

Preparation Strategies:
- Research your audience's background and expectations
- Anticipate potential questions and counterarguments
- Practice articulating complex ideas concisely
- Record yourself to identify areas for improvement
- Seek feedback from peers or mentors in your field

Remember that advanced academic speaking is not about impressing with jargon, but about communicating sophisticated ideas with clarity, precision, and engagement.`,
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74ec9c409d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "Presentation introduction: \"This presentation examines the paradoxical relationship between digital connectivity and social isolation, drawing on three years of ethnographic research with young adults in urban settings. By integrating insights from media studies, social psychology, and urban sociology, I propose a new theoretical framework—what I term 'networked solitude'—to explain how technological mediation simultaneously facilitates and constrains meaningful social connection. This analysis challenges both techno-utopian narratives of digital liberation and pessimistic accounts of technological alienation, suggesting instead that contemporary social experience is characterized by new forms of ambivalent sociality that require more nuanced analytical approaches.\"",
        indonesian: "Pengantar presentasi: \"Presentasi ini mengkaji hubungan paradoks antara konektivitas digital dan isolasi sosial, berdasarkan tiga tahun penelitian etnografi dengan dewasa muda di lingkungan perkotaan. Dengan mengintegrasikan wawasan dari studi media, psikologi sosial, dan sosiologi perkotaan, saya mengusulkan kerangka teoretis baru—yang saya sebut 'kesendirian berjaringan'—untuk menjelaskan bagaimana mediasi teknologi secara bersamaan memfasilitasi dan membatasi koneksi sosial yang bermakna. Analisis ini menantang baik narasi tekno-utopis tentang pembebasan digital maupun pandangan pesimistis tentang alienasi teknologi, menyarankan sebaliknya bahwa pengalaman sosial kontemporer ditandai oleh bentuk-bentuk baru sosialitas ambivalen yang memerlukan pendekatan analitis yang lebih bernuansa.\""
      },
      {
        english: "Responding to a challenging question: \"You've raised an important methodological concern about the generalizability of findings from our relatively homogeneous sample. I acknowledge this limitation, which we've addressed in section 4.2 of the paper. While our primary data indeed comes from university students in Western contexts, we've attempted to mitigate this limitation in two ways: first, by incorporating comparative data from the Wong et al. study of East Asian participants; and second, by explicitly theorizing how cultural and socioeconomic factors might moderate the effects we've observed. That said, your critique highlights the need for more diverse sampling in future research, particularly regarding how these processes might manifest in collectivist cultural contexts.\"",
        indonesian: "Menanggapi pertanyaan yang menantang: \"Anda telah mengangkat kekhawatiran metodologis penting tentang generalisasi temuan dari sampel kami yang relatif homogen. Saya mengakui keterbatasan ini, yang telah kami bahas di bagian 4.2 makalah. Meskipun data primer kami memang berasal dari mahasiswa universitas dalam konteks Barat, kami telah mencoba mengurangi keterbatasan ini dengan dua cara: pertama, dengan memasukkan data komparatif dari studi Wong et al. tentang peserta Asia Timur; dan kedua, dengan secara eksplisit menteorikan bagaimana faktor budaya dan sosial ekonomi mungkin memoderasi efek yang telah kami amati. Meskipun demikian, kritik Anda menyoroti kebutuhan akan pengambilan sampel yang lebih beragam dalam penelitian masa depan, terutama mengenai bagaimana proses-proses ini mungkin terwujud dalam konteks budaya kolektivis.\""
      },
      {
        english: "Contributing to an academic discussion: \"Building on Professor Chen's analysis of algorithmic bias, I'd like to suggest that we need to distinguish between two forms of bias that often get conflated in these discussions. First, there's representational bias, where algorithms reproduce or amplify existing social prejudices through their training data. Second, there's what I would call structural bias, where even mathematically 'fair' algorithms can exacerbate inequality through their application within already unequal social systems. This distinction matters because the technical solutions appropriate for addressing representational bias—such as more diverse training data—may be insufficient for addressing structural bias, which requires broader sociotechnical interventions and perhaps fundamental reconsideration of where and how algorithmic decision-making should be deployed.\"",
        indonesian: "Berkontribusi pada diskusi akademis: \"Melanjutkan analisis Profesor Chen tentang bias algoritmik, saya ingin menyarankan bahwa kita perlu membedakan antara dua bentuk bias yang sering dicampuradukkan dalam diskusi ini. Pertama, ada bias representasional, di mana algoritma mereproduksi atau memperkuat prasangka sosial yang ada melalui data pelatihan mereka. Kedua, ada yang saya sebut bias struktural, di mana bahkan algoritma yang secara matematis 'adil' dapat memperburuk ketidaksetaraan melalui penerapannya dalam sistem sosial yang sudah tidak setara. Perbedaan ini penting karena solusi teknis yang tepat untuk mengatasi bias representasional—seperti data pelatihan yang lebih beragam—mungkin tidak cukup untuk mengatasi bias struktural, yang membutuhkan intervensi sosioteknis yang lebih luas dan mungkin pertimbangan ulang yang mendasar tentang di mana dan bagaimana pengambilan keputusan algoritmik harus diterapkan.\""
      },
      {
        english: "Concluding a presentation: \"To conclude, this research demonstrates that the relationship between climate policy and economic outcomes is considerably more complex than conventional models suggest. By incorporating distributional effects, innovation feedbacks, and institutional factors, we can better understand why similar policies produce divergent outcomes across different contexts. These findings have three main implications: First, policy design must be attentive to existing institutional configurations rather than assuming one-size-fits-all solutions. Second, transition costs and benefits are likely to be unevenly distributed, necessitating complementary policies to ensure just outcomes. Finally, our analytical frameworks themselves may need reconsideration to better capture the dynamic, non-linear nature of socio-technical transitions. As we face increasingly urgent environmental challenges, such nuanced understanding is not merely academically interesting but practically essential.\"",
        indonesian: "Mengakhiri presentasi: \"Sebagai kesimpulan, penelitian ini menunjukkan bahwa hubungan antara kebijakan iklim dan hasil ekonomi jauh lebih kompleks daripada yang disarankan oleh model konvensional. Dengan memasukkan efek distribusi, umpan balik inovasi, dan faktor institusional, kita dapat lebih memahami mengapa kebijakan serupa menghasilkan hasil yang berbeda di berbagai konteks. Temuan ini memiliki tiga implikasi utama: Pertama, desain kebijakan harus memperhatikan konfigurasi institusional yang ada daripada mengasumsikan solusi satu ukuran untuk semua. Kedua, biaya dan manfaat transisi kemungkinan akan didistribusikan secara tidak merata, memerlukan kebijakan pelengkap untuk memastikan hasil yang adil. Akhirnya, kerangka analitis kita sendiri mungkin perlu dipertimbangkan kembali untuk lebih baik menangkap sifat dinamis, non-linear dari transisi sosio-teknis. Saat kita menghadapi tantangan lingkungan yang semakin mendesak, pemahaman bernuansa seperti itu tidak hanya menarik secara akademis tetapi juga penting secara praktis.\""
      }
    ]
  }
];

// C1 Advanced Level Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'c1-s1-quiz',
    title: 'Advanced Academic Writing Quiz',
    description: 'Test your understanding of sophisticated academic writing techniques',
    skillType: 'writing',
    requiredScore: 80,
    questions: [
      {
        id: 'q1-c1s1',
        type: 'multiple-choice',
        question: 'Which of the following best exemplifies a complex, multi-faceted thesis statement?',
        options: [
          'Social media has both positive and negative effects on society.',
          'Climate change is caused by human activities and requires immediate action.',
          'While digital technologies have democratized information access, their algorithmic mediation simultaneously reinforces existing power structures and creates new forms of inequality that require both technical and regulatory interventions.',
          'Education is important for personal development and economic success.'
        ],
        correctAnswer: 'While digital technologies have democratized information access, their algorithmic mediation simultaneously reinforces existing power structures and creates new forms of inequality that require both technical and regulatory interventions.',
        explanation: 'This thesis statement is complex and multi-faceted because it acknowledges a tension (democratization vs. reinforcement of inequality), identifies multiple dimensions of the issue (power structures, algorithmic mediation), and suggests a nuanced approach to solutions (both technical and regulatory).'
      },
      {
        id: 'q2-c1s1',
        type: 'multiple-choice',
        question: 'Which sentence demonstrates the most effective use of hedging in academic writing?',
        options: [
          'This study proves that meditation reduces stress.',
          'The data suggests that meditation may reduce stress levels in certain populations, though more research is needed to establish causality.',
          'I think meditation probably helps with stress.',
          'Meditation reduces stress, as everyone knows.'
        ],
        correctAnswer: 'The data suggests that meditation may reduce stress levels in certain populations, though more research is needed to establish causality.',
        explanation: 'This sentence effectively uses hedging through phrases like "suggests," "may reduce," and "in certain populations," acknowledging the limitations of the evidence without undermining the significance of the findings. It also explicitly notes the need for further research to establish causality.'
      },
      {
        id: 'q3-c1s1',
        type: 'multiple-choice',
        question: 'Which of the following represents the most sophisticated approach to addressing counterarguments?',
        options: [
          'Ignoring opposing viewpoints to strengthen your own argument',
          'Briefly mentioning counterarguments but dismissing them as incorrect',
          'Acknowledging the validity of certain aspects of counterarguments while demonstrating why your position offers a more comprehensive or nuanced understanding',
          'Listing all possible counterarguments without evaluating their merits'
        ],
        correctAnswer: 'Acknowledging the validity of certain aspects of counterarguments while demonstrating why your position offers a more comprehensive or nuanced understanding',
        explanation: 'This approach demonstrates sophisticated engagement with opposing viewpoints by recognizing their merits rather than dismissing them outright, while still advancing your own argument by showing how it addresses limitations or offers additional insights not covered by the counterarguments.'
      },
      {
        id: 'q4-c1s1',
        type: 'multiple-choice',
        question: 'Which of the following conclusions most effectively extends beyond summary to broader implications?',
        options: [
          'In conclusion, this paper has discussed the three main causes of urban poverty.',
          'To summarize, we have seen that urban poverty has economic, social, and political dimensions.',
          'This analysis of urban poverty reveals the limitations of single-factor explanations and suggests that effective interventions must address the complex interplay of economic structures, social networks, and political institutions. Future research might productively explore how these factors manifest differently across various urban contexts, particularly in rapidly urbanizing regions of the Global South.',
          'In conclusion, urban poverty is a serious problem that needs more attention from policymakers.'
        ],
        correctAnswer: 'This analysis of urban poverty reveals the limitations of single-factor explanations and suggests that effective interventions must address the complex interplay of economic structures, social networks, and political institutions. Future research might productively explore how these factors manifest differently across various urban contexts, particularly in rapidly urbanizing regions of the Global South.',
        explanation: 'This conclusion goes beyond merely summarizing the paper\'s content to identify broader theoretical implications (limitations of single-factor explanations), practical applications (effective interventions), and directions for future research, with specific attention to contextual variations.'
      },
      {
        id: 'q5-c1s1',
        type: 'multiple-choice',
        question: 'Which revision strategy is most appropriate for improving the sophistication of academic writing?',
        options: [
          'Adding more specialized terminology and jargon throughout the paper',
          'Making all sentences longer and more complex',
          'Evaluating whether each paragraph advances the argument, refining transitions between ideas, and ensuring precise word choice that conveys nuance',
          'Removing all personal pronouns and writing exclusively in passive voice'
        ],
        correctAnswer: 'Evaluating whether each paragraph advances the argument, refining transitions between ideas, and ensuring precise word choice that conveys nuance',
        explanation: 'This strategy focuses on substantive improvements to the argument structure, coherence, and precision of expression rather than superficial changes like adding jargon or making sentences unnecessarily complex. Sophisticated academic writing is characterized by clarity and precision in expressing complex ideas, not by obscurity or verbosity.'
      }
    ]
  },
  {
    id: 'c1-s2-quiz',
    title: 'Advanced Academic Speaking Quiz',
    description: 'Test your understanding of sophisticated academic speaking techniques',
    skillType: 'speaking',
    requiredScore: 80,
    questions: [
      {
        id: 'q1-c1s2',
        type: 'multiple-choice',
        question: 'Which of the following best describes an effective introduction for an academic presentation?',
        options: [
          'A joke or anecdote to make the audience laugh',
          'A detailed literature review covering all previous research',
          'A clear statement of the research question, its significance, and how the presentation will address it, situated within the broader scholarly conversation',
          'A list of the presenter\'s qualifications and previous publications'
        ],
        correctAnswer: 'A clear statement of the research question, its significance, and how the presentation will address it, situated within the broader scholarly conversation',
        explanation: 'An effective academic presentation introduction establishes the focus and importance of the research, provides a roadmap for the audience, and contextualizes the work within the field. This approach immediately engages the audience with the intellectual content rather than peripheral matters.'
      },
      {
        id: 'q2-c1s2',
        type: 'multiple-choice',
        question: 'What is the most effective way to respond to a challenging question after an academic presentation?',
        options: [
          'Defend your original position vigorously and dismiss the criticism',
          'Acknowledge the validity of the question, relate it to your research, address it directly with available evidence, and note any limitations or areas for future investigation',
          'Redirect to a different topic that you\'re more comfortable discussing',
          'Simply state that you\'ll consider the question in future research'
        ],
        correctAnswer: 'Acknowledge the validity of the question, relate it to your research, address it directly with available evidence, and note any limitations or areas for future investigation',
        explanation: 'This approach demonstrates intellectual honesty and rigor by engaging seriously with the question, providing the best available answer based on evidence, and acknowledging limitations rather than overreaching or becoming defensive. It shows respect for the questioner while maintaining scholarly integrity.'
      },
      {
        id: 'q3-c1s2',
        type: 'multiple-choice',
        question: 'Which of the following best exemplifies sophisticated argumentation in an academic discussion?',
        options: [
          'Asserting your position forcefully and repeatedly',
          'Presenting a nuanced position that acknowledges complexity, supports claims with multiple types of evidence, addresses potential counterarguments, and connects specific points to broader theoretical frameworks',
          'Using as many technical terms as possible to impress the audience',
          'Agreeing with the most senior academic in the room'
        ],
        correctAnswer: 'Presenting a nuanced position that acknowledges complexity, supports claims with multiple types of evidence, addresses potential counterarguments, and connects specific points to broader theoretical frameworks',
        explanation: 'Sophisticated academic argumentation involves recognizing the complexity of issues rather than oversimplifying them, providing robust evidentiary support, anticipating and addressing counterarguments, and demonstrating how specific points connect to larger theoretical concerns. This approach shows depth of understanding and intellectual rigor.'
      },
      {
        id: 'q4-c1s2',
        type: 'multiple-choice',
        question: 'What is the most effective approach to visual aids in academic presentations?',
        options: [
          'Include as much information as possible on each slide to demonstrate thoroughness',
          'Use visuals that complement rather than duplicate your speech, with minimal text and clear visual elements that clarify complex concepts or data',
          'Avoid visual aids entirely and rely solely on verbal explanation',
          'Use elaborate animations and transitions to keep the audience engaged'
        ],
        correctAnswer: 'Use visuals that complement rather than duplicate your speech, with minimal text and clear visual elements that clarify complex concepts or data',
        explanation: 'Effective visual aids in academic presentations serve to enhance understanding of complex information rather than simply repeating what is said. They should be designed with clarity and purpose, using visual elements strategically to illustrate concepts, relationships, or data that might be difficult to convey through words alone.'
      },
      {
        id: 'q5-c1s2',
        type: 'multiple-choice',
        question: 'Which of the following best demonstrates how to build constructively on others\' contributions in an academic discussion?',
        options: [
          'Waiting for others to finish and then presenting your pre-prepared points regardless of what was said',
          'Politely acknowledging previous speakers before changing the subject to what you want to discuss',
          'Explicitly connecting your point to previous contributions, extending their ideas with additional evidence or perspectives, and acknowledging how their insights have informed your thinking',
          'Pointing out the flaws in previous contributions to show your superior understanding'
        ],
        correctAnswer: 'Explicitly connecting your point to previous contributions, extending their ideas with additional evidence or perspectives, and acknowledging how their insights have informed your thinking',
        explanation: 'Building constructively in academic discussions involves active listening and genuine engagement with others\' ideas, explicitly showing how your contribution relates to and extends what has already been said. This approach creates a collaborative intellectual environment where ideas can develop through dialogue rather than parallel monologues.'
      }
    ]
  }
];

// C1 Advanced Level Final Test
const finalTest: PracticalTest = {
  id: 'c1-final',
  title: 'Advanced Academic Discourse and Critical Analysis',
  description: 'Demonstrate your advanced English skills through multiple academic tasks',
  type: 'writing', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your advanced academic discourse and critical analysis skills at the C1 level.',
  criteria: [
    'Sophisticated use of advanced grammatical structures',
    'Effective use of academic vocabulary and nominalisation',
    'Critical analysis that demonstrates nuanced understanding',
    'Well-structured argumentation with clear thesis and supporting points',
    'Ability to synthesize complex information from multiple sources'
  ],
  minScore: 80,
  sections: [
    {
      id: 'c1-final-s1',
      title: 'Academic Text Analysis',
      type: 'reading',
      description: 'Analyze complex academic texts and identify rhetorical strategies',
      prompt: 'Read the following two excerpts from academic articles on artificial intelligence ethics. Analyze the rhetorical strategies, argumentative techniques, and underlying assumptions in each text. Compare and contrast how the authors frame their arguments and identify any potential biases or limitations in their approaches.',
      text: `# Excerpt 1: "The Imperative of Ethical Frameworks for Artificial Intelligence"

As artificial intelligence systems increasingly permeate critical domains of human society—from healthcare and criminal justice to financial services and employment—the establishment of robust ethical frameworks has emerged not merely as a philosophical luxury but as a practical necessity. The rapid advancement of AI capabilities, particularly in machine learning systems that operate as "black boxes" with limited explainability, presents unprecedented challenges to traditional notions of accountability, transparency, and human agency. These challenges demand immediate and comprehensive responses from policymakers, technologists, and ethicists alike.

The potential consequences of deploying inadequately governed AI systems are not merely theoretical but have already manifested in troubling ways: algorithmic discrimination in hiring processes, perpetuation of societal biases in criminal risk assessment, and privacy violations through increasingly sophisticated surveillance technologies. These documented harms disproportionately affect already marginalized communities, threatening to amplify existing social inequities unless deliberately counteracted through ethical intervention. The moral imperative is clear: we must establish binding ethical frameworks before deploying AI systems in sensitive domains.

Critics who advocate for "innovation-first" approaches that prioritize technological development over ethical constraints fundamentally misunderstand both the nature of the risks involved and the relationship between ethics and innovation. Ethical frameworks need not impede technological progress but rather channel it toward socially beneficial outcomes while mitigating foreseeable harms. Indeed, the integration of ethical considerations into AI development processes may ultimately enhance innovation by fostering public trust and preventing costly technological missteps that could trigger regulatory backlash or consumer rejection.

The path forward requires multidisciplinary collaboration to develop ethical frameworks that are simultaneously principled and pragmatic, addressing both universal values and context-specific concerns. These frameworks must be operationalized through concrete governance mechanisms, including standards for algorithmic impact assessments, requirements for meaningful transparency, and robust accountability structures that ensure human oversight of automated decision systems. The stakes could not be higher: the ethical governance of AI will significantly determine whether these powerful technologies ultimately enhance or diminish human flourishing.

# Excerpt 2: "Beyond Ethical Frameworks: Rethinking the Discourse on AI Governance"

The dominant discourse surrounding artificial intelligence ethics has become increasingly characterized by calls for comprehensive ethical frameworks and principles-based governance. While well-intentioned, this approach reflects several problematic assumptions that warrant critical examination. First, it presupposes that ethical challenges in AI can be adequately addressed through abstract principles rather than through the messy, contextual work of democratic deliberation and power redistribution. Second, it often treats ethics as a technical problem to be "solved" rather than as an ongoing process of negotiation among diverse stakeholders with legitimate differences in values and priorities.

The proliferation of ethical principles and frameworks—over 80 sets of AI principles have been published by various organizations in recent years—has not demonstrably improved AI governance in practice. This "principles proliferation" may actually serve to delay meaningful regulation while creating an illusion of ethical oversight. Many of these frameworks employ strategically ambiguous language that allows for multiple interpretations, enabling organizations to claim ethical compliance without substantively altering their practices. Moreover, the development of these frameworks has been dominated by technical experts and corporate interests from Global North countries, marginalizing perspectives from the Global South and from communities most vulnerable to AI harms.

Rather than focusing primarily on articulating ethical principles, we should redirect attention to the structural conditions that shape AI development and deployment. This includes examining the concentrated power of technology corporations, the economic incentives driving AI innovation, and the institutional arrangements that determine who benefits from and bears the risks of these technologies. Meaningful governance requires addressing these structural factors through democratically legitimate processes that center the experiences and interests of marginalized communities.

This is not to suggest that ethical reflection is unimportant, but rather that it must be coupled with political economy analysis and substantive democratization of technological governance. We should be skeptical of approaches that present ethics as a substitute for robust regulation or that frame AI governance primarily as a matter of technical expertise rather than as a fundamentally political question about how technological power should be distributed and controlled in a democratic society.`,
      criteria: [
        'Identification of sophisticated rhetorical strategies',
        'Recognition of implicit assumptions and biases',
        'Comparative analysis of argumentative techniques',
        'Critical evaluation of evidence quality and relevance',
        'Understanding of complex academic discourse'
      ],
      weight: 30
    },
    {
      id: 'c1-final-s2',
      title: 'Research Synthesis',
      type: 'writing',
      description: 'Synthesize information from multiple academic sources',
      prompt: 'Review the three research abstracts provided on the topic of climate change mitigation strategies. Write a 200-250 word synthesis that identifies the key findings, methodological approaches, and limitations across the studies. Conclude with a critical assessment of the current state of research in this area and identify gaps that future research should address.',
      criteria: [
        'Effective synthesis of complex information',
        'Identification of methodological strengths and limitations',
        'Critical comparison of research findings',
        'Advanced academic vocabulary and nominalisation',
        'Logical organization with appropriate discourse markers'
      ],
      weight: 35
    },
    {
      id: 'c1-final-s3',
      title: 'Academic Debate Response',
      type: 'speaking',
      description: 'Respond to a complex academic argument with sophisticated counterarguments',
      prompt: 'Listen to the following excerpt from an academic lecture on economic inequality. Record a 3-minute response that analyzes the speaker\'s main arguments, evaluates the evidence presented, and develops a sophisticated counterargument supported by relevant examples and theoretical frameworks. Use advanced academic language and appropriate discourse markers.',
      audioUrl: '/audio/c1-economics-lecture.mp3',
      hiddenText: `The persistent rise in economic inequality across advanced economies over the past four decades represents one of the most significant socioeconomic transformations of our era. While some degree of inequality may be inevitable and even necessary in market economies, the extreme concentration of wealth and income we now observe raises profound questions about economic efficiency, social cohesion, and democratic governance.

The empirical evidence on rising inequality is unambiguous. In the United States, the share of income accruing to the top 1% has more than doubled since 1980, while real wages for the bottom half of earners have stagnated. Similar patterns, though less extreme, are evident across most OECD countries. This divergence represents a reversal of the "Great Compression" that characterized the mid-20th century, when inequality declined substantially across advanced economies.

The dominant explanation for this trend, particularly in mainstream economics, attributes rising inequality primarily to technological change and globalization—what we might call "market forces." According to this narrative, skill-biased technological change has increased the premium for highly educated workers while automation has eliminated many middle-skill occupations. Simultaneously, globalization has exposed less-skilled workers in advanced economies to competition from lower-wage countries, further depressing their earnings.

While these factors certainly contribute to inequality, this market-centric explanation is fundamentally incomplete and potentially misleading. It fails to account for the substantial variation in inequality trends across countries with similar levels of technological advancement and global integration. For instance, Germany and Japan have experienced much less dramatic increases in inequality than the United States or the United Kingdom, despite comparable exposure to technological change and globalization.

This cross-national variation suggests that institutional and policy factors play a crucial role in mediating market forces. Countries that have maintained stronger labor market institutions, more progressive tax systems, and more comprehensive social safety nets have generally experienced less dramatic increases in inequality. The decline of union density, the erosion of minimum wage values, the shift toward less progressive taxation, and the weakening of other redistributive mechanisms appear to be major drivers of rising inequality.

Moreover, the market-forces narrative tends to naturalize inequality as an inevitable outcome of technological progress and globalization, obscuring how political choices and power dynamics shape distributional outcomes. The very rules governing markets—from intellectual property regimes to corporate governance structures to financial regulations—are not natural or inevitable but rather the product of political decisions that influence how the gains from economic activity are distributed.

Understanding inequality as substantially shaped by institutions and policies, rather than merely by impersonal market forces, has profound implications for how we address this challenge. It suggests that rising inequality is not an inevitable consequence of modernization but rather a product of specific policy choices that can be altered through democratic processes.`,
      criteria: [
        'Sophisticated analysis of complex arguments',
        'Development of nuanced counterarguments',
        'Integration of relevant theoretical frameworks',
        'Advanced academic vocabulary and expressions',
        'Fluid delivery with appropriate intonation and stress'
      ],
      weight: 35
    }
  ]
};

// Export the complete lesson structure
export const c1Lesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};