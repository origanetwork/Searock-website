export type StoryblokParams = Record<string, string | number | boolean | undefined>;
export interface StoryblokStory {
  name?: string;
  slug?: string;
  uuid?: string;
  first_published_at?: string;
  published_at?: string;
  created_at?: string;
  content?: Record<string, unknown> | undefined;
}

export async function fetchStory(slug: string, params: StoryblokParams = {}): Promise<StoryblokStory> {
  const token = process.env.STORYBLOK_TOKEN;
  if (!token) throw new Error("Missing STORYBLOK_TOKEN");

  const defaultVersion = process.env.NODE_ENV === "development" ? "draft" : "published";

  async function request(versionToUse: string): Promise<StoryblokStory> {
    const url = new URL(`https://api.storyblok.com/v2/cdn/stories/${slug}`);
    url.searchParams.set("token", token!);
    url.searchParams.set("version", versionToUse);
    (Object.entries(params) as Array<[string, string | number | boolean | undefined]>).forEach(([k, v]) => {
      if (k !== "version" && v != null) url.searchParams.set(k, String(v));
    });
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    return data.story as StoryblokStory;
  }

  const versions = Array.from(new Set([String(params.version || defaultVersion), 'published']));
  for (const v of versions) {
    try {
      return await request(v);
    } catch {
      // try next version
    }
  }
  throw new Error("Storyblok request failed");
}

export async function fetchStoriesByPrefix(prefix: string, params: StoryblokParams = {}): Promise<StoryblokStory[]> {
  const token = process.env.STORYBLOK_TOKEN;
  if (!token) throw new Error("Missing STORYBLOK_TOKEN");

  const defaultVersion = process.env.NODE_ENV === "development" ? "draft" : "published";

  async function request(versionToUse: string): Promise<StoryblokStory[]> {
    const url = new URL(`https://api.storyblok.com/v2/cdn/stories/`);
    url.searchParams.set("token", token!);
    url.searchParams.set("version", versionToUse);
    url.searchParams.set("starts_with", prefix.replace(/^\//, ""));
    (Object.entries(params) as Array<[string, string | number | boolean | undefined]>).forEach(([k, v]) => {
      if (!["version", "starts_with"].includes(k) && v != null) url.searchParams.set(k, String(v));
    });
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    return data.stories as StoryblokStory[];
  }

  const versions = Array.from(new Set([String(params.version || defaultVersion), 'published']));
  for (const v of versions) {
    try {
      return await request(v);
    } catch {
      // try next version
    }
  }
  throw new Error("Storyblok request failed");
}
