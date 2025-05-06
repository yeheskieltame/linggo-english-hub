
import React, { useState } from 'react';
import { LessonStage } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import { Volume2, BookOpen, ExternalLink, Mic } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { speakText } from '@/services/speechRecognition';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { useIsMobile } from '@/hooks/use-mobile';
import PronunciationPractice from '@/components/PronunciationPractice';

interface LessonStageContentProps {
  stage: LessonStage;
  onComplete: (stageId: string) => void;
}

const LessonStageContent: React.FC<LessonStageContentProps> = ({ stage, onComplete }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeExampleIndex, setActiveExampleIndex] = useState<number | null>(null);
  const [activePracticeIndex, setActivePracticeIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleSpeak = async (text: string, index?: number) => {
    if (isSpeaking) return;
    
    try {
      setIsSpeaking(true);
      if (index !== undefined) {
        setActiveExampleIndex(index);
      }
      
      await speakText(text);
    } catch (error) {
      console.error('Error speaking text:', error);
    } finally {
      setIsSpeaking(false);
      setActiveExampleIndex(null);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-full">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-700 break-words hyphens-auto">
          {stage.title}
        </h2>
        <Button 
          variant="ghost" 
          size={isMobile ? "icon" : "sm"}
          onClick={() => handleSpeak(stage.content)}
          disabled={isSpeaking}
          className="text-purple-600 hover:bg-purple-50 flex-shrink-0"
          title="Listen to this section"
        >
          <Volume2 className="h-4 w-4" />
          {!isMobile && <span className="ml-2">Listen</span>}
        </Button>
      </div>

      {stage.videoId && (
        <div className="mb-4 sm:mb-6">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <YouTubeEmbed 
              videoId={stage.videoId} 
              title={stage.title}
              className="w-full"
            />
          </div>
          <div className="mt-2 flex justify-end">
            <a 
              href={`https://www.youtube.com/watch?v=${stage.videoId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm flex items-center text-purple-600 hover:text-purple-800"
            >
              <BookOpen className="h-3 w-3 mr-1" /> Watch on YouTube <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      )}

      {stage.imageUrl && (
        <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg shadow-md">
          <img 
            src={stage.imageUrl} 
            alt={stage.title} 
            className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="prose prose-sm sm:prose max-w-none">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words hyphens-auto overflow-wrap-anywhere">
          {stage.content}
        </p>
      </div>
      
      {stage.examples && stage.examples.length > 0 && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-3 sm:p-6 shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-6 text-purple-700">Examples</h3>
          <div className="space-y-6">
            {stage.examples.map((example, index) => (
              <div key={index} className="space-y-3">
                <Card 
                  className={`border-none shadow-sm transition-all hover:shadow-md ${
                    activeExampleIndex === index ? 'bg-purple-50 border-l-4 border-purple-400' : 'bg-white'
                  }`}
                >
                  <CardContent className="p-3 sm:p-5">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <p className="font-medium text-gray-800 text-sm sm:text-base break-words hyphens-auto flex-1">
                        {example.english}
                      </p>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-600 hover:bg-purple-50 flex-shrink-0"
                          onClick={() => handleSpeak(example.english, index)}
                          disabled={isSpeaking}
                          title="Listen to example"
                        >
                          <Volume2 className="h-4 w-4" />
                          <span className="sr-only">Listen</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-600 hover:bg-purple-50 flex-shrink-0"
                          onClick={() => setActivePracticeIndex(activePracticeIndex === index ? null : index)}
                          title="Practice pronunciation"
                        >
                          <Mic className="h-4 w-4" />
                          <span className="sr-only">Practice</span>
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base break-words hyphens-auto">
                      {example.indonesian}
                    </p>
                  </CardContent>
                </Card>
                
                {activePracticeIndex === index && (
                  <div className="pl-4 border-l-2 border-purple-200">
                    <PronunciationPractice phrase={example.english} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end mt-6 sm:mt-8 pb-4">
        <Button onClick={() => onComplete(stage.id)} className="bg-purple-600 hover:bg-purple-700">
          Mark as Complete & Continue
        </Button>
      </div>
    </div>
  );
};

export default LessonStageContent;
