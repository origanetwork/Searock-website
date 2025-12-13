import { fetchStory, fetchStoriesByPrefix } from '@/lib/storyblok';

export type BlogPost = {
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

export async function fetchBlogs(): Promise<BlogPost[]> {
  if (!process.env.STORYBLOK_TOKEN) return [];

  const [container, storiesA, storiesB] = await Promise.all([
    fetchStory('blogs').catch(() => null),
    fetchStoriesByPrefix('blog', { per_page: 20, sort_by: 'first_published_at:desc' }).catch(() => []),
    fetchStoriesByPrefix('blogs', { per_page: 20, sort_by: 'first_published_at:desc' }).catch(() => []),
  ]);

  const postsFromContainer: BlogPost[] = Array.isArray((container as any)?.content?.blog)
    ? ((container as any)!.content.blog as any[]).map((item: any, idx: number) => ({
        id: String(item.id || item._uid || `blogs-${idx}`),
        title: item.title || '',
        summary: item.summary || '',
        category: item.category || '',
        readTime: item.read_time || '',
        author: item.author || '',
        date: String(item.date || '').slice(0, 10),
        image: item.image?.filename || '/images/blogs/1.jpg',
        content: item.content ? [String(item.content)] : [],
      }))
    : [];

  const mapChild = (s: any): BlogPost => ({
    id: (s.slug || '').split('/').pop() || s.uuid,
    title: s.content?.title || s.name || '',
    summary: s.content?.summary || '',
    category: s.content?.category || '',
    readTime: s.content?.read_time || '',
    author: s.content?.author || '',
    date: (s.first_published_at || s.published_at || s.created_at || '').slice(0, 10),
    image: s.content?.image?.filename || '/images/blogs/1.jpg',
    content: Array.isArray(s.content?.body)
      ? s.content.body.map((b: any) => b?.text || b?.content || '').filter(Boolean)
      : [],
  });

  const postsFromChildren: BlogPost[] = [...(storiesA as any[]), ...(storiesB as any[])]
    .filter((s: any) => s?.content?.component === 'blog')
    .map(mapChild);

  return [...postsFromContainer, ...postsFromChildren];
}

export type GalleryItem = { src: string; alt: string };

export async function fetchGalleryImages(): Promise<GalleryItem[]> {
  if (!process.env.STORYBLOK_TOKEN) return [];

  const [container, stories] = await Promise.all([
    fetchStory('gallery').catch(() => null),
    fetchStoriesByPrefix('gallery', { per_page: 50, sort_by: 'first_published_at:desc' }).catch(() => []),
  ]);

  const fromContainer: GalleryItem[] = Array.isArray((container as any)?.content?.image)
    ? ((container as any)!.content.image as any[])
        .map((item: any) => {
          const src = item?.image?.filename;
          if (!src) return null;
          const alt = item?.image?.alt || 'Gallery image';
          return { src, alt } as GalleryItem;
        })
        .filter(Boolean) as GalleryItem[]
    : [];

  const fromChildren: GalleryItem[] = (stories as any[])
    .map((s: any) => {
      const img = s.content?.image?.filename || s.content?.asset?.filename;
      if (!img) return null;
      return { src: img, alt: s.content?.alt || s.name || 'Gallery image' } as GalleryItem;
    })
    .filter(Boolean) as GalleryItem[];

  return [...fromContainer, ...fromChildren];
}

export async function fetchHeroBackground(): Promise<string | null> {
  if (!process.env.STORYBLOK_TOKEN) return null;
  try {
    const story: any = await fetchStory('home').catch(() => null);
    const c: any = story?.content;
    const img = c?.image?.filename || c?.hero_image?.filename || null;
    if (img) return img;
  } catch {}
  try {
    const fallback: any = await fetchStory('heros').catch(() => null);
    const cc: any = fallback?.content;
    const img = cc?.image?.filename || cc?.hero_image?.filename || null;
    if (img) return img;
  } catch {}
  return null;
}

export type TestimonialItem = { id: number; name: string; avatar: string; text: string };

export async function fetchTestimonials(): Promise<TestimonialItem[]> {
  if (!process.env.STORYBLOK_TOKEN) return [];

  // Primary source: container story 'testimonials' with a field `testimonial` (array)
  const container: any = await fetchStory('testimonials').catch(() => null);
  const fromContainer: TestimonialItem[] = Array.isArray(container?.content?.testimonial)
    ? (container.content.testimonial as any[])
        .map((item: any, idx: number) => {
          const name = item?.username || '';
          const text = item?.content || '';
          const avatar = item?.image?.filename || '';
          if (!name && !text && !avatar) return null;
          return {
            id: idx + 1,
            name,
            text,
            avatar,
          } as TestimonialItem;
        })
        .filter(Boolean) as TestimonialItem[]
    : [];

  // Optional: also include any child stories that use a `testimonial` component
  const children: any[] = await fetchStoriesByPrefix('testimonials').catch(() => []);
  const fromChildren: TestimonialItem[] = (children || [])
    .filter((s: any) => s?.content?.component === 'testimonial')
    .map((s: any, idx: number) => ({
      id: (fromContainer.length || 0) + idx + 1,
      name: s?.content?.username || s?.name || '',
      text: s?.content?.content || '',
      avatar: s?.content?.image?.filename || '',
    }));

  const all = [...fromContainer, ...fromChildren];
  return all.filter((t) => !!(t.name || t.text || t.avatar));
}
