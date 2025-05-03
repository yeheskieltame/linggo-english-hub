// Conversation scenarios for role-playing practice

export interface ConversationScenario {
  id: string;
  title: string;
  description: string;
  userRole: string;
  aiRole: string;
  difficulty: 'easy' | 'medium' | 'hard';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: 'business' | 'daily' | 'travel' | 'academic' | 'interview' | 'introduction';
  initialPrompt: string;
  durationInSeconds: number;
  lessonId?: string; // Optional link to a specific lesson
}

export const conversationScenarios: ConversationScenario[] = [
  // Introduction scenarios (Beginner - A1/A2)
  {
    id: 'conv-intro-1',
    title: 'First Day at Language Class',
    description: 'Introduce yourself to your new English teacher and classmates',
    userRole: 'New Student',
    aiRole: 'English Teacher',
    difficulty: 'easy',
    cefrLevel: 'A1',
    category: 'introduction',
    initialPrompt: "Welcome to our English class! I'm your teacher. Could you please introduce yourself to the class?",
    durationInSeconds: 60,
    lessonId: 'l1'
  },
  {
    id: 'conv-intro-2',
    title: 'Meeting a New Neighbor',
    description: 'Introduce yourself to your new neighbor and have a friendly conversation',
    userRole: 'Resident',
    aiRole: 'New Neighbor',
    difficulty: 'easy',
    cefrLevel: 'A1',
    category: 'introduction',
    initialPrompt: "Hi there! I just moved in next door. I'm trying to meet everyone in the building.",
    durationInSeconds: 60,
    lessonId: 'l1'
  },
  {
    id: 'conv-intro-3',
    title: 'First Day at Work',
    description: 'Introduce yourself to your new colleagues on your first day at work',
    userRole: 'New Employee',
    aiRole: 'Team Leader',
    difficulty: 'easy',
    cefrLevel: 'A2',
    category: 'introduction',
    initialPrompt: "Welcome to the team! We're excited to have you join us. Would you like to introduce yourself to everyone?",
    durationInSeconds: 90,
    lessonId: 'l1'
  },
  {
    id: 'conv-intro-4',
    title: 'Social Gathering',
    description: 'Introduce yourself at a social event and make small talk',
    userRole: 'Guest',
    aiRole: 'Host of the Party',
    difficulty: 'easy',
    cefrLevel: 'A2',
    category: 'introduction',
    initialPrompt: "I don't think we've met before. I'm the host of this gathering. What brings you here today?",
    durationInSeconds: 90,
    lessonId: 'l1'
  },
  
  // Daily conversation scenarios (Beginner to Intermediate - A1 to B1)
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
  {
    id: 'conv-daily-3',
    title: 'Coffee Shop Order',
    description: 'Order a coffee and something to eat at a café',
    userRole: 'Customer',
    aiRole: 'Barista',
    difficulty: 'easy',
    cefrLevel: 'A1',
    category: 'daily',
    initialPrompt: "Hi there! Welcome to our café. What can I get for you today?",
    durationInSeconds: 60,
    lessonId: 'l4'
  },
  {
    id: 'conv-daily-4',
    title: 'Shopping for Clothes',
    description: 'Ask for help finding clothes in a department store',
    userRole: 'Customer',
    aiRole: 'Sales Assistant',
    difficulty: 'easy',
    cefrLevel: 'A2',
    category: 'daily',
    initialPrompt: "Hello! Can I help you find something today?",
    durationInSeconds: 60
  },
  {
    id: 'conv-daily-5',
    title: 'Making Plans with Friends',
    description: 'Discuss weekend plans and arrange to meet up with a friend',
    userRole: 'Friend',
    aiRole: 'Friend',
    difficulty: 'medium',
    cefrLevel: 'B1',
    category: 'daily',
    initialPrompt: "Hey! I was thinking we could do something fun this weekend. Do you have any plans yet?",
    durationInSeconds: 90
  },
  
  // Travel scenarios (Beginner to Advanced - A2 to C1)
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
  {
    id: 'conv-travel-2',
    title: 'Airport Check-in',
    description: 'Check in for your flight and handle baggage questions',
    userRole: 'Passenger',
    aiRole: 'Airline Staff',
    difficulty: 'easy',
    cefrLevel: 'A2',
    category: 'travel',
    initialPrompt: "Good morning. May I see your passport and booking reference, please?",
    durationInSeconds: 60
  },
  {
    id: 'conv-travel-3',
    title: 'Lost in a Foreign City',
    description: 'Ask for directions when you are lost in a city you are visiting',
    userRole: 'Tourist',
    aiRole: 'Local Resident',
    difficulty: 'easy',
    cefrLevel: 'A2',
    category: 'travel',
    initialPrompt: "You look a bit lost. Can I help you find something?",
    durationInSeconds: 60
  },
  {
    id: 'conv-travel-4',
    title: 'Guided Tour Inquiry',
    description: 'Ask about and book a guided tour in a tourist destination',
    userRole: 'Tourist',
    aiRole: 'Tour Guide',
    difficulty: 'medium',
    cefrLevel: 'B1',
    category: 'travel',
    initialPrompt: "Welcome to our tour office. We offer several different guided tours of the city. What are you interested in seeing?",
    durationInSeconds: 90
  },
  {
    id: 'conv-travel-5',
    title: 'Flight Delay Complaint',
    description: 'Discuss options with airline staff after your flight is significantly delayed',
    userRole: 'Passenger',
    aiRole: 'Airline Customer Service Representative',
    difficulty: 'hard',
    cefrLevel: 'B2',
    category: 'travel',
    initialPrompt: "I understand you're concerned about the delay. Your flight has been delayed by 5 hours due to technical issues. How can I assist you?",
    durationInSeconds: 120
  },
  
  // Business scenarios (Intermediate to Advanced - B1 to C2)
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
  {
    id: 'conv-business-3',
    title: 'Team Meeting',
    description: 'Participate in a team meeting and discuss project progress',
    userRole: 'Team Member',
    aiRole: 'Project Manager',
    difficulty: 'medium',
    cefrLevel: 'B1',
    category: 'business',
    initialPrompt: "Let's go around the table and get updates on everyone's progress. Can you tell us how your part of the project is going?",
    durationInSeconds: 90,
    lessonId: 'l5'
  },
  {
    id: 'conv-business-4',
    title: 'Customer Complaint',
    description: 'Handle a customer complaint about a product or service',
    userRole: 'Customer Service Representative',
    aiRole: 'Upset Customer',
    difficulty: 'medium',
    cefrLevel: 'B2',
    category: 'business',
    initialPrompt: "I'm extremely disappointed with your product. It stopped working after just two weeks, and I want a full refund.",
    durationInSeconds: 90
  },
  {
    id: 'conv-business-5',
    title: 'Business Partnership Proposal',
    description: 'Propose a business partnership to a potential collaborator',
    userRole: 'Entrepreneur',
    aiRole: 'Potential Business Partner',
    difficulty: 'hard',
    cefrLevel: 'C1',
    category: 'business',
    initialPrompt: "I received your email about a potential partnership. I'm intrigued, but I'd like to hear more details about what you're proposing.",
    durationInSeconds: 120
  },
  {
    id: 'conv-business-6',
    title: 'Job Performance Review',
    description: 'Discuss your performance and career goals with your manager',
    userRole: 'Employee',
    aiRole: 'Manager',
    difficulty: 'hard',
    cefrLevel: 'C1',
    category: 'business',
    initialPrompt: "Thanks for coming in for your annual review. I'd like to discuss your performance over the past year and hear about your goals moving forward.",
    durationInSeconds: 120
  },
  
  // Interview scenarios (Intermediate to Advanced - B1 to C2)
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
  {
    id: 'conv-interview-2',
    title: 'Internship Interview',
    description: 'Interview for an internship position at a company',
    userRole: 'Student Applicant',
    aiRole: 'Internship Coordinator',
    difficulty: 'medium',
    cefrLevel: 'B1',
    category: 'interview',
    initialPrompt: "We received your application for our summer internship program. Can you tell me why you're interested in this field?",
    durationInSeconds: 90
  },
  {
    id: 'conv-interview-3',
    title: 'Technical Interview',
    description: 'Answer technical questions in a job interview for a specialized position',
    userRole: 'Technical Job Candidate',
    aiRole: 'Technical Manager',
    difficulty: 'hard',
    cefrLevel: 'C1',
    category: 'interview',
    initialPrompt: "I've reviewed your resume and I'm impressed with your background. I'd like to ask you some questions about your technical experience and problem-solving approach.",
    durationInSeconds: 120
  },
  {
    id: 'conv-interview-4',
    title: 'Scholarship Interview',
    description: 'Interview for an academic scholarship',
    userRole: 'Student Applicant',
    aiRole: 'Scholarship Committee Member',
    difficulty: 'medium',
    cefrLevel: 'B2',
    category: 'interview',
    initialPrompt: "Thank you for applying to our scholarship program. We'd like to know more about your academic goals and how this scholarship would help you achieve them.",
    durationInSeconds: 90
  },
  
  // Academic scenarios (Intermediate to Advanced - B1 to C2)
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
  },
  {
    id: 'conv-academic-2',
    title: 'Academic Advising',
    description: 'Discuss your academic progress and course selection with an advisor',
    userRole: 'Student',
    aiRole: 'Academic Advisor',
    difficulty: 'medium',
    cefrLevel: 'B1',
    category: 'academic',
    initialPrompt: "I've looked at your transcript. Let's discuss your progress and what courses you should take next semester.",
    durationInSeconds: 90,
    lessonId: 'l3'
  },
  {
    id: 'conv-academic-3',
    title: 'Group Project Discussion',
    description: 'Discuss roles and responsibilities for a group academic project',
    userRole: 'Student Team Member',
    aiRole: 'Student Team Leader',
    difficulty: 'medium',
    cefrLevel: 'B2',
    category: 'academic',
    initialPrompt: "We need to divide up the work for our project. What part would you like to take responsibility for?",
    durationInSeconds: 90
  },
  {
    id: 'conv-academic-4',
    title: 'Office Hours',
    description: 'Ask your professor questions about course material during office hours',
    userRole: 'Student',
    aiRole: 'Professor',
    difficulty: 'medium',
    cefrLevel: 'B2',
    category: 'academic',
    initialPrompt: "Come in. What questions do you have about the course material?",
    durationInSeconds: 90
  },
  {
    id: 'conv-academic-5',
    title: 'Thesis Defense',
    description: 'Defend your thesis to a committee of professors',
    userRole: 'Graduate Student',
    aiRole: 'Committee Chair',
    difficulty: 'hard',
    cefrLevel: 'C2',
    category: 'academic',
    initialPrompt: "Thank you for your presentation. I'd like to begin by asking about the theoretical framework you've chosen for your research. Can you elaborate on why you selected this approach?",
    durationInSeconds: 120
  }
];