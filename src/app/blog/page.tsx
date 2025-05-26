// src/app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/getPosts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post not found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-6">{post.date}</p>
      <article className="prose max-w-none prose-blue">{post.content}</article>
    </main>
  );
}
