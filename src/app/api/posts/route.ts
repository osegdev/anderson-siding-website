import { getAllPosts } from '@/lib/getPosts';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json([], { status: 500 });
  }
}
