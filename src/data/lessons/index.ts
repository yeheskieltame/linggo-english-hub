// Export all lessons from individual files
import { LessonStructure } from '@/types/lesson';

// A1 Lessons
import { a1BusinessLesson } from './a1-business';
import { a1AcademicLesson } from './a1-academic';

// A2 Lessons
import { a2BusinessLesson } from './a2-business';
import { a2AcademicLesson } from './a2-academic';

// B1 Lessons
import { b1BusinessLesson } from './b1-business';
import { b1AcademicLesson } from './b1-academic';

// B2 Lessons
import { b2BusinessLesson } from './b2-business';
import { b2AcademicLesson } from './b2-academic';

// C1 Lessons
import { c1Lesson } from './c1';

// C2 Lessons
import { c2BusinessLesson } from './c2-business';
import { c2AcademicLesson } from './c2-academic';

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