import { Translation } from './translation.interface';

export const translations: Record<string, Translation> = {
  en: {
    hero: {
      title: "guillaume gay.",
      subtitle: "software engineer, driven by curiosity and continuous improvement.",
      passion: "passionate about technology, media, real estate, sports.",
      help: "i help businesses transform digitally, integrate AI solutions, and build robust product experiences.",
      explore: ["explore my projects,", "read my thoughts", ", or", "let's connect", "."],
      connect: "connect",
      thoughts: "read my thoughts",
    },
    sections: {
      contact: "contact",
      projects: "projects",
      thoughts: "blog",
      readMore: "read more →",
      viewSource: "View Source →",
      visitProject: "Visit Project →",
      noBlogPosts: "no blog posts available yet",
      partners: "partners",
    },
    projects: {
      mytrainer: {
        title: "MyTrainer",
        description: "A fitness personal trainer mobile app using generative AI."
      },
      flexsdk: {
        title: "Flex Python SDK",
        description: "Dalet Flex is a powerful media asset management system. I built a Python SDK to allow users to manage their assets and operations programmatically."
      },
      flexexecutor: {
        title: "Flex Remote Executor",
        description: "Dalet Flex is a powerful media asset management system. I built a command line tool to allow users to manage their assets and operations remotely."
      },
      anonymization: {
        title: "Anonymization NLP Model",
        description: "Trained an NLP model and developped an API for text anonymization, capable of identifying and masking sensitive information in specific conversations for GDPR compliance."
      },
      findconcierge: {
        title: "AirConcierge",
        description: "A platform to find and book concierge services, simplifying property management for owners and travelers.",
        demo: "https://airconcierge.io/"
      },
      generation_ia: {
        title: "Génération IA",
        description: "Génération IA is a french podcast covering Generative AI : news, tools, trends."
      },
      bullets: {
        title: "Bullets",
        description: "A mobile app that converts conversations into bullet points."
      }
    },
    partners: {
      dalet: {
        title: "Dalet",
        description: "Dalet is a powerful media asset management system."
      }
    }
  },
  fr: {
    hero: {
      title: "guillaume gay.",
      subtitle: "ingénieur logiciel, guidé par la curiosité et l'amélioration continue.",
      passion: "passionné par la technologie, les médias, l'immobilier, le sport.",
      help: "j'aide les entreprises dans leur transformation digitale, à intégrer des solutions d'IA et à créer des expériences produit robustes.",
      explore: ["explorez mes projets,", "lisez mes réflexions", ", ou", "contactez-moi :)", "."],
      connect: "connect",
      thoughts: "lire mes articles",
    },
    sections: {
      contact: "contact",
      projects: "projets",
      thoughts: "blog",
      readMore: "lire plus →",
      viewSource: "Voir le Code →",
      visitProject: "Voir le Projet →",
      noBlogPosts: "aucun article de blog disponible pour le moment",
      partners: "partenaires",
    },
    projects: {
      mytrainer: {
        title: "MyTrainer",
        description: "Une application mobile de coaching sportif personnalisé utilisant l'IA générative."
      },
      flexsdk: {
        title: "Flex Python SDK",
        description: "Dalet Flex est un puissant système de gestion de médias. J'ai développé un SDK Python permettant aux utilisateurs de gérer leurs ressources et opérations de manière programmatique."
      },
      flexexecutor: {
        title: "Flex Remote Executor",
        description: "Dalet Flex est un puissant système de gestion de médias. J'ai développé un outil en ligne de commande permettant aux utilisateurs de gérer leurs ressources et opérations à distance."
      },
      anonymization: {
        title: "Modèle NLP d'Anonymisation",
        description: "Entraînement d'un modèle NLP et développement d'une API pour l'anonymisation de texte, capable d'identifier et de masquer les informations sensibles dans des conversations spécifiques pour la conformité RGPD."
      },
      findconcierge: {
        title: "AirConcierge",
        description: "Une plateforme pour trouver et réserver des services de conciergerie, simplifiant la gestion immobilière pour les propriétaires et les voyageurs.",
        demo: "https://airconcierge.io/"
      },
      generation_ia: {
        title: "Génération IA",
        description: "Génération IA est un podcast couvrant l'IA générative : actualité, outils, tendances."
      },
      bullets: {
        title: "bullets.",
        description: "Une application mobile qui convertit les conversations en listes de points."
      }
    },
    partners: {
      dalet: {
        title: "Dalet",
        description: "Dalet is a powerful media asset management system."
      }
    }
  }
};