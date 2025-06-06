#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function createBlogPost() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Usage: node scripts/new-blog-post.js "Your Blog Post Title" [--lang language]');
        console.log('Example: node scripts/new-blog-post.js "My Awesome New Post" --lang en');
        console.log('Example: node scripts/new-blog-post.js "Mon Article Génial" --lang fr');
        console.log('Default language: en');
        process.exit(1);
    }

    // Parse language flag
    let language = 'en';
    let titleArgs = args;

    const langIndex = args.indexOf('--lang');
    if (langIndex !== -1 && langIndex + 1 < args.length) {
        language = args[langIndex + 1];
        titleArgs = args.slice(0, langIndex);
    }

    if (!['en', 'fr'].includes(language)) {
        console.error('❌ Error: Supported languages are "en" and "fr"');
        process.exit(1);
    }

    const title = titleArgs.join(' ');
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

    const today = new Date().toISOString().split('T')[0];

    const template = `---
title: "${title}"
excerpt: "Add a brief description of your blog post here"
date: "${today}"
published: false
---

# ${title}

Write your blog post content here using Markdown.

## Example Section

You can use:
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- \`code\`

### Code blocks

\`\`\`javascript
function example() {
  console.log("Hello, world!");
}
\`\`\`

Remember to:
1. Update the excerpt in the frontmatter
2. Set \`published: true\` when ready to publish
3. Write engaging content!
`;

    const blogDir = path.join(process.cwd(), 'content', 'blog', language);

    // Create blog directory if it doesn't exist
    if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
    }

    const filename = `${slug}.md`;
    const filepath = path.join(blogDir, filename);

    if (fs.existsSync(filepath)) {
        console.error(`❌ Error: Blog post "${filename}" already exists in ${language}!`);
        process.exit(1);
    }

    fs.writeFileSync(filepath, template);

    console.log(`✅ Created new blog post: ${filepath}`);
    console.log(`🌐 Language: ${language}`);
    console.log(`📝 Edit the file and set 'published: true' when ready to publish.`);
}

createBlogPost(); 