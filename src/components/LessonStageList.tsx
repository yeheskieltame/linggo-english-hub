
import React from 'react';
import { LessonStage, LessonQuiz, PracticalTest } from '@/types/lesson';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, CircleDashed, PlayCircle, FileQuestion, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LessonStageListProps {
  stages: LessonStage[];
  quizzes: LessonQuiz[];
  finalTest: PracticalTest;
  completedStages: string[];
  currentStageId: string;
  onSelectStage: (stageId: string) => void;
  onSelectQuiz: (quizId: string) => void;
  onSelectFinalTest: () => void;
}

const LessonStageList: React.FC<LessonStageListProps> = ({
  stages,
  quizzes,
  finalTest,
  completedStages,
  currentStageId,
  onSelectStage,
  onSelectQuiz,
  onSelectFinalTest
}) => {
  const isStageCompleted = (stageId: string) => completedStages.includes(stageId);
  const isStageActive = (stageId: string) => currentStageId === stageId;
  
  // Map quizzes to their corresponding stage
  const stageQuizMap: Record<string, LessonQuiz> = {};
  quizzes.forEach(quiz => {
    // Assuming quiz IDs follow pattern "stageId-quiz"
    const stageId = quiz.id.split('-')[0];
    if (stageId) {
      stageQuizMap[stageId] = quiz;
    }
  });

  return (
    <div className="space-y-2 mt-4">
      <h3 className="text-lg font-semibold mb-3">Lesson Stages</h3>
      <div className="space-y-3">
        {stages.map((stage, index) => (
          <div key={stage.id} className="space-y-2">
            <button
              onClick={() => onSelectStage(stage.id)}
              className={cn(
                "flex items-center w-full text-left p-3 rounded-md transition-colors",
                isStageActive(stage.id) ? "bg-purple-100 border-l-4 border-purple-500" : "hover:bg-gray-100",
                isStageCompleted(stage.id) ? "text-gray-700" : "text-gray-800"
              )}
            >
              <div className="mr-3">
                {isStageCompleted(stage.id) ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : isStageActive(stage.id) ? (
                  <PlayCircle className="h-5 w-5 text-purple-500" />
                ) : (
                  <CircleDashed className="h-5 w-5 text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium">{index + 1}. {stage.title}</div>
                {stage.description && (
                  <p className="text-sm text-gray-500 truncate">{stage.description}</p>
                )}
              </div>
            </button>
            
            {/* Quiz for this stage */}
            {stageQuizMap[stage.id] && (
              <button
                onClick={() => onSelectQuiz(stageQuizMap[stage.id].id)}
                className={cn(
                  "flex items-center w-full text-left p-3 rounded-md transition-colors ml-6 border-l border-dashed border-gray-300 pl-4",
                  isStageActive(stageQuizMap[stage.id].id) ? "bg-blue-50" : "hover:bg-gray-50",
                  isStageCompleted(stageQuizMap[stage.id].id) ? "text-gray-600" : "text-gray-700"
                )}
                disabled={!isStageCompleted(stage.id)}
              >
                <div className="mr-3">
                  <FileQuestion className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">Quiz: {stageQuizMap[stage.id].title}</div>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {stageQuizMap[stage.id].skillType}
                  </Badge>
                </div>
                {!isStageCompleted(stage.id) && (
                  <Badge variant="outline" className="bg-gray-100">Locked</Badge>
                )}
              </button>
            )}
          </div>
        ))}
        
        {/* Final Test */}
        <button
          onClick={onSelectFinalTest}
          className={cn(
            "flex items-center w-full text-left p-3 rounded-md transition-colors mt-4 border-t border-gray-200 pt-4",
            isStageActive('final-test') ? "bg-amber-50 border-l-4 border-amber-500" : "hover:bg-gray-50",
            stages.every(stage => completedStages.includes(stage.id)) ? "text-gray-800" : "text-gray-400"
          )}
          disabled={!stages.every(stage => completedStages.includes(stage.id))}
        >
          <div className="mr-3">
            <Award className={cn(
              "h-5 w-5",
              stages.every(stage => completedStages.includes(stage.id)) ? "text-amber-500" : "text-gray-300"
            )} />
          </div>
          <div className="flex-1">
            <div className="font-medium">Final Test: {finalTest.title}</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="text-xs">
                {finalTest.type}
              </Badge>
              <p className="text-xs text-gray-500">Complete all stages to unlock</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LessonStageList;
