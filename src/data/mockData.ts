
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
  }
];

// Practice sentences for the practice page
export const practiceSentences = [
  {
    id: "ps1",
    english: "I would like to schedule a meeting for next week.",
    indonesian: "Saya ingin menjadwalkan rapat untuk minggu depan."
  },
  {
    id: "ps2",
    english: "Could you please explain this concept again?",
    indonesian: "Bisakah Anda menjelaskan konsep ini lagi?"
  },
  {
    id: "ps3",
    english: "The quarterly report will be ready by Friday.",
    indonesian: "Laporan kuartal akan siap pada hari Jumat."
  }
];
