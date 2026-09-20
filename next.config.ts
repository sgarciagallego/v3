import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	outputFileTracingIncludes: {
		'/api/og': ['./src/fonts/static/og.ttf'],
	},
	images: {
		qualities: [100],
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: ['remark-frontmatter'],
	},
});

export default withMDX(nextConfig);
