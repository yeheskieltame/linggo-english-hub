import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Volume2, Mic, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { practiceSentences } from '@/data/mockData';
import { speakText } from '@/services/textToSpeech';
import { startSpeechRecognition, getPronunciationFeedback } from '@/services/speechRecognition';

interface FeedbackResult {
  score: number;
  feedback: string;
  detailedFeedback?: { word: string; issue: string }[];
}

const PracticePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const recognitionRef = useRef<any>(null);
  
  const currentSentence = practiceSentences[currentIndex];
  
  useEffect(() => {
    // Reset state when moving to a new sentence
    setTranscript('');
    setFeedback(null);
  }, [currentIndex]);
  
  const handlePlayAudio = async () => {
    if (isSpeaking) return;
    
    try {
      setIsSpeaking(true);
      await speakText(currentSentence.english);
    } catch (error) {
      console.error('Error playing audio:', error);
    } finally {
      setIsSpeaking(false);
    }
  };
  
  const handleStartListening = async () => {
    try {
      setIsListening(true);
      setTranscript('');
      
      const recognition = await startSpeechRecognition();
      recognitionRef.current = recognition;
      
      recognition.onResult((result) => {
        setTranscript(result.transcript);
      });
      
      recognition.onEnd(() => {
        setIsListening(false);
        if (transcript) {
          handleSubmitSpeech();
        }
      });
      
      recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      setIsListening(false);
    }
  };
  
  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };
  
  const handleSubmitSpeech = async () => {
    if (!transcript.trim()) return;
    
    setIsLoading(true);
    try {
      const result = await getPronunciationFeedback(transcript, currentSentence.english);
      setFeedback(result);
    } catch (error) {
      console.error('Error getting pronunciation feedback:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleNextSentence = () => {
    if (currentIndex < practiceSentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Could navigate to a completion page
      alert('Practice completed! Great job!');
      setCurrentIndex(0);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Practice Header */}
      <section className="pt-28 pb-12 bg-linggo-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Speaking Practice</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Improve your pronunciation by practicing with our AI-powered speaking exercises.
            </p>
          </div>
        </div>
      </section>
      
      {/* Practice Content */}
      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <Badge variant="outline">
                {currentIndex + 1} of {practiceSentences.length}
              </Badge>
            </div>
            <Progress value={(currentIndex / (practiceSentences.length - 1)) * 100} className="w-1/2" />
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className={
                    currentSentence.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    currentSentence.difficulty === 'medium' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }>
                    {currentSentence.difficulty.charAt(0).toUpperCase() + currentSentence.difficulty.slice(1)}
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePlayAudio}
                  disabled={isSpeaking}
                >
                  {isSpeaking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Volume2 className="h-4 w-4" />}
                  <span className="ml-2">Listen</span>
                </Button>
              </div>
              
              <div className="my-6">
                <h2 className="text-xl font-semibold mb-4">Repeat this sentence:</h2>
                <p className="text-2xl bg-linggo-light p-4 rounded-md">{currentSentence.english}</p>
                <p className="text-gray-600 mt-2 text-sm">{currentSentence.indonesian}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <h3 className="font-medium mb-2">Pronunciation Tip:</h3>
                <p>{currentSentence.tips}</p>
              </div>
              
              <div className="flex justify-center">
                <Button
                  className="flex items-center gap-2 px-8"
                  onClick={isListening ? handleStopListening : handleStartListening}
                  variant={isListening ? "destructive" : "default"}
                >
                  {isListening ? (
                    <>
                      <Loader2 className="animate-spin" /> Recording...
                    </>
                  ) : (
                    <>
                      <Mic /> Start Speaking
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {transcript && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Your speech:</h3>
                <p className="bg-gray-50 p-3 rounded-md">{transcript}</p>
                
                {!feedback && !isLoading && (
                  <Button 
                    className="mt-4" 
                    onClick={handleSubmitSpeech}
                    disabled={isLoading}
                  >
                    Check Pronunciation
                  </Button>
                )}
                
                {isLoading && (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="animate-spin mr-2" />
                    <span>Analyzing your pronunciation...</span>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
          
          {feedback && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">Pronunciation Feedback</h3>
                  <Badge className={
                    feedback.score > 80 ? 'bg-green-100 text-green-800' :
                    feedback.score > 60 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }>
                    Score: {feedback.score}/100
                  </Badge>
                </div>
                
                <p className="mb-4">{feedback.feedback}</p>
                
                {feedback.detailedFeedback && feedback.detailedFeedback.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Detailed Feedback:</h4>
                    <ul className="space-y-2">
                      {feedback.detailedFeedback.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="font-medium">{item.word}:</span>
                          <span>{item.issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={handlePlayAudio}>
                    <Volume2 className="mr-2 h-4 w-4" /> Listen Again
                  </Button>
                  <Button onClick={handleNextSentence}>
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          {!transcript && !feedback && (
            <div className="text-center text-gray-500 my-8">
              <p>Click "Start Speaking" to begin practicing</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PracticePage;
