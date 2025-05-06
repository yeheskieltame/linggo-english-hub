import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// C2 Proficiency Level - Academic Pathway Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'c2-a-s1',
    title: 'Advanced Academic Discourse',
    description: 'Master sophisticated techniques for participating in high-level academic discussions and debates',
    content: `This lesson focuses on developing mastery of academic discourse at the highest level, enabling you to participate effectively in scholarly debates, conferences, and advanced academic discussions.

Characteristics of Advanced Academic Discourse:
- Precision and nuance in articulating complex theoretical positions
- Sophisticated engagement with scholarly traditions and debates
- Integration of multiple theoretical frameworks and perspectives
- Rigorous evaluation of methodological approaches and evidence
- Contribution to knowledge creation through original insights

Participating in Scholarly Debates:
1. Position development
   - Situating your argument within existing scholarly conversations
   - Identifying theoretical tensions and unresolved questions
   - Developing nuanced positions that acknowledge complexity
   - Anticipating counterarguments and limitations
   - Articulating the significance of your contribution

2. Argumentation techniques
   - Constructing multi-layered arguments with supporting evidence
   - Employing both deductive and inductive reasoning appropriately
   - Using analogical reasoning and thought experiments effectively
   - Identifying and addressing potential logical fallacies
   - Balancing theoretical abstraction with concrete application

3. Critical engagement
   - Evaluating the internal consistency of theoretical frameworks
   - Assessing the quality and interpretation of evidence
   - Identifying unstated assumptions and implications
   - Distinguishing between conceptual and empirical claims
   - Recognizing paradigmatic commitments and their influence

4. Scholarly dialogue
   - Building constructively on others' contributions
   - Challenging ideas respectfully and productively
   - Seeking clarification through sophisticated questioning
   - Acknowledging the value in opposing viewpoints
   - Synthesizing diverse perspectives into new insights

Advanced Conference Participation:
1. Presentation strategies
   - Crafting presentations for expert academic audiences
   - Balancing theoretical depth with clarity and accessibility
   - Anticipating discipline-specific questions and concerns
   - Managing time effectively while conveying complex ideas
   - Using visual aids to illuminate rather than duplicate content

2. Q&A techniques
   - Listening carefully to identify the core of complex questions
   - Responding with appropriate depth and precision
   - Acknowledging limitations while maintaining scholarly authority
   - Redirecting misunderstandings constructively
   - Using questions as opportunities to extend your argument

3. Panel discussions
   - Connecting your contributions to other panelists' points
   - Identifying points of convergence and divergence
   - Maintaining focus on central questions despite tangents
   - Balancing prepared remarks with spontaneous engagement
   - Managing time and space equitably

Language for Advanced Academic Discourse:
1. Theoretical positioning
   - "Building on Smith's conceptualization of X, while addressing the limitations identified by Jones..."
   - "This approach integrates elements from both constructivist and critical realist paradigms..."
   - "While conventional approaches to X have emphasized Y, I propose a reframing that centers Z..."

2. Methodological discussion
   - "The strength of this methodological approach lies in its ability to capture X, though it necessarily sacrifices Y..."
   - "These findings must be interpreted within the constraints of the study's epistemological commitments..."
   - "The triangulation of methods A and B allows us to address the limitations inherent in each approach..."

3. Scholarly critique
   - "While this framework offers valuable insights into X, it may inadvertently reproduce problematic assumptions about Y..."
   - "The author's interpretation of these findings is compelling, but alternative readings might suggest..."
   - "This analysis would be strengthened by engaging more deeply with the literature on X, particularly recent work that challenges..."

4. Synthesizing perspectives
   - "These seemingly contradictory findings can be reconciled by considering the mediating role of X..."
   - "By reframing the debate from X to Y, we can see that these positions are not necessarily incompatible..."
   - "Integrating insights from fields A and B offers a more comprehensive understanding than either can provide alone..."

Remember that advanced academic discourse is characterized not by complexity for its own sake, but by the ability to navigate complexity with clarity and precision, and to contribute meaningfully to scholarly understanding through rigorous, nuanced engagement with ideas.`,
    videoId: 'LD2_0nQpRkU',
    examples: [
      {
        english: "Conference presentation introduction: \"This paper interrogates the conceptual boundaries between agency and structure in contemporary social theory, with particular attention to how these constructs operate in empirical studies of educational mobility. Drawing on critical realist ontology while incorporating insights from Bourdieusian field theory, I propose a theoretical framework that transcends the traditional agency-structure dichotomy by reconceptualizing agency as emergent from, yet irreducible to, structural conditions. This approach offers analytical advantages over both methodological individualism and structural determinism, as I will demonstrate through a critical examination of three influential studies in the educational mobility literature.\"",
        indonesian: "Pengantar presentasi konferensi: \"Makalah ini menginterogasi batas-batas konseptual antara agensi dan struktur dalam teori sosial kontemporer, dengan perhatian khusus pada bagaimana konstruksi ini beroperasi dalam studi empiris mobilitas pendidikan. Dengan mengacu pada ontologi realis kritis sambil memasukkan wawasan dari teori lapangan Bourdieusian, saya mengusulkan kerangka teoretis yang melampaui dikotomi agensi-struktur tradisional dengan mengkonseptualisasi ulang agensi sebagai muncul dari, namun tidak dapat direduksi menjadi, kondisi struktural. Pendekatan ini menawarkan keunggulan analitis dibandingkan individualisme metodologis dan determinisme struktural, seperti yang akan saya tunjukkan melalui pemeriksaan kritis terhadap tiga studi berpengaruh dalam literatur mobilitas pendidikan.\""
      },
      {
        english: "Response to a methodological critique: \"Your critique raises important questions about the epistemological assumptions underlying our mixed-methods approach. I acknowledge that integrating quantitative network analysis with interpretive ethnographic methods creates tensions, particularly regarding how we conceptualize causality. However, rather than viewing this as a fundamental incompatibility, we've approached it as a productive tension that allows us to illuminate different dimensions of the phenomenon. The network analysis identifies structural patterns that would remain invisible to ethnographic observation alone, while the ethnographic component provides depth and context that gives meaning to those patterns. That said, your point about the potential incommensurability of the validity claims across these methods is well-taken, and in the full paper, we address this more explicitly in our discussion of methodological limitations.\"",
        indonesian: "Respons terhadap kritik metodologis: \"Kritik Anda mengangkat pertanyaan penting tentang asumsi epistemologis yang mendasari pendekatan metode campuran kami. Saya mengakui bahwa mengintegrasikan analisis jaringan kuantitatif dengan metode etnografi interpretatif menciptakan ketegangan, terutama mengenai bagaimana kami mengkonseptualisasikan kausalitas. Namun, alih-alih memandangnya sebagai ketidakcocokan fundamental, kami mendekatinya sebagai ketegangan produktif yang memungkinkan kami untuk menerangi dimensi fenomena yang berbeda. Analisis jaringan mengidentifikasi pola struktural yang akan tetap tidak terlihat bagi pengamatan etnografi saja, sementara komponen etnografi memberikan kedalaman dan konteks yang memberi makna pada pola-pola tersebut. Meskipun demikian, poin Anda tentang potensi ketidaksetaraan klaim validitas di seluruh metode ini diterima dengan baik, dan dalam makalah lengkap, kami membahas ini secara lebih eksplisit dalam diskusi kami tentang keterbatasan metodologis.\""
      },
      {
        english: "Theoretical synthesis in a panel discussion: \"Building on Professor Chen's analysis of algorithmic governance and Dr. Patel's examination of digital citizenship, I'd suggest that we can productively reframe this discussion by considering what I term 'algorithmic subjectivity'—the emergent forms of agency and identity that arise through recursive interactions between human subjects and algorithmic systems. This concept helps us move beyond both techno-deterministic accounts that overstate algorithmic power and voluntaristic perspectives that overemphasize user agency. Instead, it directs our attention to the co-constitutive processes through which both algorithms and human subjects are continuously reconfigured through their interactions. This framework might help reconcile the seemingly contradictory empirical findings presented earlier, as it suggests that algorithmic effects are neither uniform nor predetermined, but rather contingent upon specific socio-technical configurations and the evolving forms of subjectivity they engender.\"",
        indonesian: "Sintesis teoretis dalam diskusi panel: \"Melanjutkan analisis Profesor Chen tentang tata kelola algoritmik dan pemeriksaan Dr. Patel tentang kewarganegaraan digital, saya ingin menyarankan bahwa kita dapat secara produktif membingkai ulang diskusi ini dengan mempertimbangkan apa yang saya sebut 'subjektivitas algoritmik'—bentuk-bentuk agensi dan identitas yang muncul melalui interaksi rekursif antara subjek manusia dan sistem algoritmik. Konsep ini membantu kita bergerak melampaui baik akun tekno-deterministik yang melebih-lebihkan kekuatan algoritmik maupun perspektif voluntaristik yang terlalu menekankan agensi pengguna. Sebaliknya, ini mengarahkan perhatian kita pada proses ko-konstitutif di mana baik algoritma maupun subjek manusia terus dikonfigurasi ulang melalui interaksi mereka. Kerangka ini mungkin membantu mendamaikan temuan empiris yang tampaknya kontradiktif yang disajikan sebelumnya, karena menunjukkan bahwa efek algoritmik tidak seragam atau telah ditentukan sebelumnya, tetapi lebih bergantung pada konfigurasi sosio-teknis spesifik dan bentuk-bentuk subjektivitas yang berkembang yang mereka hasilkan.\""
      },
      {
        english: "Scholarly critique in a conference Q&A: \"Thank you for this theoretically ambitious paper. I'm particularly intrigued by your reconceptualization of resilience as a relational rather than individual property. However, I wonder if this framework, despite its emphasis on relationality, still inadvertently reproduces neoliberal assumptions by focusing on adaptive capacity within existing systems rather than questioning the structural conditions that necessitate resilience in the first place. How might your approach address the critique, advanced by scholars like Evans and Reid, that resilience discourse can function as a form of governmentality that normalizes precarity and shifts responsibility for systemic failures onto individuals and communities?\"",
        indonesian: "Kritik ilmiah dalam sesi tanya jawab konferensi: \"Terima kasih atas makalah yang ambisius secara teoretis ini. Saya sangat tertarik dengan konseptualisasi ulang Anda tentang ketahanan sebagai properti relasional daripada individual. Namun, saya bertanya-tanya apakah kerangka ini, terlepas dari penekanannya pada relasionalitas, masih secara tidak sengaja mereproduksi asumsi neoliberal dengan berfokus pada kapasitas adaptif dalam sistem yang ada daripada mempertanyakan kondisi struktural yang memerlukan ketahanan di tempat pertama. Bagaimana pendekatan Anda dapat mengatasi kritik, yang dikemukakan oleh sarjana seperti Evans dan Reid, bahwa wacana ketahanan dapat berfungsi sebagai bentuk governmentality yang menormalkan prekaritas dan mengalihkan tanggung jawab atas kegagalan sistemik kepada individu dan komunitas?\""
      }
    ]
  },
  {
    id: 'c2-a-s2',
    title: 'Advanced Research Methodology',
    description: 'Develop sophisticated understanding of research design, methodology, and epistemological frameworks',
    content: `This lesson focuses on developing advanced understanding of research methodology at the highest academic level, enabling you to design rigorous research, critically evaluate methodological approaches, and engage with epistemological debates in your field.

Research Design at Advanced Levels:
- Integration of epistemological frameworks with methodological choices
- Sophisticated understanding of methodological traditions and innovations
- Critical awareness of the relationship between theory and method
- Recognition of how methodological choices shape knowledge production
- Ability to design research that addresses complex, multifaceted questions

Epistemological Frameworks:
1. Major paradigms
   - Positivism and post-positivism: Assumptions about objectivity, causality, and generalizability
   - Interpretivism and constructivism: Focus on meaning, context, and multiple realities
   - Critical theories: Emphasis on power, emancipation, and social transformation
   - Pragmatism: Concern with practical consequences and problem-solving
   - Post-structuralism: Attention to discourse, deconstruction, and fluid meanings

2. Epistemological considerations
   - Nature of knowledge claims: What constitutes valid knowledge?
   - Relationship between researcher and researched: How does positionality matter?
   - Role of values in inquiry: Can/should research be value-neutral?
   - Standards of quality: How is rigor conceptualized differently across paradigms?
   - Generalizability vs. transferability: What can we claim beyond our data?

Advanced Methodological Approaches:
1. Quantitative sophistication
   - Complex statistical modeling and assumptions
   - Causal inference in observational studies
   - Experimental and quasi-experimental designs
   - Measurement theory and instrument development
   - Big data approaches and computational methods

2. Qualitative depth
   - Ethnographic immersion and thick description
   - Phenomenological approaches to lived experience
   - Discourse and narrative analysis techniques
   - Case study methodology and theoretical generalization
   - Arts-based and participatory approaches

3. Mixed methods integration
   - Philosophical foundations for methodological pluralism
   - Typologies of mixed methods designs
   - Integration strategies beyond triangulation
   - Addressing tensions in mixed methods research
   - Quality criteria for integrated designs

4. Emerging methodologies
   - Digital and virtual ethnography
   - Visual and multimodal methodologies
   - Indigenous and decolonizing methodologies
   - Complexity and systems approaches
   - Transdisciplinary research designs

Methodological Critique and Evaluation:
1. Internal critique
   - Alignment between research questions and methods
   - Appropriateness of sampling strategies
   - Rigor in data collection and analysis
   - Transparency in research procedures
   - Reflexivity about limitations and constraints

2. Paradigmatic critique
   - Consistency with stated epistemological commitments
   - Awareness of paradigmatic assumptions
   - Appropriate standards of quality for the approach
   - Recognition of what remains invisible within the paradigm
   - Openness to alternative epistemological perspectives

Language for Methodological Discussion:
- Research design framing: "This study employs a sequential explanatory mixed methods design situated within a critical realist framework..."
- Methodological justification: "Given the exploratory nature of the research questions and the absence of established measures for this construct, an interpretive phenomenological approach was selected to..."
- Limitation acknowledgment: "While this methodology offers analytical depth regarding process mechanisms, it necessarily sacrifices breadth and statistical generalizability..."
- Epistemological positioning: "This research operates from a constructivist standpoint that recognizes knowledge as contextually situated and co-constructed through the research process..."
- Methodological innovation: "By adapting visual ethnographic techniques to digital environments, this study extends traditional methodological approaches to address emerging forms of social interaction..."

Remember that advanced methodological understanding involves not just technical mastery, but deep engagement with the philosophical underpinnings of research approaches and critical awareness of how methodological choices shape what can be known and claimed.`,
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "Research design description: \"This study employs a convergent parallel mixed methods design grounded in pragmatic epistemology to investigate the implementation of educational policy reforms in diverse institutional contexts. Quantitative data collection involves a stratified random sample of 120 schools across three districts, with multilevel modeling used to examine relationships between implementation fidelity, institutional characteristics, and student outcomes. Concurrently, qualitative case studies of eight purposively selected schools provide depth through semi-structured interviews with administrators and teachers, classroom observations, and document analysis. Integration occurs both at the methods level, through joint displays and case-variable matrices, and at the interpretive level, where quantitative patterns are explained through qualitative insights and qualitative findings are examined for transferability through quantitative results.\"",
        indonesian: "Deskripsi desain penelitian: \"Penelitian ini menggunakan desain metode campuran paralel konvergen yang didasarkan pada epistemologi pragmatis untuk menyelidiki implementasi reformasi kebijakan pendidikan dalam konteks institusional yang beragam. Pengumpulan data kuantitatif melibatkan sampel acak bertingkat dari 120 sekolah di tiga distrik, dengan pemodelan multilevel digunakan untuk memeriksa hubungan antara kesetiaan implementasi, karakteristik institusional, dan hasil siswa. Secara bersamaan, studi kasus kualitatif dari delapan sekolah yang dipilih secara purposif memberikan kedalaman melalui wawancara semi-terstruktur dengan administrator dan guru, observasi kelas, dan analisis dokumen. Integrasi terjadi baik pada tingkat metode, melalui tampilan bersama dan matriks kasus-variabel, dan pada tingkat interpretatif, di mana pola kuantitatif dijelaskan melalui wawasan kualitatif dan temuan kualitatif diperiksa untuk transferabilitas melalui hasil kuantitatif.\""
      },
      {
        english: "Methodological critique: \"While the authors employ sophisticated statistical techniques to address selection bias in their analysis of educational interventions, their reliance on a strictly post-positivist framework limits their ability to engage with the complex ways in which program implementation is shaped by institutional cultures and participant subjectivities. The propensity score matching approach, while technically rigorous within its paradigmatic assumptions, rests on the problematic assumption that all relevant confounding variables have been measured and accounted for. Moreover, the study's conceptualization of 'program effectiveness' through standardized outcome measures reflects an implicit values position that remains unacknowledged. A more epistemologically reflexive approach might complement these quantitative techniques with interpretive methods that could illuminate implementation processes and capture outcomes that escape standardized measurement.\"",
        indonesian: "Kritik metodologis: \"Meskipun para penulis menggunakan teknik statistik canggih untuk mengatasi bias seleksi dalam analisis mereka tentang intervensi pendidikan, ketergantungan mereka pada kerangka kerja post-positivis yang ketat membatasi kemampuan mereka untuk terlibat dengan cara-cara kompleks di mana implementasi program dibentuk oleh budaya institusional dan subjektivitas peserta. Pendekatan pencocokan skor kecenderungan, meskipun secara teknis ketat dalam asumsi paradigmatiknya, bertumpu pada asumsi problematik bahwa semua variabel membingungkan yang relevan telah diukur dan diperhitungkan. Selain itu, konseptualisasi studi tentang 'efektivitas program' melalui ukuran hasil yang distandarisasi mencerminkan posisi nilai implisit yang tetap tidak diakui. Pendekatan yang lebih refleksif secara epistemologis mungkin melengkapi teknik kuantitatif ini dengan metode interpretatif yang dapat menerangi proses implementasi dan menangkap hasil yang lolos dari pengukuran standar.\""
      },
      {
        english: "Epistemological positioning: \"This research is situated within a critical realist framework that recognizes the existence of an objective reality while acknowledging that our understanding of this reality is conceptually mediated and socially situated. This position allows us to investigate causal mechanisms operating at different levels—structural, institutional, and agential—while remaining attentive to how these mechanisms are interpreted and experienced by social actors. Unlike purely constructivist approaches, we maintain that some explanatory accounts more adequately represent underlying causal processes than others, while acknowledging that all knowledge claims are fallible and open to revision. This epistemological stance informs our retroductive methodology, which moves iteratively between observed patterns, theoretical explanations, and the critical testing of these explanations through both extensive and intensive research methods.\"",
        indonesian: "Posisi epistemologis: \"Penelitian ini ditempatkan dalam kerangka realis kritis yang mengakui keberadaan realitas objektif sambil mengakui bahwa pemahaman kita tentang realitas ini dimediasi secara konseptual dan ditempatkan secara sosial. Posisi ini memungkinkan kita untuk menyelidiki mekanisme kausal yang beroperasi pada tingkat yang berbeda—struktural, institusional, dan agensial—sambil tetap memperhatikan bagaimana mekanisme ini ditafsirkan dan dialami oleh aktor sosial. Tidak seperti pendekatan murni konstruktivis, kami mempertahankan bahwa beberapa penjelasan lebih memadai merepresentasikan proses kausal yang mendasari daripada yang lain, sambil mengakui bahwa semua klaim pengetahuan dapat salah dan terbuka untuk revisi. Sikap epistemologis ini menginformasikan metodologi retroduktif kami, yang bergerak secara iteratif antara pola yang diamati, penjelasan teoretis, dan pengujian kritis dari penjelasan ini melalui metode penelitian ekstensif dan intensif.\""
      },
      {
        english: "Methodological innovation description: \"This study introduces a novel methodological approach we term 'algorithmic ethnography,' which integrates computational methods with ethnographic techniques to investigate human-algorithm interactions in digital environments. Unlike traditional digital ethnography, which typically applies conventional ethnographic methods to online settings, algorithmic ethnography specifically examines how algorithms shape social experiences and how humans adapt to and influence algorithmic systems. Our approach involves three integrated components: first, technical analysis of algorithmic systems through code audits and reverse engineering; second, participant observation of user interactions with these systems in natural settings; and third, reflexive experimentation where researchers systematically vary their own interactions to observe algorithmic responses. This methodology addresses the challenge of studying sociotechnical systems where key actors (algorithms) are not directly observable through conventional means, while maintaining ethnography's commitment to understanding lived experience and meaning-making.\"",
        indonesian: "Deskripsi inovasi metodologis: \"Penelitian ini memperkenalkan pendekatan metodologis baru yang kami sebut 'etnografi algoritmik,' yang mengintegrasikan metode komputasi dengan teknik etnografi untuk menyelidiki interaksi manusia-algoritma di lingkungan digital. Tidak seperti etnografi digital tradisional, yang biasanya menerapkan metode etnografi konvensional ke pengaturan online, etnografi algoritmik secara khusus memeriksa bagaimana algoritma membentuk pengalaman sosial dan bagaimana manusia beradaptasi dengan dan memengaruhi sistem algoritmik. Pendekatan kami melibatkan tiga komponen terintegrasi: pertama, analisis teknis sistem algoritmik melalui audit kode dan rekayasa balik; kedua, observasi partisipan dari interaksi pengguna dengan sistem ini dalam pengaturan alami; dan ketiga, eksperimentasi refleksif di mana peneliti secara sistematis memvariasikan interaksi mereka sendiri untuk mengamati respons algoritmik. Metodologi ini mengatasi tantangan mempelajari sistem sosioteknis di mana aktor kunci (algoritma) tidak dapat diamati secara langsung melalui cara konvensional, sambil mempertahankan komitmen etnografi untuk memahami pengalaman hidup dan pembuatan makna.\""
      }
    ]
  }
];

