import cn from '@/utils/cn';

export default function List({
	type,
	axis,
	children,
}: {
	type: 'ul' | 'ol';
	axis: 'horizontal' | 'vertical';
	children: React.ReactNode;
}) {
	const Element = type;

	return (
		<Element
			className={cn(
				axis === 'horizontal'
					? 'flex list-none flex-wrap items-center gap-x-x5 gap-y-x3 ps-0 [&>li]:mb-0'
					: '[&>li:not(:last-of-type)]:mb-x4'
			)}
		>
			{children}
		</Element>
	);
}
