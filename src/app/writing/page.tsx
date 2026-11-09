import type { Metadata } from 'next';

import Posts from '@/components/molecules/posts';
import { siteConfig } from '@/lib/constant';

export const metadata: Metadata = {
	title: 'Writing',
	description: siteConfig.description,
	alternates: {
		canonical: `${siteConfig.url}/writing`,
	},
};

export default function WritingPage() {
	return (
		<>
			<header>
				<h1>Writing</h1>
			</header>
			<Posts />
		</>
	);
}
