'use client';

import { useLanguage } from './contexts/LanguageContext';
import { translations } from './i18n/translations';
import { Translation } from './i18n/translation.interface';
interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language] as Translation;
  const projects = getProjects(t, language);
  const partners = getPartners();

  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto font-light">
      {/* Minimal Hero Section */}
      <header className="mb-16 mt-8">
        <h1 className="text-3xl mb-4">{t.hero.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 text-xl mb-6">
          {t.hero.subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-xl mb-6">
          {t.hero.passion}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-xl mb-6">
          {t.hero.help}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-xl mb-8">
          <a
            href="#projects"
            className="hover:text-black dark:hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#projects');
              if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const startPosition = window.scrollY;
                const duration = 1500;
                const startTime = performance.now();

                function animate(currentTime: number) {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);

                  const easeInOutCubic = (progress: number): number => progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                  window.scrollTo(0, startPosition + (elementPosition - startPosition) * easeInOutCubic(progress));

                  if (progress < 1) {
                    requestAnimationFrame(animate);
                  }
                }

                requestAnimationFrame(animate);
              }
            }}
          >
            {t.hero.explore[0]}
          </a>
          {" "}
          {t.hero.explore[1]}{" "}
          <a
            href="#contact"
            className="hover:text-black dark:hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact');
              if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const startPosition = window.scrollY;
                const duration = 1500;
                const startTime = performance.now();

                function animate(currentTime: number) {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);

                  const easeInOutCubic = (progress: number): number => progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                  window.scrollTo(0, startPosition + (elementPosition - startPosition) * easeInOutCubic(progress));

                  if (progress < 1) {
                    requestAnimationFrame(animate);
                  }
                }

                requestAnimationFrame(animate);
              }
            }}
          >
            {t.hero.explore[3]}
          </a>
          {t.hero.explore[4]}
        </p>
      </header>

      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <h2 className="text-2xl mb-8">{t.sections.contact}</h2>
        <div className="flex gap-4">
          <div className="inline-block border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            <a href="mailto:guillaume.gay@protonmail.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <div className="inline-block border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            <a href="https://www.linkedin.com/in/guillaume-gay-aa0ba6133/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <div className="inline-block border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
            <a href="https://x.com/GuillaumeGay_" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16">
        <h2 className="text-2xl mb-8">{t.sections.projects}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-xl mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
              </div>
              <footer>
                <div className="flex gap-3 flex-wrap mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-gray-500 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:text-black dark:hover:text-white"
                    >
                      {t.sections.viewSource}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:text-black dark:hover:text-white"
                    >
                      {t.sections.visitProject}
                    </a>
                  )}
                </div>
              </footer>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="mb-16">
        <h2 className="text-2xl mb-8">{t.sections.partners}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 dark:border-gray-800 p-4 rounded-lg flex flex-col items-center justify-center hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain mb-3 grayscale hover:grayscale-0 transition-all"
                />
              ) : null}
              <span className="text-center text-gray-600 dark:text-gray-300">{partner.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Read My Thoughts Section */}
      <section id="thoughts" className="mb-16">
        <h2 className="text-2xl mb-8">{t.sections.thoughts}</h2>
        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.title}
                className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-black dark:hover:text-white"
                  >
                    {t.sections.readMore}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">
            {t.sections.noBlogPosts}
          </p>
        )}
      </section>
    </div>
  );
}

// Update the getProjects function signature
const getProjects = (t: Translation, language: string) => [
  {
    title: t.projects.mytrainer.title,
    description: t.projects.mytrainer.description,
    technologies: ["Flutter", "GenAI", "Firebase", "Python", "FastAPI"],
    github: null,
    demo: "https://mytrainerapp.io",
  },
  {
    title: t.projects.flexsdk.title,
    description: t.projects.flexsdk.description,
    technologies: ["Python", "API"],
    github: "https://github.com/guillaumegay13/flex-python-sdk",
    demo: "https://www.dalet.com/products/flex/",
  },
  {
    title: t.projects.flexexecutor.title,
    description: t.projects.flexexecutor.description,
    technologies: ["Python", "API"],
    github: "https://github.com/guillaumegay13/flex-remote-executor",
    demo: "https://www.dalet.com/products/flex/",
  },
  {
    title: t.projects.anonymization.title,
    description: t.projects.anonymization.description,
    technologies: ["Python", "Data", "NLP", "API", language === 'fr' ? "RGPD" : "GDPR"],
    github: null,
    demo: "https://drive.google.com/file/d/1YTY1ke9ya6hJpDpdMWipR0pnvPVZ9XjX/view?usp=share_link"
  },
  {
    title: t.projects.medical_assistant.title,
    description: t.projects.medical_assistant.description,
    technologies: ["Python", "React", "Typescript", "Whisper", "AI"],
    github: "https://github.com/guillaumegay13/medical-consultation-assistant",
    demo: null
  },
  {
    title: t.projects.findconcierge.title,
    description: t.projects.findconcierge.description,
    technologies: ["Nextjs", "MongoDB", "Typescript", "TailwindCSS"],
    github: "https://github.com/guillaumegay13/find-concierge",
    demo: t.projects.findconcierge.demo
  }
];

const getPartners = () => [
  {
    name: "Dalet",
    logo: "/images/partners/dalet-logo.webp",
    link: "https://www.dalet.com"
  },
  {
    name: "International Olympic Committee",
    logo: "/images/partners/ioc-logo.webp",
    link: "https://olympics.com"
  },
  {
    name: "Radio France",
    logo: "/images/partners/radiofrance-logo.png",
    link: "https://www.radiofrance.fr"
  }
];

const blogPosts: BlogPost[] = [];
