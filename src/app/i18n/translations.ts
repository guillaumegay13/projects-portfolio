import { Translation } from './translation.interface';

export const translations: Record<string, Translation> = {
  en: {
    hero: {
      title: "guillaume gay.",
      subtitle: "software engineer building AI-powered tools and products.",
      passion: "passionate about AI agents, developer tools, open source, and entrepreneurship.",
      help: "i build products, contribute to open source, and help businesses integrate AI into their workflows.",
      explore: ["explore my projects,", "read my thoughts", ", or", "let's connect", "."],
      connect: "connect",
      thoughts: "read my thoughts",
    },
    sections: {
      contact: "contact",
      projects: "projects",
      contributions: "contributions",
      thoughts: "blog",
      readMore: "read more →",
      viewSource: "View Source →",
      visitProject: "Visit Project →",
      noBlogPosts: "no blog posts available yet",
      partners: "partners",
      githubActivity: "activity",
    },
    projects: {
      mytrainer: {
        title: "MyTrainer",
        description: "A fitness personal trainer mobile app using generative AI."
      },
      fieldflow: {
        title: "FieldFlow",
        description: "Turns any REST API into a GraphQL-like MCP server so agents fetch only the fields they need.",
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
      },
      pickle: {
        title: "Pickle",
        description: "Pregnancy Food Scanner app using GPT-4 API to analyze meals and menus for pregnancy safety."
      },
      n8n_agentic: {
        title: "n8n-agentic",
        description: "Build n8n workflows with AI. An open source tool that lets you describe automations in natural language and generates n8n workflows."
      },
      send_again: {
        title: "send-again",
        description: "Open source alternative to Resend, built on Amazon SES. Simple email sending API with developer-friendly interface."
      },
      geotracker: {
        title: "GEOTracker",
        description: "Open source Generative Engine Optimization (GEO) tool. Track and improve your visibility across AI-powered search engines."
      },
      youtube_to_viral_clips: {
        title: "youtube-to-viral-clips",
        description: "AI-powered tool that extracts the most viral-worthy clips from YouTube videos automatically."
      },
      noiseless_report: {
        title: "The Noiseless AI Report",
        description: "A weekly high-signal AI newsletter delivering one concise report on what actually matters in AI."
      }
    },
    contributions: {
      claude_code_telegram: {
        title: "claude-code-telegram",
        description: "A Telegram bot that gives you remote access to Claude Code from your phone, enabling AI-assisted coding on the go."
      },
      datagouv_mcp: {
        title: "datagouv-mcp",
        description: "Official data.gouv.fr MCP server that allows AI chatbots to search, explore, and analyze datasets from the French national Open Data platform."
      },
      manifest: {
        title: "manifest",
        description: "Open source OpenClaw plugin for smart LLM routing, real-time cost tracking, and privacy-first observability across agent workflows."
      },
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
      subtitle: "ingénieur logiciel qui construit des outils et produits propulsés par l'IA.",
      passion: "passionné par les agents IA, les outils pour développeurs, l'open source et l'entrepreneuriat.",
      help: "je crée des produits, contribue à l'open source et aide les entreprises à intégrer l'IA dans leurs workflows.",
      explore: ["explorez mes projets,", "lisez mes réflexions", ", ou", "contactez-moi :)", "."],
      connect: "connect",
      thoughts: "lire mes articles",
    },
    sections: {
      contact: "contact",
      projects: "projets",
      contributions: "contributions",
      thoughts: "blog",
      readMore: "lire plus →",
      viewSource: "Voir le Code →",
      visitProject: "Voir le Projet →",
      noBlogPosts: "aucun article de blog disponible pour le moment",
      partners: "partenaires",
      githubActivity: "activité",
    },
    projects: {
      mytrainer: {
        title: "MyTrainer",
        description: "Une application mobile de coaching sportif personnalisé utilisant l'IA générative."
      },
      fieldflow: {
        title: "FieldFlow",
        description: "Transforme n'importe quelle API REST en serveur MCP GraphQL-like, pour que les agents ne récupèrent que le nécessaire.",
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
      },
      pickle: {
        title: "Pickle",
        description: "Application de scan alimentaire pour femmes enceintes utilisant l'API GPT-4 pour analyser les repas et menus pour la sécurité pendant la grossesse."
      },
      n8n_agentic: {
        title: "n8n-agentic",
        description: "Construisez des workflows n8n avec l'IA. Un outil open source qui permet de décrire des automatisations en langage naturel et génère des workflows n8n."
      },
      send_again: {
        title: "send-again",
        description: "Alternative open source à Resend, construite sur Amazon SES. API d'envoi d'emails simple avec une interface pensée pour les développeurs."
      },
      geotracker: {
        title: "GEOTracker",
        description: "Outil open source de Generative Engine Optimization (GEO). Suivez et améliorez votre visibilité sur les moteurs de recherche propulsés par l'IA."
      },
      youtube_to_viral_clips: {
        title: "youtube-to-viral-clips",
        description: "Outil propulsé par l'IA qui extrait automatiquement les clips les plus viraux des vidéos YouTube."
      },
      noiseless_report: {
        title: "The Noiseless AI Report",
        description: "Une newsletter IA hebdomadaire qui livre un rapport concis et pertinent sur ce qui compte vraiment en IA."
      }
    },
    contributions: {
      claude_code_telegram: {
        title: "claude-code-telegram",
        description: "Un bot Telegram qui donne un accès distant à Claude Code depuis votre téléphone, pour coder avec l'IA en déplacement."
      },
      datagouv_mcp: {
        title: "datagouv-mcp",
        description: "Serveur MCP officiel de data.gouv.fr permettant aux chatbots IA de rechercher, explorer et analyser les jeux de données de la plateforme nationale d'Open Data."
      },
      manifest: {
        title: "manifest",
        description: "Plugin OpenClaw open source pour le routage intelligent des LLM, le suivi des coûts en temps réel et une observabilité respectueuse de la vie privée pour les workflows d'agents."
      },
    },
    partners: {
      dalet: {
        title: "Dalet",
        description: "Dalet is a powerful media asset management system."
      }
    }
  }
};
