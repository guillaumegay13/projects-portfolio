---
title: "De Figma à l'App Mobile : un Nouveau Workflow de Développement"
excerpt: "Découvrez comment j'ai implémenté un design Figma complet pour une application mobile en seulement quelques heures grâce à des outils assistés par IA et un workflow spécifique."
date: "2025-07-04"
published: true
---

J'ai récemment testé un nouveau workflow révolutionnaire qui m'a permis d'implémenter un design Figma complet pour une application mobile **en quelques heures**.

## Les outils que j'ai utilisés

### Claude Code
Le cœur de ce workflow est **Claude Code**, un assistant de programmation propulsé par l'IA. C'est un outil en ligne de commande qui possède également une extension VS Code, permettant de réviser, approuver ou rejeter les changements de code comme avec git diff. L'extension Claude Code transforme VS Code en IDE alimenté par l'IA comme Cursor ou Windsurf.
Claude Code comprend le contexte, peut analyser des codebases entières et génère des implémentations complètes basées sur vos exigences. La puissance de cet outil réside principalement dans ses modèles créés par Anthropic - en particulier Claude 4 Opus qui est pour moi le meilleur pour coder actuellement. Le flux de raisonnement est également impressionnant, car Claude Code divisera les tâches complexes en listes de tâches à faire et traitera chaque point. Il peut également exécuter des commandes de terminal telles que grep, ls, ou même exécuter python, npm, etc., pour analyser les résultats et effectuer récursivement une autre tâche. Enfin, Claude Code peut également se connecter aux serveurs MCP (Model Context Protocol, créé par Anthropic lui-même !).

### Figma MCP
**Figma MCP** est le pont entre le design et le développement. MCP est un protocole qui permet aux modèles d'IA d'interagir avec des outils et services externes. Avec Figma MCP, Claude Code peut accéder directement à vos designs Figma, comprendre les structures des composants, extraire les tokens de design et traduire les éléments visuels en code. Cela élimine le processus manuel d'inspection des designs, de copie des valeurs et de leur traduction en implémentation. Figma MCP inclut des outils comme get_image() pour fournir des designs aux modèles multimodaux de Claude, ou get_code() pour récupérer le code des composants depuis le mode Dev de Figma. Le LLM transformera ensuite les designs et le code vers le langage de programmation cible.

### Perplexity pour des Solutions Instantanées
Lorsque des bugs apparaissaient ou que j'avais besoin d'éclaircissements techniques rapides, **Perplexity** est devenu ma ressource incontournable. C'est simplement un moyen plus rapide d'aller sur Google et d'analyser les 10 premiers résultats de StackOverflow ou des forums GitHub. Perplexity effectue des requêtes de recherche et compile instantanément les résultats les plus pertinents. Il raisonne également, donc il fournit d'excellents résultats.

## Conseils pour le Vibe Coding

### 1. Connaissez votre stack technique **avant** de commencer
- **Définissez clairement votre stack** : React Native ? Flutter ? SwiftUI ? Si vous ne savez pas, brainstormez avec ChatGPT sur les meilleures solutions pour votre cas d'usage et vos contraintes.
- **Utilisez un boilerplate** : Avoir un point de départ préconfiguré avec vos bibliothèques préférées, votre structure de dossiers et vos patterns donne à l'IA un contexte crucial. Si vous partez de zéro, cela deviendra rapidement hors de contrôle. Vous ne maîtriserez pas votre codebase et cela peut créer des problèmes dramatiques plus tard.
- **Fournissez des instructions claires** : Plus vos exigences sont spécifiques, meilleur sera le résultat. Pas besoin de créer d'énormes prompts cependant - assurez-vous simplement de fournir toutes les informations nécessaires. Le LLM ne sait pas ce que vous voulez par défaut.

### 2. Maîtrisez le workflow de revue de code
Claude Code vous permet d'approuver, de rejeter ou de toujours approuver une commande. Par exemple, vous pouvez lui permettre de toujours approuver les commandes 'ls' mais pas les commandes 'rm'. Je conseille de réviser autant que possible les changements de code grâce à l'extension VS Code qui le rend facile - similaire à un git diff. Vous pouvez demander des modifications à Claude Code si vous n'aimez pas le résultat.

Ce workflow vous garde en contrôle tout en avançant à la vitesse de l'éclair.

### 3. Itérez à la vitesse de la pensée
- Faites une requête → Révisez le diff → Testez immédiatement
- Utilisez le hot reloading pour voir les changements instantanément
- Modifiez les instructions si le résultat n'est pas comme prévu

### 4. Le contexte est roi
- Exécutez la commande /init au début pour donner du contexte à Claude - il analysera votre codebase
- Vous pouvez pointer directement des fichiers ou des dossiers au LLM en utilisant la commande '@'. Si vous savez déjà quel fichier modifier, fournissez-le au LLM, cela évitera de consommer des tokens pour le trouver lui-même.
- Plus le contexte **pertinent** que vous fournissez est important, moins le LLM fera d'hypothèses (ce qui est ce que vous voulez, sauf si vous ne savez pas ce que vous voulez)

### 5. Gestion des goulots d'étranglement
Il peut arriver que le LLM ne parvienne pas à répondre correctement à une requête, même après plusieurs tentatives et modifications d'instructions. Dans ce cas, prenez du recul. Réfléchissez. Allez lire un article ou une conversation StackOverflow sur ce composant spécifique. Il est temps d'être proactif un peu. Oui, nous devons **parfois** encore utiliser notre cerveau !