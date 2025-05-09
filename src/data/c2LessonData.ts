// Import the necessary types
import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// C2 Proficiency Level Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'c2-s1',
    title: 'Advanced Linguistic Analysis',
    description: 'Explore advanced concepts in linguistic analysis and nuanced language interpretation',
    content: `In this lesson, we delve into advanced linguistic analysis, focusing on nuanced language interpretation and the subtle mechanics of discourse. We will explore how context, subtext, and socio-cultural factors influence meaning.

**Key Concepts:**

1.  **Pragmatics:** The study of how context contributes to meaning.
    *   **Speech Acts:** Actions performed via utterances (e.g., promising, requesting).
    *   **Implicature:** What is suggested but not explicitly stated.

2.  **Discourse Analysis:** Examining language in use, focusing on connected speech or writing.
    *   **Cohesion:** Linguistic links that create unity (e.g., reference, conjunction).
    *   **Coherence:** Semantic unity and logical flow.

3.  **Sociolinguistics:** The study of language in relation to society.
    *   **Language Variation:** How language varies across different social groups.
    *   **Code-Switching:** Alternating between languages or dialects in conversation.

4.  **Semantics:** The study of meaning in language.
    *   **Lexical Semantics:** The meaning of words and their relationships.
    *   **Compositional Semantics:** How the meaning of phrases and sentences is constructed.

**Advanced Techniques:**

*   **Critical Discourse Analysis (CDA):** Examines how power relations are expressed through language.
*   **Corpus Linguistics:** Using large collections of text to analyze language patterns.
*   **Neurolinguistics:** Investigating the neural mechanisms underlying language processing.

**Practical Applications:**

*   **Interpreting complex texts:** Understanding legal documents, academic papers, and literary works.
*   **Analyzing political rhetoric:** Identifying persuasive techniques and biases.
*   **Improving cross-cultural communication:** Recognizing and addressing potential misunderstandings.

Understanding these advanced concepts will enable you to interpret language with greater precision and insight, enhancing your ability to communicate effectively in diverse contexts.`,
    examples: [
      {
        english: "The implicature of his statement suggested a hidden agenda.",
        indonesian: "Implikatur dari pernyataannya mengisyaratkan agenda tersembunyi."
      },
      {
        english: "Critical discourse analysis reveals power dynamics in media narratives.",
        indonesian: "Analisis wacana kritis mengungkapkan dinamika kekuasaan dalam narasi media."
      },
      {
        english: "Code-switching is common in multilingual communities.",
        indonesian: "Alih kode umum di komunitas multibahasa."
      },
      {
        english: "Lexical ambiguity can lead to misinterpretations in legal contracts.",
        indonesian: "Ambiguitas leksikal dapat menyebabkan salah tafsir dalam kontrak hukum."
      }
    ]
  },
  {
    id: 'c2-s2',
    title: 'Nuances in Cross-Cultural Communication',
    description: 'Master the subtle art of cross-cultural communication and avoid misunderstandings',
    content: `In this lesson, we explore the nuances of cross-cultural communication, focusing on how cultural differences influence communication styles and practices. Mastering these nuances is essential for effective global interactions.

**Key Areas of Focus:**

1.  **Verbal Communication:**
    *   **Direct vs. Indirect Communication:** Some cultures value directness and clarity, while others prefer indirectness and subtlety.
    *   **High-Context vs. Low-Context Cultures:** High-context cultures rely heavily on nonverbal cues and shared understanding, while low-context cultures emphasize explicit verbal communication.

2.  **Nonverbal Communication:**
    *   **Body Language:** Gestures, facial expressions, and posture vary significantly across cultures.
    *   **Eye Contact:** The appropriateness of eye contact differs; in some cultures, it signifies honesty, while in others, it may be seen as disrespectful.
    *   **Personal Space:** The acceptable distance between individuals during communication varies.

3.  **Cultural Values:**
    *   **Individualism vs. Collectivism:** Individualistic cultures prioritize personal achievement, while collectivist cultures emphasize group harmony.
    *   **Power Distance:** The extent to which a society accepts unequal distribution of power.
    *   **Time Orientation:** Some cultures are monochronic (focus on punctuality and schedules), while others are polychronic (flexible and adaptable to changing circumstances).

4.  **Communication Styles:**
    *   **Formality:** The level of formality in language and behavior.
    *   **Emotional Expression:** The degree to which emotions are openly displayed.
    *   **Silence:** The use of silence as a communication tool; in some cultures, it indicates respect or contemplation.

**Strategies for Effective Cross-Cultural Communication:**

*   **Active Listening:** Pay close attention to both verbal and nonverbal cues.
*   **Empathy:** Try to understand the other person's perspective and cultural background.
*   **Adaptability:** Be flexible and willing to adjust your communication style.
*   **Respect:** Show respect for cultural differences and avoid making assumptions.
*   **Feedback:** Seek clarification and confirm understanding to prevent misunderstandings.

By mastering these nuances, you can enhance your ability to communicate effectively across cultures, build strong relationships, and achieve your goals in a globalized world.`,
    imageUrl: 'https://images.unsplash.com/photo-1559030704-1954cb26ca5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "In Japan, exchanging business cards is a formal ritual.",
        indonesian: "Di Jepang, bertukar kartu nama adalah ritual formal."
      },
      {
        english: "Direct eye contact is valued in Western cultures but can be seen as aggressive in some Asian cultures.",
        indonesian: "Kontak mata langsung dihargai dalam budaya Barat tetapi dapat dilihat sebagai agresif dalam beberapa budaya Asia."
      },
      {
        english: "Understanding power distance is crucial when communicating with superiors in hierarchical societies.",
        indonesian: "Memahami jarak kekuasaan sangat penting saat berkomunikasi dengan atasan di masyarakat hierarkis."
      },
      {
        english: "Being adaptable and empathetic can help bridge communication gaps in diverse teams.",
        indonesian: "Bersikap mudah beradaptasi dan berempati dapat membantu menjembatani kesenjangan komunikasi dalam tim yang beragam."
      }
    ]
  }
];

