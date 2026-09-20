export default function Masonry({
	element: Component = 'div',
	children,
}: {
	element?: React.ElementType;
	children: React.ReactNode;
}) {
	return <Component className="width-fill masonry">{children}</Component>;
}
