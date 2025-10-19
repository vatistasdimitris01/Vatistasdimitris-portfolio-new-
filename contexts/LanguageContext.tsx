import React, { createContext, useState, useContext, ReactNode, PropsWithChildren } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'el';

export type Translation = (typeof translations)['en'];

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// FIX: Changed component props to use PropsWithChildren for better type safety and to resolve potential type inference issues.
export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'el' : 'en');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
