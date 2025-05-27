// src/app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, PostMeta } from '@/lib/getPosts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Our latest articles',
};

export default async function BlogPage() {
  const posts: PostMeta[] = await getAllPosts();

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-12">Blog</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
