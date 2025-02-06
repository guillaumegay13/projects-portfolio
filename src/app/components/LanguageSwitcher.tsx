'use client';

import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="fixed top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <Image
        src={`/flags/${language === 'en' ? 'fr' : 'gb'}.svg`}
        alt={language === 'en' ? 'French' : 'English'}
        width={20}
        height={20}
        className="rounded-full"
      />
      <span className="text-sm">{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
}