// C2 Proficiency Level - Academic Pathway Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'c2-a-s1-quiz',
    title: 'Advanced Academic Discourse Quiz',
    description: 'Test your understanding of sophisticated academic discourse techniques',
    skillType: 'speaking',
    requiredScore: 85,
    questions: [
      {
        id: 'q1-c2as1',
        type: 'multiple-choice',
        question: 'Which approach best demonstrates sophisticated position development in academic discourse?',
        options: [
          'Taking an extreme position to provoke debate',
          'Avoiding any position that might be controversial',
          'Situating your argument within existing scholarly conversations while developing nuanced positions that acknowledge complexity',
          'Adopting the position of the most prestigious scholar in the field'
        ],
        correctAnswer: 'Situating your argument within existing scholarly conversations while developing nuanced positions that acknowledge complexity',
        explanation: 'Sophisticated position development involves understanding the scholarly context of your argument, identifying where and how your contribution fits within existing debates, and developing positions that recognize complexity rather than oversimplifying. This approach demonstrates both scholarly engagement and intellectual rigor.'
      },
      {
        id: 'q2-c2as1',
        type: 'multiple-choice',
        question: 'Which statement best exemplifies effective scholarly critique?',
        options: [
          '"This theory is fundamentally flawed and should be rejected."',
          '"While this framework offers valuable insights into cultural transmission processes, its emphasis on cognitive mechanisms may inadvertently marginalize the role of embodied practices and material artifacts in constituting cultural knowledge."',
          '"I disagree with this approach because it contradicts my preferred theoretical perspective."',
          '"This is an interesting theory that makes many good points."'
        ],
        correctAnswer: '"While this framework offers valuable insights into cultural transmission processes, its emphasis on cognitive mechanisms may inadvertently marginalize the role of embodied practices and material artifacts in constituting cultural knowledge."',
        explanation: 'This statement demonstrates effective scholarly critique by acknowledging the value in the work being critiqued, identifying a specific limitation (overemphasis on cognitive mechanisms), explaining why this is problematic (marginalization of embodied practices and material artifacts), and implicitly suggesting a more comprehensive approach. It is specific, substantive, and constructive rather than dismissive.'
      },
      {
        id: 'q3-c2as1',
        type: 'multiple-choice',
        question: 'What is the most effective approach to responding to questions after an academic conference presentation?',
        options: [
          'Providing the shortest possible answer to allow for more questions',
          'Defending your original points regardless of the critique',
          'Listening carefully to identify the core of complex questions, responding with appropriate depth, and acknowledging limitations while maintaining scholarly authority',
          'Redirecting all challenging questions to future research possibilities'
        ],
        correctAnswer: 'Listening carefully to identify the core of complex questions, responding with appropriate depth, and acknowledging limitations while maintaining scholarly authority',
        explanation: 'Effective responses to academic questions involve careful listening to understand what is really being asked, providing substantive answers that demonstrate your expertise, and honestly acknowledging limitations or areas for further development. This approach shows both scholarly integrity and confidence.'
      },
      {
        id: 'q4-c2as1',
        type: 'multiple-choice',
        question: 'Which approach best demonstrates sophisticated theoretical synthesis in academic discourse?',
        options: [
          'Selecting the single best theory and rejecting all alternatives',
          'Listing multiple theoretical perspectives without integration',
          'Identifying points of convergence and divergence across theoretical perspectives and developing an integrated framework that addresses limitations in existing approaches',
          'Combining elements from different theories without considering their compatibility'
        ],
        correctAnswer: 'Identifying points of convergence and divergence across theoretical perspectives and developing an integrated framework that addresses limitations in existing approaches',
        explanation: 'Sophisticated theoretical synthesis involves careful analysis of how different theoretical perspectives relate to each other, thoughtful integration that respects the integrity of component theories while addressing their limitations, and development of a framework that offers new insights beyond what any single theory provides.'
      },
      {
        id: 'q5-c2as1',
        type: 'multiple-choice',
        question: 'What characterizes effective participation in an academic panel discussion?',
        options: [
          'Focusing exclusively on presenting your own research regardless of the panel theme',
          'Agreeing with all points made by other panelists to maintain harmony',
          'Connecting your contributions to other panelists\' points, identifying areas of convergence and divergence, and maintaining focus on central questions',
          'Dominating the discussion to establish your expertise'
        ],
        correctAnswer: 'Connecting your contributions to other panelists\' points, identifying areas of convergence and divergence, and maintaining focus on central questions',
        explanation: 'Effective panel participation involves engaging with the contributions of other panelists rather than simply delivering prepared remarks, identifying both agreements and productive disagreements, and helping to maintain the intellectual focus of the discussion. This approach contributes to a coherent, insightful conversation rather than disconnected monologues.'
      }
    ]
  },
  {
    id: 'c2-a-s2-quiz',
    title: 'Advanced Research Methodology Quiz',
    description: 'Test your understanding of sophisticated research design and methodological approaches',
    skillType: 'reading',
    requiredScore: 85,
    questions: [
      {
        id: 'q1-c2as2',
        type: 'multiple-choice',
        question: 'Which statement best demonstrates sophisticated understanding of the relationship between epistemology and methodology?',
        options: [
          'Epistemology is irrelevant to methodological choices as long as methods are technically sound.',
          'All rigorous research must follow positivist epistemology and use quantitative methods.',
          'Epistemological frameworks inform methodological choices by shaping what counts as valid knowledge and how it can be obtained, with different paradigms offering distinct standards of quality and types of claims.',
          'Researchers should avoid epistemological questions and focus only on practical methodological issues.'
        ],
        correctAnswer: 'Epistemological frameworks inform methodological choices by shaping what counts as valid knowledge and how it can be obtained, with different paradigms offering distinct standards of quality and types of claims.',
        explanation: 'This statement demonstrates sophisticated understanding by recognizing that epistemology (theories of knowledge) fundamentally shapes methodology by influencing what researchers consider knowable, how knowledge can be obtained, what counts as evidence, and what types of claims can be made. It acknowledges that different epistemological frameworks have their own internal standards of rigor rather than privileging one approach.'
      },
      {
        id: 'q2-c2as2',
        type: 'multiple-choice',
        question: 'Which approach to mixed methods research demonstrates the most sophisticated understanding?',
        options: [
          'Using qualitative methods in a preliminary phase to inform the "real" quantitative research',
          'Conducting qualitative and quantitative components separately and presenting them in different sections without integration',
          'Designing integrated approaches where methods inform each other throughout the research process, with thoughtful consideration of how to address tensions between different epistemological assumptions',
          'Always giving equal weight to qualitative and quantitative components regardless of the research question'
        ],
        correctAnswer: 'Designing integrated approaches where methods inform each other throughout the research process, with thoughtful consideration of how to address tensions between different epistemological assumptions',
        explanation: 'This approach demonstrates sophisticated understanding of mixed methods by emphasizing genuine integration rather than mere combination, recognizing that methods can inform each other at multiple stages, and acknowledging that researchers must thoughtfully address potential epistemological tensions rather than ignoring them.'
      },
      {
        id: 'q3-c2as2',
        type: 'multiple-choice',
        question: 'Which statement best exemplifies sophisticated methodological critique?',
        options: [
          '"This study used qualitative methods, which are always less rigorous than quantitative approaches."',
          '"The experimental design is flawed because it doesn\'t use the latest statistical techniques."',
          '"While the longitudinal design offers analytical advantages for examining developmental trajectories, the study\'s reliance on self-report measures for key constructs introduces potential validity threats that are not adequately addressed. The authors\' post-positivist framework leads them to prioritize internal validity through sophisticated statistical controls, but at the expense of construct validity considerations that might be better addressed through methodological triangulation."',
          '"The sample size is too small to be meaningful."'
        ],
        correctAnswer: '"While the longitudinal design offers analytical advantages for examining developmental trajectories, the study\'s reliance on self-report measures for key constructs introduces potential validity threats that are not adequately addressed. The authors\' post-positivist framework leads them to prioritize internal validity through sophisticated statistical controls, but at the expense of construct validity considerations that might be better addressed through methodological triangulation."',
        explanation: 'This critique demonstrates sophistication by acknowledging strengths (longitudinal design) while identifying specific limitations (self-report measures, validity threats), connecting methodological choices to epistemological framework (post-positivism), analyzing how this framework shapes priorities (internal validity over construct validity), and suggesting constructive alternatives (methodological triangulation).'
      },
      {
        id: 'q4-c2as2',
        type: 'multiple-choice',
        question: 'What characterizes a sophisticated understanding of research quality across different methodological approaches?',
        options: [
          'Recognizing that all research should be evaluated using the same criteria of validity, reliability, and generalizability',
          'Understanding that qualitative research has no standards of rigor and is purely subjective',
          'Recognizing that different methodological traditions have developed distinct but equally rigorous quality criteria appropriate to their epistemological foundations and aims',
          'Believing that research quality is entirely subjective and cannot be evaluated'
        ],
        correctAnswer: 'Recognizing that different methodological traditions have developed distinct but equally rigorous quality criteria appropriate to their epistemological foundations and aims',
        explanation: 'This perspective demonstrates sophisticated understanding by recognizing that quality criteria are not universal but are connected to epistemological foundations and research aims. It acknowledges that different traditions (e.g., interpretive, critical, post-positivist) have developed their own legitimate standards of rigor rather than privileging one set of criteria.'
      },
      {
        id: 'q5-c2as2',
        type: 'multiple-choice',
        question: 'Which approach to research design demonstrates the most sophisticated understanding?',
        options: [
          'Selecting methods based solely on what is most commonly used in your field',
          'Always choosing mixed methods designs because they are inherently superior',
          'Designing research through careful alignment of epistemological framework, research questions, methodological approach, and specific methods, with critical awareness of the implications of these choices',
          'Selecting the most advanced statistical techniques regardless of research questions'
        ],
        correctAnswer: 'Designing research through careful alignment of epistemological framework, research questions, methodological approach, and specific methods, with critical awareness of the implications of these choices',
        explanation: 'This approach demonstrates sophisticated understanding by emphasizing alignment between all elements of research design, starting from epistemological foundations through to specific methods. It recognizes that methodological choices should be driven by research questions and philosophical commitments rather than convention or technical considerations alone, and acknowledges the need for critical awareness of how these choices shape knowledge production.'
      }
    ]
  }
];

