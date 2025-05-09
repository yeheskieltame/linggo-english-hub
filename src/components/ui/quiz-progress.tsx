
import * as React from "react"
import { Progress } from "@/components/ui/progress"

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  variant?: "quiz" | "final" | "practice";
}

export function QuizProgress({ 
  currentQuestion, 
  totalQuestions,
  variant = "quiz" 
}: QuizProgressProps) {
  const progress = Math.round((currentQuestion / totalQuestions) * 100);
  
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className={`font-medium ${
          variant === "final" ? "text-amber-700" : 
          variant === "practice" ? "text-emerald-700" : 
          "text-blue-700"
        }`}>
          Question {currentQuestion} of {totalQuestions}
        </span>
        <span className="text-gray-500">{progress}% completed</span>
      </div>
      <Progress 
        value={progress} 
        className="h-2" 
        indicatorClassName={
          variant === "final" ? "bg-amber-500" : 
          variant === "practice" ? "bg-emerald-500" : 
          "bg-blue-500"
        }
      />
    </div>
  )
}
