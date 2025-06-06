# Blog System Guide

This portfolio includes a powerful, markdown-based blog system with **multilingual support** that allows you to write and publish blog posts in both English and French seamlessly.

## Quick Start

### Creating a New Blog Post

The easiest way to create a new blog post is using the built-in script:

```bash
# English post (default)
npm run new-post -- "Your Amazing Blog Post Title"

# French post
npm run new-post -- "Votre Titre d'Article Incroyable" --lang fr
```

This will:
- Create a new markdown file in `content/blog/`
- Generate a URL-friendly filename (slug)
- Add the correct frontmatter template
- Set the post as unpublished by default

### Writing Your Post

1. Open the generated `.md` file in your favorite editor
2. Update the frontmatter:
   - `title`: Your post title
   - `excerpt`: A brief description for the homepage
   - `date`: Publication date (YYYY-MM-DD format)
   - `published`: Set to `true` when ready to publish

3. Write your content using Markdown below the frontmatter

### Publishing

To publish your post, simply set `published: true` in the frontmatter. The post will automatically appear on your portfolio homepage.

## Frontmatter Reference

```yaml
---
title: "Your Post Title"
excerpt: "A brief description that appears on the homepage"
date: "2024-01-15"
published: true  # Set to false to keep as draft
---
```

## Markdown Features

Your blog posts support full Markdown syntax:

### Text Formatting
- **Bold text**
- *Italic text*
- `Inline code`
- [Links](https://example.com)

### Code Blocks
```javascript
function example() {
  console.log("Hello, world!");
}
```

### Lists
- Unordered lists
- Work great for
- Organizing information

1. Numbered lists
2. Are also supported
3. And auto-increment

### Headers
Use `#`, `##`, `###` etc. for different heading levels.

## File Structure

```
content/
└── blog/
    ├── en/                     # English posts
    │   ├── my-first-post.md
    │   └── another-post.md
    └── fr/                     # French posts
        ├── mon-premier-article.md
        └── autre-article.md
```

## URL Structure

Blog posts are available at:
- Homepage section: `/#thoughts`
- Individual post: `/blog/post-slug`

The slug is automatically generated from the filename.

## Multilingual Support

The blog system automatically serves content based on the user's language preference:

### Language Organization
- **English posts**: Stored in `content/blog/en/`
- **French posts**: Stored in `content/blog/fr/`
- **Automatic switching**: Content changes when users switch languages on the site
- **Fallback behavior**: If a post doesn't exist in the selected language, it gracefully handles the missing content

### Creating Multilingual Content
1. **Same topic, different languages**: Use similar filenames for related posts
   ```
   content/blog/en/my-ai-journey.md
   content/blog/fr/mon-parcours-ia.md
   ```

2. **Independent content**: Each language can have unique posts
   ```
   content/blog/en/english-only-post.md
   content/blog/fr/article-francais-seulement.md
   ```

### Translation Workflow
1. Write your post in your preferred language
2. Create the translated version in the other language directory
3. Both posts will be available and switch automatically based on user language preference

## Advanced Features

### Draft Posts
Set `published: false` to keep posts as drafts. They won't appear on the live site but will be included in the build for preview.

### Custom Dates
You can backdate or future-date posts by changing the `date` field in the frontmatter.

### Rich Content
The blog system supports HTML within Markdown, so you can add custom styling or embed content when needed.

## Development Workflow

1. **Create**: `npm run new-post -- "Post Title"` or `npm run new-post -- "Titre" --lang fr`
2. **Write**: Edit the generated `.md` file
3. **Preview**: Run `npm run dev` and visit your local site
4. **Publish**: Set `published: true`
5. **Deploy**: Your usual deployment process

## Technical Details

- **Multilingual Architecture**: Language-specific API endpoints and file organization
- **Static Generation**: Posts are statically generated at build time for optimal performance
- **Markdown Processing**: Content processed with `remark` and `remark-html`
- **Frontmatter Parsing**: Metadata parsed with `gray-matter`
- **Dynamic Language Switching**: Content switches automatically based on user language preference
- **API Integration**: RESTful API endpoints for both individual posts and post lists
- **Client-Side Rendering**: Blog pages use React hooks for dynamic language content
- **Typography**: Beautiful styling with Tailwind Typography classes
- **SEO-Friendly**: Clean URLs and proper meta tags for search engines
- **Next.js 15+ Compatible**: Proper handling of async params and modern Next.js patterns

## Troubleshooting

### Post not appearing?
- Check that `published: true` in frontmatter
- Verify the date format is YYYY-MM-DD
- Ensure the file is in `content/blog/` directory

### Styling issues?
- Make sure you're using standard Markdown syntax
- Check that the frontmatter is properly formatted with `---`

### Build errors?
- Verify all frontmatter fields are present
- Check for syntax errors in your Markdown

## Need Help?

The blog system is designed to be simple and reliable. For any issues:
1. Check this guide
2. Verify your Markdown syntax
3. Ensure frontmatter is correctly formatted

Happy blogging! 🚀 