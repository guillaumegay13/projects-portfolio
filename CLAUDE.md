# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based portfolio website with a multilingual blog system. The project supports English and French content with automatic language switching.

## Common Development Commands

```bash
# Development
npm run dev               # Start development server on localhost:3000
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Blog Management
npm run new-post -- "Post Title"                    # Create English blog post
npm run new-post -- "Titre d'Article" --lang fr     # Create French blog post
```

## Architecture Overview

### Blog System
- **Content Structure**: Markdown files in `content/blog/{language}/` directories
- **Languages**: English (`en`) and French (`fr`) with automatic switching
- **Processing**: Uses `gray-matter` for frontmatter and `remark`/`remark-html` for Markdown conversion
- **API**: RESTful endpoints at `/api/blog` and `/api/blog/[slug]` with language support
- **Library**: Core blog logic in `src/app/lib/blog.ts`

### Key Components
- **Language System**: `LanguageContext` provides site-wide language state
- **Language Switcher**: `LanguageSwitcher` component for toggling between languages
- **Translations**: Centralized in `src/app/i18n/translations.ts`

### File Organization
```
src/app/
├── api/blog/          # Blog API endpoints
├── blog/[slug]/       # Dynamic blog post pages
├── components/        # Reusable components
├── contexts/          # React contexts (language)
├── i18n/             # Translation files
└── lib/              # Utility functions (blog processing)

content/blog/
├── en/               # English blog posts
└── fr/               # French blog posts

scripts/
└── new-blog-post.js  # Blog post creation script
```

### Blog Post Format
Blog posts use frontmatter with these required fields:
```yaml
---
title: "Post Title"
excerpt: "Brief description"
date: "YYYY-MM-DD"
published: true/false
---
```

### Multilingual Workflow
1. Content is organized by language in separate directories
2. API endpoints accept language parameters for content retrieval
3. Language context automatically switches content based on user preference
4. Both languages can have independent or translated content

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with Typography plugin
- **Content**: Markdown processing with remark
- **Languages**: TypeScript
- **Deployment**: Vercel (configured via vercel.json)