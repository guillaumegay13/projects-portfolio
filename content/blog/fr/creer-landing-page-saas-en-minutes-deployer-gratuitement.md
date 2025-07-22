---
title: "Créer une landing page SaaS en quelques minutes et la déployer gratuitement"
excerpt: "Mon workflow alimenté par l'IA pour créer et déployer des landing pages d'applications en quelques minutes et gratuitement."
date: "2025-07-22"
published: true
---

Après avoir créé rapidement plusieurs applications à l'aide de l'IA, j'avais besoin de landing pages pour les sites web ainsi que de quelques autres pages comme la politique de confidentialité et les conditions d'utilisation pour les publier sur les app stores. En utilisant les bons outils, je suis maintenant capable de le faire **en quelques minutes et 100% gratuitement**.

## La stack technique et le workflow de développement

ChatGPT → Lovable → GitHub → IDE alimenté par l'IA (Cursor, Claude Code, Windsurf, etc.) → Vercel

### ChatGPT
J'utilise souvent ChatGPT pour réfléchir aux designs et architectures, ainsi que pour peaufiner les prompts. Comme nous utiliserons Lovable aux étapes suivantes, et qu'il y a des crédits gratuits limités, nous ne pouvons pas nous permettre d'itérer beaucoup dans Lovable - **sauf si vous voulez payer pour cela, ce qui est tout à fait acceptable**. Comme mon utilisation personnelle de Lovable est limitée à ces sites web, cela ne vaut pas le coup dans mon cas. J'ai donc besoin d'un excellent prompt qui livrera le design attendu. J'utilise ChatGPT pour créer et peaufiner ce prompt. Un excellent point de départ est d'identifier des landing pages que vous aimez, et de demander à ChatGPT de les décrire. Ensuite, demandez de créer un prompt pour une IA basée sur cette description. Ce sera assez détaillé.

### Lovable
**Lovable** est une start-up suédoise qui vient de lever des fonds sur une valorisation de 200M$. Tout a commencé avec un projet gpt-engineer sur GitHub (https://github.com/AntonOsika/gpt-engineer) qui est rapidement devenu viral. Le développeur a alors décidé d'en faire une entreprise - Lovable. Il utilise l'IA pour créer des applications web - y compris l'intégration de bases de données (il utilise Supabase, qui est un outil incroyable qui héberge des bases de données PostgreSQL et possède un SDK). Lovable est connu comme l'un des meilleurs outils prompt-to-software avec Bolt.new. Je trouve généralement ces outils limités car c'est purement du no-code, mais pour des sites web simples, c'est génial. Il suffit de coller le prompt et de voir le résultat. Affinez. Itérez 2-3 fois. Concentrez-vous sur la structure et le design - ne vous inquiétez pas des textes ou des petits problèmes de padding. Une fois que vous l'aimez, exportez le code vers GitHub.

### IDE alimenté par l'IA
Clonez le dépôt localement et ouvrez-le avec un IDE alimenté par l'IA comme Cursor. Ensuite, vous pouvez vous concentrer sur les détails et apporter les modifications dont vous avez besoin car vous devriez avoir plus de tokens disponibles. Rendez-le parfait, créez éventuellement de nouvelles pages, changez le favicon (c'est celui de Lovable par défaut), et ainsi de suite. Commitez et poussez vos modifications.

### Vercel
Vous êtes prêt à le déployer ! Vercel est une excellente option pour héberger des sites web pour de petits projets et très facilement. Connectez-vous à Vercel (vous pouvez même utiliser l'authentification GitHub !), importez votre projet GitHub (il détectera le langage) et cliquez sur Deploy. N'oubliez pas d'ajouter des variables d'environnement si vous en avez - vous pouvez directement importer le fichier .env. Si le déploiement échoue, copiez l'erreur dans votre IDE IA pour la corriger et poussez vos modifications : il se redéploiera automatiquement. Ensuite, vous êtes prêt ! Vous pouvez également configurer un domaine personnalisé dans Vercel.

## Conclusion
En utilisant ce workflow, vous serez capable de créer une landing page SaaS et éventuellement quelques autres pages en 5 à 10 minutes et de la déployer complètement gratuitement ! Je l'ai utilisé pour ces deux applications :
- https://www.pickleapp.io
- https://www.bulletsapp.io