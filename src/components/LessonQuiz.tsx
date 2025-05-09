
import React, { useState, useEffect } from 'react';
import { LessonQuiz as LessonQuizType, QuizQuestion } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, RefreshCw, HelpCircle, Volume2, Mic } from 'lucide-react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { QuizProgress } from '@/components/ui/quiz-progress';

interface LessonQuizProps {
  quiz: LessonQuizType;
  onComplete: (score: number, passed: boolean) => void;
}

// Sortable item for drag and drop questions
const SortableItem = (props: { id: string; children: React.ReactNode }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
      className="p-3 mb-2 bg-white border rounded-md cursor-move hover:bg-gray-50 shadow-sm"
    >
      {props.children}
    </div>
  );
};

const LessonQuiz: React.FC<LessonQuizProps> = ({ quiz, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [filledAnswers, setFilledAnswers] = useState<Record<string, string>>({});
  const [matchingPairs, setMatchingPairs] = useState<Record<string, string>>({});
  const [dragItems, setDragItems] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  // Initialize states for different question types
  useEffect(() => {
    setSelectedAnswer(null);
    setFilledAnswers({});
    setMatchingPairs({});
    setIsAnswered(false);
    setIsCorrect(false);
    setShowExplanation(false);
    
    if (currentQuestion.type === 'drag-drop' || currentQuestion.type === 'ordering') {
      // For drag-drop and ordering questions, initialize the items
      if (currentQuestion.type === 'drag-drop') {
        setDragItems([...currentQuestion.items]);
      } else if (currentQuestion.type === 'ordering') {
        setDragItems([...currentQuestion.items]);
      }
    }
  }, [currentQuestionIndex, currentQuestion]);
  
  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };
  
  const handleFillBlank = (blankId: string, value: string) => {
    setFilledAnswers(prev => ({
      ...prev,
      [blankId]: value
    }));
  };
  
  const handleMatchingSelect = (leftItem: string, rightItem: string) => {
    setMatchingPairs(prev => ({
      ...prev,
      [leftItem]: rightItem
    }));
  };
  
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      setDragItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  
  const handleStartRecording = () => {
    setIsRecording(true);
    // Implement actual recording logic here
    setTimeout(() => {
      setIsRecording(false);
    }, 5000); // Simulate 5 seconds recording
  };
  
  const checkAnswer = () => {
    let isCorrect = false;
    
    switch (currentQuestion.type) {
      case 'multiple-choice':
        isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        break;
      case 'fill-in-blank':
        isCorrect = Object.keys(currentQuestion.answers).every(
          key => filledAnswers[key]?.toLowerCase().trim() === currentQuestion.answers[key].toLowerCase().trim()
        );
        break;
      case 'matching':
        isCorrect = currentQuestion.pairs.every(
          pair => matchingPairs[pair.left] === pair.right
        );
        break;
      case 'listening':
        isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        break;
      case 'drag-drop':
        isCorrect = Object.keys(currentQuestion.correctPairings).every(
          (item, index) => dragItems[index] === item
        );
        break;
      case 'ordering':
        isCorrect = dragItems.every(
          (item, index) => currentQuestion.items[currentQuestion.correctOrder[index]] === item
        );
        break;
      case 'image-selection':
        isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        break;
      case 'speaking':
        // Speaking evaluation would typically be done via API
        // For this example, we'll simulate a correct answer
        isCorrect = true;
        break;
      default:
        isCorrect = false;
    }
    
    setIsAnswered(true);
    setIsCorrect(isCorrect);
    
    if (isCorrect) {
      // Add points (default to 1 if not specified)
      const points = currentQuestion.points || 1;
      setScore(score + points);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
      setShowExplanation(false);
    } else {
      // Calculate final score as a percentage
      const finalScore = Math.round((score / quiz.questions.length) * 100);
      setIsFinished(true);
      
      // Check if the user passed the quiz
      const passed = finalScore >= quiz.requiredScore;
      
      // Call onComplete callback with score and pass status
      onComplete(finalScore, passed);
    }
  };
  
  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            <div className="text-lg font-medium mb-4">{currentQuestion.question}</div>
            
            {currentQuestion.imageUrl && (
              <div className="mb-4">
                <img 
                  src={currentQuestion.imageUrl} 
                  alt="Question image" 
                  className="rounded-md max-h-60 mx-auto"
                />
              </div>
            )}
            
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index} 
                  className={`p-3 border rounded-md cursor-pointer transition-all ${
                    selectedAnswer === option 
                      ? isAnswered 
                        ? isCorrect 
                          ? 'bg-green-100 border-green-500' 
                          : 'bg-red-100 border-red-500' 
                        : 'bg-purple-100 border-purple-500'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
                      selectedAnswer === option 
                        ? isAnswered 
                          ? isCorrect 
                            ? 'bg-green-500 text-white' 
                            : 'bg-red-500 text-white' 
                          : 'bg-purple-500 text-white'
                        : 'border border-gray-300'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <div>{option}</div>
                    
                    {isAnswered && selectedAnswer === option && (
                      <div className="ml-auto">
                        {isCorrect ? (
                          <CheckCircle2 className="text-green-500 h-5 w-5" />
                        ) : (
                          <XCircle className="text-red-500 h-5 w-5" />
                        )}
                      </div>
                    )}
                    
                    {isAnswered && !isCorrect && option === currentQuestion.correctAnswer && (
                      <div className="ml-auto">
                        <CheckCircle2 className="text-green-500 h-5 w-5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'fill-in-blank':
        const blanks = currentQuestion.text.match(/\[([^\]]+)\]/g) || [];
        let textParts = currentQuestion.text.split(/\[([^\]]+)\]/);
        
        return (
          <div className="space-y-3">
            <div className="text-lg font-medium mb-4">{currentQuestion.question}</div>
            
            <div className="p-4 bg-gray-50 rounded-md">
              {textParts.map((part, index) => {
                if (index % 2 === 0) {
                  // Regular text
                  return <span key={index}>{part}</span>;
                } else {
                  // Blank to fill
                  const blankId = part;
                  const isBlankCorrect = 
                    isAnswered && 
                    filledAnswers[blankId]?.toLowerCase().trim() === 
                    currentQuestion.answers[blankId].toLowerCase().trim();
                  
                  return (
                    <input
                      key={index}
                      type="text"
                      value={filledAnswers[blankId] || ''}
                      onChange={(e) => handleFillBlank(blankId, e.target.value)}
                      className={`mx-1 px-2 py-1 border rounded-md w-32 text-center ${
                        isAnswered 
                          ? isBlankCorrect 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-red-500 bg-red-50'
                          : 'border-gray-300'
                      }`}
                      disabled={isAnswered}
                    />
                  );
                }
              })}
            </div>
            
            {isAnswered && !isCorrect && (
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-medium">Correct answers: </span>
                {Object.entries(currentQuestion.answers).map(([blank, answer], i) => (
                  <span key={blank}>
                    {blank}: <span className="font-medium">{answer}</span>
                    {i < Object.keys(currentQuestion.answers).length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      
      case 'matching':
        return (
          <div className="space-y-3">
            <div className="text-lg font-medium mb-4">{currentQuestion.question}</div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="font-medium text-gray-700 mb-2">Items</div>
                {currentQuestion.pairs.map((pair, index) => (
                  <div key={index} className="p-3 bg-white border rounded-md">
                    {pair.left}
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="font-medium text-gray-700 mb-2">Match with</div>
                {currentQuestion.pairs.map((pair, index) => (
                  <select
                    key={index}
                    value={matchingPairs[pair.left] || ''}
                    onChange={(e) => handleMatchingSelect(pair.left, e.target.value)}
                    disabled={isAnswered}
                    className={`w-full p-3 border rounded-md ${
                      isAnswered 
                        ? matchingPairs[pair.left] === pair.right
                          ? 'border-green-500 bg-green-50'
                          : 'border-red-500 bg-red-50'
                        : 'border-gray-300'
                    }`}
                  >
                    <option value="">-- Select match --</option>
                    {currentQuestion.pairs.map((p, i) => (
                      <option key={i} value={p.right}>
                        {p.right}
                      </option>
                    ))}
                  </select>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'listening':
        return (
          <div className="space-y-3">
            <div className="text-lg font-medium mb-4">{currentQuestion.question}</div>
            
            <div className="mb-4 flex justify-center">
              <Button 
                variant="outline" 
                className="flex items-center space-x-2"
                onClick={() => {
                  // Play audio logic
                  const audio = new Audio(currentQuestion.audioUrl);
                  audio.play();
                }}
              >
                <Volume2 className="h-4 w-4" />
                <span>Play Audio</span>
              </Button>
            </div>
            
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index} 
                  className={`p-3 border rounded-md cursor-pointer transition-all ${
                    selectedAnswer === option 
                      ? isAnswered 
                        ? isCorrect 
                          ? 'bg-green-100 border-green-500' 
                          : 'bg-red-100 border-red-500' 
                        : 'bg-purple-100 border-purple-500'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            
            {isAnswered && currentQuestion.transcription && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <div className="font-medium">Transcription:</div>
                <p>{currentQuestion.transcription}</p>
              </div>
            )}
          </div>
        );
      
      case 'speaking':
        return (
          <div className="space-y-3">
            <div className="text-lg font-medium mb-4">{currentQuestion.question}</div>
            
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="font-medium">Please say the following:</p>
              <p className="text-lg mt-2">{currentQuestion.prompt}</p>
            </div>
            
            <div className="flex justify-center mt-4">
              <Button 
                onClick={handleStartRecording}
                disabled={isRecording || isAnswered}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <Mic className="h-4 w-4" />
                <span>{isRecording ? "Recording..." : "Start Speaking"}</span>
              </Button>
            </div>
            
            {isAnswered && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="font-medium">Expected phrases:</p>
                <ul className="list-disc pl-5 mt-2">
                  {currentQuestion.expectedPhrases.map((phrase, index) => (
                    <li key={index}>{phrase}</li>
                  ))}
                </ul>
                
                {currentQuestion.sampleAnswer && (
                  <div className="mt-3">
                    <p className="font-medium">Sample answer:</p>
                    <p>{currentQuestion.sampleAnswer}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      
      case 'drag-drop':
        return (
          <div className="space-y-3">
            <div className="text-lg font-medium mb-4">{currentQuestion.question}</div>
            
            {currentQuestion.imageUrl && (
              <img 
                src={currentQuestion.imageUrl} 
                alt="Drag and drop background" 
                className="mb-4 rounded-md max-h-48 mx-auto"
              />
            )}
            
            <DndContext 
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={dragItems}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-1">
                  {dragItems.map((item) => (
                    <SortableItem key={item} id={item}>
                      {item}
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
            
            {isAnswered && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="font-medium">Correct order:</p>
                <div className="mt-2">
                  {Object.keys(currentQuestion.correctPairings).map((item, index) => (
                    <div key={index} className="py-1">
                      {index + 1}. {item} → {currentQuestion.correctPairings[item]}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      
      case 'ordering':
        return (
          <div className="space-y-3">
            <div className="text-lg font-medium mb-4">{currentQuestion.question}</div>
            
            {currentQuestion.context && (
              <p className="text-gray-700 mb-4">{currentQuestion.context}</p>
            )}
            
            <DndContext 
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={dragItems}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-1">
                  {dragItems.map((item) => (
                    <SortableItem key={item} id={item}>
                      {item}
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
            
            {isAnswered && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="font-medium">Correct order:</p>
                <ol className="list-decimal pl-5 mt-2">
                  {currentQuestion.correctOrder.map((index) => (
                    <li key={index}>{currentQuestion.items[index]}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        );
      
      case 'image-selection':
        return (
          <div className="space-y-3">
            <div className="text-lg font-medium mb-4">{currentQuestion.question}</div>
            
            <div className="mb-4">
              <img 
                src={currentQuestion.imageUrl} 
                alt="Question" 
                className="rounded-md max-h-60 mx-auto"
              />
              
              {currentQuestion.description && (
                <p className="mt-2 text-sm text-gray-600">{currentQuestion.description}</p>
              )}
            </div>
            
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index} 
                  className={`p-3 border rounded-md cursor-pointer transition-all ${
                    selectedAnswer === option 
                      ? isAnswered 
                        ? isCorrect 
                          ? 'bg-green-100 border-green-500' 
                          : 'bg-red-100 border-red-500' 
                        : 'bg-purple-100 border-purple-500'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return <div>Unsupported question type</div>;
    }
  };
  
  if (isFinished) {
    const finalScore = Math.round((score / quiz.questions.length) * 100);
    const passed = finalScore >= quiz.requiredScore;
    
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {passed ? "Congratulations!" : "Quiz Completed"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100">
              {passed ? (
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              ) : (
                <XCircle className="h-12 w-12 text-red-500" />
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2">
            {passed ? "You've passed the quiz!" : "You didn't pass the quiz"}
          </h3>
          
          <p className="text-gray-600 mb-6">
            Your score: {finalScore}% (Required: {quiz.requiredScore}%)
          </p>
          
          <div className="w-full mb-6">
            <Progress value={finalScore} className="h-4" indicatorClassName={passed ? "bg-green-500" : "bg-red-500"} />
          </div>
          
          {!passed && (
            <div className="mb-6 text-left p-4 bg-amber-50 border border-amber-200 rounded-md">
              <h4 className="font-medium mb-2">Review suggestions:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Review the lesson materials again</li>
                <li>Focus on the areas where you made mistakes</li>
                <li>Try the practice exercises before attempting the quiz again</li>
              </ul>
            </div>
          )}
          
          <Badge variant={passed ? "outline" : "secondary"} className="mb-4">
            Skill: {quiz.skillType}
          </Badge>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline" 
            className="flex items-center"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{quiz.title}</CardTitle>
          <Badge variant="outline">{quiz.skillType}</Badge>
        </div>
        <QuizProgress 
          currentQuestion={currentQuestionIndex + 1} 
          totalQuestions={quiz.questions.length} 
        />
      </CardHeader>
      
      <CardContent>
        {renderQuestion()}
        
        {isAnswered && currentQuestion.explanation && (
          <div className={`mt-4 p-3 rounded-md ${showExplanation ? 'bg-blue-50' : ''}`}>
            {showExplanation ? (
              <>
                <h4 className="font-medium mb-1">Explanation:</h4>
                <p>{currentQuestion.explanation}</p>
              </>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowExplanation(true)}
                className="flex items-center"
              >
                <HelpCircle className="mr-1 h-4 w-4" />
                Show Explanation
              </Button>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <div>
          {isAnswered && (
            <div className="flex items-center">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="text-green-500 h-5 w-5 mr-2" />
                  <span className="text-green-600 font-medium">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="text-red-500 h-5 w-5 mr-2" />
                  <span className="text-red-600 font-medium">Incorrect</span>
                </>
              )}
            </div>
          )}
        </div>
        
        <div>
          {!isAnswered ? (
            <Button 
              onClick={checkAnswer}
              disabled={
                (currentQuestion.type === 'multiple-choice' && selectedAnswer === null) ||
                (currentQuestion.type === 'fill-in-blank' && Object.keys(filledAnswers).length < (currentQuestion.text.match(/\[([^\]]+)\]/g) || []).length) ||
                (currentQuestion.type === 'matching' && Object.keys(matchingPairs).length < currentQuestion.pairs.length)
              }
            >
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion}>
              {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default LessonQuiz;
