import { getPostBySlug } from '@/lib/getPosts';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

type Props = { params: { slug: string } };

export default async function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-6">{post.date}</p>
      <article className="prose prose-blue" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}