// C2 Proficiency Level Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'c2-s1-quiz',
    title: 'Advanced Linguistic Analysis Quiz',
    description: 'Test your understanding of linguistic analysis and nuanced language interpretation',
    skillType: 'grammar',
    requiredScore: 80,
    questions: [
      {
        id: 'q1-c2s1',
        type: 'multiple-choice',
        question: 'Which linguistic feature is most characteristic of academic discourse?',
        options: [
          'Frequent use of contractions and informal expressions',
          'High lexical density and nominalizations',
          'Simple sentence structures with limited subordination',
          'Extensive use of first-person pronouns'
        ],
        correctAnswer: 'High lexical density and nominalizations',
        explanation: 'Academic discourse typically features high lexical density (meaning a higher proportion of content words) and nominalizations (verbs converted to nouns), which create a more formal, abstract style.',
        difficulty: 'hard',
        points: 2
      },
      {
        id: 'q2-c2s1',
        type: 'multiple-choice',
        question: 'What is the primary focus of pragmatics in linguistic analysis?',
        options: [
          'The study of word origins and historical language change',
          'The analysis of sentence structure and grammatical rules',
          'The interpretation of meaning in context and the effects of language use',
          'The classification of speech sounds and phonological patterns'
        ],
        correctAnswer: 'The interpretation of meaning in context and the effects of language use',
        explanation: 'Pragmatics is concerned with how context influences meaning and how language is used to perform actions and convey intentions.',
        difficulty: 'medium',
        points: 1
      },
      {
        id: 'q3-c2s1',
        type: 'multiple-choice',
        question: 'Which technique is used in critical discourse analysis (CDA) to reveal power relations?',
        options: [
          'Analyzing sentence length and complexity',
          'Identifying the frequency of passive voice constructions',
          'Examining how language choices reflect and reinforce social hierarchies',
          'Counting the number of adjectives and adverbs used'
        ],
        correctAnswer: 'Examining how language choices reflect and reinforce social hierarchies',
        explanation: 'CDA examines how language choices reflect and reinforce social hierarchies, power imbalances, and ideological perspectives.',
        difficulty: 'hard',
        points: 2
      },
      {
        id: 'q4-c2s1',
        type: 'multiple-choice',
        question: 'What does cohesion refer to in discourse analysis?',
        options: [
          'The logical flow and semantic unity of a text',
          'The linguistic links and connections that create textual unity',
          'The emotional impact and persuasive power of a speech',
          'The use of figurative language and rhetorical devices'
        ],
        correctAnswer: 'The linguistic links and connections that create textual unity',
        explanation: 'Cohesion refers to the linguistic links and connections (e.g., reference, conjunction, ellipsis) that create textual unity and help readers or listeners follow the discourse.',
        difficulty: 'medium',
        points: 1
      }
    ]
  },
  {
    id: 'c2-s2-quiz',
    title: 'Cross-Cultural Communication Quiz',
    description: 'Test your knowledge of cross-cultural communication and global etiquette',
    skillType: 'speaking',
    requiredScore: 80,
    questions: [
      {
        id: 'q1-c2s2',
        type: 'multiple-choice',
        question: 'In high-context cultures, what is primarily relied upon for effective communication?',
        options: [
          'Explicit verbal explanations',
          'Detailed written instructions',
          'Nonverbal cues and shared understanding',
          'Formal contracts and legal agreements'
        ],
        correctAnswer: 'Nonverbal cues and shared understanding',
        explanation: 'High-context cultures rely heavily on nonverbal cues, such as body language, tone of voice, and shared cultural knowledge, for effective communication.',
        difficulty: 'medium',
        points: 1
      },
      {
        id: 'q2-c2s2',
        type: 'multiple-choice',
        question: 'Which cultural dimension reflects the extent to which a society accepts unequal distribution of power?',
        options: [
          'Individualism vs. Collectivism',
          'Uncertainty Avoidance',
          'Power Distance',
          'Masculinity vs. Femininity'
        ],
        correctAnswer: 'Power Distance',
        explanation: 'Power distance refers to the extent to which a society accepts and expects that power is distributed unequally.',
        difficulty: 'medium',
        points: 1
      },
      {
        id: 'q3-c2s2',
        type: 'multiple-choice',
        question: 'What is a key characteristic of monochronic cultures?',
        options: [
          'Flexibility and adaptability to changing circumstances',
          'Emphasis on punctuality and schedules',
          'Reliance on personal relationships and trust',
          'Preference for multitasking and simultaneous activities'
        ],
        correctAnswer: 'Emphasis on punctuality and schedules',
        explanation: 'Monochronic cultures value punctuality, schedules, and doing one thing at a time, emphasizing efficiency and order.',
        difficulty: 'medium',
        points: 1
      },
      {
        id: 'q4-c2s2',
        type: 'multiple-choice',
        question: 'Which communication strategy is most effective in cross-cultural interactions?',
        options: [
          'Using complex jargon to demonstrate expertise',
          'Avoiding direct eye contact to show respect',
          'Speaking loudly and slowly to ensure understanding',
          'Actively listening and seeking clarification'
        ],
        correctAnswer: 'Actively listening and seeking clarification',
        explanation: 'Actively listening, asking questions, and seeking clarification are essential strategies for effective cross-cultural communication, as they help prevent misunderstandings and show respect for cultural differences.',
        difficulty: 'medium',
        points: 1
      }
    ]
  }
];

// C2 Proficiency Level Final Test
const finalTest: PracticalTest = {
  id: 'c2-final',
  title: 'C2 Proficiency Exam',
  description: 'Assess your overall English proficiency at the C2 level',
  type: 'writing',
  prompt: 'Discuss the ethical implications of artificial intelligence in modern society.',
  criteria: [
    'Sophisticated vocabulary and idiomatic expressions',
    'Complex sentence structures and grammatical accuracy',
    'Coherent and well-supported arguments',
    'Nuanced understanding of cultural contexts'
  ],
  minScore: 80
};

// Export the complete lesson structure
export const c2Lesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};