// C2 Proficiency Level - Academic Final Test
const finalTest: PracticalTest = {
  id: 'c2-a-final',
  title: 'Advanced Academic Research Communication',
  description: 'Demonstrate mastery of sophisticated academic communication and research analysis',
  type: 'writing', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your mastery of advanced academic research communication at the C2 level.',
  criteria: [
    'Exceptional clarity in articulating complex concepts and theories',
    'Sophisticated integration of diverse scholarly perspectives',
    'Masterful use of academic conventions and disciplinary terminology',
    'Elegant and precise academic language with nuanced qualification',
    'Original and insightful contribution to academic discourse'
  ],
  minScore: 85,
  sections: [
    {
      id: 'c2-a-final-s1',
      title: 'Scholarly Literature Review',
      type: 'reading',
      description: 'Analyze and synthesize complex academic literature',
      prompt: 'Review the three scholarly abstracts provided on a complex theoretical topic. Write a 200-250 word synthesis that identifies the key theoretical frameworks, methodological approaches, and areas of scholarly debate. Your analysis should demonstrate sophisticated understanding of academic discourse and the ability to identify subtle differences in theoretical positions.',
      text: `# Abstract 1: "Reconceptualizing Agency in Digital Environments: A Post-Humanist Perspective"

This article challenges conventional humanist conceptualizations of agency that privilege human intentionality and autonomy, proposing instead a post-humanist framework for understanding agency in digital environments as distributed across heterogeneous networks of human and non-human actors. Drawing on actor-network theory and new materialist perspectives, I argue that digital technologies do not merely mediate human agency but actively constitute new forms of distributed agency through their algorithmic operations, material affordances, and emergent properties. Through a multi-sited ethnographic study of three algorithmic systems—a content recommendation engine, an automated hiring platform, and a predictive policing application—I demonstrate how agency emerges through complex socio-technical assemblages rather than residing in either human subjects or technological objects. This reconceptualization has significant implications for questions of responsibility, accountability, and ethics in digital societies, suggesting the need for new theoretical and methodological approaches that can account for the entangled nature of human and technological agency without collapsing into either technological determinism or human exceptionalism. The article concludes by proposing a relational ethics of distributed agency that acknowledges the asymmetrical power relations within socio-technical networks while avoiding both the abdication of human responsibility and the reinscription of humanist assumptions about autonomous subjectivity.

# Abstract 2: "Human Agency in the Age of Algorithms: Defending a Capabilities Approach"

This article argues for a robust defense of human agency in the face of increasingly pervasive algorithmic systems, developing a normative framework grounded in the capabilities approach. Against post-humanist accounts that dissolve the distinction between human and technological agency, I maintain that preserving a meaningful concept of human agency is essential for addressing the ethical and political challenges posed by digital technologies. Through critical analysis of contemporary algorithmic systems in three domains—social media, healthcare, and criminal justice—I demonstrate how these technologies can both enhance and undermine human capabilities for reasoned self-determination. Drawing on empirical research and philosophical analysis, I identify five key capabilities necessary for meaningful agency in algorithmic environments: informational self-determination, critical algorithmic literacy, effective contestation, collective governance, and technological reversibility. The article develops a mixed-methods approach combining institutional analysis, phenomenological investigation, and normative argumentation to examine how these capabilities are distributed across different social contexts and subject positions. Rather than conceptualizing agency as either entirely autonomous or fully determined, I propose understanding it as relationally constituted but irreducible to its socio-technical conditions. This approach offers conceptual resources for designing and governing algorithmic systems in ways that enhance rather than diminish human capabilities for self-determination and collective action.

# Abstract 3: "Beyond the Human/Technology Binary: Toward a Symmetrical Ontology of Agency"

This article develops a symmetrical ontology of agency that transcends the persistent binary between human and technological agency dominating both scholarly and public discourse on digital technologies. Drawing on process philosophy, science and technology studies, and indigenous ontologies, I argue that agency is neither a property that entities possess nor a capacity exercised by pre-existing subjects, but rather an emergent phenomenon constituted through ongoing processes of intra-action within socio-material assemblages. Through comparative analysis of three case studies—environmental sensing networks, machine learning systems in scientific discovery, and digital activism platforms—I demonstrate how different configurations of human and non-human elements enable and constrain particular forms of agency without privileging either human intentionality or technological causality as ontologically prior. Methodologically, the research employs a novel combination of computational network analysis, qualitative fieldwork, and philosophical inquiry to trace how agency materializes across diverse socio-technical arrangements. This symmetrical approach reveals how conventional humanist and instrumentalist frameworks systematically obscure the complex ways that agencies are constituted, distributed, and transformed in digital environments. The article concludes by exploring the ethical and political implications of this ontological reframing, suggesting that it opens new possibilities for responsible innovation and democratic governance beyond both techno-optimist and techno-pessimist positions that remain trapped within the human/technology binary.`,
      criteria: [
        'Sophisticated comprehension of complex theoretical concepts',
        'Identification of implicit scholarly debates and tensions',
        'Recognition of methodological strengths and limitations',
        'Ability to synthesize diverse perspectives into a coherent framework',
        'Advanced academic vocabulary and disciplinary terminology'
      ],
      weight: 30
    },
    {
      id: 'c2-a-final-s2',
      title: 'Research Proposal',
      type: 'writing',
      description: 'Develop a sophisticated research proposal on a complex topic',
      prompt: 'Write a 300-350 word research proposal on a complex topic in your field of interest. Your proposal should include a clear research question or thesis, theoretical framework, methodology or approach to analysis, anticipated findings or arguments, and significance to the field. Your writing should reflect C2-level academic language proficiency and scholarly sophistication.',
      criteria: [
        'Exceptional clarity in articulating complex research questions',
        'Sophisticated integration of theoretical frameworks',
        'Masterful description of methodological approaches',
        'Elegant and precise academic language with nuanced qualification',
        'Original and insightful contribution to academic discourse'
      ],
      weight: 40
    },
    {
      id: 'c2-a-final-s3',
      title: 'Academic Conference Presentation',
      type: 'speaking',
      description: 'Deliver a sophisticated academic presentation suitable for a scholarly conference',
      prompt: 'Prepare and record a 3-minute academic presentation as if you were presenting at a prestigious scholarly conference. Your presentation should introduce a complex theoretical concept or research finding, explain its significance to the field, address potential counterarguments or limitations, and suggest directions for future research. Use sophisticated academic language and presentation techniques appropriate for expert audiences.',
      hiddenText: `The following is a sample conference presentation introduction to help you understand the expected structure and level of academic discourse. You should NOT repeat this content but rather create your own original presentation on a theoretical concept or research finding of your choice.

"Reconceptualizing Methodological Nationalism: Toward a Transnational Epistemology of Migration

Good afternoon. In this presentation, I will introduce the concept of 'methodological transnationalism' as an alternative epistemological framework for migration studies, addressing the persistent limitations of methodological nationalism that continue to shape research design and theoretical development in the field.

As scholars have long recognized, methodological nationalism—the tendency to treat the nation-state as the natural container for social processes—has profoundly constrained our understanding of human mobility. While this critique is now well-established, I argue that existing alternatives remain inadequate for three reasons: First, they often replace nation-centric frameworks with other container models, merely shifting the unit of analysis without challenging container thinking itself. Second, they frequently retain implicit assumptions about territorial boundedness even while explicitly rejecting methodological nationalism. And third, they tend to privilege mobility over emplacement, creating a new binary rather than transcending the mobility/immobility dichotomy.

Drawing on three years of multi-sited ethnographic research with transnational families spanning Ecuador, the United States, and Spain, I develop an alternative epistemological framework that conceptualizes migration not as movement between discrete national containers but as constitutive of social fields that simultaneously transcend and are shaped by national boundaries. This approach reveals how migrants navigate multiple regulatory regimes, construct transnational care arrangements, and develop complex identities that cannot be adequately captured through methodologically nationalist perspectives.

The significance of this reconceptualization extends beyond migration studies to address fundamental questions about how we understand social processes in an interconnected world. By denaturalizing the nation-state as the primary unit of analysis without dismissing its continuing importance in shaping social reality, methodological transnationalism offers conceptual tools for examining how social phenomena are simultaneously deterritorialized and reterritorialized through complex global processes.

In the remainder of this presentation, I will elaborate the key dimensions of this framework, demonstrate its application through empirical cases from my research, address potential critiques, and suggest directions for future theoretical and methodological development."`,
      criteria: [
        'Masterful explanation of complex theoretical concepts',
        'Sophisticated academic language and disciplinary terminology',
        'Elegant organization of complex arguments and evidence',
        'Confident and authoritative scholarly presentation style',
        'Effective use of rhetorical techniques for academic audiences'
      ],
      weight: 30
    }
  ]
};

