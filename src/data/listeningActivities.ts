// Listening comprehension activities

export interface ListeningActivity {
  id: string;
  title: string;
  description: string;
  audioUrl: string; // URL to the audio file
  transcript: string; // Full transcript of the audio
  difficulty: 'easy' | 'medium' | 'hard';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  duration: string; // Duration of the audio in format "mm:ss"
  category: 'conversation' | 'monologue' | 'news' | 'interview' | 'story';
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

export const listeningActivities: ListeningActivity[] = [
  // Beginner level (A1-A2) listening activities
  {
    id: 'listen-1',
    title: 'Introducing Yourself',
    description: 'Listen to a simple introduction and answer questions about the speaker.',
    audioUrl: '/audio/introduction.mp3', // This would be a real audio file in production
    transcript: "Hello! My name is Sarah Johnson. I'm from Canada, but I live in Jakarta now. I'm an English teacher. I've been living in Indonesia for two years. I really like Indonesian food, especially nasi goreng. In my free time, I enjoy reading books and watching movies. I also like to travel and explore new places in Indonesia.",
    difficulty: 'easy',
    cefrLevel: 'A1',
    duration: '01:15',
    category: 'monologue',
    questions: [
      {
        id: 'q1-listen-1',
        question: "What is the speaker's name?",
        options: ['Sarah Johnson', 'Sarah Jackson', 'Sandra Johnson', 'Sandra Jackson'],
        correctAnswer: 'Sarah Johnson'
      },
      {
        id: 'q2-listen-1',
        question: 'Where is the speaker from?',
        options: ['United States', 'United Kingdom', 'Canada', 'Australia'],
        correctAnswer: 'Canada'
      },
      {
        id: 'q3-listen-1',
        question: 'What is her job?',
        options: ['Student', 'English Teacher', 'Tour Guide', 'Business Owner'],
        correctAnswer: 'English Teacher'
      },
      {
        id: 'q4-listen-1',
        question: 'How long has she been living in Indonesia?',
        options: ['1 year', '2 years', '3 years', '4 years'],
        correctAnswer: '2 years'
      },
      {
        id: 'q5-listen-1',
        question: 'What Indonesian food does she like?',
        options: ['Sate', 'Rendang', 'Nasi goreng', 'Gado-gado'],
        correctAnswer: 'Nasi goreng'
      }
    ],
    vocabulary: [
      {
        word: 'introduce',
        definition: 'to tell someone your name when you meet them for the first time',
        example: 'Let me introduce myself. My name is John.'
      },
      {
        word: 'free time',
        definition: 'time when you are not working or studying and can do what you want',
        example: 'In my free time, I like to play tennis.'
      },
      {
        word: 'explore',
        definition: 'to travel around an area to learn about it',
        example: 'We spent the weekend exploring the old part of the city.'
      }
    ],
    lessonId: 'l1'
  },
  // Intermediate level (B1-B2) listening activity
  {
    id: 'listen-2',
    title: 'Business Meeting Discussion',
    description: 'Listen to a business meeting conversation and answer questions about the discussion.',
    audioUrl: '/audio/business-meeting.mp3',
    transcript: "Manager: Good morning everyone. Thank you for coming to this meeting. Today, we need to discuss our marketing strategy for the next quarter. Sarah, could you please share your team's ideas?\n\nSarah: Of course. We've been analyzing our social media performance, and we think we should increase our budget for online advertising. The data shows that our Instagram campaigns have been particularly successful.\n\nManager: That's interesting. What about our website traffic?\n\nSarah: It's improved by 15% since we redesigned the homepage, but we still need to work on the mobile version. Many users are accessing our site from their phones.\n\nManager: I agree. John, what do you think about this?\n\nJohn: I think Sarah's right. We should definitely focus more on mobile optimization. I'd also suggest creating more video content. Our videos have high engagement rates.\n\nManager: Good point. Let's allocate some resources for video production. Any other suggestions?\n\nSarah: We could also consider partnering with some influencers in our industry. They can help us reach new audiences.\n\nManager: That's a great idea. Let's discuss the budget for all these initiatives...",
    difficulty: 'medium',
    cefrLevel: 'B1',
    duration: '02:30',
    category: 'conversation',
    questions: [
      {
        id: 'q1-listen-2',
        question: 'What is the main topic of the meeting?',
        options: ['Budget planning', 'Marketing strategy', 'Website redesign', 'Staff performance'],
        correctAnswer: 'Marketing strategy'
      },
      {
        id: 'q2-listen-2',
        question: 'Which social media platform has been particularly successful?',
        options: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
        correctAnswer: 'Instagram'
      },
      {
        id: 'q3-listen-2',
        question: 'By how much has website traffic improved?',
        options: ['5%', '10%', '15%', '20%'],
        correctAnswer: '15%'
      },
      {
        id: 'q4-listen-2',
        question: 'What does John suggest creating more of?',
        options: ['Blog posts', 'Podcasts', 'Video content', 'Infographics'],
        correctAnswer: 'Video content'
      },
      {
        id: 'q5-listen-2',
        question: 'What additional marketing strategy does Sarah suggest?',
        options: ['Email marketing', 'Partnering with influencers', 'Print advertising', 'Radio commercials'],
        correctAnswer: 'Partnering with influencers'
      }
    ],
    vocabulary: [
      {
        word: 'quarter',
        definition: 'a period of three months, especially as a division of a company\'s financial year',
        example: 'Our sales increased in the first quarter of the year.'
      },
      {
        word: 'budget',
        definition: 'the amount of money available for something',
        example: 'We need to stay within our marketing budget.'
      },
      {
        word: 'engagement',
        definition: 'the degree to which people interact with content on social media',
        example: 'Our new campaign has high engagement rates on Facebook.'
      },
      {
        word: 'allocate',
        definition: 'to give something to someone as their share of a total amount',
        example: 'We need to allocate more resources to this project.'
      },
      {
        word: 'influencer',
        definition: 'a person who can affect the buying decisions of others because of their authority or relationship with their audience',
        example: 'The company partnered with several social media influencers to promote their products.'
      }
    ],
    lessonId: 'l2'
  },
  // Advanced level (C1-C2) listening activity
  {
    id: 'listen-3',
    title: 'Academic Lecture on Climate Change',
    description: 'Listen to an academic lecture on climate change and answer complex comprehension questions.',
    audioUrl: '/audio/academic-lecture.mp3',
    transcript: "Today, I'd like to discuss the multifaceted implications of climate change on global ecosystems. The Intergovernmental Panel on Climate Change has consistently emphasized that anthropogenic activities have precipitated unprecedented alterations in our climate systems. These changes manifest in various forms, including rising global temperatures, sea level elevation, and increasingly frequent extreme weather phenomena.\n\nOne of the most significant consequences is the disruption of biodiversity. As habitats transform due to changing climatic conditions, numerous species face extinction threats. The rate of this biodiversity loss is estimated to be between 100 and 1,000 times higher than what would occur naturally without human influence.\n\nMoreover, climate change exacerbates existing socioeconomic disparities. Developing nations, despite contributing minimally to greenhouse gas emissions historically, often bear the brunt of climate change impacts due to geographical vulnerability and limited adaptive capacity. This raises profound questions about climate justice and equitable responsibility.\n\nAdaptation and mitigation strategies have evolved significantly over the past decades. The Paris Agreement of 2015 represented a watershed moment in international climate policy, establishing a framework for limiting global temperature increase to well below 2 degrees Celsius above pre-industrial levels. However, current national commitments remain insufficient to achieve this target.\n\nIn conclusion, addressing climate change necessitates a multidisciplinary approach, integrating scientific research, policy innovation, technological advancement, and societal transformation. The complexity of this challenge cannot be overstated, yet the imperative for action has never been clearer.",
    difficulty: 'hard',
    cefrLevel: 'C1',
    duration: '04:15',
    category: 'monologue',
    questions: [
      {
        id: 'q1-listen-3',
        question: 'According to the lecture, what has caused the changes in our climate systems?',
        options: ['Natural climate cycles', 'Solar radiation fluctuations', 'Anthropogenic activities', 'Geological processes'],
        correctAnswer: 'Anthropogenic activities'
      },
      {
        id: 'q2-listen-3',
        question: 'How much higher is the current rate of biodiversity loss compared to the natural rate?',
        options: ['10-100 times higher', '100-1,000 times higher', '1,000-10,000 times higher', 'The lecture does not specify'],
        correctAnswer: '100-1,000 times higher'
      },
      {
        id: 'q3-listen-3',
        question: 'Why do developing nations often suffer more from climate change impacts?',
        options: [
          'They produce more greenhouse gases', 
          'They have larger populations', 
          'They have geographical vulnerability and limited adaptive capacity', 
          'They lack international support'
        ],
        correctAnswer: 'They have geographical vulnerability and limited adaptive capacity'
      },
      {
        id: 'q4-listen-3',
        question: 'What was significant about the Paris Agreement of 2015?',
        options: [
          'It eliminated all greenhouse gas emissions', 
          'It established a framework for limiting global temperature increase', 
          'It provided funding for developing nations', 
          'It created new technologies for renewable energy'
        ],
        correctAnswer: 'It established a framework for limiting global temperature increase'
      },
      {
        id: 'q5-listen-3',
        question: 'What temperature limit was established by the Paris Agreement?',
        options: [
          'Well below 1 degree Celsius above pre-industrial levels', 
          'Well below 2 degrees Celsius above pre-industrial levels', 
          'Well below 3 degrees Celsius above pre-industrial levels', 
          'Well below 4 degrees Celsius above pre-industrial levels'
        ],
        correctAnswer: 'Well below 2 degrees Celsius above pre-industrial levels'
      }
    ],
    vocabulary: [
      {
        word: 'multifaceted',
        definition: 'having many different aspects or features',
        example: 'Climate change is a multifaceted problem requiring various solutions.'
      },
      {
        word: 'anthropogenic',
        definition: 'caused or produced by humans',
        example: 'The study focused on anthropogenic factors affecting the environment.'
      },
      {
        word: 'precipitated',
        definition: 'caused something to happen suddenly or more quickly',
        example: 'The economic crisis precipitated major political changes.'
      },
      {
        word: 'exacerbate',
        definition: 'to make a problem or situation worse',
        example: 'Poor infrastructure exacerbates transportation problems in the city.'
      },
      {
        word: 'mitigation',
        definition: 'the action of reducing the severity or seriousness of something',
        example: 'The company implemented several mitigation strategies to reduce their carbon footprint.'
      },
      {
        word: 'watershed',
        definition: 'an important point of change from which things develop in a different way',
        example: 'The election was a watershed moment in the country\'s history.'
      },
      {
        word: 'imperative',
        definition: 'extremely important or urgent',
        example: 'It is imperative that we act now to address this crisis.'
      }
    ],
    lessonId: 'l3'
  }
];