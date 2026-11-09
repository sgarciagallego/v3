import type { MetadataRoute } from 'next';

import { siteConfig } from '@/lib/constant';

import { getPosts } from './db/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const routes = [
		'',
		'/work',
		'/portfolio',
		'/writing',
		'/colophon',
		'/uses',
	].map(route => ({
		url: `${siteConfig.url}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	const posts = await getPosts();

	posts.forEach(post => {
		routes.push({
			url: `${siteConfig.url}/writing/${post.slug}`,
			lastModified: new Date(post.metadata.publishDate)
				.toISOString()
				.split('T')[0],
		});
	});

	return routes;
}
