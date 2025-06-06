import { getBlogPosts } from '../../lib/blog';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const language = searchParams.get('language') || 'en';

        const posts = await getBlogPosts(language);
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return NextResponse.json([], { status: 500 });
    }
} 