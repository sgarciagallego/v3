import type { Metadata } from 'next';

import Posts from '@/components/molecules/posts';
import { siteConfig } from '@/lib/constant';

export const metadata: Metadata = {
	title: 'Blog',
	description: siteConfig.description,
	alternates: {
		canonical: `${siteConfig.url}/blog`,
	},
};

export default function BlogPage() {
	return (
		<>
			<header>
				<h1>Blog</h1>
			</header>
			<Posts />
		</>
	);
}
