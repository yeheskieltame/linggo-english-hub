import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// B1 Intermediate Level - Academic Pathway Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'b1-a-s1',
    title: 'Academic Essays',
    description: 'Learn how to write effective academic essays',
    content: `In this lesson, you will learn how to write well-structured and effective academic essays in English.

Essay Structure:
1. Introduction
   - Hook: Engage the reader with an interesting opening
   - Background information: Provide context for your topic
   - Thesis statement: Present your main argument or point
   - Essay map: Briefly outline what you will discuss

2. Body Paragraphs
   - Topic sentence: Introduce the main idea of the paragraph
   - Supporting evidence: Provide facts, examples, or quotes
   - Analysis: Explain how the evidence supports your thesis
   - Transition: Connect to the next paragraph

3. Conclusion
   - Restate thesis: Remind readers of your main point
   - Summarize main points: Briefly review your key arguments
   - Final thought: End with a broader implication or call to action

Academic Writing Style:
- Formal language: Avoid contractions, slang, and colloquial expressions
- Objective tone: Focus on facts and evidence rather than personal opinions
- Third-person perspective: Use "it is argued that" rather than "I think"
- Precise vocabulary: Use specific terms related to your subject
- Complex sentence structures: Use subordinate clauses and varied sentence types
- Hedging language: Use phrases like "may suggest" or "tends to indicate" when appropriate

Paragraph Structure (PEEL):
- Point: State the main idea (topic sentence)
- Evidence: Provide supporting facts or examples
- Explanation: Analyze how the evidence supports your point
- Link: Connect to your thesis or the next paragraph

Using Sources:
- Paraphrase: Restate ideas in your own words
- Quote: Use exact words from sources (sparingly)
- Summarize: Condense longer passages into key points
- Cite: Always acknowledge your sources using the appropriate citation style

Transition Words and Phrases:
- To add information: furthermore, in addition, moreover
- To show contrast: however, nevertheless, on the other hand
- To provide examples: for instance, for example, such as
- To show cause and effect: therefore, consequently, as a result
- To conclude: in conclusion, to summarize, overall

Common Academic Essay Types:
- Argumentative: Presents a claim and supports it with evidence
- Expository: Explains a topic or concept
- Analytical: Examines a topic by breaking it into components
- Compare and contrast: Identifies similarities and differences
- Cause and effect: Explores causes and consequences

Remember that academic writing is a skill that improves with practice. Always plan your essay before writing, revise your work carefully, and seek feedback when possible.`,
    videoId: 'wDU9zLKXfrc',
    examples: [
      {
        english: "Introduction example: Climate change represents one of the most significant challenges facing humanity in the 21st century. Rising global temperatures have led to increasingly severe weather events, rising sea levels, and disruptions to ecosystems worldwide. This essay will argue that immediate and coordinated international action is necessary to mitigate the worst effects of climate change. It will examine the scientific evidence for human-caused climate change, analyze the potential economic and social impacts, and evaluate various policy responses.",
        indonesian: "Contoh pendahuluan: Perubahan iklim merupakan salah satu tantangan terbesar yang dihadapi umat manusia di abad ke-21. Peningkatan suhu global telah menyebabkan peristiwa cuaca yang semakin parah, kenaikan permukaan laut, dan gangguan pada ekosistem di seluruh dunia. Esai ini akan berpendapat bahwa tindakan internasional yang segera dan terkoordinasi diperlukan untuk mengurangi efek terburuk dari perubahan iklim. Ini akan memeriksa bukti ilmiah untuk perubahan iklim yang disebabkan manusia, menganalisis potensi dampak ekonomi dan sosial, dan mengevaluasi berbagai respons kebijakan."
      },
      {
        english: "Body paragraph example: Education plays a crucial role in reducing poverty in developing countries. According to the World Bank (2020), each additional year of schooling can increase an individual's earnings by up to 10%. For instance, a study in Indonesia found that rural communities with higher education levels experienced significantly lower poverty rates over a ten-year period. This suggests that investment in education systems provides a sustainable pathway out of poverty by equipping individuals with the skills needed in modern economies. Moreover, education's benefits extend beyond economic outcomes to include improved health outcomes and greater civic participation.",
        indonesian: "Contoh paragraf tubuh: Pendidikan memainkan peran penting dalam mengurangi kemiskinan di negara-negara berkembang. Menurut Bank Dunia (2020), setiap tahun tambahan sekolah dapat meningkatkan penghasilan individu hingga 10%. Misalnya, sebuah studi di Indonesia menemukan bahwa komunitas pedesaan dengan tingkat pendidikan lebih tinggi mengalami tingkat kemiskinan yang jauh lebih rendah selama periode sepuluh tahun. Ini menunjukkan bahwa investasi dalam sistem pendidikan memberikan jalur berkelanjutan keluar dari kemiskinan dengan membekali individu dengan keterampilan yang dibutuhkan dalam ekonomi modern. Selain itu, manfaat pendidikan melampaui hasil ekonomi untuk mencakup peningkatan hasil kesehatan dan partisipasi sipil yang lebih besar."
      },
      {
        english: "Conclusion example: In conclusion, this essay has demonstrated that renewable energy technologies offer a viable solution to the dual challenges of energy security and climate change. The evidence presented shows that solar, wind, and hydroelectric power have become increasingly cost-competitive with fossil fuels, while their environmental impacts are substantially lower. Although challenges remain in terms of energy storage and grid integration, continued technological innovation and supportive policy frameworks can address these issues. As the global community works toward a sustainable future, the transition to renewable energy sources will be a critical component of our response to climate change.",
        indonesian: "Contoh kesimpulan: Sebagai kesimpulan, esai ini telah menunjukkan bahwa teknologi energi terbarukan menawarkan solusi yang layak untuk tantangan ganda keamanan energi dan perubahan iklim. Bukti yang disajikan menunjukkan bahwa tenaga surya, angin, dan tenaga air telah menjadi semakin kompetitif biaya dengan bahan bakar fosil, sementara dampak lingkungannya jauh lebih rendah. Meskipun tantangan tetap ada dalam hal penyimpanan energi dan integrasi jaringan, inovasi teknologi berkelanjutan dan kerangka kebijakan yang mendukung dapat mengatasi masalah ini. Saat komunitas global bekerja menuju masa depan yang berkelanjutan, transisi ke sumber energi terbarukan akan menjadi komponen penting dari respons kita terhadap perubahan iklim."
      },
      {
        english: "Thesis statement example: While social media platforms have transformed how people communicate and access information, this essay argues that their negative impacts on mental health, privacy, and democratic discourse outweigh their benefits.",
        indonesian: "Contoh pernyataan tesis: Sementara platform media sosial telah mengubah cara orang berkomunikasi dan mengakses informasi, esai ini berpendapat bahwa dampak negatifnya pada kesehatan mental, privasi, dan wacana demokratis lebih besar daripada manfaatnya."
      }
    ]
  },
  {
    id: 'b1-a-s2',
    title: 'Academic Research Skills',
    description: 'Learn how to conduct research and evaluate sources for academic purposes',
    content: `In this lesson, you will learn how to conduct effective research and evaluate sources for academic assignments.

Research Process:
1. Define your research question
   - Make it specific and focused
   - Ensure it can be answered through research
   - Consider the scope (not too broad or narrow)

2. Identify relevant sources
   - Academic journals and books
   - Reputable websites (.edu, .gov, .org)
   - Databases (JSTOR, Google Scholar, etc.)
   - Primary vs. secondary sources

3. Search effectively
   - Use keywords and Boolean operators (AND, OR, NOT)
   - Use quotation marks for exact phrases
   - Utilize advanced search features
   - Keep track of your search process

4. Evaluate sources (CRAAP Test)
   - Currency: When was it published or updated?
   - Relevance: How well does it relate to your topic?
   - Authority: Who is the author/publisher?
   - Accuracy: Is the information supported by evidence?
   - Purpose: Why was this information created?

5. Take effective notes
   - Record complete citation information
   - Summarize main points in your own words
   - Use direct quotes sparingly
   - Organize notes by themes or topics
   - Distinguish between facts, opinions, and your own ideas

6. Synthesize information
   - Look for patterns and connections
   - Identify agreements and disagreements
   - Consider multiple perspectives
   - Develop your own informed position

Types of Sources:
- Primary sources: Original materials (interviews, experiments, historical documents)
- Secondary sources: Analysis or interpretation of primary sources
- Tertiary sources: Compilations of primary and secondary sources (encyclopedias)

Avoiding Plagiarism:
- Always cite your sources
- Use quotation marks for direct quotes
- Paraphrase properly (change both words AND structure)
- Keep track of where information comes from
- Understand your institution's academic integrity policies

Common Citation Styles:
- APA (American Psychological Association): Used in social sciences
- MLA (Modern Language Association): Used in humanities
- Chicago/Turabian: Used in history and some humanities
- Harvard: Used in universities across the world
- Vancouver: Used in medical sciences

Online Research Tools:
- Reference managers (Zotero, Mendeley, EndNote)
- Academic databases (JSTOR, ProQuest, EBSCO)
- Google Scholar and Google Books
- Library catalogs and interlibrary loan services
- Subject-specific databases

Remember that good research takes time. Start early, be systematic, and always evaluate your sources critically.`,
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    examples: [
      {
        english: "Research question example: Instead of 'How does social media affect teenagers?' (too broad), try 'How does Instagram use impact body image perception among female high school students in urban areas?'",
        indonesian: "Contoh pertanyaan penelitian: Alih-alih 'Bagaimana media sosial memengaruhi remaja?' (terlalu luas), coba 'Bagaimana penggunaan Instagram memengaruhi persepsi citra tubuh di kalangan siswa SMA perempuan di daerah perkotaan?'"
      },
      {
        english: "Boolean search example: To find sources about climate change impacts on agriculture but not related to policy, you might search: 'climate change' AND agriculture NOT policy",
        indonesian: "Contoh pencarian Boolean: Untuk menemukan sumber tentang dampak perubahan iklim pada pertanian tetapi tidak terkait dengan kebijakan, Anda mungkin mencari: 'perubahan iklim' DAN pertanian BUKAN kebijakan"
      },
      {
        english: "Source evaluation example: A recent peer-reviewed article from an environmental science journal would be more reliable for current climate data than a ten-year-old newspaper article or a blog with no citations.",
        indonesian: "Contoh evaluasi sumber: Artikel terbaru yang ditinjau oleh rekan sejawat dari jurnal ilmu lingkungan akan lebih dapat diandalkan untuk data iklim saat ini daripada artikel koran berusia sepuluh tahun atau blog tanpa kutipan."
      },
      {
        english: "Paraphrasing example: Original text: 'Social media use has been linked to increased rates of anxiety and depression in teenagers.' Paraphrase: 'Research suggests that adolescents who frequently use social platforms may experience higher levels of psychological distress, including symptoms of anxiety and depressive disorders.'",
        indonesian: "Contoh parafrase: Teks asli: 'Penggunaan media sosial telah dikaitkan dengan peningkatan tingkat kecemasan dan depresi pada remaja.' Parafrase: 'Penelitian menunjukkan bahwa remaja yang sering menggunakan platform sosial mungkin mengalami tingkat tekanan psikologis yang lebih tinggi, termasuk gejala gangguan kecemasan dan depresi.'"
      }
    ]
  }
];

