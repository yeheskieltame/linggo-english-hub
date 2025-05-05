
import React, { useState } from 'react';
import { LessonQuiz as LessonQuizType } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface LessonQuizProps {
  quiz: LessonQuizType;
  onComplete: (score: number, passed: boolean) => void;
}

const LessonQuiz: React.FC<LessonQuizProps> = ({ quiz, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: answer
    });
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowFeedback(false);
    } else {
      // Calculate final score
      calculateAndSubmitResult();
    }
  };
  
  const handleSubmitAnswer = () => {
    setShowFeedback(true);
  };
  
  const calculateAndSubmitResult = () => {
    setIsSubmitted(true);
    
    // Calculate score
    let correctAnswers = 0;
    quiz.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    const passed = scorePercentage >= quiz.requiredScore;
    
    onComplete(scorePercentage, passed);
  };
  
  const isAnswerCorrect = (questionId: string) => {
    const question = quiz.questions.find(q => q.id === questionId);
    return question && selectedAnswers[questionId] === question.correctAnswer;
  };
  
  const isCurrentAnswerSelected = !!selectedAnswers[currentQuestion?.id];
  const isCurrentAnswerCorrect = isAnswerCorrect(currentQuestion?.id);
  
  if (isSubmitted) {
    // Calculate results
    let correctAnswers = 0;
    quiz.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    const passed = scorePercentage >= quiz.requiredScore;
    
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Quiz Results</CardTitle>
          <CardDescription>You've completed the quiz</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center py-6">
            {passed ? (
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            ) : (
              <AlertCircle className="h-16 w-16 text-amber-500 mb-4" />
            )}
            <h3 className="text-2xl font-bold">
              {passed ? 'Congratulations!' : 'Not Quite There Yet'}
            </h3>
            <p className="text-gray-500 mt-2">
              {passed ? 'You passed the quiz! You can now move to the next stage.' : 'You need to review this material and try the quiz again.'}
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Your Score:</span>
              <span className="font-bold">{Math.round(scorePercentage)}%</span>
            </div>
            <Progress value={scorePercentage} className="h-2" />
            <div className="flex justify-between mt-2 text-sm">
              <span>{correctAnswers} correct out of {totalQuestions}</span>
              <span>Required: {quiz.requiredScore}%</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => window.location.reload()}>
            {passed ? 'Continue to Next Stage' : 'Try Again'}
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle>{quiz.title}</CardTitle>
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-lg font-medium">{currentQuestion.question}</div>
        
        <RadioGroup
          value={selectedAnswers[currentQuestion.id] || ''}
          onValueChange={handleAnswerSelect}
          className="space-y-3"
          disabled={showFeedback}
        >
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 relative">
              <div className={`
                border rounded-md p-4 w-full transition-colors
                ${showFeedback && option === currentQuestion.correctAnswer ? 'bg-green-50 border-green-200' : ''}
                ${showFeedback && selectedAnswers[currentQuestion.id] === option && option !== currentQuestion.correctAnswer ? 'bg-red-50 border-red-200' : ''}
                ${!showFeedback ? 'hover:bg-gray-50 cursor-pointer' : ''}
              `}>
                <RadioGroupItem value={option} id={`option-${index}`} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                <Label htmlFor={`option-${index}`} className="pl-6 block cursor-pointer">
                  {option}
                </Label>
              </div>
              
              {showFeedback && option === currentQuestion.correctAnswer && (
                <CheckCircle className="h-5 w-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              )}
              
              {showFeedback && selectedAnswers[currentQuestion.id] === option && option !== currentQuestion.correctAnswer && (
                <XCircle className="h-5 w-5 text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </RadioGroup>
        
        {showFeedback && currentQuestion.explanation && (
          <Alert className={isCurrentAnswerCorrect ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}>
            <AlertTitle>{isCurrentAnswerCorrect ? 'Correct!' : 'Incorrect'}</AlertTitle>
            <AlertDescription>{currentQuestion.explanation}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {!showFeedback ? (
          <Button 
            disabled={!isCurrentAnswerSelected} 
            onClick={handleSubmitAnswer}
            className="w-full sm:w-auto"
          >
            Check Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNextQuestion}
            className="w-full sm:w-auto"
          >
            {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default LessonQuiz;
