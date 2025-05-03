// Conversation scenarios for role-playing practice

export interface ConversationScenario {
  id: string;
  title: string;
  description: string;
  userRole: string;
  aiRole: string;
  difficulty: 'easy' | 'medium' | 'hard';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: 'business' | 'daily' | 'travel' | 'academic' | 'interview';
  initialPrompt: string;
  durationInSeconds: number;
  lessonId?: string; // Optional link to a specific lesson
}

export const conversationScenarios: ConversationScenario[] = [
  // Business scenarios
  {
    id: 'conv-business-1',
    title: 'Business Pitch',
    description: 'Convince a potential client to do business with your company',
    userRole: 'Business Development Manager',
    aiRole: 'Potential Client (CEO of a medium-sized company)',
    difficulty: 'hard',
    cefrLevel: 'C1',
    category: 'business',
    initialPrompt: "I'm interested in your services, but I'm also talking with your competitors. Why should I choose your company?",
    durationInSeconds: 120,
    lessonId: 'l5'
  },
  {
    id: 'conv-business-2',
    title: 'Product Negotiation',
    description: 'Negotiate the price and terms for a product order',
    userRole: 'Sales Representative',
    aiRole: 'Procurement Manager',
    difficulty: 'medium',
    cefrLevel: 'B2',
    category: 'business',
    initialPrompt: "Your price quote is higher than what we expected. Can you offer a better deal if we commit to a larger order?",
    durationInSeconds: 90,
    lessonId: 'l2'
  },
  
  // Interview scenarios
  {
    id: 'conv-interview-1',
    title: 'Job Interview',
    description: 'Participate in a job interview for your dream position',
    userRole: 'Job Applicant',
    aiRole: 'HR Manager',
    difficulty: 'medium',
    cefrLevel: 'B2',
    category: 'interview',
    initialPrompt: "Tell me about yourself and why you're interested in this position.",
    durationInSeconds: 120
  },
  
  // Daily conversation scenarios
  {
    id: 'conv-daily-1',
    title: 'Restaurant Reservation',
    description: 'Make a reservation at a restaurant for a special occasion',
    userRole: 'Customer',
    aiRole: 'Restaurant Host',
    difficulty: 'easy',
    cefrLevel: 'A2',
    category: 'daily',
    initialPrompt: "Good evening. How can I help you today?",
    durationInSeconds: 60,
    lessonId: 'l4'
  },
  {
    id: 'conv-daily-2',
    title: 'Apartment Viewing',
    description: 'Ask questions about an apartment you are interested in renting',
    userRole: 'Potential Tenant',
    aiRole: 'Real Estate Agent',
    difficulty: 'medium',
    cefrLevel: 'B1',
    category: 'daily',
    initialPrompt: "Welcome to the apartment viewing. What would you like to know about this property?",
    durationInSeconds: 90
  },
  
  // Travel scenarios
  {
    id: 'conv-travel-1',
    title: 'Hotel Check-in Problem',
    description: 'Resolve an issue with your hotel reservation',
    userRole: 'Hotel Guest',
    aiRole: 'Hotel Receptionist',
    difficulty: 'medium',
    cefrLevel: 'B1',
    category: 'travel',
    initialPrompt: "I see you have a reservation, but there seems to be an issue with your booking. Your room type is not available tonight.",
    durationInSeconds: 90
  },
  
  // Academic scenarios
  {
    id: 'conv-academic-1',
    title: 'Research Presentation',
    description: 'Present your research and answer questions from a professor',
    userRole: 'Student Researcher',
    aiRole: 'Professor',
    difficulty: 'hard',
    cefrLevel: 'C1',
    category: 'academic',
    initialPrompt: "I've read your research proposal. Could you explain your methodology in more detail?",
    durationInSeconds: 120,
    lessonId: 'l3'
  }
];