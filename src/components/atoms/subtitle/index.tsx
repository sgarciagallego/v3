import cn from '@/utils/cn';

export default function Subtitle({
	className,
	...props
}: React.ComponentPropsWithoutRef<'p'>) {
	return (
		<p
			role="doc-subtitle"
			className={cn(
				'mb-x6! font-medium text-h4 leading-[1.15]',
				className
			)}
			{...props}
		/>
	);
}
