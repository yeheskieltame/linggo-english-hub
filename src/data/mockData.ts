
import { LessonPathway, LessonSkill } from '@/types/lesson';

// Mock lessons data used across the application
export const mockLessons = [
  {
    id: 'c1-business',
    title: 'Advanced Business Communication',
    description: 'Master advanced business communication strategies for professional success',
    path: 'business',
    cefrLevel: 'C1',
    level: 'Advanced',
    duration: '45 min',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    tags: ['Business', 'Communication', 'Negotiation']
  },
  // Add more mock lessons as needed
  {
    id: 'b1-business',
    title: 'Intermediate Business Communication',
    description: 'Develop effective business communication skills for professional settings',
    path: 'business',
    cefrLevel: 'B1',
    level: 'Intermediate',
    duration: '30 min',
    imageUrl: 'https://images.unsplash.com/photo-1600880292089-90a649409b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    tags: ['Business', 'Communication', 'Meetings']
  },
  {
    id: 'a2-conversation',
    title: 'Elementary Everyday Conversation',
    description: 'Learn basic conversation skills for everyday situations',
    path: 'conversation',
    cefrLevel: 'A2',
    level: 'Elementary',
    duration: '25 min',
    imageUrl: 'https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    tags: ['Conversation', 'Everyday', 'Social']
  },
  {
    id: 'b2-academic',
    title: 'Upper Intermediate Academic English',
    description: 'Enhance your academic writing and presentation skills',
    path: 'academic',
    cefrLevel: 'B2',
    level: 'Upper Intermediate',
    duration: '40 min',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    tags: ['Academic', 'Writing', 'Presentation']
  }
];

// Features for the homepage
export const features = [
  {
    title: "Personalized Learning Path",
    description: "Tailor your learning experience to your specific goals and level.",
    icon: "Compass"
  },
  {
    title: "Real-world Context",
    description: "Learn language in practical, everyday situations.",
    icon: "Globe"
  },
  {
    title: "Interactive Practice",
    description: "Reinforce your learning with interactive exercises and quizzes.",
    icon: "BookOpen"
  },
  {
    title: "Speaking Practice",
    description: "Improve your pronunciation and fluency with AI-powered speaking exercises.",
    icon: "Mic"
  },
  {
    title: "Comprehensive Assessment",
    description: "Track your progress with detailed assessments and feedback.",
    icon: "BarChart"
  }
];

// Topic categories for the homepage
export const topicCategories = [
  {
    name: "Business English",
    description: "Master professional communication in workplace settings",
    icon: "Briefcase",
    path: "/lessons?topic=business"
  },
  {
    name: "Academic English",
    description: "Develop skills for academic writing and presentations",
    icon: "GraduationCap",
    path: "/lessons?topic=academic"
  },
  {
    name: "Everyday Conversation",
    description: "Improve your skills for daily social interactions",
    icon: "MessageCircle",
    path: "/lessons?topic=conversation"
  },
  {
    name: "Travel English",
    description: "Learn essential phrases and vocabulary for travel",
    icon: "Plane",
    path: "/lessons?topic=travel"
  }
];

// Practice sentences for the practice page with enhanced features
export const practiceSentences = [
  {
    id: "ps1",
    english: "I would like to schedule a meeting for next week.",
    indonesian: "Saya ingin menjadwalkan rapat untuk minggu depan.",
    lessonId: "l1",
    difficulty: "medium",
    cefrLevel: "B1",
    skillFocus: "pronunciation",
    tips: "Pay attention to the pronunciation of 'schedule' with the /ʃ/ sound.",
    context: "Business meeting",
    audioUrl: "/audio/sentence-schedule-meeting.mp3",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
  },
  {
    id: "ps2",
    english: "Could you please explain this concept again?",
    indonesian: "Bisakah Anda menjelaskan konsep ini lagi?",
    lessonId: "l2",
    difficulty: "easy",
    cefrLevel: "A2",
    skillFocus: "pronunciation",
    tips: "Focus on the rising intonation at the end of the question.",
    context: "Classroom",
    audioUrl: "/audio/sentence-explain-concept.mp3",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754"
  },
  {
    id: "ps3",
    english: "The quarterly report will be ready by Friday.",
    indonesian: "Laporan kuartal akan siap pada hari Jumat.",
    lessonId: "c1-business",
    difficulty: "hard",
    cefrLevel: "C1",
    skillFocus: "vocabulary",
    tips: "Pay attention to the stress on 'quarterly' and the clear pronunciation of 'report'.",
    context: "Business reports",
    audioUrl: "/audio/sentence-quarterly-report.mp3",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
  },
  {
    id: "ps4",
    english: "I've been living in Jakarta for three years.",
    indonesian: "Saya telah tinggal di Jakarta selama tiga tahun.",
    lessonId: "b1-business",
    difficulty: "medium",
    cefrLevel: "B1",
    skillFocus: "grammar",
    tips: "Notice the use of present perfect continuous tense to describe an action that started in the past and continues to the present.",
    context: "Personal background",
    audioUrl: "/audio/sentence-living-jakarta.mp3",
    imageUrl: "https://images.unsplash.com/photo-1555899434-94d1368aa7af"
  },
  {
    id: "ps5",
    english: "The research paper must be submitted before the deadline.",
    indonesian: "Makalah penelitian harus diserahkan sebelum batas waktu.",
    lessonId: "b2-academic",
    difficulty: "hard",
    cefrLevel: "B2",
    skillFocus: "vocabulary",
    tips: "Focus on academic vocabulary like 'research paper' and 'deadline'.",
    context: "Academic studies",
    audioUrl: "/audio/sentence-research-paper.mp3",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
  },
  {
    id: "ps6",
    english: "Excuse me, could you tell me the way to the nearest subway station?",
    indonesian: "Permisi, bisakah Anda memberitahu saya jalan ke stasiun kereta bawah tanah terdekat?",
    lessonId: "a2-conversation",
    difficulty: "medium",
    cefrLevel: "A2",
    skillFocus: "speaking",
    tips: "Practice polite expressions for asking directions.",
    context: "Travel directions",
    audioUrl: "/audio/sentence-directions-subway.mp3",
    imageUrl: "https://images.unsplash.com/photo-1588412079929-790b9f593d8e"
  },
  {
    id: "ps7",
    english: "Despite the challenges, the team managed to complete the project ahead of schedule.",
    indonesian: "Meskipun ada tantangan, tim berhasil menyelesaikan proyek lebih cepat dari jadwal.",
    lessonId: "c1-business",
    difficulty: "hard",
    cefrLevel: "C1",
    skillFocus: "grammar",
    tips: "Notice the use of 'despite' followed by a noun phrase, and the complex sentence structure.",
    context: "Project management",
    audioUrl: "/audio/sentence-project-ahead-schedule.mp3",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    id: "ps8",
    english: "I'd like to order a cappuccino and a blueberry muffin, please.",
    indonesian: "Saya ingin memesan cappuccino dan muffin blueberry, tolong.",
    lessonId: "a2-conversation",
    difficulty: "easy",
    cefrLevel: "A2",
    skillFocus: "speaking",
    tips: "Practice clear ordering phrases and food vocabulary pronunciation.",
    context: "Café ordering",
    audioUrl: "/audio/sentence-order-coffee.mp3",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
  }
];