// B1 Intermediate Level - Academic Pathway Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'b1-a-s1-quiz',
    title: 'Academic Essays Quiz',
    description: 'Test your knowledge of academic essay writing',
    skillType: 'writing',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b1as1',
        type: 'multiple-choice',
        question: 'What is a thesis statement in an academic essay?',
        options: [
          'A question that the essay will answer',
          'The main argument or point of the essay',
          'A summary of all sources used',
          'The first sentence of each paragraph'
        ],
        correctAnswer: 'The main argument or point of the essay',
        explanation: 'A thesis statement presents the main argument or central point of an academic essay. It typically appears at the end of the introduction and guides the development of the entire essay.'
      },
      {
        id: 'q2-b1as1',
        type: 'multiple-choice',
        question: 'Which of these is a characteristic of academic writing?',
        options: [
          'Using first-person perspective ("I think...")',
          'Including personal anecdotes as primary evidence',
          'Using informal language and contractions',
          'Using formal vocabulary and objective tone'
        ],
        correctAnswer: 'Using formal vocabulary and objective tone',
        explanation: 'Academic writing is characterized by formal vocabulary and an objective tone. It avoids contractions, slang, and colloquial expressions, and generally maintains a more impersonal approach than other types of writing.'
      },
      {
        id: 'q3-b1as1',
        type: 'multiple-choice',
        question: 'What is the purpose of a topic sentence in a body paragraph?',
        options: [
          'To provide a transition to the next paragraph',
          'To present the main idea of the paragraph',
          'To introduce a quote from a source',
          'To summarize the entire essay'
        ],
        correctAnswer: 'To present the main idea of the paragraph',
        explanation: 'A topic sentence presents the main idea or focus of a body paragraph. It tells the reader what the paragraph will be about and connects to the thesis statement.'
      },
      {
        id: 'q4-b1as1',
        type: 'multiple-choice',
        question: 'Which transition word or phrase would you use to show contrast?',
        options: [
          'Furthermore',
          'For example',
          'However',
          'Therefore'
        ],
        correctAnswer: 'However',
        explanation: '"However" is a transition word used to show contrast between ideas. Other contrast transitions include "nevertheless," "on the other hand," and "conversely."'
      },
      {
        id: 'q5-b1as1',
        type: 'multiple-choice',
        question: 'What should be included in the conclusion of an academic essay?',
        options: [
          'New evidence that wasn\'t mentioned in the body paragraphs',
          'The exact wording of the thesis statement',
          'A restatement of the thesis and summary of main points',
          'Only a final thought without referring to the main argument'
        ],
        correctAnswer: 'A restatement of the thesis and summary of main points',
        explanation: 'The conclusion of an academic essay should include a restatement of the thesis (in different words) and a summary of the main points discussed in the body paragraphs. It may also include a final thought or broader implication.'
      }
    ]
  },
  {
    id: 'b1-a-s2-quiz',
    title: 'Academic Research Skills Quiz',
    description: 'Test your knowledge of conducting research and evaluating sources',
    skillType: 'reading',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b1as2',
        type: 'multiple-choice',
        question: 'What is a primary source?',
        options: [
          'A textbook that summarizes research',
          'An encyclopedia article',
          'Original material such as interviews, historical documents, or experimental results',
          'A review of someone else\'s research'
        ],
        correctAnswer: 'Original material such as interviews, historical documents, or experimental results',
        explanation: 'Primary sources are original materials or evidence, such as interviews, surveys, experiments, historical documents, or firsthand accounts. They provide direct or firsthand information about a topic or event.'
      },
      {
        id: 'q2-b1as2',
        type: 'multiple-choice',
        question: 'What does the "A" in the CRAAP test for evaluating sources stand for?',
        options: [
          'Authority',
          'Accuracy',
          'Availability',
          'Accessibility'
        ],
        correctAnswer: 'Accuracy',
        explanation: 'In the CRAAP test for evaluating sources, "A" stands for Accuracy. This criterion assesses whether the information is supported by evidence, can be verified, and is free from errors.'
      },
      {
        id: 'q3-b1as2',
        type: 'multiple-choice',
        question: 'Which of these is NOT a way to avoid plagiarism?',
        options: [
          'Citing sources for ideas that aren\'t your own',
          'Using quotation marks for direct quotes',
          'Paraphrasing by changing just a few words from the original',
          'Keeping track of where information comes from'
        ],
        correctAnswer: 'Paraphrasing by changing just a few words from the original',
        explanation: 'Changing just a few words from the original text is NOT proper paraphrasing and can still constitute plagiarism. Proper paraphrasing requires completely rewording the original text while maintaining the same meaning, and still citing the source.'
      },
      {
        id: 'q4-b1as2',
        type: 'multiple-choice',
        question: 'Which citation style is most commonly used in the social sciences?',
        options: [
          'MLA',
          'APA',
          'Chicago',
          'Vancouver'
        ],
        correctAnswer: 'APA',
        explanation: 'APA (American Psychological Association) style is most commonly used in the social sciences, including psychology, education, and business.'
      },
      {
        id: 'q5-b1as2',
        type: 'multiple-choice',
        question: 'What is an effective strategy for taking research notes?',
        options: [
          'Copy text word-for-word without recording the source',
          'Only write down information that supports your existing opinion',
          'Summarize main points in your own words and record citation information',
          'Take notes only from one or two sources to maintain consistency'
        ],
        correctAnswer: 'Summarize main points in your own words and record citation information',
        explanation: 'An effective strategy for taking research notes is to summarize main points in your own words while recording complete citation information. This helps you understand the material better and avoid plagiarism when you use the information in your writing.'
      }
    ]
  },
  {
    id: 'b1-a-s3-quiz',
    title: 'Academic Listening Comprehension',
    description: 'Test your ability to understand academic lectures',
    skillType: 'listening',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b1as3',
        type: 'listening',
        question: 'Listen to the excerpt from an academic lecture and answer the question: What is the main topic of the lecture?',
        audioUrl: '/audio/b1-academic-lecture.mp3',
        options: [
          'The economic impact of climate change',
          'The history of environmental movements',
          'The scientific consensus on global warming',
          'The political debate around environmental policy'
        ],
        correctAnswer: 'The economic impact of climate change',
        explanation: 'The lecture primarily discusses how climate change affects various economic sectors and the potential costs of mitigation versus inaction.'
      },
      {
        id: 'q2-b1as3',
        type: 'listening',
        question: 'According to the lecturer, which of the following is NOT mentioned as an economic consequence of climate change?',
        audioUrl: '/audio/b1-academic-lecture.mp3',
        options: [
          'Reduced agricultural productivity',
          'Increased healthcare costs',
          'Damage to infrastructure from extreme weather',
          'Increased tourism in polar regions'
        ],
        correctAnswer: 'Increased tourism in polar regions',
        explanation: 'The lecturer discusses reduced agricultural productivity, increased healthcare costs, and infrastructure damage, but does not mention tourism in polar regions.'
      }
    ]
  },
  {
    id: 'b1-a-s4-quiz',
    title: 'Academic Vocabulary and Structure',
    description: 'Test your knowledge of academic vocabulary and sentence structure',
    skillType: 'grammar',
    requiredScore: 75,
    questions: [
      {
        id: 'q1-b1as4',
        type: 'fill-in-blank',
        question: 'Complete the sentence with appropriate academic vocabulary',
        text: 'The research findings [blank1] the hypothesis that economic growth is [blank2] correlated with environmental degradation in developing countries.',
        answers: {
          "blank1": "support",
          "blank2": "positively"
        },
        explanation: 'In academic writing, precise verbs like "support" (rather than "back up" or "show") and specific adverbs like "positively" help convey exact relationships between concepts.'
      },
      {
        id: 'q2-b1as4',
        type: 'fill-in-blank',
        question: 'Complete the sentence with appropriate transition words',
        text: 'The study had a small sample size; [blank1], the results should be interpreted with caution. [blank2], future research with larger populations is recommended.',
        answers: {
          "blank1": "therefore",
          "blank2": "Furthermore"
        },
        explanation: '"Therefore" indicates a logical conclusion based on the previous statement, while "Furthermore" adds additional information that supports the point being made.'
      }
    ]
  }
];

