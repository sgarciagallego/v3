import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPosts } from '@/app/db/blog';
import Headline from '@/components/atoms/headline';
import Subtitle from '@/components/atoms/subtitle';
import Meta from '@/components/molecules/meta';
import { siteConfig } from '@/lib/constant';

export function generateStaticParams() {
	return getPosts().map(post => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
	const params = await props.params;
	const post = getPosts().find(post => post.slug === params.slug);

	if (!post) {
		return;
	}

	const {
		title,
		publishDate: publishedTime,
		description,
		opengraph_image,
	} = post.metadata;
	const ogImage = opengraph_image
		? `${siteConfig.url}${opengraph_image}`
		: `${siteConfig.url}/api/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `${siteConfig.url}/blog/${post.slug}`,
			images: [{ url: ogImage }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function PostPage(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
	const post = getPosts().find(post => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	const { default: Post } = await import(`@content/${params.slug}.mdx`);

	return (
		<>
			<header>
				<Headline>{post.metadata.title}</Headline>
				<Subtitle>{post.metadata.summary}</Subtitle>
				<Meta
					words={post.content}
					publishDate={post.metadata.publishDate}
				/>
			</header>
			<main>
				<article>
					<Post />
				</article>
			</main>
		</>
	);
}
