
import React, { useState, useRef } from 'react';
import { PracticalTest as PracticalTestType } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Book, Mic, MicOff, Pencil, Headphones, Award, Play, Image } from 'lucide-react';
import { QuizProgress } from '@/components/ui/quiz-progress';

interface PracticalTestProps {
  test: PracticalTestType;
  onComplete: (score: number, passed: boolean) => void;
}

const PracticalTest: React.FC<PracticalTestProps> = ({ test, onComplete }) => {
  const [currentTab, setCurrentTab] = useState(test.sections && test.sections.length > 0 ? test.sections[0].id : 'main');
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Record<string, Blob>>({});
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [playbackCount, setPlaybackCount] = useState<Record<string, number>>({});
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const hasSections = test.sections && test.sections.length > 0;
  const sections = test.sections || [];
  
  const handleTextChange = (sectionId: string, value: string) => {
    setResponses({
      ...responses,
      [sectionId]: value
    });
  };
  
  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      const nextSection = currentSection + 1;
      setCurrentSection(nextSection);
      setCurrentTab(sections[nextSection].id);
    }
  };
  
  const handlePrevSection = () => {
    if (currentSection > 0) {
      const prevSection = currentSection - 1;
      setCurrentSection(prevSection);
      setCurrentTab(sections[prevSection].id);
    }
  };
  
  // Handle recording for speaking sections
  const handleToggleRecording = async (sectionId: string) => {
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
          const blob = new Blob(audioChunks, { type: 'audio/webm' });
          setAudioBlob(prev => ({...prev, [sectionId]: blob}));
          setResponses(prev => ({
            ...prev,
            [sectionId]: "Audio response recorded"
          }));
          
          // Stop all tracks of the stream to release the microphone
          stream.getTracks().forEach(track => track.stop());
        };
        
        setMediaRecorder(recorder);
        recorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    }
  };
  
  // Handle audio playback for listening sections
  const handlePlayAudio = (sectionId: string, audioUrl: string) => {
    const currentCount = playbackCount[sectionId] || 0;
    
    if (currentCount < 3) {
      if (!audioRef.current) {
        audioRef.current = new Audio(audioUrl);
      } else {
        audioRef.current.src = audioUrl;
      }
      
      audioRef.current.play();
      setPlaybackCount(prev => ({
        ...prev,
        [sectionId]: (prev[sectionId] || 0) + 1
      }));
    }
  };
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Here you would typically send the responses to a backend for evaluation
    // For this example, we'll simulate a successful completion after a delay
    setTimeout(() => {
      // Calculate a score - in a real app this would come from the backend
      const generatedScore = Math.floor(Math.random() * 31) + 70; // Random score between 70-100
      setScore(generatedScore);
      
      // Determine if the test was passed
      const passed = generatedScore >= test.minScore;
      
      setIsCompleted(true);
      setIsSubmitting(false);
      
      // Call the onComplete callback with the score and pass status
      onComplete(generatedScore, passed);
    }, 2000);
  };
  
  const isAllSectionsCompleted = () => {
    if (!hasSections) {
      return !!responses['main'];
    }
    
    return sections.every(section => !!responses[section.id]);
  };
  
  const getSectionIcon = (type: string) => {
    switch (type) {
      case 'reading':
        return <Book className="h-5 w-5" />;
      case 'writing':
        return <Pencil className="h-5 w-5" />;
      case 'speaking':
        return <Mic className="h-5 w-5" />;
      case 'listening':
        return <Headphones className="h-5 w-5" />;
      default:
        return <Book className="h-5 w-5" />;
    }
  };
  
  const renderSectionContent = (section: any) => {
    switch (section.type) {
      case 'writing':
        return (
          <div>
            <div className="mb-4">
              <p className="text-gray-700 whitespace-pre-line">{section.prompt || test.prompt}</p>
            </div>
            
            {section.criteria && (
              <div className="mb-4 p-3 bg-blue-50 rounded-md">
                <p className="font-medium text-sm text-blue-800 mb-2">Evaluation Criteria:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {section.criteria.map((criterion: string, idx: number) => (
                    <li key={idx}>{criterion}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <Textarea
              placeholder="Write your response here..."
              value={responses[section.id] || ''}
              onChange={(e) => handleTextChange(section.id, e.target.value)}
              className="min-h-[200px]"
            />
          </div>
        );
      
      case 'speaking':
        return (
          <div>
            <div className="mb-4">
              <p className="text-gray-700 whitespace-pre-line">{section.prompt || test.prompt}</p>
              
              {section.imageUrl && (
                <img 
                  src={section.imageUrl} 
                  alt="Speaking prompt" 
                  className="my-4 rounded-md max-h-48 mx-auto"
                />
              )}
            </div>
            
            {section.criteria && (
              <div className="mb-4 p-3 bg-blue-50 rounded-md">
                <p className="font-medium text-sm text-blue-800 mb-2">Evaluation Criteria:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {section.criteria.map((criterion: string, idx: number) => (
                    <li key={idx}>{criterion}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="text-center my-6">
              <Button 
                variant={isRecording ? "destructive" : "outline"}
                size="lg"
                className="flex items-center space-x-2 mb-4"
                onClick={() => handleToggleRecording(section.id)}
              >
                {isRecording ? (
                  <>
                    <MicOff className="h-5 w-5 mr-2" />
                    <span>Stop Recording</span>
                  </>
                ) : (
                  <>
                    <Mic className="h-5 w-5 mr-2" />
                    <span>Record Your Answer</span>
                  </>
                )}
              </Button>
              
              {isRecording && (
                <div className="mt-2 mb-4">
                  <div className="animate-pulse flex space-x-2 justify-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Recording in progress...</p>
                </div>
              )}
              
              {audioBlob[section.id] && (
                <div className="mt-4">
                  <p className="text-sm text-gray-700 mb-2">Preview your recording:</p>
                  <audio 
                    src={URL.createObjectURL(audioBlob[section.id])} 
                    controls 
                    className="w-full" 
                  />
                </div>
              )}
              
              <p className="text-sm text-gray-500 mt-4">
                Record your answer based on the prompt. You can record up to 2 minutes.
              </p>
            </div>
          </div>
        );
      
      case 'listening':
        return (
          <div>
            <div className="mb-4">
              <p className="text-gray-700 whitespace-pre-line">{section.prompt || test.prompt}</p>
            </div>
            
            <div className="text-center my-6">
              <Button 
                variant="outline" 
                size="lg"
                className="flex items-center space-x-2 mb-6"
                onClick={() => handlePlayAudio(section.id, section.audioUrl || '')}
                disabled={(playbackCount[section.id] || 0) >= 3}
              >
                <Play className="h-5 w-5 mr-2" />
                <span>
                  {playbackCount[section.id] === undefined ? 'Play Audio' : 
                   `Play Audio (${3 - (playbackCount[section.id] || 0)} plays left)`}
                </span>
              </Button>
              
              {(playbackCount[section.id] || 0) >= 3 && (
                <p className="text-sm text-amber-600 mb-4">
                  You've reached the maximum number of plays.
                </p>
              )}
              
              <p className="text-sm text-gray-500 mb-6">
                Listen carefully and answer the question based on what you hear.
              </p>
              
              <Textarea
                placeholder="Write your response based on what you heard..."
                value={responses[section.id] || ''}
                onChange={(e) => handleTextChange(section.id, e.target.value)}
                className="min-h-[150px]"
              />
            </div>
          </div>
        );
      
      case 'reading':
        return (
          <div>
            <div className="mb-4">
              <p className="text-gray-700 whitespace-pre-line">{section.prompt || test.prompt}</p>
            </div>
            
            {section.text && (
              <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md max-h-[300px] overflow-y-auto">
                <p className="text-gray-800 whitespace-pre-line">{section.text}</p>
              </div>
            )}
            
            {section.imageUrl && (
              <div className="mb-4">
                <img 
                  src={section.imageUrl} 
                  alt="Reading material" 
                  className="rounded-md max-h-48 mx-auto"
                />
              </div>
            )}
            
            <Textarea
              placeholder="Write your response to the reading..."
              value={responses[section.id] || ''}
              onChange={(e) => handleTextChange(section.id, e.target.value)}
              className="min-h-[150px]"
            />
          </div>
        );
      
      default:
        return (
          <div>
            <div className="mb-4">
              <p className="text-gray-700 whitespace-pre-line">{section.prompt || test.prompt}</p>
            </div>
            
            <Textarea
              placeholder="Write your response here..."
              value={responses[section.id] || ''}
              onChange={(e) => handleTextChange(section.id, e.target.value)}
              className="min-h-[200px]"
            />
          </div>
        );
    }
  };
  
  if (isCompleted) {
    const passed = score >= test.minScore;
    
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {passed ? "Test Completed Successfully!" : "Test Completed"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100">
              {passed ? (
                <Award className="h-12 w-12 text-amber-500" />
              ) : (
                <CheckCircle className="h-12 w-12 text-blue-500" />
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2">
            {passed 
              ? "Congratulations! You've passed the test." 
              : "Thank you for completing the test."}
          </h3>
          
          <p className="text-gray-600 mb-6">
            Your score: {score}% (Required: {test.minScore}%)
          </p>
          
          <div className="w-full mb-6">
            <Progress 
              value={score} 
              className="h-4" 
              indicatorClassName={passed ? "bg-green-500" : "bg-blue-500"} 
            />
          </div>
          
          {!passed && (
            <div className="mb-6 text-left p-4 bg-amber-50 border border-amber-200 rounded-md">
              <h4 className="font-medium mb-2">Feedback:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Review the lesson materials to strengthen your understanding</li>
                <li>Practice more with similar exercises</li>
                <li>Focus on the areas mentioned in the test criteria</li>
              </ul>
            </div>
          )}
          
          <Badge variant={passed ? "default" : "secondary"} className="mb-4">
            {test.type.charAt(0).toUpperCase() + test.type.slice(1)}
          </Badge>
          
          {passed && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-md text-left">
              <h4 className="font-medium mb-2 text-green-800">Next steps:</h4>
              <ul className="list-disc pl-5 space-y-1 text-green-700">
                <li>Proceed to the next lesson to continue your learning journey</li>
                <li>Try the conversation practice to reinforce what you've learned</li>
                <li>Apply these skills in your daily language practice</li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{test.title}</CardTitle>
          <Badge>{test.type}</Badge>
        </div>
        <CardDescription>{test.description}</CardDescription>
        
        {hasSections && (
          <QuizProgress 
            currentQuestion={currentSection + 1} 
            totalQuestions={sections.length} 
            variant="final"
          />
        )}
      </CardHeader>
      
      <CardContent>
        {!hasSections ? (
          // Simple single-section test
          <div>
            <div className="mb-4">
              <p className="text-gray-700 whitespace-pre-line">{test.prompt}</p>
            </div>
            
            {test.criteria && (
              <div className="mb-4 p-3 bg-blue-50 rounded-md">
                <p className="font-medium text-sm text-blue-800 mb-2">Evaluation Criteria:</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {test.criteria.map((criterion, idx) => (
                    <li key={idx}>{criterion}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <Textarea
              placeholder={`Write your ${test.type} response here...`}
              value={responses['main'] || ''}
              onChange={(e) => handleTextChange('main', e.target.value)}
              className="min-h-[200px]"
            />
          </div>
        ) : (
          // Multi-section test
          <Tabs
            value={currentTab}
            onValueChange={(value) => {
              setCurrentTab(value);
              setCurrentSection(sections.findIndex(s => s.id === value));
            }}
            className="w-full"
          >
            <TabsList className="mb-4 w-full grid" style={{ gridTemplateColumns: `repeat(${Math.min(sections.length, 4)}, 1fr)` }}>
              {sections.map((section, idx) => (
                <TabsTrigger key={section.id} value={section.id} className="flex items-center space-x-1">
                  {getSectionIcon(section.type)}
                  <span>Section {idx + 1}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="pt-2">
                <div className="mb-3 flex items-center">
                  <Badge variant="outline" className="mr-2">
                    {section.type.charAt(0).toUpperCase() + section.type.slice(1)}
                  </Badge>
                  <h3 className="text-lg font-medium">{section.title}</h3>
                  
                  {section.weight && (
                    <span className="ml-auto text-sm text-gray-500">
                      Weight: {section.weight}%
                    </span>
                  )}
                </div>
                
                {section.description && (
                  <p className="text-sm text-gray-700 mb-4">{section.description}</p>
                )}
                
                {renderSectionContent(section)}
              </TabsContent>
            ))}
          </Tabs>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        {hasSections ? (
          <>
            <Button 
              variant="outline" 
              onClick={handlePrevSection}
              disabled={currentSection === 0}
            >
              Previous Section
            </Button>
            
            <div>
              {currentSection < sections.length - 1 ? (
                <Button 
                  onClick={handleNextSection}
                  disabled={!responses[sections[currentSection].id]}
                >
                  Next Section
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit} 
                  disabled={!isAllSectionsCompleted() || isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Test'}
                </Button>
              )}
            </div>
          </>
        ) : (
          <div className="w-full flex justify-end">
            <Button 
              onClick={handleSubmit} 
              disabled={!responses['main'] || isSubmitting}
              className="min-w-[120px]"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Test'}
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PracticalTest;
