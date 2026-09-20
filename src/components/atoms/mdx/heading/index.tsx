import React from 'react';

import slugify from '@/utils/slugify';

export default function createHeading(level: number) {
	return ({ children }: { children: string }) => {
		const slug = slugify(children);

		return React.createElement(
			`h${level}`,
			{
				id: slug,
				className: 'heading-anchor',
			},
			[
				React.createElement('a', {
					href: `#${slug}`,
					key: `link-${slug}`,
					'aria-label': `anchor link for ${children.toLowerCase()}`,
				}),
			],
			children
		);
	};
}
