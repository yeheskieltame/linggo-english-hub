
// This is a simplified Speech Recognition service for the first version
// In a production version, this would connect to actual STT APIs

interface RecognitionResult {
  transcript: string;
  confidence: number;
}

export const startSpeechRecognition = (): Promise<{ 
  start: () => void;
  stop: () => void;
  onResult: (callback: (result: RecognitionResult) => void) => void;
  onEnd: (callback: () => void) => void;
}> => {
  return new Promise((resolve, reject) => {
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      reject('Speech recognition not supported in this browser');
      return;
    }
    
    // Create a new instance
    const recognition = new SpeechRecognition();
    
    // Set properties
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = true;
    
    let resultCallback: ((result: RecognitionResult) => void) | null = null;
    let endCallback: (() => void) | null = null;
    
    // Events
    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const transcript = event.results[last][0].transcript;
      const confidence = event.results[last][0].confidence;
      
      if (resultCallback) {
        resultCallback({
          transcript,
          confidence
        });
      }
    };
    
    recognition.onend = () => {
      if (endCallback) {
        endCallback();
      }
    };
    
    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
    };
    
    // Return controller
    resolve({
      start: () => recognition.start(),
      stop: () => recognition.stop(),
      onResult: (callback) => {
        resultCallback = callback;
      },
      onEnd: (callback) => {
        endCallback = callback;
      }
    });
  });
};

// Simple mock function for pronunciation feedback
export const getPronunciationFeedback = (
  userSpeech: string, 
  targetText: string
): Promise<{ 
  score: number; 
  feedback: string;
  detailedFeedback?: { word: string, issue: string }[];
}> => {
  return new Promise((resolve) => {
    // This is a mock that would be replaced with actual API call
    // to evaluate pronunciation in a real implementation
    
    // Normalize texts for comparison
    const normalizedUser = userSpeech.trim().toLowerCase();
    const normalizedTarget = targetText.trim().toLowerCase();
    
    // Calculate a simple similarity score
    const words1 = normalizedUser.split(/\s+/);
    const words2 = normalizedTarget.split(/\s+/);
    
    const commonWords = words1.filter(word => words2.includes(word));
    const similarityScore = commonWords.length / Math.max(words1.length, words2.length);
    
    // Convert to a 0-100 scale
    const score = Math.round(similarityScore * 100);
    
    // Generate mock feedback
    let feedback = '';
    const detailedFeedback = [];
    
    if (score > 85) {
      feedback = "Excellent pronunciation! Keep up the good work.";
    } else if (score > 70) {
      feedback = "Good job! There's still room for some improvement.";
      
      // Add a mock detailed feedback
      detailedFeedback.push({
        word: words2[Math.floor(Math.random() * words2.length)],
        issue: "Try to emphasize this word more clearly."
      });
    } else if (score > 50) {
      feedback = "Fair attempt. Try speaking more slowly and clearly.";
      
      // Add mock detailed feedback
      detailedFeedback.push({
        word: words2[Math.floor(Math.random() * words2.length)],
        issue: "This word was difficult to understand."
      });
      detailedFeedback.push({
        word: words2[Math.floor(Math.random() * words2.length)],
        issue: "Pay attention to the pronunciation of this word."
      });
    } else {
      feedback = "Keep practicing! Try pronouncing each word more carefully.";
      
      detailedFeedback.push({
        word: "multiple words",
        issue: "The pronunciation needs more practice."
      });
    }
    
    // Add slight delay to simulate API call
    setTimeout(() => {
      resolve({
        score,
        feedback,
        detailedFeedback
      });
    }, 800);
  });
};
