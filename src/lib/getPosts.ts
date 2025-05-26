import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export type PostMeta = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
};

export type Post = PostMeta & {
  content: string;
};

// ✅ Sincrónico: devuelve todos los posts sin contenido
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

// ✅ Asíncrono: obtiene un solo post completo, con manejo limpio de errores
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      ...(data as Omit<Post, 'content'>),
      content,
    };
  } catch {
    console.error(`Post not found: ${slug}`);
    return null;
  }
}
