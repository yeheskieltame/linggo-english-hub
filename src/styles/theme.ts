// Theme colors for Linggo English Hub
// Modern, colorful palette for young users that's still soft and comfortable

export const theme = {
  // Primary colors
  primary: {
    purple: {
      light: '#A78BFA', // Light purple
      main: '#8B5CF6',  // Main purple (Violet-500)
      dark: '#7C3AED',  // Dark purple (Violet-600)
    },
    orange: {
      light: '#FDBA74', // Light orange
      main: '#F97316',  // Main orange (Orange-500)
      dark: '#EA580C',  // Dark orange (Orange-600)
    },
    blue: {
      light: '#93C5FD', // Light blue
      main: '#60A5FA',  // Main blue (Blue-400)
      dark: '#3B82F6',  // Dark blue (Blue-500)
    }
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    background: '#F9FAFB', // Very light gray for backgrounds
    lightGray: '#F3F4F6', // Light gray for cards, etc.
    mediumGray: '#E5E7EB', // Medium gray for borders
    gray: '#9CA3AF',      // Gray for secondary text
    darkGray: '#4B5563',  // Dark gray for primary text
    black: '#1F2937',     // Not pure black, easier on the eyes
  },
  
  // Semantic colors
  semantic: {
    success: '#10B981', // Emerald-500
    warning: '#F59E0B', // Amber-500
    error: '#EF4444',   // Red-500
    info: '#3B82F6',    // Blue-500
  },
  
  // Gradients
  gradients: {
    purpleToBlue: 'linear-gradient(90deg, #8B5CF6 0%, #60A5FA 100%)',
    orangeToPurple: 'linear-gradient(90deg, #F97316 0%, #8B5CF6 100%)',
    blueToOrange: 'linear-gradient(90deg, #60A5FA 0%, #F97316 100%)',
  }
};

// Tailwind CSS color classes mapping
export const tailwindColors = {
  'linggo-purple': {
    light: 'bg-violet-300 text-violet-900',
    DEFAULT: 'bg-violet-500 text-white',
    dark: 'bg-violet-600 text-white',
  },
  'linggo-orange': {
    light: 'bg-orange-300 text-orange-900',
    DEFAULT: 'bg-orange-500 text-white',
    dark: 'bg-orange-600 text-white',
  },
  'linggo-blue': {
    light: 'bg-blue-300 text-blue-900',
    DEFAULT: 'bg-blue-400 text-white',
    dark: 'bg-blue-500 text-white',
  },
};

// Export default theme
export default theme;