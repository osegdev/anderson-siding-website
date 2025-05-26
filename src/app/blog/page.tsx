import { getAllPosts } from '@/lib/getPosts';
import Link from 'next/link';

// Si tienes acceso a los tipos en getPosts.ts:
type PostMeta = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
};

export default function BlogPage() {
  const posts: PostMeta[] = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold text-blue-800">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-600">{post.date}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
