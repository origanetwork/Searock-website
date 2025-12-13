import Image from 'next/image';
import { fetchBlogs } from '@/lib/cms';
import type { BlogPost } from '@/lib/cms';

export const metadata = {
  title: 'Tile Design & Installation Tips • Searock Tile Gallery Blogs',
  description:
    'Explore expert tile installation guides, design inspiration, and product care tips from Searock Tile Gallery — Kerala’s trusted destination for premium tiles, sanitaryware, and bathware.',
  keywords: [
    'tile shop Kerala',
    'tile installation guide',
    'bathroom tile ideas',
    'floor tiles trends',
    'wall tiles design',
    'porcelain tiles vs natural stone',
    'grout maintenance tips',
    'Searock Tile Gallery blogs',
    'modern tile designs India',
    'kitchen flooring tiles'
  ],
  openGraph: {
    title: 'Searock Tile Gallery Blogs — Tile Design & Installation Ideas',
    description:
      'Discover the latest tile design trends, installation tutorials, and care tips from Searock Tile Gallery, Kerala’s leading tile and bathware showroom.',
    url: 'https://www.searocktilegallery.com/blogs',
    siteName: 'Searock Tile Gallery',
    images: [
      {
        url: '/images/og/blogs-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Searock Tile Gallery Blogs - Tile Design & Installation Tips',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Searock Tile Gallery Blogs — Expert Tile Design & Installation Tips',
    description:
      'Your go-to source for tile trends, installation guides, and maintenance insights from Kerala’s Searock Tile Gallery.',
    images: ['/images/og/blogs-banner.jpg'],
  },
  alternates: {
    canonical: 'https://www.searocktilegallery.com/blogs',
  },
};

 

async function loadCMSBlogs(): Promise<BlogPost[] | null> {
  try {
    const posts = await fetchBlogs();
    return posts;
  } catch {
    return null;
  }
}
 


const BlogCard = ({ post }: { post: BlogPost }) => (
  <article className="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
    <div className="relative w-full h-56 md:h-64 lg:h-72">
      <Image
        src={post.image || '/images/blogs/1.jpg'}
        alt={post.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        priority={false}
      />
    </div>

    <div className="p-4 md:p-5">
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2 py-0.5">{post.category}</span>
        <span>{post.readTime}</span>
      </div>

      <h3 className="mt-3 text-lg md:text-xl font-semibold text-gray-900">{post.title}</h3>
      <p className="mt-2 text-sm text-gray-700 leading-relaxed">{post.summary}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
        <a href={`#blog-${post.id}`} className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
          Read More <span aria-hidden>→</span>
        </a>
        <span>{post.date}</span>
      </div>
    </div>
  </article>
);

export default async function BlogsPage() {
  const cmsPosts = await loadCMSBlogs();
  const combined = cmsPosts ?? [];
  const seen = new Set<string>();
  const source = combined.filter((post) => {
    const key = post.id;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const first = source.slice(0, 4);
  const rest = source.slice(4);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-screen-sm px-6 py-10 md:py-16">
          <h1 className="text-center font-['Amsi_Pro_Condensed_700'] text-4xl md:text-5xl lg:text-6xl">Blogs</h1>
          <p className="mt-4 text-center text-sm md:text-base lg:text-lg leading-6 opacity-95 max-w-lg mx-auto">
            Insights, tips, and inspiration for your projects
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {first.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Peer toggle for more blogs */}
          {rest.length > 0 && (
            <>
              <input id="show-more-blogs" type="checkbox" className="peer sr-only" />
              <div className="mt-8 flex justify-center peer-checked:hidden">
                <label htmlFor="show-more-blogs" className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white text-sm font-medium hover:bg-[#382b60]">
                  Read More Blogs →
                </label>
              </div>

              <div className="mt-10 hidden peer-checked:block">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {rest.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <label htmlFor="show-more-blogs" className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-6 bg-primary py-3 text-white text-sm font-medium">
                    Show Less
                  </label>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Blog Modals */}
      {source.map((post) => (
        <div
          key={post.id}
          id={`blog-${post.id}`}
          className="modal fixed inset-0 z-[70] items-start md:items-center justify-center p-4"
          aria-hidden="true"
        >
          <a href="#" className="absolute inset-0 bg-black/60 z-0" aria-label="Close"></a>
          <div className="relative z-10 w-full max-w-4xl bg-white rounded-br-[2rem] shadow-2xl overflow-hidden max-h-[90vh] mt-6 md:mt-0">
            <a
              href="#"
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/70 text-white hover:bg-black"
              aria-label="Close"
            >
              ✕
            </a>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-60 md:h-full">
                <Image
                  src={post.image || '/images/blogs/1.jpg'}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh]">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center rounded-full bg-violet-100 text-violet-700 px-2 py-0.5">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-primary">{post.title}</h3>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">{post.summary}</p>
                <div className="mt-4 space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  {post.content.map((para: string, i: number) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className="mt-4 text-xs text-gray-500">{post.date}</div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
