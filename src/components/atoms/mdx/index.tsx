import type { MDXComponents } from 'mdx/types';

import Img from '../image';
import Hyperlink from '../link';
import Code from './code';
import CodeBlock from './codeblock';
import createHeading from './heading';

export const components: MDXComponents = {
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	a: Hyperlink,
	code: Code,
	pre: ({ children }) => {
		const code = children as React.ReactElement<{
			children?: React.ReactNode;
		}>;
		return <CodeBlock>{String(code?.props?.children ?? '')}</CodeBlock>;
	},
	img: Img,
};
