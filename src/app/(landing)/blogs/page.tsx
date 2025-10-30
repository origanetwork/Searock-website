import Image from 'next/image';

export const metadata = {
  title: 'Blogs • Searock',
  description: 'Insights, tips, and inspiration for your projects.'
};

type BlogPost = {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  content: string[];
};

const blogPosts: BlogPost[] = [
  {
    id: 'tile-installation-guide',
    title: 'The Ultimate Guide to Tile Installation',
    summary: 'Everything you need to know for a perfect tile finish — from prep to polish.',
    category: 'Installation',
    readTime: '8 min read',
    author: 'Mike Chen',
    date: '3/10/2024',
    image: '/images/blogs/1.jpg',
    content: [
      'Learn tools, adhesives, and subfloor prep to avoid lippage and hollow spots.',
      'We cover layout planning, cutting methods, and grouting for a durable finish.'
    ],
  },
  {
    id: 'choose-right-tiles',
    title: 'Choosing the Right Tiles for Your Space',
    summary: 'Find the perfect blend of style, durability, and function for every room.',
    category: 'Installation',
    readTime: '8 min read',
    author: 'Mike Chen',
    date: '3/10/2024',
    image: '/images/blogs/2.jpg',
    content: [
      'Compare porcelain, ceramic, and stone for different rooms and traffic levels.',
      'Balance slip resistance, water absorption, and style to get the look you want.'
    ],
  },
  {
    id: 'trends-modern-interiors',
    title: 'Designing a Spa-like Bathroom at Home',
    summary: 'Discover the latest designs transforming homes and commercial spaces.',
    category: 'Design',
    readTime: '7 min read',
    author: 'Mike Chen',
    date: '3/10/2024',
    image: '/images/products/bath.jpg',
    content: [
      'Explore large-format slabs, textured finishes, and warm neutral palettes.',
      'See how statement patterns elevate kitchens, baths, and living spaces.'
    ],
  },
  {
    id: 'bathroom-styles',
    title: 'Tile Trends That Elevate Modern Interiors',
    summary: 'Create a serene retreat with materials and finishes that last.',
    category: 'Design',
    readTime: '6 min read',
    author: 'Mike Chen',
    date: '3/10/2024',
    image: '/images/blogs/4.webp',
    content: [
      'Layer natural stone, warm woods, and matte fittings to create a calm retreat.',
      'Ventilation, lighting, and slip-resistant surfaces complete the spa feel.'
    ],
  },
  {
    id: 'grout-care',
    title: 'Grout Care Essentials',
    summary: 'Keep your tiles looking new with simple maintenance routines.',
    category: 'Care',
    readTime: '5 min read',
    author: 'Mike Chen',
    date: '3/10/2024',
    image: '/images/blogs/5.jpg',
    content: [
      'Pick the right grout type and sealing schedule to resist stains.',
      'Simple weekly routines keep joints clean and hygienic.'
    ],
  },
  {
    id: 'stone-vs-porcelain',
    title: 'Natural Stone vs. Porcelain: What to Choose?',
    summary: 'Understand pros and cons to pick the right surface for your project.',
    category: 'Guide',
    readTime: '9 min read',
    author: 'Mike Chen',
    date: '3/10/2024',
    image: '/images/blogs/6.jpg',
    content: [
      'Understand porosity, maintenance, and cost over time.',
      'A decision matrix helps match material to budget and performance.'
    ],
  },
  {
    id: 'kitchen-flooring',
    title: 'Kitchen Flooring That Works Hard',
    summary: 'Durable, beautiful choices that stand up to heavy use.',
    category: 'Guide',
    readTime: '6 min read',
    author: 'Mike Chen',
    date: '3/10/2024',
    image: '/images/blogs/8.avif',
    content: [
      'Shortlist materials that handle spills, heat, and heavy footfall.',
      'Installation tips extend lifespan and make cleaning easier.'
    ],
  },
  {
    id: 'bathware-upgrades',
    title: 'Essential Bathware Upgrades for Comfort',
    summary: 'Enhance daily routines with fixtures that combine form and function.',
    category: 'Bathware',
    readTime: '6 min read',
    author: 'Mike Chen',
    date: '3/10/2024',
    image: '/images/blogs/7.jpeg',
    content: [
      'Upgrade faucets, showers, and sanitaryware for efficiency and comfort.',
      'Smart storage and accessories make everyday tasks effortless.'
    ],
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => (
  <article className="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
    <div className="relative w-full h-56 md:h-64 lg:h-72">
      <Image
        src={post.image}
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

export default function BlogsPage() {
  const first = blogPosts.slice(0, 4);
  const rest = blogPosts.slice(4);

  return (
    <main className="flex flex-col min-h-screen bg-[url('/images/home/heroAboutbg.webp')] bg-cover bg-center bg-no-repeat">
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

          {/* Peer toggle for more blogs (no JS) */}
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
        </div>
      </section>

      {/* Blog Modals for Read More */}
      {blogPosts.map((post) => (
        <div
          key={post.id}
          id={`blog-${post.id}`}
          className="modal fixed inset-0 z-[70] hidden flex items-start md:items-center justify-center p-4"
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
                  src={post.image}
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
                  {post.content.map((para, i) => (
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
