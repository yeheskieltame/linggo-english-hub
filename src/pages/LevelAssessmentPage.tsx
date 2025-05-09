
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { CheckCircle, XCircle, ArrowRight, Award, BookOpen, BarChart, Mic, MicOff, Play, Image } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  levelAssessmentQuestions, 
  evaluateAssessment, 
  LevelAssessmentQuestion,
  LevelAssessmentResult
} from '@/services/levelAssessmentService';
import { useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

const LevelBadgeColor = {
  'A1': 'bg-slate-100 text-slate-800',
  'A2': 'bg-slate-200 text-slate-800',
  'B1': 'bg-yellow-100 text-yellow-800',
  'B2': 'bg-orange-100 text-orange-800',
  'C1': 'bg-red-100 text-red-800',
  'C2': 'bg-pink-100 text-pink-800',
};

enum AssessmentState {
  INTRO = 'intro',
  IN_PROGRESS = 'in_progress',
  RESULTS = 'results',
}

const LevelAssessmentPage = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // State
  const [assessmentState, setAssessmentState] = useState<AssessmentState>(AssessmentState.INTRO);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [assessmentResult, setAssessmentResult] = useState<LevelAssessmentResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSavingResults, setIsSavingResults] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [playbackCount, setPlaybackCount] = useState(0);
  const [matchingPairs, setMatchingPairs] = useState<{[key: string]: string}>({});
  const [orderedItems, setOrderedItems] = useState<string[]>([]);
  const [unorderedItems, setUnorderedItems] = useState<string[]>([]);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  
  // Calculate progress
  const progress = (currentQuestionIndex / levelAssessmentQuestions.length) * 100;
  
  // Current question
  const currentQuestion = levelAssessmentQuestions[currentQuestionIndex];
  
  // Initialize question-specific state when the current question changes
  useEffect(() => {
    if (currentQuestion) {
      // Reset selection state
      setSelectedOption(null);
      
      // Reset audio playback count
      setPlaybackCount(0);
      
      // Setup for ordering questions
      if (currentQuestion.type === 'ordering' && currentQuestion.items) {
        setUnorderedItems([...currentQuestion.items]);
        setOrderedItems([]);
      }
      
      // Setup for matching questions
      if (currentQuestion.type === 'matching') {
        setMatchingPairs({});
      }
    }
  }, [currentQuestionIndex, currentQuestion]);
  
  // Handle starting the assessment
  const handleStartAssessment = () => {
    setAssessmentState(AssessmentState.IN_PROGRESS);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  };
  
  // Handle option selection for multiple choice, fill in blank, etc.
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };
  
  // Handle recording for speaking questions
  const handleToggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      if (mediaRecorder) {
        mediaRecorder.stop();
      }
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const audioChunks: BlobPart[] = [];
        
        recorder.ondataavailable = (e) => {
          audioChunks.push(e.data);
        };
        
        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
          setAudioBlob(audioBlob);
          setUserAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: URL.createObjectURL(audioBlob)
          }));
          
          // Stop all tracks of the stream to release the microphone
          stream.getTracks().forEach(track => track.stop());
        };
        
        setMediaRecorder(recorder);
        recorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error('Error accessing microphone:', error);
        toast({
          title: "Microphone Access Error",
          description: "Unable to access your microphone. Please check your browser permissions.",
          variant: "destructive",
        });
      }
    }
  };
  
  // Handle audio playback for listening questions
  const handlePlayAudio = () => {
    if (currentQuestion.audioUrl && playbackCount < 3) {
      if (!audioRef.current) {
        audioRef.current = new Audio(currentQuestion.audioUrl);
      }
      
      audioRef.current.play();
      setPlaybackCount(prev => prev + 1);
    }
  };
  
  // Handle matching pairs for matching questions
  const handleMatchPair = (left: string, right: string) => {
    setMatchingPairs(prev => ({
      ...prev,
      [left]: right
    }));
    
    // Convert matching pairs to a string for storage in userAnswers
    const pairsString = JSON.stringify({...matchingPairs, [left]: right});
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: pairsString
    }));
  };
  
  // Handle ordering for ordering questions
  const handleMoveItemToOrdered = (item: string) => {
    setUnorderedItems(prev => prev.filter(i => i !== item));
    setOrderedItems(prev => [...prev, item]);
    
    const newOrdered = [...orderedItems, item];
    // Convert ordered items to a string for storage in userAnswers
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: JSON.stringify(newOrdered)
    }));
  };
  
  const handleMoveItemToUnordered = (item: string) => {
    setOrderedItems(prev => prev.filter(i => i !== item));
    setUnorderedItems(prev => [...prev, item]);
    
    const newOrdered = orderedItems.filter(i => i !== item);
    // Convert ordered items to a string for storage in userAnswers
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: JSON.stringify(newOrdered)
    }));
  };
  
  // Handle moving to the next question
  const handleNextQuestion = () => {
    let canProceed = false;
    
    switch (currentQuestion.type) {
      case 'multiple-choice':
      case 'fill-in-blank':
      case 'image-based':
      case 'listening':
        canProceed = !!selectedOption;
        if (canProceed) {
          setUserAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: selectedOption
          }));
        }
        break;
        
      case 'speaking':
        // For speaking questions, require that they've recorded something
        canProceed = !!userAnswers[currentQuestion.id];
        break;
        
      case 'matching':
        // For matching, check if all pairs are matched
        if (currentQuestion.pairs) {
          canProceed = Object.keys(matchingPairs).length === currentQuestion.pairs.length;
        }
        break;
        
      case 'ordering':
        // For ordering, check if all items are ordered
        if (currentQuestion.items) {
          canProceed = orderedItems.length === currentQuestion.items.length;
        }
        break;
        
      default:
        canProceed = true;
    }
    
    if (canProceed) {
      // Move to next question or finish
      if (currentQuestionIndex < levelAssessmentQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        handleFinishAssessment();
      }
    } else {
      // Show a toast message if they haven't completed the question
      toast({
        title: "Please complete the question",
        description: "You need to answer the question before proceeding.",
        variant: "destructive",
      });
    }
  };
  
  // Handle finishing the assessment
  const handleFinishAssessment = async () => {
    setIsSubmitting(true);
    
    try {
      // Evaluate the assessment
      const result = await evaluateAssessment(userAnswers);
      setAssessmentResult(result);
      
      // Save assessment results to database if user is logged in
      if (user) {
        setIsSavingResults(true);
        try {
          // 1. Save assessment result to user_assessments table
          const { error: assessmentError } = await supabase
            .from('user_assessments')
            .insert({
              user_id: user.id,
              score: result.score,
              level: result.level,
              cefr_level: result.cefrLevel,
              correct_answers: result.correctAnswers,
              total_questions: result.totalQuestions,
              strengths: result.strengths,
              areas_to_improve: result.areasToImprove,
              created_at: new Date().toISOString()
            });
            
          if (assessmentError) {
            console.error('Error saving assessment results:', assessmentError);
            toast({
              title: "Error saving assessment results",
              description: "Your results couldn't be saved to your profile.",
              variant: "destructive",
            });
          }
          
          // 2. Update user profile with the new level
          const preferredLevel = mapCefrToPreferredLevel(result.cefrLevel);
          const { error: profileError } = await supabase
            .from('profiles')
            .update({
              preferred_level: preferredLevel,
              updated_at: new Date().toISOString()
            })
            .eq('id', user.id);
            
          if (profileError) {
            console.error('Error updating user profile:', profileError);
            toast({
              title: "Error updating profile",
              description: "Your profile couldn't be updated with your new level.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Assessment completed",
              description: `Your level has been updated to ${preferredLevel}.`,
            });
          }
          
          // 3. Log this activity in user_schedule
          const { error: scheduleError } = await supabase
            .from('user_schedule')
            .insert({
              user_id: user.id,
              title: `Completed level assessment: ${preferredLevel}`,
              date: new Date().toISOString().split('T')[0],
              start_time: new Date().toTimeString().split(' ')[0],
              duration: 10, // Assume 10 minutes for assessment
              is_completed: true
            });
            
          if (scheduleError) {
            console.error('Error logging assessment activity:', scheduleError);
          }
        } catch (dbError) {
          console.error('Error saving assessment data:', dbError);
        } finally {
          setIsSavingResults(false);
        }
      }
      
      setAssessmentState(AssessmentState.RESULTS);
    } catch (error) {
      console.error('Error evaluating assessment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Helper function to map CEFR level to preferred_level format
  const mapCefrToPreferredLevel = (cefrLevel: string): string => {
    switch(cefrLevel) {
      case 'A1':
        return 'Beginner';
      case 'A2':
        return 'Elementary';
      case 'B1':
        return 'Intermediate';
      case 'B2':
        return 'Upper Intermediate';
      case 'C1':
        return 'Advanced';
      case 'C2':
        return 'Proficiency';
      default:
        return 'Beginner';
    }
  };
  
  // Handle retaking the assessment
  const handleRetakeAssessment = () => {
    setAssessmentState(AssessmentState.INTRO);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedOption(null);
    setAssessmentResult(null);
  };
  
  // Render different question types
  const renderQuestionContent = () => {
    if (!currentQuestion) return null;
    
    switch (currentQuestion.type) {
      case 'multiple-choice':
      case 'fill-in-blank':
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedOption === option 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200 hover:border-purple-200 hover:bg-purple-50/30'
                }`}
                onClick={() => handleSelectOption(option)}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                    selectedOption === option 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </div>
            ))}
          </div>
        );
        
      case 'image-based':
        return (
          <div className="space-y-5">
            {currentQuestion.imageUrl && (
              <div className="mb-6 flex justify-center">
                <img 
                  src={currentQuestion.imageUrl}
                  alt="Question image"
                  className="max-h-64 rounded-lg shadow-md"
                />
              </div>
            )}
            
            <div className="space-y-3">
              {currentQuestion.options?.map((option, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedOption === option 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-200 hover:bg-purple-50/30'
                  }`}
                  onClick={() => handleSelectOption(option)}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                      selectedOption === option 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'speaking':
        return (
          <div className="space-y-5">
            {currentQuestion.imageUrl && (
              <div className="mb-6 flex justify-center">
                <img 
                  src={currentQuestion.imageUrl}
                  alt="Speaking prompt"
                  className="max-h-64 rounded-lg shadow-md"
                />
              </div>
            )}
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-800 mb-2">Instructions:</h4>
              <p className="text-gray-700">{currentQuestion.instruction}</p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <Button
                type="button"
                size="lg"
                variant={isRecording ? "destructive" : "default"}
                className="flex items-center space-x-2 w-64 justify-center"
                onClick={handleToggleRecording}
              >
                {isRecording ? (
                  <>
                    <MicOff className="mr-2 h-5 w-5" />
                    <span>Stop Recording</span>
                  </>
                ) : (
                  <>
                    <Mic className="mr-2 h-5 w-5" />
                    <span>Start Recording</span>
                  </>
                )}
              </Button>
              
              {audioBlob && (
                <div className="w-full">
                  <p className="text-sm text-gray-500 mb-2">Preview your recording:</p>
                  <audio 
                    src={URL.createObjectURL(audioBlob)} 
                    controls 
                    className="w-full" 
                  />
                </div>
              )}
              
              {isRecording && (
                <div className="text-center">
                  <div className="animate-pulse flex space-x-2 justify-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Recording...</p>
                </div>
              )}
            </div>
          </div>
        );
        
      case 'listening':
        return (
          <div className="space-y-5">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-800 mb-2">Instructions:</h4>
              <p className="text-gray-700">{currentQuestion.instruction || "Listen to the audio and answer the question."}</p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="flex items-center space-x-2 w-64 justify-center"
                onClick={handlePlayAudio}
                disabled={playbackCount >= 3}
              >
                <Play className="mr-2 h-5 w-5" />
                <span>{playbackCount === 0 ? "Play Audio" : `Play Again (${3 - playbackCount} left)`}</span>
              </Button>
              
              {playbackCount >= 3 && (
                <p className="text-sm text-amber-600">You've reached the maximum number of plays.</p>
              )}
              
              {playbackCount > 0 && (
                <div className="space-y-3 w-full mt-6">
                  {currentQuestion.options?.map((option, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedOption === option 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-200 hover:bg-purple-50/30'
                      }`}
                      onClick={() => handleSelectOption(option)}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                          selectedOption === option 
                            ? 'bg-purple-500 text-white' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-gray-700">{option}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
        
      case 'matching':
        return (
          <div className="space-y-5">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-800 mb-2">Instructions:</h4>
              <p className="text-gray-700">{currentQuestion.instruction}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700 mb-2">Items</h3>
                {currentQuestion.pairs?.map((pair, index) => (
                  <div 
                    key={`left-${index}`}
                    className={`p-4 rounded-lg ${
                      matchingPairs[pair.left] ? 'bg-purple-100 border-2 border-purple-300' : 'bg-gray-100'
                    }`}
                  >
                    <p>{pair.left}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700 mb-2">Definitions</h3>
                {currentQuestion.pairs?.map((pair, index) => (
                  <div 
                    key={`right-${index}`}
                    className="p-4 rounded-lg bg-blue-100 cursor-pointer hover:bg-blue-200 transition-colors"
                    onClick={() => {
                      // Find the first unmatched left item
                      const unmatchedLeft = currentQuestion.pairs?.find(p => !matchingPairs[p.left])?.left;
                      if (unmatchedLeft) {
                        handleMatchPair(unmatchedLeft, pair.right);
                      }
                    }}
                  >
                    <p>{pair.right}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {Object.keys(matchingPairs).length > 0 && (
              <div className="mt-6">
                <h3 className="font-medium text-gray-700 mb-2">Your Matches:</h3>
                <div className="space-y-2">
                  {Object.entries(matchingPairs).map(([left, right], index) => (
                    <div key={index} className="flex items-center">
                      <div className="p-3 bg-purple-100 rounded-l-lg flex-1">{left}</div>
                      <div className="p-3 bg-blue-100 rounded-r-lg flex-1">{right}</div>
                      <Button 
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="ml-2 text-red-500 hover:text-red-700"
                        onClick={() => {
                          const newPairs = {...matchingPairs};
                          delete newPairs[left];
                          setMatchingPairs(newPairs);
                        }}
                      >
                        <XCircle className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
        
      case 'ordering':
        return (
          <div className="space-y-5">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-800 mb-2">Instructions:</h4>
              <p className="text-gray-700">{currentQuestion.instruction}</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Available items:</h3>
              <div className="flex flex-wrap gap-2">
                {unorderedItems.map((item, index) => (
                  <div 
                    key={`unordered-${index}`}
                    className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                    onClick={() => handleMoveItemToOrdered(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Your ordered sentence:</h3>
              <div className="p-4 min-h-[100px] bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex flex-wrap gap-2">
                  {orderedItems.map((item, index) => (
                    <div 
                      key={`ordered-${index}`}
                      className="p-3 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors flex items-center"
                      onClick={() => handleMoveItemToUnordered(item)}
                    >
                      <span className="mr-2 text-blue-800 font-medium">{index + 1}.</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="text-center p-4">
            <p>Question type not supported.</p>
          </div>
        );
    }
  };
  
  // Render the introduction screen
  const renderIntroduction = () => (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl font-bold">English Level Assessment</CardTitle>
        </CardHeader>
        <CardContent className="pt-8 pb-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-purple-100 rounded-full flex items-center justify-center">
                <BarChart className="w-24 h-24 text-purple-500" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Discover Your English Proficiency Level</h3>
              <p className="text-gray-600 mb-4">
                This assessment will help determine your current English level according to the Common European Framework of Reference (CEFR).
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">About This Assessment:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>12 diverse questions covering reading, listening, speaking, and more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Takes approximately 10-15 minutes to complete</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Provides detailed feedback and personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Interactive question formats including speaking, images, and ordering tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 rounded-b-lg flex justify-center p-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-8"
            onClick={handleStartAssessment}
          >
            Start Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  
  // Render the assessment questions
  const renderAssessment = () => (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-white border-b pb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Question {currentQuestionIndex + 1} of {levelAssessmentQuestions.length}</p>
              <Progress value={progress} className="h-2 w-64" />
            </div>
            <div className="flex items-center">
              <Badge variant="outline" className={`${LevelBadgeColor[currentQuestion.cefrLevel]}`}>
                {currentQuestion.cefrLevel}
              </Badge>
              <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                {currentQuestion.type.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8 pb-6">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">{currentQuestion.question}</h3>
          
          {currentQuestion.instruction && currentQuestion.type !== 'speaking' && 
           currentQuestion.type !== 'listening' && currentQuestion.type !== 'matching' && 
           currentQuestion.type !== 'ordering' && (
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-blue-800 mb-2">Instructions:</h4>
              <p className="text-gray-700">{currentQuestion.instruction}</p>
            </div>
          )}
          
          {renderQuestionContent()}
        </CardContent>
        <CardFooter className="bg-gray-50 rounded-b-lg flex justify-end p-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-8"
            onClick={handleNextQuestion}
            disabled={
              (currentQuestion.type === 'multiple-choice' || 
               currentQuestion.type === 'fill-in-blank' || 
               currentQuestion.type === 'image-based' || 
               (currentQuestion.type === 'listening' && playbackCount > 0)) && !selectedOption
            }
          >
            {currentQuestionIndex < levelAssessmentQuestions.length - 1 ? 'Next Question' : 'Finish'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  
  // Render the results screen
  const renderResults = () => {
    if (!assessmentResult) return null;
    
    const { level, cefrLevel, score, totalQuestions, correctAnswers, feedback, strengths, areasToImprove, recommendedLessons } = assessmentResult;
    
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <Card className="border-none shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Your Assessment Results</h2>
                <p className="text-purple-100">Based on your answers to {totalQuestions} questions</p>
              </div>
              <div className="mt-6 md:mt-0 flex items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center">
                  <Award className="h-10 w-10 mr-3 text-yellow-300" />
                  <div>
                    <p className="text-sm text-white/80">Your Level</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                      <Badge className={`${LevelBadgeColor[cefrLevel]} font-medium`}>
                        {cefrLevel}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <p className="text-sm text-purple-700 mb-1">Score</p>
                <p className="text-3xl font-bold text-purple-800">{score.toFixed(1)}%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-sm text-green-700 mb-1">Correct Answers</p>
                <p className="text-3xl font-bold text-green-800">{correctAnswers}/{totalQuestions}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-700 mb-1">CEFR Level</p>
                <p className="text-3xl font-bold text-blue-800">{cefrLevel}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Feedback</h3>
              <p className="text-gray-700 mb-6">{feedback}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-800 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Your Strengths
                  </h4>
                  <ul className="space-y-2">
                    {strengths.map((strength, index) => (
                      <li key={index} className="bg-green-50 p-3 rounded-lg text-gray-700">
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-orange-800 mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Areas to Improve
                  </h4>
                  <ul className="space-y-2">
                    {areasToImprove.map((area, index) => (
                      <li key={index} className="bg-orange-50 p-3 rounded-lg text-gray-700">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Recommended Lessons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recommendedLessons.map((lesson, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-1">{lesson}</h4>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-600"
                      onClick={() => navigate('/lessons')}
                    >
                      View Lessons
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-gray-50 p-6 flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
              onClick={handleRetakeAssessment}
            >
              Retake Assessment
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              onClick={() => navigate('/lessons')}
            >
              Explore Lessons
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {assessmentState === AssessmentState.INTRO && renderIntroduction()}
        {assessmentState === AssessmentState.IN_PROGRESS && renderAssessment()}
        {assessmentState === AssessmentState.RESULTS && renderResults()}
        
        {(isSubmitting || isSavingResults) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mb-4"></div>
              <p className="text-gray-700">
                {isSubmitting ? "Evaluating your answers..." : "Saving your results..."}
              </p>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default LevelAssessmentPage;
