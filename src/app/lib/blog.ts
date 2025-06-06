import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const getPostsDirectory = (language: string = 'en') =>
    path.join(process.cwd(), 'content/blog', language);

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    link: string;
    content?: string;
    published?: boolean;
}

export interface BlogPostMetadata {
    title: string;
    excerpt: string;
    date: string;
    published?: boolean;
}

export async function getBlogPosts(language: string = 'en'): Promise<BlogPost[]> {
    const postsDirectory = getPostsDirectory(language);

    // Check if blog directory exists
    if (!fs.existsSync(postsDirectory)) {
        console.warn('Blog directory does not exist:', postsDirectory);
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const posts: BlogPost[] = [];

    for (const fileName of fileNames) {
        if (!fileName.endsWith('.md')) continue;

        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const metadata = data as BlogPostMetadata;

        // Skip unpublished posts
        if (metadata.published === false) continue;

        // Convert markdown to HTML
        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        posts.push({
            slug,
            title: metadata.title,
            excerpt: metadata.excerpt,
            date: metadata.date,
            link: `/blog/${slug}`,
            content: contentHtml,
            published: metadata.published ?? true,
        });
    }

    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string, language: string = 'en'): Promise<BlogPost | null> {
    try {
        const postsDirectory = getPostsDirectory(language);
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const metadata = data as BlogPostMetadata;

        // Convert markdown to HTML
        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return {
            slug,
            title: metadata.title,
            excerpt: metadata.excerpt,
            date: metadata.date,
            link: `/blog/${slug}`,
            content: contentHtml,
            published: metadata.published ?? true,
        };
    } catch (error) {
        console.error('Error reading blog post:', error);
        return null;
    }
} 