// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { getPostBySlug } from '@/lib/getPosts';
import { notFound } from 'next/navigation';

type SlugParams = { slug: string };

export async function generateMetadata({ params }: { params: Promise<SlugParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: 'Post not found' };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Page({ params }: { params: Promise<SlugParams> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-6">{post.date}</p>
      <article className="prose prose-lg prose-blue mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}
