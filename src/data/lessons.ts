// Export all lessons from individual files
import { LessonStructure } from '@/types/lesson';

// Import all lessons
import { a1BusinessLesson } from './lessons/a1-business';
import { a1AcademicLesson } from './lessons/a1-academic';
import { a2BusinessLesson } from './lessons/a2-business';
import { a2AcademicLesson } from './lessons/a2-academic';
import { b1BusinessLesson } from './lessons/b1-business';
import { b1AcademicLesson } from './lessons/b1-academic';
import { b2BusinessLesson } from './lessons/b2-business';
import { b2AcademicLesson } from './lessons/b2-academic';
import { c1Lesson } from './lessons/c1';
import { c2BusinessLesson } from './lessons/c2-business';
import { c2AcademicLesson } from './lessons/c2-academic';

// Lesson data mapping
export const lessonData: Record<string, LessonStructure> = {
  'a1-business': a1BusinessLesson,
  'a1-academic': a1AcademicLesson,
  'a2-business': a2BusinessLesson,
  'a2-academic': a2AcademicLesson,
  'b1-business': b1BusinessLesson,
  'b1-academic': b1AcademicLesson,
  'b2-business': b2BusinessLesson,
  'b2-academic': b2AcademicLesson,
  'c1': c1Lesson,
  'c2-business': c2BusinessLesson,
  'c2-academic': c2AcademicLesson
};

// Helper function to get lesson data
export function getLessonData(lessonId: string): LessonStructure {
  return lessonData[lessonId] || {
    stages: [],
    quizzes: [],
    finalTest: {
      id: 'default',
      title: 'Default Test',
      description: 'Default test description',
      type: 'writing',
      prompt: 'Default test prompt',
      minScore: 70
    }
  };
}