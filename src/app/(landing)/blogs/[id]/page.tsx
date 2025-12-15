import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchBlogs } from '@/lib/cms';
import type { BlogPost } from '@/lib/cms';

interface PageParams { id: string }

export async function generateStaticParams() {
  try {
    const posts = await fetchBlogs();
    return (posts || []).map((p: BlogPost) => ({ id: String(p.id) }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const { id } = await params;
  const posts = await fetchBlogs();
  const post = (posts || []).find((p) => String(p.id) === String(id));
  if (!post) return {};
  return {
    title: `${post.title} • Searock Tile Gallery Blogs`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.image || '/images/og/blogs-banner.jpg'],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<PageParams> }) {
  const { id } = await params;
  const posts = await fetchBlogs();
  const post = (posts || []).find((p) => String(p.id) === String(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-3xl px-6 py-10 md:py-14">
          <h1 className="text-center font-family-amsi-cond-700 tracking-tight text-4xl md:text-5xl lg:text-6xl">{post.title}</h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="mb-4 flex items-center gap-3 text-xs text-gray-600">
            <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2.5 py-1">{post.category}</span>
            <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2.5 py-1">{post.readTime}</span>
          </div>

          <div className="relative w-full h-64 sm:h-96 md:h-112 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.image || '/images/blogs/1.jpg'}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
              className="object-cover"
              priority={false}
            />
          </div>

          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">{post.summary}</p>

          <div className="mt-8 space-y-5 text-base md:text-lg text-gray-800 leading-relaxed">
            {(post.content || []).map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
