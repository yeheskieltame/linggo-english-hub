// Reading comprehension activities

export interface ReadingActivity {
  id: string;
  title: string;
  description: string;
  content: string; // The reading passage
  difficulty: 'easy' | 'medium' | 'hard';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  estimatedReadingTime: string; // e.g., "5 min"
  category: 'article' | 'story' | 'dialogue' | 'letter' | 'email' | 'report';
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
  vocabulary: {
    word: string;
    definition: string;
    example: string;
  }[];
  lessonId: string; // Link to a specific lesson
}

export const readingActivities: ReadingActivity[] = [
  // Beginner level (A1-A2) reading activity
  {
    id: 'read-1',
    title: 'A Day in My Life',
    description: 'Read about Sarah\'s daily routine and answer questions about her activities.',
    content: `My name is Sarah and I live in Jakarta. I wake up at 6:00 AM every morning. First, I take a shower and get dressed. Then I have breakfast with my family. I usually eat bread with egg and drink a cup of coffee.

I leave home at 7:30 AM and go to work by bus. I work as an office assistant at a small company. I start work at 8:30 AM. In the morning, I check emails and answer phone calls. At 12:00 PM, I have lunch with my colleagues in the office cafeteria. I usually eat rice with chicken or fish.

In the afternoon, I attend meetings and organize documents. I finish work at 5:00 PM. After work, I sometimes go shopping or meet friends for coffee. I get home around 7:00 PM. In the evening, I have dinner with my family, watch TV, or read books. I go to bed at 10:30 PM.

On weekends, I don't work. I clean my house, do laundry, and cook special meals. I also visit my parents or go to the mall with friends. Sometimes, I watch movies at the cinema. I love my daily routine because it's simple but fulfilling.`,
    difficulty: 'easy',
    cefrLevel: 'A1',
    estimatedReadingTime: '3 min',
    category: 'article',
    questions: [
      {
        id: 'q1-read-1',
        question: 'What time does Sarah wake up?',
        options: ['5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM'],
        correctAnswer: '6:00 AM'
      },
      {
        id: 'q2-read-1',
        question: 'How does Sarah go to work?',
        options: ['By car', 'By train', 'By bus', 'By motorcycle'],
        correctAnswer: 'By bus'
      },
      {
        id: 'q3-read-1',
        question: 'What is Sarah\'s job?',
        options: ['Teacher', 'Office assistant', 'Doctor', 'Shop assistant'],
        correctAnswer: 'Office assistant'
      },
      {
        id: 'q4-read-1',
        question: 'What does Sarah usually eat for lunch?',
        options: ['Sandwich', 'Salad', 'Rice with chicken or fish', 'Noodles'],
        correctAnswer: 'Rice with chicken or fish'
      },
      {
        id: 'q5-read-1',
        question: 'What time does Sarah go to bed?',
        options: ['9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM'],
        correctAnswer: '10:30 PM'
      }
    ],
    vocabulary: [
      {
        word: 'routine',
        definition: 'the usual or fixed way you do things',
        example: 'My morning routine includes exercise and breakfast.'
      },
      {
        word: 'colleague',
        definition: 'a person you work with',
        example: 'I have lunch with my colleagues every day.'
      },
      {
        word: 'attend',
        definition: 'to be present at an event',
        example: 'I need to attend an important meeting tomorrow.'
      },
      {
        word: 'laundry',
        definition: 'clothes, sheets, etc. that need to be washed',
        example: 'I do my laundry every Saturday morning.'
      },
      {
        word: 'fulfilling',
        definition: 'making you feel happy and satisfied',
        example: 'I have a simple but fulfilling life.'
      }
    ],
    lessonId: 'l1'
  },
  // Intermediate level (B1-B2) reading activity
  {
    id: 'read-2',
    title: 'Email to a Business Partner',
    description: 'Read a business email and answer questions about its content and purpose.',
    content: `Subject: Proposal for Quarterly Marketing Strategy

Dear Mr. Thompson,

I hope this email finds you well. I'm writing to follow up on our discussion last week regarding the marketing strategy for the upcoming quarter.

As we discussed, our main objectives are to increase brand awareness among the 25-35 age demographic and to boost online sales by at least 15%. Based on our market research and previous campaign performance, I've prepared a comprehensive proposal that I believe will help us achieve these goals.

The proposal includes:

1. Social Media Campaign: A series of targeted advertisements on Instagram and LinkedIn, focusing on our new product line. We've allocated $15,000 for this initiative.

2. Content Marketing: Creation of six in-depth blog posts and three video tutorials demonstrating product features and benefits. The estimated cost is $8,000.

3. Email Marketing: A revamped email sequence for new subscribers with personalized product recommendations. This will require approximately $5,000 for implementation and testing.

4. Influencer Partnerships: Collaborations with three industry influencers to reach new audiences. We've budgeted $12,000 for this component.

The total budget for this quarterly plan is $40,000, which is within the parameters we discussed. I've attached the detailed proposal document with timelines, specific KPIs, and expected ROI for each initiative.

I would appreciate your feedback on this proposal by Friday, May 15th, so we can finalize the strategy and begin implementation by the start of next month.

Please let me know if you have any questions or if you'd like to schedule a call to discuss any aspects of the proposal in more detail.

Thank you for your time and consideration.

Best regards,
Sarah Johnson
Marketing Director
Global Solutions Inc.
Email: sarah.johnson@globalsolutions.com
Phone: (555) 123-4567`,
    difficulty: 'medium',
    cefrLevel: 'B1',
    estimatedReadingTime: '5 min',
    category: 'email',
    questions: [
      {
        id: 'q1-read-2',
        question: 'What is the main purpose of this email?',
        options: [
          'To request a meeting', 
          'To present a marketing proposal', 
          'To report on campaign results', 
          'To introduce a new team member'
        ],
        correctAnswer: 'To present a marketing proposal'
      },
      {
        id: 'q2-read-2',
        question: 'What is one of the main objectives mentioned in the email?',
        options: [
          'To reduce marketing costs', 
          'To hire new staff', 
          'To increase brand awareness among the 25-35 age demographic', 
          'To open new office locations'
        ],
        correctAnswer: 'To increase brand awareness among the 25-35 age demographic'
      },
      {
        id: 'q3-read-2',
        question: 'How much money is allocated for the social media campaign?',
        options: ['$5,000', '$8,000', '$12,000', '$15,000'],
        correctAnswer: '$15,000'
      },
      {
        id: 'q4-read-2',
        question: 'How many industry influencers will they collaborate with?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correctAnswer: 'Three'
      },
      {
        id: 'q5-read-2',
        question: 'By when does the sender request feedback on the proposal?',
        options: ['May 1st', 'May 10th', 'May 15th', 'May 30th'],
        correctAnswer: 'May 15th'
      }
    ],
    vocabulary: [
      {
        word: 'comprehensive',
        definition: 'including all or nearly all elements or aspects of something',
        example: 'We need a comprehensive plan to address these issues.'
      },
      {
        word: 'allocated',
        definition: 'distributed for a particular purpose',
        example: 'We\'ve allocated $5,000 for the new project.'
      },
      {
        word: 'revamped',
        definition: 'renovated, revised, or restructured',
        example: 'The company revamped its website to improve user experience.'
      },
      {
        word: 'parameters',
        definition: 'limits or boundaries',
        example: 'The project must be completed within the agreed parameters.'
      },
      {
        word: 'implementation',
        definition: 'the process of putting a decision or plan into effect',
        example: 'The implementation of the new system will take several months.'
      }
    ],
    lessonId: 'l2'
  },
  // Advanced level (C1-C2) reading activity
  {
    id: 'read-3',
    title: 'The Future of Artificial Intelligence in Education',
    description: 'Read an academic article about AI in education and answer complex comprehension questions.',
    content: `The Integration of Artificial Intelligence in Educational Paradigms: Opportunities, Challenges, and Ethical Considerations

The rapid advancement of artificial intelligence (AI) technologies has precipitated a fundamental reconsideration of traditional educational methodologies. As these sophisticated systems become increasingly adept at mimicking human cognitive processes, their potential to transform pedagogical approaches has garnered significant attention from educators, policymakers, and technologists alike.

Personalized Learning Trajectories
One of the most promising applications of AI in education is the development of adaptive learning systems capable of tailoring educational content to individual students' needs, preferences, and learning velocities. Unlike conventional classroom environments, which necessarily adopt a somewhat standardized approach, AI-driven platforms can continuously analyze student performance data to identify knowledge gaps, learning styles, and optimal instructional strategies. Research by Martinez and Christensen (2019) demonstrated that students utilizing AI-enhanced personalized learning platforms exhibited a 28% improvement in subject mastery compared to control groups following traditional curricula.

The implementation of such systems, however, necessitates careful consideration of data privacy concerns. The extensive collection and analysis of student information—ranging from academic performance to behavioral patterns—raises legitimate questions about consent, data security, and potential algorithmic bias. Educational institutions must establish robust frameworks for data governance to ensure that the benefits of personalization do not come at the expense of student privacy.

Augmentation of Educator Capabilities
Contrary to apocalyptic narratives suggesting AI will render human teachers obsolete, emerging evidence indicates that AI technologies are most effective when deployed as complementary tools that augment, rather than replace, educator capabilities. AI systems can automate administrative tasks such as grading objective assessments, tracking attendance, and generating progress reports, thereby allowing educators to dedicate more time to high-value activities requiring human judgment, empathy, and creativity.

Moreover, AI-powered teaching assistants can provide supplementary instruction and immediate feedback outside traditional classroom hours, addressing the perennial challenge of limited teacher availability. A longitudinal study conducted across 17 universities by Wong et al. (2021) found that the integration of AI teaching assistants resulted in a 42% increase in student engagement with course materials and a corresponding 15% improvement in academic outcomes.

Ethical Implications and Digital Divides
The integration of AI in educational contexts inevitably raises profound ethical questions. Algorithms trained on historical data may perpetuate or even amplify existing societal biases, potentially disadvantaging already marginalized student populations. Furthermore, the uneven distribution of technological resources across socioeconomic strata threatens to exacerbate educational inequities, creating a new dimension of digital divide between students with access to AI-enhanced learning opportunities and those without.

Addressing these challenges requires a multifaceted approach involving technological solutions, policy interventions, and pedagogical innovations. Algorithm developers must prioritize fairness and transparency in their design processes, while educational institutions and policymakers must ensure equitable access to advanced learning technologies. Additionally, educators require comprehensive professional development to effectively leverage AI tools while maintaining critical awareness of their limitations and potential biases.

Conclusion
The integration of artificial intelligence in educational contexts represents a paradigmatic shift with far-reaching implications for teaching methodologies, learning outcomes, and educational equity. While the potential benefits—personalized learning experiences, enhanced educator effectiveness, and improved student engagement—are substantial, realizing these advantages requires thoughtful navigation of complex ethical, privacy, and accessibility considerations.

As we advance into this new educational frontier, a balanced approach that harnesses technological capabilities while preserving human judgment and ethical oversight will be essential. The future of education lies not in choosing between human and artificial intelligence, but in developing synergistic relationships that leverage the unique strengths of each to create more effective, equitable, and engaging learning environments for all students.`,
    difficulty: 'hard',
    cefrLevel: 'C1',
    estimatedReadingTime: '10 min',
    category: 'article',
    questions: [
      {
        id: 'q1-read-3',
        question: 'According to the article, what is one of the most promising applications of AI in education?',
        options: [
          'Replacing human teachers', 
          'Developing adaptive learning systems', 
          'Reducing educational costs', 
          'Standardizing curriculum across schools'
        ],
        correctAnswer: 'Developing adaptive learning systems'
      },
      {
        id: 'q2-read-3',
        question: 'By what percentage did students using AI-enhanced personalized learning platforms improve in subject mastery?',
        options: ['15%', '28%', '42%', '50%'],
        correctAnswer: '28%'
      },
      {
        id: 'q3-read-3',
        question: 'What is the article\'s position on AI replacing human teachers?',
        options: [
          'AI will completely replace teachers within a decade', 
          'AI is ineffective compared to human teachers', 
          'AI is most effective when complementing human educators', 
          'AI should be limited to administrative tasks only'
        ],
        correctAnswer: 'AI is most effective when complementing human educators'
      },
      {
        id: 'q4-read-3',
        question: 'According to the Wong et al. study, what was the percentage increase in student engagement with course materials?',
        options: ['15%', '28%', '42%', '50%'],
        correctAnswer: '42%'
      },
      {
        id: 'q5-read-3',
        question: 'What ethical concern does the article raise about AI algorithms in education?',
        options: [
          'They may be too complex for educators to understand', 
          'They may perpetuate or amplify existing societal biases', 
          'They may make students too dependent on technology', 
          'They may be vulnerable to hacking'
        ],
        correctAnswer: 'They may perpetuate or amplify existing societal biases'
      },
      {
        id: 'q6-read-3',
        question: 'What does the article suggest is necessary for educators to effectively use AI tools?',
        options: [
          'Advanced degrees in computer science', 
          'Comprehensive professional development', 
          'Personal AI assistants', 
          'Reduced teaching loads'
        ],
        correctAnswer: 'Comprehensive professional development'
      }
    ],
    vocabulary: [
      {
        word: 'precipitated',
        definition: 'caused to happen suddenly',
        example: 'The financial crisis precipitated major changes in banking regulations.'
      },
      {
        word: 'pedagogical',
        definition: 'relating to teaching methods',
        example: 'The school is known for its innovative pedagogical approaches.'
      },
      {
        word: 'trajectories',
        definition: 'paths or progressions',
        example: 'Students follow different learning trajectories based on their interests and abilities.'
      },
      {
        word: 'augmentation',
        definition: 'the action or process of making something greater by adding to it',
        example: 'The augmentation of human capabilities through technology is a major research focus.'
      },
      {
        word: 'perennial',
        definition: 'lasting or existing for a long time',
        example: 'Teacher shortages are a perennial problem in many school districts.'
      },
      {
        word: 'exacerbate',
        definition: 'make a problem or situation worse',
        example: 'Unequal access to technology can exacerbate educational inequalities.'
      },
      {
        word: 'paradigmatic',
        definition: 'serving as a typical example of something',
        example: 'This represents a paradigmatic shift in how we approach education.'
      },
      {
        word: 'synergistic',
        definition: 'relating to the interaction of elements that when combined produce a total effect greater than the sum of the individual elements',
        example: 'We need to create synergistic relationships between technology and human teaching.'
      }
    ],
    lessonId: 'l3'
  }
];