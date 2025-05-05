
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockLessons } from '@/data/mockData';
import { useAuth } from '@/providers/AuthProvider';

interface LessonNavigationProps {
  currentLessonId: string;
  showRecommendations?: boolean;
}

const LessonNavigation: React.FC<LessonNavigationProps> = ({ 
  currentLessonId, 
  showRecommendations = true 
}) => {
  const { user } = useAuth();
  const currentIndex = mockLessons.findIndex(lesson => lesson.id === currentLessonId);
  
  // Get previous and next lessons
  const prevLesson = currentIndex > 0 ? mockLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < mockLessons.length - 1 ? mockLessons[currentIndex + 1] : null;
  
  // Get recommended lessons (simple logic - could be enhanced with AI later)
  const currentLesson = mockLessons.find(lesson => lesson.id === currentLessonId);
  const recommendedLessons = mockLessons.filter(lesson => 
    lesson.id !== currentLessonId && 
    lesson.level === currentLesson?.level &&
    lesson.cefrLevel === currentLesson?.cefrLevel
  ).slice(0, 2);
  
  return (
    <div className="w-full">
      {/* Linear Navigation */}
      <div className="flex justify-between items-center mb-6">
        {prevLesson ? (
          <Button 
            variant="outline" 
            asChild
            className="flex items-center gap-2"
          >
            <Link to={`/lessons/${prevLesson.id}`}>
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Previous:</span> {prevLesson.title}
            </Link>
          </Button>
        ) : (
          <div></div> // Empty div as placeholder
        )}
        
        <Button 
          variant="ghost" 
          asChild
          className="flex items-center gap-2"
        >
          <Link to="/lessons">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">All Lessons</span>
          </Link>
        </Button>
        
        {nextLesson ? (
          <Button 
            variant="outline" 
            asChild
            className="flex items-center gap-2"
          >
            <Link to={`/lessons/${nextLesson.id}`}>
              {nextLesson.title} <span className="hidden sm:inline">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <div></div> // Empty div as placeholder
        )}
      </div>
      
      {/* Recommended Lessons */}
      {showRecommendations && user && recommendedLessons.length > 0 && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" /> 
            Recommended for you
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recommendedLessons.map(lesson => (
              <Link 
                key={lesson.id}
                to={`/lessons/${lesson.id}`}
                className="p-3 bg-white rounded border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all"
              >
                <p className="font-medium text-sm">{lesson.title}</p>
                <p className="text-xs text-gray-500 mt-1">{lesson.description.substring(0, 60)}...</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonNavigation;
