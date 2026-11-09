import RSS from 'rss';

import { siteConfig } from '@/lib/constant';

import { getPosts } from '../db/blog';

export async function GET() {
	const feed = new RSS({
		title: `${siteConfig.title}’s Writing`,
		description: siteConfig.description,
		site_url: `${siteConfig.url}`,
		feed_url: `${siteConfig.url}/writing`,
		copyright: `${new Date().getFullYear()} — ${siteConfig.title}`,
		language: 'en-GB',
		pubDate: new Date(),
	});

	const posts = await getPosts();

	posts.forEach(post => {
		feed.item({
			title: post.metadata.title,
			description: post.metadata.description,
			guid: `${siteConfig.url}/writing/${post.slug}`,
			url: `${siteConfig.url}/writing/${post.slug}`,
			date: new Date(post.metadata.publishDate),
		});
	});

	return new Response(feed.xml({ indent: true }), {
		headers: {
			'Content-Type': 'application/atom+xml; charset=utf-8',
		},
	});
}
