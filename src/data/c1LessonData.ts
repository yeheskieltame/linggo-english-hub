// Import the necessary types
import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// C1 Advanced Level Lesson Stages
const stages: LessonStage[] = [
  {
    id: 'c1-s1',
    title: 'Advanced Business Negotiation',
    description: 'Learn advanced techniques for successful business negotiations',
    content: `In this lesson, we will explore advanced negotiation techniques that are essential for success in complex business environments. We will cover strategies for building rapport, identifying underlying interests, and creating mutually beneficial agreements.

**Key Topics:**

1.  **Building Rapport and Trust:**
    *   Establishing a positive relationship with the other party is crucial for successful negotiations.
    *   Techniques include active listening, showing empathy, and finding common ground.

2.  **Identifying Underlying Interests:**
    *   Understanding the other party's true needs and motivations is key to finding creative solutions.
    *   Use open-ended questions to uncover their underlying interests and priorities.

3.  **Creating Mutually Beneficial Agreements:**
    *   Focus on creating value for both parties by exploring different options and trade-offs.
    *   Techniques include brainstorming, packaging proposals, and using objective criteria.

4.  **Handling Difficult Tactics:**
    *   Be prepared to deal with aggressive or manipulative tactics used by the other party.
    *   Strategies include calling out the behavior, reframing the discussion, and walking away if necessary.

**Advanced Negotiation Strategies:**

1.  **Anchoring:**
    *   Making the first offer can significantly influence the outcome of the negotiation.
    *   Set a high but justifiable anchor to shape the other party's expectations.

2.  **Framing:**
    *   Presenting information in a way that highlights certain aspects and downplays others.
    *   Frame your proposals in a way that emphasizes the benefits for the other party.

3.  **Loss Aversion:**
    *   People are more motivated to avoid losses than to acquire equivalent gains.
    *   Frame your proposals in terms of what the other party stands to lose if they don't agree.

4.  **Scarcity:**
    *   Creating a sense of urgency by highlighting limited availability or time constraints.
    *   Use scarcity tactics ethically to encourage the other party to take action.

**Examples:**

*   **Building Rapport:** "I appreciate you taking the time to meet with me today. I've heard great things about your company and I'm excited to explore potential opportunities for collaboration."
*   **Identifying Interests:** "What are your key priorities for this negotiation? What are you hoping to achieve?"
*   **Creating Value:** "We could offer you a lower price in exchange for a longer-term contract. Would that be of interest to you?"
*   **Handling Tactics:** "I understand you're under pressure to get the best possible deal, but I'm not comfortable with these aggressive tactics. Let's focus on finding a solution that works for both of us."

By mastering these advanced negotiation techniques, you can significantly improve your ability to achieve favorable outcomes in complex business negotiations.`,
    examples: [
      {
        english: "I appreciate you taking the time to meet with me today.",
        indonesian: "Saya menghargai Anda meluangkan waktu untuk bertemu dengan saya hari ini."
      },
      {
        english: "What are your key priorities for this negotiation?",
        indonesian: "Apa prioritas utama Anda untuk negosiasi ini?"
      },
      {
        english: "We could offer you a lower price in exchange for a longer-term contract.",
        indonesian: "Kami dapat menawarkan harga yang lebih rendah dengan imbalan kontrak jangka panjang."
      },
      {
        english: "I'm not comfortable with these aggressive tactics.",
        indonesian: "Saya tidak nyaman dengan taktik agresif ini."
      }
    ]
  },
  {
    id: 'c1-s2',
    title: 'Rhetorical Devices in Public Speaking',
    description: 'Master the art of using rhetorical devices to enhance your public speaking skills',
    content: `In this lesson, we will explore the use of rhetorical devices to enhance your public speaking skills. Rhetorical devices are techniques that speakers use to persuade, inspire, and engage their audience.

**Key Rhetorical Devices:**

1.  **Anaphora:**
    *   Repetition of a word or phrase at the beginning of successive clauses.
    *   Example: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets."

2.  **Epistrophe:**
    *   Repetition of a word or phrase at the end of successive clauses.
    *   Example: "Government of the people, by the people, for the people, shall not perish from the Earth."

3.  **Antithesis:**
    *   The juxtaposition of contrasting ideas in parallel structure.
    *   Example: "It was the best of times, it was the worst of times."

4.  **Tricolon:**
    *   A series of three parallel words, phrases, or clauses.
    *   Example: "Veni, vidi, vici" (I came, I saw, I conquered).

5.  **Metaphor:**
    *   A figure of speech that directly compares two unrelated things.
    *   Example: "The world is a stage."

6.  **Simile:**
    *   A figure of speech that compares two things using "like" or "as."
    *   Example: "Life is like a box of chocolates."

7.  **Hyperbole:**
    *   Exaggerated statements or claims not meant to be taken literally.
    *   Example: "I'm so hungry I could eat a horse."

8.  **Understatement:**
    *   The presentation of something as being smaller, worse, or less important than it actually is.
    *   Example: "It's just a scratch" (when there's a significant injury).

**Using Rhetorical Devices Effectively:**

*   **Know Your Audience:**
    *   Tailor your use of rhetorical devices to the specific audience you are addressing.

*   **Use Sparingly:**
    *   Overuse of rhetorical devices can make your speech sound contrived and insincere.

*   **Practice and Refine:**
    *   Practice your speech with rhetorical devices to ensure they flow naturally and enhance your message.

**Examples:**

*   **Anaphora:** "Not everything that is faced can be changed, but nothing can be changed until it is faced."
*   **Antithesis:** "Ask not what your country can do for you, ask what you can do for your country."
*   **Metaphor:** "He is a shining star in the world of business."
*   **Hyperbole:** "I've told you a million times to clean your room."

By mastering these rhetorical devices, you can significantly enhance your public speaking skills and become a more persuasive and engaging speaker.`,
    examples: [
      {
        english: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets.",
        indonesian: "Kita akan bertempur di pantai, kita akan bertempur di lapangan pendaratan, kita akan bertempur di ladang dan di jalanan."
      },
      {
        english: "Government of the people, by the people, for the people, shall not perish from the Earth.",
        indonesian: "Pemerintahan dari rakyat, oleh rakyat, untuk rakyat, tidak akan binasa dari Bumi."
      },
      {
        english: "It was the best of times, it was the worst of times.",
        indonesian: "Itu adalah waktu terbaik, itu adalah waktu terburuk."
      },
      {
        english: "I'm so hungry I could eat a horse.",
        indonesian: "Saya sangat lapar sehingga saya bisa makan seekor kuda."
      }
    ]
  }
];

