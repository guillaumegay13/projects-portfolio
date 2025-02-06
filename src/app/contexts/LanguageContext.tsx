'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en'); // Start with default
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Check localStorage first
        const stored = localStorage.getItem('language') as Language;
        if (stored === 'en' || stored === 'fr') {
            setLanguage(stored);
            return;
        }

        // Then check browser language
        const browserLang = navigator.language.toLowerCase();
        setLanguage(browserLang.startsWith('fr') ? 'fr' : 'en');
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem('language', language);
            document.documentElement.lang = language;
        }
    }, [language, isClient]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
} 