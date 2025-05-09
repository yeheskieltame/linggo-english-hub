// Import the necessary types
import { LessonStage, LessonQuiz, PracticalTest, LessonStructure } from '@/types/lesson';

// B2 Upper Intermediate Level Lesson Data
const stages: LessonStage[] = [
  {
    id: 'b2-s1',
    title: 'Advanced Grammar: Conditionals',
    description: 'Learn about advanced conditional structures and mixed conditionals',
    content: `In this lesson, we will explore advanced conditional structures, including mixed conditionals and inverted conditionals. Conditionals are used to express hypothetical situations and their possible outcomes.

**Types of Conditionals:**

1.  **Zero Conditional:** Used for general truths and facts.
    *   If + present simple, present simple
    *   Example: If you heat water to 100 degrees Celsius, it boils.

2.  **First Conditional:** Used for possible future events.
    *   If + present simple, will + base form
    *   Example: If it rains tomorrow, I will stay home.

3.  **Second Conditional:** Used for hypothetical or unlikely situations in the present or future.
    *   If + past simple, would + base form
    *   Example: If I won the lottery, I would travel the world.

4.  **Third Conditional:** Used for hypothetical situations in the past.
    *   If + past perfect, would have + past participle
    *   Example: If I had studied harder, I would have passed the exam.

**Advanced Conditional Structures:**

1.  **Mixed Conditionals:** Combine different parts of different conditionals to express more complex relationships between past, present, and future.
    *   **Type 1:** If + past perfect, would + base form (past condition, present result)
        *   Example: If I had taken that job (past), I would be living in New York now (present).
    *   **Type 2:** If + past simple, would have + past participle (present condition, past result)
        *   Example: If I were taller (present), I would have been a basketball player (past).

2.  **Inverted Conditionals:** Omit "if" and invert the auxiliary verb and subject.
    *   **Had + subject + past participle:** (replaces third conditional)
        *   Example: Had I known, I wouldn't have come. (If I had known, I wouldn't have come.)
    *   **Were + subject + to + base form:** (replaces second conditional, more formal)
        *   Example: Were I to accept the position, I would need a higher salary. (If I were to accept the position, I would need a higher salary.)
    *   **Should + subject + base form:** (replaces first conditional, expresses doubt)
        *   Example: Should it rain, the event will be cancelled. (If it should rain, the event will be cancelled.)

**Other Conditional Expressions:**

*   **Unless:** Means "if not."
    *   Example: I won't go unless you come with me. (I won't go if you don't come with me.)
*   **As long as / Provided that / On condition that:** Express conditions that must be met.
    *   Example: You can borrow my car as long as you drive carefully.
*   **Even if:** Emphasizes that something will happen regardless of the condition.
    *   Example: Even if it rains, I will still go for a run.

Understanding and using these advanced conditional structures will enhance your ability to express complex ideas and hypothetical scenarios in English.`,
    examples: [
      {
        english: "If I had known about the traffic, I wouldn't have been late for the meeting.",
        indonesian: "Jika saya tahu tentang lalu lintas, saya tidak akan terlambat untuk rapat."
      },
      {
        english: "Were I to become president, I would prioritize education reform.",
        indonesian: "Seandainya saya menjadi presiden, saya akan memprioritaskan reformasi pendidikan."
      },
      {
        english: "Unless it stops raining, we will have to cancel the picnic.",
        indonesian: "Kecuali hujan berhenti, kita harus membatalkan piknik."
      },
      {
        english: "Even if I fail the test, I will keep trying.",
        indonesian: "Bahkan jika saya gagal dalam ujian, saya akan terus berusaha."
      }
    ]
  },
  {
    id: 'b2-s2',
    title: 'Vocabulary: Abstract Nouns',
    description: 'Expand your vocabulary with abstract nouns and their usage',
    content: `In this lesson, we will focus on abstract nouns, which are words that refer to intangible concepts, ideas, qualities, or states. Unlike concrete nouns, which refer to physical objects, abstract nouns cannot be perceived through the five senses.

**Common Categories of Abstract Nouns:**

1.  **Emotions:** love, hate, joy, sadness, anger, fear, happiness
2.  **Qualities:** honesty, courage, kindness, intelligence, wisdom, beauty
3.  **Concepts:** time, space, energy, freedom, justice, equality
4.  **States:** poverty, wealth, health, illness, peace, war
5.  **Movements/Systems:** capitalism, socialism, democracy, communism
6.  **Fields of Study:** science, art, literature, philosophy, mathematics

**Using Abstract Nouns Effectively:**

*   **Subject of a Sentence:**
    *   Example: Justice is essential for a fair society.
*   **Object of a Verb:**
    *   Example: I value honesty in my friends.
*   **Complement of a Verb:**
    *   Example: Her strength was her determination.
*   **Object of a Preposition:**
    *   Example: He acted out of kindness.

**Forming Abstract Nouns:**

*   **From Verbs:**
    *   act → action
    *   believe → belief
    *   decide → decision
    *   know → knowledge
    *   think → thought
*   **From Adjectives:**
    *   able → ability
    *   brave → bravery
    *   equal → equality
    *   free → freedom
    *   wise → wisdom

**Common Collocations with Abstract Nouns:**

*   **Achieve + success:** She achieved great success in her career.
*   **Express + gratitude:** We express our gratitude for your help.
*   **Gain + knowledge:** He gained a lot of knowledge from the course.
*   **Show + courage:** They showed great courage in the face of danger.
*   **Experience + happiness:** I experienced true happiness on my wedding day.

**Tips for Using Abstract Nouns:**

*   **Be Specific:** Use precise language to convey your intended meaning.
*   **Provide Context:** Explain or illustrate abstract concepts with examples.
*   **Avoid Overuse:** Balance abstract nouns with concrete language for clarity.
*   **Use in Formal Writing:** Abstract nouns are common in academic and professional writing.

Expanding your vocabulary with abstract nouns will enable you to express more complex and nuanced ideas in English.`,
    imageUrl: 'https://images.unsplash.com/photo-1543269664-7e92440769bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    examples: [
      {
        english: "Freedom is a fundamental human right.",
        indonesian: "Kebebasan adalah hak asasi manusia yang mendasar."
      },
      {
        english: "She showed great courage in the face of adversity.",
        indonesian: "Dia menunjukkan keberanian besar dalam menghadapi kesulitan."
      },
      {
        english: "The company values honesty and integrity.",
        indonesian: "Perusahaan menghargai kejujuran dan integritas."
      },
      {
        english: "Education is the key to knowledge and understanding.",
        indonesian: "Pendidikan adalah kunci untuk pengetahuan dan pemahaman."
      }
    ]
  }
];

