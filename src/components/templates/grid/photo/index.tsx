import cn from '@/utils/cn';

export default function PhotoGrid({
	className,
	...props
}: React.ComponentPropsWithoutRef<'section'>) {
	return <section className={cn('photo-grid', className)} {...props} />;
}