// B1 Intermediate Level - Academic Final Test
const finalTest: PracticalTest = {
  id: 'b1-a-final',
  title: 'Academic Research and Essay Writing Test',
  description: 'Demonstrate your ability to conduct research and write an academic essay',
  type: 'writing', // Main type for backward compatibility
  prompt: 'Complete all sections of this comprehensive test to demonstrate your academic research and essay writing skills at the B1 level.',
  criteria: [
    'Clear thesis statement and structure',
    'Appropriate use of academic vocabulary',
    'Proper citation of sources',
    'Critical analysis of information',
    'Logical flow of ideas'
  ],
  minScore: 70,
  sections: [
    {
      id: 'b1-a-final-s1',
      title: 'Source Evaluation',
      type: 'reading',
      description: 'Evaluate academic sources for reliability and relevance',
      prompt: 'Review the three sources provided below about climate change. Evaluate each source for reliability and relevance using the CRAAP test criteria (Currency, Relevance, Authority, Accuracy, Purpose). Identify which source would be most appropriate for an academic research paper and explain why.',
      imageUrl: '/images/b1-academic-sources.png',
      criteria: [
        'Accurate application of source evaluation criteria',
        'Recognition of source characteristics and limitations',
        'Appropriate justification for source selection',
        'Understanding of academic source requirements'
      ],
      weight: 30
    },
    {
      id: 'b1-a-final-s2',
      title: 'Research Note-Taking',
      type: 'writing',
      description: 'Demonstrate effective research note-taking skills',
      prompt: 'Read the academic article excerpt provided below about the effects of sleep deprivation on cognitive performance. Take organized notes (100-150 words) that capture the main points, supporting evidence, and your own questions or thoughts. Your notes should be in your own words (except for any key terms or direct quotes, which should be properly marked).',
      criteria: [
        'Accurate identification of main ideas and supporting details',
        'Effective organization of information',
        'Proper distinction between source ideas and personal notes',
        'Appropriate paraphrasing of information'
      ],
      weight: 30
    },
    {
      id: 'b1-a-final-s3',
      title: 'Academic Essay Writing',
      type: 'writing',
      description: 'Write a short academic essay',
      prompt: 'Write a short academic essay (250-300 words) on the following topic: "The advantages and disadvantages of online learning in higher education." Your essay should include an introduction with a clear thesis statement, body paragraphs with supporting evidence, and a conclusion. Use formal academic language and at least two references to support your points.',
      criteria: [
        'Clear thesis statement and logical structure',
        'Well-developed paragraphs with topic sentences',
        'Appropriate use of evidence and examples',
        'Formal academic language and vocabulary',
        'Proper citation of sources'
      ],
      weight: 40
    }
  ]
};

// Export the complete lesson structure
export const b1AcademicLesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};