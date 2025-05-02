
// This is a simplified TTS service for the first version
// In a production version, this would connect to actual TTS APIs like ElevenLabs or Google Cloud TTS

export const speakText = (text: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if browser supports speech synthesis
    if ('speechSynthesis' in window) {
      // Create a new instance of SpeechSynthesisUtterance
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set properties
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Slightly slower than normal
      utterance.pitch = 1.0;
      
      // Try to find an English voice
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => 
        voice.lang.includes('en-') && voice.name.includes('Female')
      );
      
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      
      // Events
      utterance.onend = () => {
        resolve();
      };
      
      utterance.onerror = (event) => {
        reject(`Speech synthesis error: ${event.error}`);
      };
      
      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      reject('Speech synthesis not supported in this browser');
    }
  });
};

// Helper function to load voices (needed for some browsers)
export const loadVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    let voices = window.speechSynthesis.getVoices();
    
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    
    // Chrome requires a listener for the voiceschanged event
    const voicesChangedHandler = () => {
      voices = window.speechSynthesis.getVoices();
      resolve(voices);
      window.speechSynthesis.removeEventListener('voiceschanged', voicesChangedHandler);
    };
    
    window.speechSynthesis.addEventListener('voiceschanged', voicesChangedHandler);
  });
};

// Initialize voice loading when the module is imported
loadVoices().catch(console.error);
