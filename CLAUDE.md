# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Guillaume Gay's multilingual portfolio website built with Next.js 15, featuring a sophisticated blog system with English and French content. The site showcases software engineering projects, technical blog posts, and professional experience.

## Common Development Commands

```bash
# Development
npm run dev               # Start development server on localhost:3000
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Blog Management
npm run new-post -- "Post Title"                    # Create English blog post (default)
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
- **Language System**: `LanguageContext` provides site-wide language state with browser detection and localStorage persistence
- **Language Switcher**: `LanguageSwitcher` component for toggling between languages
- **Translations**: Centralized in `src/app/i18n/translations.ts`
- **Portfolio Projects**: Defined in `src/app/components/Projects.tsx` with multilingual support

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
2. API endpoints accept `?language=en` or `?language=fr` parameters
3. Language context automatically switches content based on user preference
4. Both languages can have independent or translated content
5. New posts are created as unpublished by default

## Key API Endpoints
- **GET /api/blog?language={en|fr}** - List all published blog posts
- **GET /api/blog/[slug]?language={en|fr}** - Get individual blog post by slug

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with Typography plugin
- **Content**: Markdown processing with remark
- **Fonts**: Geist font family
- **React**: Version 19 with Server Components
- **Deployment**: Vercel (configured via vercel.json)