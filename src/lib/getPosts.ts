// src/lib/getPosts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

// Tipos revisados: ahora el content es HTML
export type PostMeta = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
};

export type Post = PostMeta & {
  content: string; // HTML generado por remark
};

// Retienes la función síncrona para listar solo la metadata
export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts: PostMeta[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<PostMeta, 'slug'>),
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Aquí hacemos la magia de Markdown → HTML
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Procesa Markdown a HTML
    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();

    return {
      ...(data as Omit<Post, 'content'>),
      content: contentHtml,
    };
  } catch (err) {
    console.error(`Post not found: ${slug}`, err);
    return null;
  }
}
