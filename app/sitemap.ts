import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constant';
import { getPosts } from './db/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['', '/work', '/portfolio', '/album', '/bytes', '/blog', '/colophon', '/uses'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const posts = await getPosts();

  posts.forEach(post => {
    routes.push({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.metadata.publishDate).toISOString().split('T')[0],
    })
  })

  return routes;
}