// C1 Advanced Level Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'c1-s1-quiz',
    title: 'Advanced Business Negotiation Quiz',
    description: 'Test your understanding of advanced negotiation techniques',
    skillType: 'speaking',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-c1s1',
        type: 'multiple-choice',
        question: 'Which of the following statements best represents an effective approach during the exploration phase of a negotiation?',
        options: [
          'Present your minimum acceptable terms immediately to save time',
          'Avoid revealing any information about your priorities',
          'Ask open-ended questions to uncover the other party\'s underlying interests',
          'Make your largest concessions early to build goodwill'
        ],
        correctAnswer: 'Ask open-ended questions to uncover the other party\'s underlying interests',
        explanation: 'The exploration phase is about gathering information. Open-ended questions help you understand the other party\'s true interests and priorities, which creates opportunities for mutually beneficial solutions.',
        difficulty: 'medium',
        points: 2
      },
      {
        id: 'q2-c1s1',
        type: 'multiple-choice',
        question: 'What is the primary goal of anchoring in a negotiation?',
        options: [
          'To create a sense of urgency',
          'To establish a positive relationship',
          'To influence the other party\'s perception of value',
          'To avoid making concessions'
        ],
        correctAnswer: 'To influence the other party\'s perception of value',
        explanation: 'Anchoring involves setting an initial offer or expectation that influences the other party\'s perception of what is a reasonable outcome. A well-chosen anchor can significantly impact the final agreement.',
        difficulty: 'medium',
        points: 1
      },
      {
        id: 'q3-c1s1',
        type: 'multiple-choice',
        question: 'Which tactic is most effective for handling aggressive or manipulative behavior during a negotiation?',
        options: [
          'Responding in kind to show strength',
          'Ignoring the behavior and continuing the discussion',
          'Calling out the behavior and reframing the discussion',
          'Making significant concessions to appease the other party'
        ],
        correctAnswer: 'Calling out the behavior and reframing the discussion',
        explanation: 'Addressing aggressive or manipulative behavior directly is crucial. Calling it out and reframing the discussion helps to maintain a professional tone and focus on finding a mutually beneficial solution.',
        difficulty: 'hard',
        points: 2
      },
      {
        id: 'q4-c1s1',
        type: 'multiple-choice',
        question: 'How can the principle of loss aversion be used in a negotiation?',
        options: [
          'By emphasizing the potential gains of an agreement',
          'By highlighting the potential losses of not reaching an agreement',
          'By focusing on building rapport and trust',
          'By making large concessions early in the negotiation'
        ],
        correctAnswer: 'By highlighting the potential losses of not reaching an agreement',
        explanation: 'Loss aversion suggests that people are more motivated to avoid losses than to acquire equivalent gains. Framing the negotiation in terms of potential losses can be a powerful motivator.',
        difficulty: 'medium',
        points: 1
      }
    ]
  },
  {
    id: 'c1-s2-quiz',
    title: 'Rhetorical Devices Quiz',
    description: 'Test your understanding of advanced rhetorical techniques',
    skillType: 'speaking',
    requiredScore: 70,
    questions: [
      {
        id: 'q1-c1s2',
        type: 'multiple-choice',
        question: 'Which rhetorical device involves repetition of a word or phrase at the beginning of successive clauses?',
        options: [
          'Anaphora',
          'Antithesis',
          'Hypophora',
          'Tricolon'
        ],
        correctAnswer: 'Anaphora',
        explanation: 'Anaphora is the repetition of a word or phrase at the beginning of successive clauses, such as "We must invest in our future. We must embrace innovation. We must lead rather than follow."',
        difficulty: 'medium',
        points: 1
      },
      {
        id: 'q2-c1s2',
        type: 'multiple-choice',
        question: 'What is the primary purpose of using rhetorical questions in public speaking?',
        options: [
          'To provide information to the audience',
          'To engage the audience and encourage reflection',
          'To confuse the audience and create uncertainty',
          'To demonstrate the speaker\'s knowledge and expertise'
        ],
        correctAnswer: 'To engage the audience and encourage reflection',
        explanation: 'Rhetorical questions are not meant to be answered directly but are used to provoke thought and engage the audience in the speaker\'s message.',
        difficulty: 'medium',
        points: 2
      },
      {
        id: 'q3-c1s2',
        type: 'multiple-choice',
        question: 'Which rhetorical device involves the juxtaposition of contrasting ideas in parallel structure?',
        options: [
          'Metaphor',
          'Simile',
          'Antithesis',
          'Hyperbole'
        ],
        correctAnswer: 'Antithesis',
        explanation: 'Antithesis involves placing contrasting ideas side by side in a parallel structure to create a balanced and memorable effect, such as "Give me liberty, or give me death."',
        difficulty: 'medium',
        points: 1
      },
      {
        id: 'q4-c1s2',
        type: 'multiple-choice',
        question: 'How does the use of metaphors enhance public speaking?',
        options: [
          'By providing factual information',
          'By creating vivid imagery and emotional connections',
          'By simplifying complex ideas',
          'By confusing the audience'
        ],
        correctAnswer: 'By creating vivid imagery and emotional connections',
        explanation: 'Metaphors create vivid imagery and emotional connections by comparing two unrelated things, making the speaker\'s message more memorable and impactful.',
        difficulty: 'medium',
        points: 2
      }
    ]
  }
];

// C1 Advanced Level Final Test
const finalTest: PracticalTest = {
  id: 'c1-final',
  title: 'C1 Level Mastery Test',
  description: 'Demonstrate your mastery of C1 level English skills',
  type: 'writing',
  prompt: 'Write an essay discussing the impact of globalization on cultural identity.',
  criteria: [
    'Use of advanced vocabulary',
    'Correct grammar and syntax',
    'Clear and coherent structure',
    'Well-supported arguments',
    'Effective use of rhetorical devices'
  ],
  minScore: 75
};

// Export the complete lesson structure
export const c1Lesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};
