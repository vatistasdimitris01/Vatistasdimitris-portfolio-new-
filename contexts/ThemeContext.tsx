import React, { createContext, useState, useContext, PropsWithChildren, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  // `toggleTheme` removed as theme is now system-controlled
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  // Initialize theme based on system preference
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'light' : 'dark');
    };

    // Listen for changes in the system's preferred color scheme
    mediaQuery.addEventListener('change', handleChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // `toggleTheme` is no longer provided as the theme is automatically managed
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};