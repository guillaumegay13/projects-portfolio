'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    link: string;
    content?: string;
    published?: boolean;
}

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { language } = useLanguage();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [slug, setSlug] = useState<string>('');

    // Unwrap params Promise
    useEffect(() => {
        const unwrapParams = async () => {
            const { slug: unwrappedSlug } = await params;
            setSlug(unwrappedSlug);
        };
        unwrapParams();
    }, [params]);

    useEffect(() => {
        if (!slug) return; // Wait for slug to be available

        const fetchPost = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/blog/${slug}?language=${language}`);
                if (response.ok) {
                    const postData = await response.json();
                    setPost(postData);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error('Error fetching blog post:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug, language]);

    if (loading) {
        return (
            <div className="min-h-screen p-8 max-w-3xl mx-auto font-light">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-8"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !post) {
        notFound();
    }

    return (
        <div className="min-h-screen p-8 max-w-3xl mx-auto font-light">
            {/* Navigation */}
            <nav className="mb-8">
                <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                    ← Back to Portfolio
                </Link>
            </nav>

            {/* Article Header */}
            <article>
                <header className="mb-8">
                    <h1 className="text-3xl mb-4">{post.title}</h1>
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </div>
                </header>

                {/* Article Content */}
                <div
                    className="prose prose-gray dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />
            </article>

            {/* Footer Navigation */}
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                <Link
                    href="/#thoughts"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                    ← Back to all thoughts
                </Link>
            </footer>
        </div>
    );
} 