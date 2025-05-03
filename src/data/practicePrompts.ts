// Practice prompts for speaking exercises

export interface PracticePrompt {
  id: string;
  title: string;
  instruction: string;
  example?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: 'introduction' | 'daily' | 'business' | 'academic' | 'opinion';
  lessonId?: string; // Optional link to a specific lesson
}

export const practicePrompts: PracticePrompt[] = [
  // Introduction prompts
  {
    id: 'prompt-intro-1',
    title: 'Introduce Yourself',
    instruction: 'Introduce yourself by telling us your name, where you\'re from, and something about your work or studies.',
    example: 'Hello, my name is Sarah. I\'m from Jakarta, Indonesia. I work as a software developer at a tech company.',
    difficulty: 'easy',
    cefrLevel: 'A1',
    category: 'introduction',
    lessonId: 'l1'
  },
  {
    id: 'prompt-intro-2',
    title: 'Describe Your Hobbies',
    instruction: 'Talk about your favorite hobbies or activities you enjoy in your free time.',
    example: 'In my free time, I enjoy reading books, especially science fiction novels. I also like hiking on weekends when the weather is nice.',
    difficulty: 'easy',
    cefrLevel: 'A2',
    category: 'introduction'
  },
  
  // Daily conversation prompts
  {
    id: 'prompt-daily-1',
    title: 'Describe Your Daily Routine',
    instruction: 'Describe your typical daily routine from morning to evening.',
    example: 'I usually wake up at 6 AM and have a quick breakfast. Then I go to work at 8 AM. After work, I often go to the gym before heading home for dinner.',
    difficulty: 'medium',
    cefrLevel: 'B1',
    category: 'daily',
    lessonId: 'l4'
  },
  {
    id: 'prompt-daily-2',
    title: 'Talk About Your Weekend',
    instruction: 'Describe what you did last weekend or what you plan to do next weekend.',
    example: 'Last weekend, I visited my parents in their hometown. We had a family dinner on Saturday night, and on Sunday, we went to the local market together.',
    difficulty: 'medium',
    cefrLevel: 'B1',
    category: 'daily'
  },
  
  // Business prompts
  {
    id: 'prompt-business-1',
    title: 'Describe Your Job',
    instruction: 'Describe your current job or a job you would like to have in the future.',
    example: 'I work as a marketing manager for a consumer goods company. My responsibilities include developing marketing strategies and managing a team of five people.',
    difficulty: 'medium',
    cefrLevel: 'B2',
    category: 'business',
    lessonId: 'l2'
  },
  {
    id: 'prompt-business-2',
    title: 'Business Meeting Contribution',
    instruction: 'Imagine you\'re in a business meeting discussing a new project. Share your thoughts and suggestions about how to approach it.',
    example: 'I think we should start by conducting market research to understand customer needs better. Then, we can develop a prototype and test it with a small group of users before full launch.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    category: 'business',
    lessonId: 'l5'
  },
  
  // Academic prompts
  {
    id: 'prompt-academic-1',
    title: 'Explain a Concept',
    instruction: 'Choose an academic concept or topic you\'re familiar with and explain it clearly.',
    example: 'Climate change refers to long-term shifts in temperatures and weather patterns. These changes may be natural, but since the 1800s, human activities have been the main driver of climate change.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    category: 'academic',
    lessonId: 'l3'
  },
  
  // Opinion prompts
  {
    id: 'prompt-opinion-1',
    title: 'Express Your Opinion',
    instruction: 'Share your opinion on the importance of learning foreign languages in today\'s world.',
    example: 'I believe learning foreign languages is extremely important in today\'s globalized world. It opens up career opportunities and helps us understand different cultures better.',
    difficulty: 'medium',
    cefrLevel: 'B2',
    category: 'opinion'
  },
  {
    id: 'prompt-opinion-2',
    title: 'Discuss Technology Impact',
    instruction: 'Discuss how technology has changed the way we communicate with others.',
    example: 'Technology has dramatically changed how we communicate. Social media and messaging apps allow us to stay connected with people around the world instantly, but they also sometimes reduce face-to-face interactions.',
    difficulty: 'hard',
    cefrLevel: 'C1',
    category: 'opinion'
  }
];