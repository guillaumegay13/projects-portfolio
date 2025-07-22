'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

interface NavItem {
  id: string;
  label: string;
  active: boolean;
}

export default function SideNavigation() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const navItems: NavItem[] = [
    { id: 'contact', label: t.sections.contact, active: false },
    { id: 'contributions', label: t.sections.githubActivity, active: false },
    { id: 'projects', label: t.sections.projects, active: false },
    { id: 'partners', label: t.sections.partners, active: false },
    { id: 'thoughts', label: t.sections.thoughts, active: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id === 'contributions' ? 'github-contributions' : item.id),
      }));

      const scrollPosition = window.scrollY + 100;
      
      // Show navigation after scrolling past hero section
      const heroHeight = document.querySelector('header')?.offsetHeight || 0;
      setIsVisible(window.scrollY > heroHeight - 100);

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleClick = (sectionId: string) => {
    const targetId = sectionId === 'contributions' ? 'github-contributions' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - 80;
      const startPosition = window.scrollY;
      const duration = 800;
      const startTime = performance.now();

      function animate(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOutCubic = (progress: number): number => 
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + (elementPosition - startPosition) * easeInOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }
  };

  return (
    <nav 
      className={`fixed left-8 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } hidden xl:block`}
    >
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`text-sm block text-left transition-all duration-200 py-1 pr-4 pl-2 border-l-2 ${
                activeSection === item.id
                  ? 'border-gray-800 dark:border-gray-200 text-gray-900 dark:text-gray-100 font-medium'
                  : 'border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}