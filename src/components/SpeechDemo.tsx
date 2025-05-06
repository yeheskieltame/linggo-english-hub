import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, Square, Volume2, VolumeX } from 'lucide-react';
import { startSpeechRecognition, speakText, getAvailableVoices, getPronunciationFeedback } from '@/services/speechRecognition';

interface SpeechDemoProps {
  targetText?: string;
  showPronunciationFeedback?: boolean;
  onSpeechResult?: (text: string) => void;
}

const SpeechDemo: React.FC<SpeechDemoProps> = ({ 
  targetText = "Hello, how are you today?", 
  showPronunciationFeedback = true,
  onSpeechResult
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [speechController, setSpeechController] = useState<any>(null);
  const [recognitionController, setRecognitionController] = useState<any>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [speechRate, setSpeechRate] = useState<number>(1);
  const [feedback, setFeedback] = useState<{
    score: number;
    feedback: string;
    detailedFeedback?: { word: string, issue: string }[];
  } | null>(null);

  // Load available voices
  useEffect(() => {
    const loadVoices = async () => {
      const availableVoices = await getAvailableVoices();
      setVoices(availableVoices);
      
      // Set default voice (prefer English voices)
      const englishVoice = availableVoices.find(voice => 
        voice.lang.includes('en') && voice.localService
      );
      
      if (englishVoice) {
        setSelectedVoice(englishVoice.name);
      } else if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].name);
      }
    };
    
    loadVoices();
  }, []);

  // Initialize speech recognition
  const startListening = async () => {
    try {
      const controller = await startSpeechRecognition();
      setRecognitionController(controller);
      
      controller.onResult((result) => {
        setTranscript(result.transcript);
        if (onSpeechResult) {
          onSpeechResult(result.transcript);
        }
      });
      
      controller.onEnd(() => {
        setIsListening(false);
        
        // Get pronunciation feedback if enabled
        if (showPronunciationFeedback && transcript) {
          getPronunciationFeedback(transcript, targetText)
            .then(result => {
              setFeedback(result);
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
      
      const controller = await speakText(targetText, {
        voice: selectedVoice,
        rate: speechRate,
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

  return (
    <Card className="p-4 w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Target Text:</h3>
          <p className="p-3 bg-gray-50 rounded-md">{targetText}</p>
        </div>
        
        {/* Text-to-Speech Controls */}
        <div>
          <h3 className="text-lg font-medium mb-2">Listen:</h3>
          <div className="flex items-center gap-3">
            <Button 
              onClick={isSpeaking ? stopSpeaking : speak}
              variant={isSpeaking ? "destructive" : "default"}
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
            
            {voices.length > 0 && (
              <div className="flex items-center gap-2">
                <select 
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="p-2 border rounded-md text-sm"
                  disabled={isSpeaking}
                >
                  {voices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </select>
                
                <select
                  value={speechRate}
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  className="p-2 border rounded-md text-sm w-32"
                  disabled={isSpeaking}
                >
                  <option value="0.5">Slow (0.5x)</option>
                  <option value="0.75">Slower (0.75x)</option>
                  <option value="1">Normal (1x)</option>
                  <option value="1.25">Faster (1.25x)</option>
                  <option value="1.5">Fast (1.5x)</option>
                </select>
              </div>
            )}
          </div>
        </div>
        
        {/* Speech-to-Text Controls */}
        <div>
          <h3 className="text-lg font-medium mb-2">Speak:</h3>
          <div className="flex items-center gap-3">
            <Button 
              onClick={isListening ? stopListening : startListening}
              variant={isListening ? "destructive" : "default"}
              className="flex items-center gap-2"
            >
              {isListening ? (
                <>
                  <Square size={18} />
                  Stop Recording
                </>
              ) : (
                <>
                  <Mic size={18} />
                  Start Recording
                </>
              )}
            </Button>
            
            {isListening && (
              <div className="text-sm text-purple-600 animate-pulse">
                Listening...
              </div>
            )}
          </div>
          
          {transcript && (
            <div className="mt-3">
              <h4 className="text-md font-medium mb-1">Your speech:</h4>
              <p className="p-3 bg-gray-50 rounded-md">{transcript}</p>
            </div>
          )}
        </div>
        
        {/* Pronunciation Feedback */}
        {showPronunciationFeedback && feedback && (
          <div className="mt-4 p-4 border rounded-md bg-gray-50">
            <h3 className="text-lg font-medium mb-2">Pronunciation Feedback:</h3>
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

export default SpeechDemo;