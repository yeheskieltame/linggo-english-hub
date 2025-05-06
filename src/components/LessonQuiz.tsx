
import React, { useState, useEffect, useRef } from 'react';
import { LessonQuiz as LessonQuizType } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, XCircle, AlertCircle, ArrowRight, GripVertical, Play, Mic, StopCircle, Volume2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
// Import drag and drop library
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
// Import speech services
import { startSpeechRecognition, getPronunciationFeedback } from '@/services/speechRecognition';
import { speakText } from '@/services/textToSpeech';

interface LessonQuizProps {
  quiz: LessonQuizType;
  onComplete: (score: number, passed: boolean) => void;
}

const LessonQuiz: React.FC<LessonQuizProps> = ({ quiz, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  // State for matching questions
  const [matchingItems, setMatchingItems] = useState<{id: string, content: string, type: 'left' | 'right'}[]>([]);
  const [matchingPairs, setMatchingPairs] = useState<{[key: string]: string}>({});
  
  // State for listening questions
  const [isPlaying, setIsPlaying] = useState(false);
  
  // State for speaking questions
  const [isRecording, setIsRecording] = useState(false);
  const [recordedSpeech, setRecordedSpeech] = useState('');
  const [pronunciationFeedback, setPronunciationFeedback] = useState<{
    score: number;
    feedback: string;
    detailedFeedback?: { word: string, issue: string }[];
  } | null>(null);
  
  // Refs for speech recognition
  const recognitionRef = useRef<{
    start: () => void;
    stop: () => void;
    onResult: (callback: (result: {transcript: string, confidence: number}) => void) => void;
    onEnd: (callback: () => void) => void;
  } | null>(null);
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  // Initialize question-specific state when question changes
  useEffect(() => {
    // Reset state when question changes
    setIsPlaying(false);
    setIsRecording(false);
    setRecordedSpeech('');
    setPronunciationFeedback(null);
    
    if (currentQuestion?.type === 'matching') {
      // Create shuffled array of right items
      const rightItems = currentQuestion.pairs.map((pair, index) => ({
        id: `right-${index}`,
        content: pair.right,
        type: 'right' as const
      }));
      
      // Shuffle right items
      const shuffledRightItems = [...rightItems].sort(() => Math.random() - 0.5);
      
      // Create array with left items and shuffled right items
      const leftItems = currentQuestion.pairs.map((pair, index) => ({
        id: `left-${index}`,
        content: pair.left,
        type: 'left' as const
      }));
      
      setMatchingItems([...leftItems, ...shuffledRightItems]);
      
      // Reset matching pairs
      setMatchingPairs({});
    }
    
    // Initialize speech recognition for speaking questions
    if (currentQuestion?.type === 'speaking') {
      // Initialize speech recognition
      startSpeechRecognition()
        .then(recognition => {
          recognitionRef.current = recognition;
          
          // Set up result handler
          recognition.onResult(result => {
            setRecordedSpeech(result.transcript);
            
            // Store the transcript in selectedAnswers for validation
            setSelectedAnswers({
              ...selectedAnswers,
              [currentQuestion.id]: result.transcript
            });
          });
          
          // Set up end handler
          recognition.onEnd(() => {
            setIsRecording(false);
          });
        })
        .catch(error => {
          console.error('Failed to initialize speech recognition:', error);
        });
    }
  }, [currentQuestion]);
  
  // Handle playing audio for listening questions
  const handlePlayAudio = async () => {
    if (currentQuestion?.type === 'listening') {
      setIsPlaying(true);
      
      try {
        // In a real implementation, this would play an audio file from currentQuestion.audioUrl
        // For now, we'll use text-to-speech to read the correct answer
        await speakText(currentQuestion.correctAnswer);
      } catch (error) {
        console.error('Failed to play audio:', error);
      } finally {
        setIsPlaying(false);
      }
    }
  };
  
  // Handle recording for speaking questions
  const handleToggleRecording = () => {
    if (!recognitionRef.current) return;
    
    if (isRecording) {
      // Stop recording
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      // Start recording
      setRecordedSpeech('');
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };
  
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
      if (isAnswerCorrect(question.id)) {
        correctAnswers++;
      }
    });
    
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    const passed = scorePercentage >= quiz.requiredScore;
    
    onComplete(scorePercentage, passed);
  };
  
  const isAnswerCorrect = (questionId: string) => {
    const question = quiz.questions.find(q => q.id === questionId);
    if (!question) return false;
    
    switch (question.type) {
      case 'multiple-choice':
      case 'listening':
        return selectedAnswers[questionId] === question.correctAnswer;
        
      case 'fill-in-blank':
        // Check if all blanks are correct
        return Object.entries(question.answers).every(
          ([blankId, answer]) => selectedAnswers[`${questionId}-${blankId}`] === answer
        );
        
      case 'matching':
        // Check if all pairs are matched correctly
        if (question.pairs.length === 0) return false;
        
        // For each pair, check if the left item is matched with the correct right item
        return question.pairs.every((pair, index) => {
          const leftId = `left-${index}`;
          const rightId = matchingPairs[leftId];
          
          if (!rightId) return false; // No match for this left item
          
          const rightIndex = parseInt(rightId.split('-')[1]);
          return rightIndex === index; // Check if matched with correct right item
        });
        
      case 'speaking':
        // Check if the recorded speech contains the expected phrases
        if (!selectedAnswers[questionId]) return false;
        
        const speech = selectedAnswers[questionId].toLowerCase();
        const expectedPhrases = question.expectedPhrases.map(phrase => phrase.toLowerCase());
        
        // Check if at least one expected phrase is included in the speech
        return expectedPhrases.some(phrase => speech.includes(phrase));
        
      default:
        return false;
    }
  };
  
  // Handle drag and drop for matching questions
  const handleDragEnd = (result: DropResult) => {
    // If dropped outside a droppable area
    if (!result.destination) {
      return;
    }
    
    const { source, destination, draggableId } = result;
    
    // Only allow right items to be dragged to left items
    const draggedItem = matchingItems.find(item => item.id === draggableId);
    const destinationItem = matchingItems.find(item => item.id === destination.droppableId);
    
    if (draggedItem?.type === 'right' && destinationItem?.type === 'left') {
      // Update the matching pairs
      setMatchingPairs({
        ...matchingPairs,
        [destinationItem.id]: draggedItem.id
      });
      
      // Update selected answers for validation
      const leftIndex = destinationItem.id.split('-')[1];
      const rightIndex = draggedItem.id.split('-')[1];
      
      setSelectedAnswers({
        ...selectedAnswers,
        [`${currentQuestion.id}-${leftIndex}`]: rightIndex
      });
    }
  };
  
  const isCurrentAnswerSelected = () => {
    if (!currentQuestion) return false;
    
    switch (currentQuestion.type) {
      case 'multiple-choice':
      case 'listening':
        return !!selectedAnswers[currentQuestion.id];
        
      case 'fill-in-blank':
        // Check if at least one blank is filled
        return Object.keys(currentQuestion.answers).some(
          blankId => !!selectedAnswers[`${currentQuestion.id}-${blankId}`]
        );
        
      case 'matching':
        // Check if all left items have a matching right item
        if (currentQuestion.pairs.length === 0) return false;
        
        // Count how many left items have been matched
        const matchedCount = Object.keys(matchingPairs).length;
        return matchedCount > 0;
        
      case 'speaking':
        // Check if user has recorded speech
        return !!recordedSpeech;
        
      default:
        return false;
    }
  };
  const isCurrentAnswerCorrect = isAnswerCorrect(currentQuestion?.id);
  
  if (isSubmitted) {
    // Calculate results
    let correctAnswers = 0;
    quiz.questions.forEach(question => {
      if (isAnswerCorrect(question.id)) {
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
  
  // Render different question types
  const renderQuestionContent = () => {
    if (!currentQuestion) {
      return <div>No question available</div>;
    }

    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
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
        );
        
      case 'fill-in-blank':
        return (
          <div className="space-y-4">
            <p className="text-lg">
              {currentQuestion.text.split(/(\[blank\d+\])/).map((part, index) => {
                const blankMatch = part.match(/\[blank(\d+)\]/);
                if (blankMatch) {
                  const blankId = `blank${blankMatch[1]}`;
                  return (
                    <span key={index} className="inline-block mx-1">
                      <input
                        type="text"
                        className="border-b-2 border-blue-500 focus:outline-none px-1 w-32 text-center"
                        value={selectedAnswers[`${currentQuestion.id}-${blankId}`] || ''}
                        onChange={(e) => {
                          setSelectedAnswers({
                            ...selectedAnswers,
                            [`${currentQuestion.id}-${blankId}`]: e.target.value
                          });
                        }}
                        disabled={showFeedback}
                      />
                      {showFeedback && (
                        <span className="ml-2">
                          {selectedAnswers[`${currentQuestion.id}-${blankId}`] === currentQuestion.answers[blankId] ? (
                            <CheckCircle className="h-4 w-4 text-green-500 inline" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500 inline" />
                          )}
                        </span>
                      )}
                    </span>
                  );
                }
                return <span key={index}>{part}</span>;
              })}
            </p>
            {showFeedback && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="font-medium">Correct answers:</p>
                <ul className="list-disc list-inside mt-2">
                  {Object.entries(currentQuestion.answers).map(([blankId, answer]) => (
                    <li key={blankId}>
                      {blankId}: <span className="font-medium">{answer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
        
      case 'matching':
        return (
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="space-y-4">
              {/* Left items (targets) */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Match these items:</h3>
                {matchingItems.filter(item => item.type === 'left').map((item) => (
                  <Droppable key={item.id} droppableId={item.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`
                          font-medium p-3 rounded-md min-h-[60px] flex items-center justify-between
                          ${snapshot.isDraggingOver ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'}
                          ${matchingPairs[item.id] ? 'border-2 border-green-200' : 'border border-gray-200'}
                        `}
                      >
                        <span>{item.content}</span>
                        
                        {/* Show matched right item if exists */}
                        {matchingPairs[item.id] && (
                          <div className="bg-white p-2 rounded border border-gray-200 ml-2 flex-1 text-right">
                            {matchingItems.find(i => i.id === matchingPairs[item.id])?.content}
                            
                            {/* Remove match button */}
                            {!showFeedback && (
                              <button 
                                className="ml-2 text-red-500 hover:text-red-700"
                                onClick={() => {
                                  // Remove this match
                                  const newPairs = {...matchingPairs};
                                  delete newPairs[item.id];
                                  setMatchingPairs(newPairs);
                                  
                                  // Also remove from selected answers
                                  const leftIndex = item.id.split('-')[1];
                                  const newAnswers = {...selectedAnswers};
                                  delete newAnswers[`${currentQuestion.id}-${leftIndex}`];
                                  setSelectedAnswers(newAnswers);
                                }}
                              >
                                ×
                              </button>
                            )}
                          </div>
                        )}
                        
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
              
              {/* Right items (draggables) */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Drag these items to match:</h3>
                <Droppable droppableId="right-items" direction="horizontal">
                  {(provided) => (
                    <div 
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex flex-wrap gap-2 p-3 border border-dashed border-gray-300 rounded-md bg-gray-50"
                    >
                      {matchingItems
                        .filter(item => item.type === 'right')
                        .filter(item => !Object.values(matchingPairs).includes(item.id))
                        .map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                            isDragDisabled={showFeedback}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`
                                  p-2 rounded border bg-white flex items-center gap-2
                                  ${snapshot.isDragging ? 'shadow-lg' : 'shadow-sm'}
                                  ${showFeedback ? 'cursor-not-allowed opacity-70' : 'cursor-grab'}
                                `}
                              >
                                <GripVertical className="h-4 w-4 text-gray-400" />
                                <span>{item.content}</span>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              
              {showFeedback && (
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="font-medium">Correct matches:</p>
                  <ul className="list-disc list-inside mt-2">
                    {currentQuestion.pairs.map((pair, index) => (
                      <li key={index} className="mt-1">
                        <span className="font-medium">{pair.left}</span> → {pair.right}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-4">
                <p className="text-sm text-gray-500">Drag items from the bottom section to match them with the correct items above.</p>
              </div>
            </div>
          </DragDropContext>
        );
        
      case 'listening':
        return (
          <div className="space-y-4">
            <div className="flex justify-center my-4">
              {/* Play audio button with loading state */}
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={handlePlayAudio}
                disabled={isPlaying || showFeedback}
              >
                {isPlaying ? (
                  <>
                    <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-blue-500 animate-spin"></div>
                    Playing...
                  </>
                ) : (
                  <>
                    <Volume2 className="h-5 w-5" />
                    Play Audio
                  </>
                )}
              </Button>
            </div>
            
            {/* Instructions */}
            <div className="text-sm text-gray-500 text-center mb-4">
              Listen to the audio and select the correct answer.
              {!showFeedback && <p className="mt-1">You can play the audio multiple times.</p>}
            </div>
            
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
          </div>
        );
        
      case 'speaking':
        return (
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="font-medium">{currentQuestion.prompt}</p>
            </div>
            
            {/* Instructions */}
            <div className="text-sm text-gray-500 text-center mb-2">
              Click the button below to record your answer. Speak clearly and try to include the expected phrases.
            </div>
            
            {/* Record button */}
            <div className="flex justify-center my-4">
              <Button 
                variant={isRecording ? "destructive" : "outline"} 
                className="flex items-center gap-2"
                onClick={handleToggleRecording}
                disabled={showFeedback}
              >
                {isRecording ? (
                  <>
                    <StopCircle className="h-5 w-5" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="h-5 w-5" />
                    Record Answer
                  </>
                )}
              </Button>
            </div>
            
            {/* Show recorded speech */}
            {recordedSpeech && (
              <div className={`p-4 rounded-md border ${showFeedback && isAnswerCorrect(currentQuestion.id) ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                <p className="font-medium">Your answer:</p>
                <p className="mt-2">{recordedSpeech}</p>
              </div>
            )}
            
            {/* Show pronunciation feedback */}
            {showFeedback && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="font-medium">Expected phrases:</p>
                <ul className="list-disc list-inside mt-2">
                  {currentQuestion.expectedPhrases.map((phrase, index) => (
                    <li key={index}>{phrase}</li>
                  ))}
                </ul>
                
                {/* Show pronunciation feedback if available */}
                {pronunciationFeedback && (
                  <div className="mt-4 border-t pt-3">
                    <p className="font-medium">Pronunciation feedback:</p>
                    <div className="flex items-center mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            pronunciationFeedback.score > 85 ? 'bg-green-500' : 
                            pronunciationFeedback.score > 70 ? 'bg-yellow-500' : 
                            pronunciationFeedback.score > 50 ? 'bg-orange-500' : 'bg-red-500'
                          }`} 
                          style={{ width: `${pronunciationFeedback.score}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">{pronunciationFeedback.score}%</span>
                    </div>
                    <p className="mt-2">{pronunciationFeedback.feedback}</p>
                    
                    {pronunciationFeedback.detailedFeedback && pronunciationFeedback.detailedFeedback.length > 0 && (
                      <div className="mt-2">
                        <p className="font-medium text-sm">Detailed feedback:</p>
                        <ul className="list-disc list-inside mt-1 text-sm">
                          {pronunciationFeedback.detailedFeedback.map((item, index) => (
                            <li key={index}>
                              <span className="font-medium">{item.word}</span>: {item.issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );
        
      default:
        return <div>Unsupported question type</div>;
    }
  };

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
        <div className="text-lg font-medium">{currentQuestion?.question}</div>
        
        {renderQuestionContent()}
        
        {showFeedback && currentQuestion?.explanation && (
          <Alert className={isCurrentAnswerCorrect ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}>
            <AlertTitle>{isCurrentAnswerCorrect ? 'Correct!' : 'Incorrect'}</AlertTitle>
            <AlertDescription>{currentQuestion.explanation}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {!showFeedback ? (
          <Button 
            disabled={!isCurrentAnswerSelected()} 
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