// C2 Proficiency Level - Academic Practical Test
const practicalTest: PracticalTest = {
  id: 'c2-a-practical',
  title: 'Advanced Academic Discourse Analysis',
  description: 'Demonstrate your ability to engage in sophisticated academic analysis and argumentation',
  type: 'writing',
  prompt: 'Select a scholarly article in your field of interest and write a 500-600 word critical analysis that demonstrates advanced academic discourse skills. Your analysis should:\n\n1. Briefly summarize the article\'s main argument and methodology\n2. Evaluate the theoretical framework and its application\n3. Assess the quality and interpretation of evidence\n4. Identify strengths and limitations of the research\n5. Suggest how the work could be extended or improved\n6. Discuss implications for theory, research, or practice in the field\n\nYour response should demonstrate sophisticated academic language, nuanced critical thinking, and the ability to engage with complex scholarly work in a balanced, insightful manner.',
  criteria: [
    'Accurate and concise summary of complex content',
    'Sophisticated evaluation of theoretical framework',
    'Nuanced assessment of evidence and methodology',
    'Balanced identification of strengths and limitations',
    'Insightful suggestions for extension or improvement',
    'Thoughtful discussion of broader implications',
    'Advanced academic vocabulary and sentence structures',
    'Appropriate use of hedging and qualification'
  ],
  minScore: 80
};

// Export the complete lesson structure
export const c2AcademicLesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};