export async function fetchStory(slug: string, params: Record<string, any> = {}) {
  const token = process.env.STORYBLOK_TOKEN;
  if (!token) throw new Error("Missing STORYBLOK_TOKEN");

  const defaultVersion = process.env.NODE_ENV === "development" ? "draft" : "published";

  async function request(versionToUse: string) {
    const url = new URL(`https://api.storyblok.com/v2/cdn/stories/${slug}`);
    url.searchParams.set("token", token!);
    url.searchParams.set("version", versionToUse);
    Object.entries(params).forEach(([k, v]) => {
      if (k !== "version" && v != null) url.searchParams.set(k, String(v));
    });
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    return data.story;
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

export async function fetchStoriesByPrefix(prefix: string, params: Record<string, any> = {}) {
  const token = process.env.STORYBLOK_TOKEN;
  if (!token) throw new Error("Missing STORYBLOK_TOKEN");

  const defaultVersion = process.env.NODE_ENV === "development" ? "draft" : "published";

  async function request(versionToUse: string) {
    const url = new URL(`https://api.storyblok.com/v2/cdn/stories/`);
    url.searchParams.set("token", token!);
    url.searchParams.set("version", versionToUse);
    url.searchParams.set("starts_with", prefix.replace(/^\//, ""));
    Object.entries(params).forEach(([k, v]) => {
      if (!["version", "starts_with"].includes(k) && v != null) url.searchParams.set(k, String(v));
    });
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    return data.stories as any[];
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
