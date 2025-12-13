import { fetchStory, fetchStoriesByPrefix, StoryblokStory } from '@/lib/storyblok';

// shared helpers for safe Storyblok content access
const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;
const getFilename = (v: unknown): string | undefined => (isRecord(v) && typeof v.filename === 'string' ? v.filename : undefined);
const getNestedFilename = (parent: unknown, key: string): string | undefined => {
  if (!isRecord(parent)) return undefined;
  const child = parent[key];
  return getFilename(child);
};

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

  const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null;
  const getFilename = (v: unknown): string | undefined => (isRecord(v) && typeof v.filename === 'string' ? v.filename : undefined);

  const postsFromContainer: BlogPost[] = (() => {
    const content = (container?.content ?? undefined) as Record<string, unknown> | undefined;
    const list = (content?.blog ?? undefined) as unknown;
    if (!Array.isArray(list)) return [];
    return list.map((item, idx): BlogPost => {
      const obj = isRecord(item) ? item : {};
      const id = obj.id ?? obj._uid ?? `blogs-${idx}`;
      const title = typeof obj.title === 'string' ? obj.title : '';
      const summary = typeof obj.summary === 'string' ? obj.summary : '';
      const category = typeof obj.category === 'string' ? obj.category : '';
      const readTime = typeof obj.read_time === 'string' ? obj.read_time : '';
      const author = typeof obj.author === 'string' ? obj.author : '';
      const dateRaw = typeof obj.date === 'string' ? obj.date : '';
      const image = getFilename(isRecord(obj.image) ? obj.image : undefined) || '/images/blogs/1.jpg';
      const contentVal = obj.content;
      const contentArr = typeof contentVal === 'string' ? [contentVal] : [];
      return {
        id: String(id),
        title,
        summary,
        category,
        readTime,
        author,
        date: String(dateRaw).slice(0, 10),
        image,
        content: contentArr,
      };
    });
  })();

  const mapChild = (s: StoryblokStory): BlogPost => {
    const c = (s.content ?? undefined) as Record<string, unknown> | undefined;
    const title = (c && typeof c.title === 'string') ? c.title : s.name || '';
    const summary = (c && typeof c.summary === 'string') ? c.summary : '';
    const category = (c && typeof c.category === 'string') ? c.category : '';
    const readTime = (c && typeof c.read_time === 'string') ? c.read_time : '';
    const author = (c && typeof c.author === 'string') ? c.author : '';
    const date = (s.first_published_at || s.published_at || s.created_at || '').slice(0, 10);
    const image = getNestedFilename(c, 'image') || '/images/blogs/1.jpg';
    const body = (c?.body ?? undefined) as unknown;
    const content: string[] = Array.isArray(body)
      ? (body as unknown[])
          .map((b) => {
            if (isRecord(b)) {
              if (typeof b.text === 'string') return b.text;
              if (typeof b.content === 'string') return b.content;
            }
            return '';
          })
          .filter(Boolean) as string[]
      : [];
    const id = (s.slug || '')?.split('/')?.pop() || s.uuid || '';
    return { id, title, summary, category, readTime, author, date, image, content };
  };

  const postsFromChildren: BlogPost[] = [...storiesA, ...storiesB]
    .filter((s: StoryblokStory) => {
      const c = s.content as Record<string, unknown> | undefined;
      return !!(c && c.component === 'blog');
    })
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

  const fromContainer: GalleryItem[] = (() => {
    const content = (container?.content ?? undefined) as Record<string, unknown> | undefined;
    const list = (content?.image ?? undefined) as unknown;
    if (!Array.isArray(list)) return [];
    return list
      .map((item) => {
        const obj = isRecord(item) ? item : {};
        const img = isRecord(obj.image) ? obj.image : undefined;
        const src = getFilename(img);
        if (!src) return null;
        let alt = 'Gallery image';
        if (isRecord(img)) {
          const maybeAlt = (img as Record<string, unknown>).alt;
          if (typeof maybeAlt === 'string') alt = maybeAlt;
        }
        return { src, alt } as GalleryItem;
      })
      .filter(Boolean) as GalleryItem[];
  })();

  const fromChildren: GalleryItem[] = stories
    .map((s) => {
      const c = (s.content ?? undefined) as Record<string, unknown> | undefined;
      const img = getNestedFilename(c, 'image') || getNestedFilename(c, 'asset');
      if (!img) return null;
      const alt = (typeof c?.alt === 'string' ? c?.alt : s.name) || 'Gallery image';
      return { src: img, alt } as GalleryItem;
    })
    .filter(Boolean) as GalleryItem[];

  return [...fromContainer, ...fromChildren];
}

export async function fetchHeroBackground(): Promise<string | null> {
  if (!process.env.STORYBLOK_TOKEN) return null;
  try {
    const story = await fetchStory('home').catch(() => null as unknown as StoryblokStory | null);
    const c = (story?.content ?? undefined) as Record<string, unknown> | undefined;
    const img = getNestedFilename(c, 'image') || getNestedFilename(c, 'hero_image') || null;
    if (img) return img;
  } catch {}
  try {
    const fallback = await fetchStory('heros').catch(() => null as unknown as StoryblokStory | null);
    const cc = (fallback?.content ?? undefined) as Record<string, unknown> | undefined;
    const img = getNestedFilename(cc, 'image') || getNestedFilename(cc, 'hero_image') || null;
    if (img) return img;
  } catch {}
  return null;
}

export type TestimonialItem = { id: number; name: string; avatar: string; text: string };

export async function fetchTestimonials(): Promise<TestimonialItem[]> {
  if (!process.env.STORYBLOK_TOKEN) return [];

  // Primary source: container story 'testimonials' with a field `testimonial` (array)
  const container = await fetchStory('testimonials').catch(() => null as unknown as StoryblokStory | null);
  const fromContainer: TestimonialItem[] = (() => {
    const content = (container?.content ?? undefined) as Record<string, unknown> | undefined;
    const list = (content?.testimonial ?? undefined) as unknown;
    if (!Array.isArray(list)) return [];
    return list
      .map((item, idx): TestimonialItem | null => {
        const obj = isRecord(item) ? item : {};
        const name = typeof obj.username === 'string' ? obj.username : '';
        const text = typeof obj.content === 'string' ? obj.content : '';
        const avatar = getFilename(isRecord(obj.image) ? obj.image : undefined) || '';
        if (!name && !text && !avatar) return null;
        return { id: idx + 1, name, text, avatar };
      })
      .filter(Boolean) as TestimonialItem[];
  })();

  // Optional: also include any child stories that use a `testimonial` component
  const children: StoryblokStory[] = await fetchStoriesByPrefix('testimonials').catch(() => [] as StoryblokStory[]);
  const fromChildren: TestimonialItem[] = (children || [])
    .filter((s) => {
      const c = s.content as Record<string, unknown> | undefined;
      return !!(c && c.component === 'testimonial');
    })
    .map((s, idx) => {
      const c = s.content as Record<string, unknown> | undefined;
      const name = (c && typeof c.username === 'string') ? c.username : s.name || '';
      const text = (c && typeof c.content === 'string') ? c.content : '';
      const avatar = getNestedFilename(c, 'image') || '';
      return { id: (fromContainer.length || 0) + idx + 1, name, text, avatar };
    });

  const all = [...fromContainer, ...fromChildren];
  return all.filter((t) => !!(t.name || t.text || t.avatar));
}
