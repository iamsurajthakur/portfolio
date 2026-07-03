import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Suraj | Software Engineering Blog',
    description: 'Articles about Full Stack Development, AI, Go, Linux, and Software Engineering.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // ...post.data,
      link: `/blog/${post.id}/`,
      stylesheet: '/rss/pretty-feed-v3.xsl',
    })),
  });
}
