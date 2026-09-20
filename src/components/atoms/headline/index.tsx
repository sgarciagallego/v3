import cn from '@/utils/cn';

export default function Headline({
	className,
	...props
}: React.ComponentPropsWithoutRef<'h1'>) {
	return <h1 className={cn('mb-x4', className)} {...props} />;
}
