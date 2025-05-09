
import { LessonStructure } from '@/types/lesson';

export const c1Lesson: LessonStructure = {
  stages: [
    {
      id: 'c1-stage-1',
      title: 'Advanced Business Vocabulary',
      description: 'Learn key business terms and expressions for professional environments',
      content: `
# Advanced Business Vocabulary

In this lesson, you'll learn sophisticated vocabulary used in professional business settings. These terms will help you communicate more effectively in meetings, presentations, and written business communications.

## Key Terminology

### Financial Terms
- **Fiscal year** - A company's accounting period, often different from the calendar year
- **Quarterly report** - A financial summary covering three months of business activities
- **Revenue stream** - Sources from which a company generates income
- **Profit margin** - The percentage of revenue that represents profit
- **Overheads** - Regular business costs not directly related to products or services

### Management Terms
- **Strategic planning** - The process of defining direction and making decisions on resource allocation
- **Key performance indicator (KPI)** - A measurable value that demonstrates effectiveness in achieving key business objectives
- **Stakeholder** - Person or organization with interest or concern in a business
- **Due diligence** - Comprehensive appraisal of a business undertaken by a prospective buyer
- **Streamline** - To improve efficiency by simplifying or eliminating unnecessary steps

### Communication Terms
- **Bottom line** - The final conclusion or most important point
- **Touch base** - To make contact or briefly communicate
- **On the same page** - Having the same understanding
- **Follow up** - To pursue further action
- **Circle back** - To return to a previous topic of discussion

## Practice Using These Terms

Try creating sentences using these terms in context. For example:

"We need to streamline our procurement process to reduce overheads and improve our profit margin."

"Let's touch base after the quarterly report is published to discuss our revenue streams."
      `,
      videoId: 'sample-video-id',
      examples: [
        {
          english: "We expect to see a significant increase in revenue by the third quarter.",
          indonesian: "Kami mengharapkan peningkatan yang signifikan dalam pendapatan pada kuartal ketiga."
        },
        {
          english: "The stakeholders expressed concern about the company's strategic direction.",
          indonesian: "Para pemangku kepentingan menyatakan keprihatinan tentang arah strategis perusahaan."
        },
        {
          english: "Let's circle back to this topic in our next meeting.",
          indonesian: "Mari kembali ke topik ini di rapat berikutnya."
        }
      ]
    },
    {
      id: 'c1-stage-2',
      title: 'Advanced Email Communication',
      description: 'Master formal email writing for business contexts',
      content: `
# Advanced Email Communication

Effective email communication is crucial in today's business world. This section covers sophisticated email techniques for professional contexts.

## Formal Email Structure

### Opening
- **Appropriate greeting** - Choose the right level of formality based on your relationship with the recipient
- **Clear subject line** - Be specific and concise
- **Reference line** - Include when replying to previous correspondence

### Body
- **Concise paragraphs** - One main idea per paragraph
- **Logical flow** - Present information in a structured, logical sequence
- **Professional tone** - Maintain appropriate distance while being personable

### Closing
- **Call to action** - Clearly state what you expect from the recipient
- **Professional sign-off** - Choose appropriate closing phrase
- **Signature** - Include relevant contact information

## Email Examples

### Formal request to a senior executive
```
Subject: Request for Meeting Regarding Q3 Marketing Strategy

Dear Ms. Johnson,

I hope this email finds you well. 

I am writing to request a meeting to discuss our Q3 marketing strategy for the Asia-Pacific region. Based on our preliminary analysis, we have identified several opportunities that I believe warrant your attention.

Would you have availability for a 30-minute meeting sometime next week? I would be happy to accommodate your schedule.

I look forward to your response.

Kind regards,
[Your Name]
[Your Position]
[Contact Information]
```

### Follow-up after a business meeting
```
Subject: Follow-up: Strategic Planning Meeting - March 15

Dear Team,

Thank you for your valuable contributions during yesterday's strategic planning meeting.

As discussed, I have attached the revised proposal incorporating the feedback provided. The key changes are highlighted in yellow for your convenience.

Please review the document by Thursday, March 18, and send any final comments prior to our submission deadline on Friday.

Best regards,
[Your Name]
```
      `,
      videoId: 'sample-video-id-2',
      examples: [
        {
          english: "I am writing to express my interest in the position advertised on your website.",
          indonesian: "Saya menulis untuk menyatakan ketertarikan saya pada posisi yang diiklankan di situs web Anda."
        },
        {
          english: "Please find attached the report you requested during our meeting last week.",
          indonesian: "Terlampir laporan yang Anda minta selama pertemuan kita minggu lalu."
        },
        {
          english: "I would appreciate it if we could schedule a meeting at your earliest convenience.",
          indonesian: "Saya akan sangat menghargai jika kita dapat menjadwalkan pertemuan pada waktu yang paling nyaman bagi Anda."
        }
      ]
    }
  ],
  quizzes: [
    {
      id: 'c1-quiz-1',
      title: 'Business Vocabulary Quiz',
      description: 'Test your understanding of advanced business terminology',
      questions: [
        {
          id: 'c1-q1',
          type: 'multiple-choice',
          question: 'What does "profit margin" refer to?',
          options: [
            'The total revenue generated by a company',
            'The percentage of revenue that represents profit',
            'The difference between assets and liabilities',
            'The amount of money spent on marketing'
          ],
          correctAnswer: 'The percentage of revenue that represents profit',
          explanation: 'Profit margin is the percentage of revenue that exceeds the cost of goods sold and operating expenses, representing the company\'s profit.',
          difficulty: 'medium',
          points: 10
        },
        {
          id: 'c1-q2',
          type: 'multiple-choice',
          question: 'Which of the following is NOT considered an "overhead" cost?',
          options: [
            'Office rent',
            'Direct materials for product manufacturing',
            'Utilities',
            'Administrative staff salaries'
          ],
          correctAnswer: 'Direct materials for product manufacturing',
          explanation: 'Overhead costs are business expenses that are not directly tied to creating a product or service. Direct materials are directly related to product creation and thus not considered overhead.',
          difficulty: 'hard',
          points: 15
        },
        {
          id: 'c1-q3',
          type: 'fill-in-blank',
          question: 'The process of defining direction and making decisions on resource allocation is called _______.',
          text: 'The process of defining direction and making decisions on resource allocation is called [blank1].',
          answers: { 'blank1': 'strategic planning' },
          explanation: 'Strategic planning is the organizational process of defining its direction and making decisions on allocating resources to pursue this strategy.',
          difficulty: 'medium',
          points: 10
        }
      ],
      requiredScore: 70,
      skillType: 'vocabulary'
    }
  ],
  finalTest: {
    id: 'c1-final-test',
    title: 'Advanced Business Communication Assessment',
    description: 'Demonstrate your mastery of advanced business communication skills',
    type: 'writing',
    prompt: 'Write a formal email to a potential business partner proposing a collaboration on a new project. Include details about your company, the proposed project, potential benefits for both parties, and suggest next steps.',
    criteria: [
      'Use advanced business vocabulary appropriately',
      'Demonstrate correct email structure and formatting',
      'Show clear and logical organization of ideas',
      'Use sophisticated grammatical structures correctly',
      'Maintain an appropriate formal tone throughout'
    ],
    minScore: 80,
    sections: [
      {
        id: 'c1-test-section1',
        title: 'Email Writing',
        type: 'writing',
        description: 'Write a professional business email',
        prompt: 'Write a formal email to a potential business partner proposing a collaboration on a new project. Include details about your company, the proposed project, potential benefits for both parties, and suggest next steps.',
        criteria: [
          'Use advanced business vocabulary appropriately',
          'Demonstrate correct email structure and formatting',
          'Show clear and logical organization of ideas',
          'Use sophisticated grammatical structures correctly',
          'Maintain an appropriate formal tone throughout'
        ],
        weight: 60
      },
      {
        id: 'c1-test-section2',
        title: 'Business Vocabulary Usage',
        type: 'writing',
        description: 'Demonstrate understanding of advanced business terminology',
        prompt: 'Write a short paragraph (100-150 words) explaining a business strategy using at least 5 of the following terms: fiscal year, stakeholders, KPIs, revenue stream, profit margin, overheads, strategic planning, due diligence.',
        criteria: [
          'Use terms accurately in context',
          'Demonstrate clear understanding of each term used',
          'Create a coherent paragraph with logical flow'
        ],
        weight: 40
      }
    ]
  }
};