// B2 Upper Intermediate Level Quizzes
const quizzes: LessonQuiz[] = [
  {
    id: 'b2-q1',
    title: 'Advanced Conditional Sentences',
    description: 'Test your understanding of mixed conditionals and advanced conditional structures',
    skillType: 'grammar',
    requiredScore: 70,
    questions: [
      {
        id: 'b2-q1-1',
        type: 'multiple-choice',
        question: 'Which sentence is an example of a mixed conditional?',
        options: [
          'If I had studied harder, I would pass the exam.',
          'If I studied harder, I would have passed the exam.',
          'If I had studied harder, I would have passed the exam.',
          'If I study harder, I will pass the exam.'
        ],
        correctAnswer: 'If I had studied harder, I would pass the exam.',
        explanation: 'A mixed conditional combines different types of conditionals. "If I had studied harder (past), I would pass the exam (present)" mixes a past condition with a present result.'
      },
      {
        id: 'b2-q1-2',
        type: 'multiple-choice',
        question: 'Complete the third conditional sentence: "If the weather _____ better yesterday, we _____ to the beach."',
        options: [
          'was / would go',
          'had been / would have gone',
          'would be / had gone',
          'would have been / had gone'
        ],
        correctAnswer: 'had been / would have gone',
        explanation: 'In third conditional sentences, we use "if + past perfect" in the if-clause and "would have + past participle" in the main clause.'
      },
      {
        id: 'b2-q1-3',
        type: 'multiple-choice',
        question: 'Which sentence uses an inverted conditional correctly?',
        options: [
          'Should I have known, I would have told you.',
          'Had I known, I would have told you.',
          'Were I knew, I would have told you.',
          'If I should know, I will tell you.'
        ],
        correctAnswer: 'Had I known, I would have told you.',
        explanation: 'Inverted conditionals omit "if" and invert the auxiliary verb and subject. "Had I known" is the correct inverted form of "If I had known."'
      },
      {
        id: 'b2-q1-4',
        type: 'multiple-choice',
        question: 'Choose the correct conditional form: "Unless you _____ harder, you won\'t pass the exam."',
        options: [
          'study',
          'will study',
          'studied',
          'would study'
        ],
        correctAnswer: 'study',
        explanation: '"Unless" means "if not." The correct form is "Unless you study harder," which is equivalent to "If you don\'t study harder."'
      },
      {
        id: 'b2-q1-5',
        type: 'multiple-choice',
        question: 'Which sentence uses a mixed conditional correctly?',
        options: [
          'If I had listened to your advice, I would be rich now.',
          'If I listened to your advice, I would have been rich now.',
          'If I listen to your advice, I will be rich now.',
          'If I would listen to your advice, I would be rich now.'
        ],
        correctAnswer: 'If I had listened to your advice, I would be rich now.',
        explanation: 'This is a mixed conditional where the condition is in the past (If I had listened) and the result is in the present (I would be rich now).'
      }
    ]
  },
  {
    id: 'b2-q2',
    title: 'Vocabulary: Abstract Nouns',
    description: 'Test your knowledge of abstract nouns and their usage',
    skillType: 'vocabulary',
    requiredScore: 70,
    questions: [
      {
        id: 'b2-q2-1',
        type: 'multiple-choice',
        question: 'Which of the following is an abstract noun?',
        options: [
          'Table',
          'Happiness',
          'Cat',
          'Book'
        ],
        correctAnswer: 'Happiness',
        explanation: 'Happiness is an abstract noun because it refers to an emotion, which is an intangible concept.'
      },
      {
        id: 'b2-q2-2',
        type: 'multiple-choice',
        question: 'Complete the sentence with an appropriate abstract noun: "_____ is essential for a fair society."',
        options: [
          'Chair',
          'Justice',
          'Building',
          'Computer'
        ],
        correctAnswer: 'Justice',
        explanation: 'Justice is an abstract noun that refers to the concept of fairness and moral rightness in society.'
      },
      {
        id: 'b2-q2-3',
        type: 'multiple-choice',
        question: 'Which of the following sentences uses an abstract noun as the object of a verb?',
        options: [
          'She sat on the chair.',
          'They built a house.',
          'I value honesty in my friends.',
          'He kicked the ball.'
        ],
        correctAnswer: 'I value honesty in my friends.',
        explanation: 'In this sentence, "honesty" is an abstract noun and it is the object of the verb "value."'
      },
      {
        id: 'b2-q2-4',
        type: 'multiple-choice',
        question: 'Which abstract noun can be formed from the adjective "brave"?',
        options: [
          'Bravely',
          'Bravement',
          'Braveness',
          'Bravery'
        ],
        correctAnswer: 'Bravery',
        explanation: 'The abstract noun formed from the adjective "brave" is "bravery," which refers to the quality of being brave.'
      },
      {
        id: 'b2-q2-5',
        type: 'multiple-choice',
        question: 'Choose the correct collocation: "_____ knowledge from the course."',
        options: [
          'Make',
          'Gain',
          'Do',
          'Take'
        ],
        correctAnswer: 'Gain',
        explanation: 'The correct collocation is "gain knowledge," which means to acquire or obtain knowledge.'
      }
    ]
  }
];

// B2 Upper Intermediate Level Final Test
const finalTest: PracticalTest = {
  id: 'b2-final',
  title: 'B2 Level Mastery Test',
  description: 'Demonstrate your mastery of B2 level English skills',
  type: 'writing',
  prompt: 'Write an essay discussing the advantages and disadvantages of social media.',
  criteria: [
    'Use of advanced vocabulary',
    'Correct grammar',
    'Clear and coherent structure',
    'Well-supported arguments'
  ],
  minScore: 70
};

// Export the complete lesson structure
export const b2Lesson: LessonStructure = {
  stages,
  quizzes,
  finalTest
};
