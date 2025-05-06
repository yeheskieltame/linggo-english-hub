import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpeechDemo from '@/components/SpeechDemo';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SpeechDemoPage: React.FC = () => {
  const [customText, setCustomText] = useState('');
  const [activeText, setActiveText] = useState('Hello, welcome to Linggo English Hub. How are you today?');
  
  const exampleTexts = [
    'Hello, welcome to Linggo English Hub. How are you today?',
    'My name is John and I work in the marketing department.',
    'Could you help me with the printer, please? I don\'t know how to use it.',
    'Excuse me, where is the meeting room? I have a meeting at 10 o\'clock.',
    'It was nice meeting you. I look forward to working with you on this project.'
  ];
  
  const handleSetCustomText = () => {
    if (customText.trim()) {
      setActiveText(customText.trim());
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Speech Recognition & Synthesis Demo</h1>
        
        <p className="text-lg mb-8">
          This page demonstrates how to use the speech recognition and speech synthesis 
          features in the Linggo English Hub. You can listen to example phrases and practice 
          your pronunciation.
        </p>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Select a phrase to practice:</h2>
          
          <Tabs defaultValue="examples" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="examples">Example Phrases</TabsTrigger>
              <TabsTrigger value="custom">Custom Text</TabsTrigger>
            </TabsList>
            
            <TabsContent value="examples">
              <Card className="p-4">
                <div className="grid gap-3">
                  {exampleTexts.map((text, index) => (
                    <Button 
                      key={index}
                      variant={activeText === text ? "default" : "outline"}
                      className="justify-start h-auto py-3 px-4 text-left"
                      onClick={() => setActiveText(text)}
                    >
                      {text}
                    </Button>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="custom">
              <Card className="p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <Input
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="Enter your own text to practice..."
                      className="flex-1"
                    />
                    <Button onClick={handleSetCustomText}>Set Text</Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Enter any text you want to practice pronouncing. Click "Set Text" to update the practice area.
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Practice Area:</h2>
          <SpeechDemo targetText={activeText} />
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">How to Use This Feature:</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Select one of the example phrases or enter your own text.</li>
            <li>Click the <strong>Listen</strong> button to hear the correct pronunciation.</li>
            <li>Click the <strong>Start Recording</strong> button and speak the phrase.</li>
            <li>View your pronunciation feedback and practice areas that need improvement.</li>
            <li>Repeat as needed to improve your pronunciation.</li>
          </ol>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Implementation Notes:</h2>
          <p className="mb-4">
            This demo uses the Web Speech API which is built into modern browsers. The key features are:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Speech Recognition</strong> - Uses the <code>startSpeechRecognition()</code> function 
              from <code>speechRecognition.ts</code> to convert speech to text.
            </li>
            <li>
              <strong>Text-to-Speech</strong> - Uses the <code>speakText()</code> function 
              from <code>speechRecognition.ts</code> to convert text to speech.
            </li>
            <li>
              <strong>Pronunciation Feedback</strong> - Uses the <code>getPronunciationFeedback()</code> function 
              to evaluate pronunciation quality.
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Note: Speech recognition requires microphone permission and may not work in all browsers or environments.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpeechDemoPage;