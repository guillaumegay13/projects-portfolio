import { getBlogPost } from '../../../lib/blog';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { searchParams } = new URL(request.url);
        const language = searchParams.get('language') || 'en';

        // Await the params Promise in Next.js 15+
        const { slug } = await params;
        const post = await getBlogPost(slug, language);

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
} 