// biome-ignore-all lint/security/noDangerouslySetInnerHtml: sugar-high returns pre-escaped HTML.
import { highlight } from 'sugar-high';

import cn from '@/utils/cn';

type CodeProps = React.ComponentPropsWithoutRef<'code'> & { children: string };

export default function Code({ children, className, ...props }: CodeProps) {
	const codeHTML = highlight(children);

	return (
		<code
			{...props}
			dangerouslySetInnerHTML={{ __html: codeHTML }}
			className={cn('rounded-child bg-sh-background p-layer', className)}
		/>
	);
}
