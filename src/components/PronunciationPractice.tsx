import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, Square, Volume2, VolumeX } from 'lucide-react';
import { startSpeechRecognition, speakText, getPronunciationFeedback } from '@/services/speechRecognition';

interface PronunciationPracticeProps {
  phrase: string;
  onComplete?: (score: number) => void;
}

const PronunciationPractice: React.FC<PronunciationPracticeProps> = ({ 
  phrase,
  onComplete
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [speechController, setSpeechController] = useState<any>(null);
  const [recognitionController, setRecognitionController] = useState<any>(null);
  const [feedback, setFeedback] = useState<{
    score: number;
    feedback: string;
    detailedFeedback?: { word: string, issue: string }[];
  } | null>(null);

  // Initialize speech recognition
  const startListening = async () => {
    try {
      const controller = await startSpeechRecognition();
      setRecognitionController(controller);
      
      controller.onResult((result) => {
        setTranscript(result.transcript);
      });
      
      controller.onEnd(() => {
        setIsListening(false);
        
        // Get pronunciation feedback
        if (transcript) {
          getPronunciationFeedback(transcript, phrase)
            .then(result => {
              setFeedback(result);
              if (onComplete) {
                onComplete(result.score);
              }
            });
        }
      });
      
      controller.start();
      setIsListening(true);
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      alert('Speech recognition is not supported in this browser or requires permission.');
    }
  };

  // Stop listening
  const stopListening = () => {
    if (recognitionController) {
      recognitionController.stop();
    }
  };

  // Speak the target text
  const speak = async () => {
    try {
      // Cancel any ongoing speech
      if (speechController) {
        speechController.cancel();
      }
      
      const controller = await speakText(phrase, {
        onStart: () => setIsSpeaking(true),
        onEnd: () => setIsSpeaking(false),
        onError: (error) => {
          console.error('Speech synthesis error:', error);
          setIsSpeaking(false);
        }
      });
      
      setSpeechController(controller);
    } catch (error) {
      console.error('Error starting speech synthesis:', error);
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  // Stop speaking
  const stopSpeaking = () => {
    if (speechController) {
      speechController.cancel();
      setIsSpeaking(false);
    }
  };

  // Reset the practice
  const resetPractice = () => {
    setTranscript('');
    setFeedback(null);
  };

  return (
    <Card className="p-4 w-full">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Practice Pronunciation:</h3>
          <p className="p-3 bg-gray-50 rounded-md font-medium">{phrase}</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={isSpeaking ? stopSpeaking : speak}
            variant={isSpeaking ? "destructive" : "outline"}
            className="flex items-center gap-2"
          >
            {isSpeaking ? (
              <>
                <VolumeX size={18} />
                Stop
              </>
            ) : (
              <>
                <Volume2 size={18} />
                Listen
              </>
            )}
          </Button>
          
          <Button 
            onClick={isListening ? stopListening : startListening}
            variant={isListening ? "destructive" : "default"}
            className="flex items-center gap-2"
            disabled={isSpeaking}
          >
            {isListening ? (
              <>
                <Square size={18} />
                Stop Recording
              </>
            ) : (
              <>
                <Mic size={18} />
                Record Your Voice
              </>
            )}
          </Button>
          
          {feedback && (
            <Button 
              onClick={resetPractice}
              variant="outline"
              className="ml-auto"
            >
              Try Again
            </Button>
          )}
        </div>
        
        {isListening && (
          <div className="text-sm text-purple-600 animate-pulse">
            Listening... Speak the phrase clearly.
          </div>
        )}
        
        {transcript && (
          <div className="mt-2">
            <h4 className="text-md font-medium mb-1">Your speech:</h4>
            <p className="p-3 bg-gray-50 rounded-md">{transcript}</p>
          </div>
        )}
        
        {feedback && (
          <div className="mt-2 p-4 border rounded-md bg-gray-50">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-lg font-bold">Score: {feedback.score}/100</div>
              <div 
                className={`h-2 flex-1 rounded-full ${
                  feedback.score > 85 ? 'bg-green-500' : 
                  feedback.score > 70 ? 'bg-yellow-500' : 
                  feedback.score > 50 ? 'bg-orange-500' : 
                  'bg-red-500'
                }`}
              >
                <div 
                  className="h-full bg-gray-200 rounded-full" 
                  style={{ width: `${100 - feedback.score}%` }}
                ></div>
              </div>
            </div>
            
            <p className="mb-2 font-medium">{feedback.feedback}</p>
            
            {feedback.detailedFeedback && feedback.detailedFeedback.length > 0 && (
              <div className="mt-2">
                <h4 className="text-md font-medium mb-1">Detailed feedback:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {feedback.detailedFeedback.map((item, index) => (
                    <li key={index}>
                      <span className="font-medium">{item.word}:</span> {item.issue}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default PronunciationPractice;