// biome-ignore-all lint/suspicious/noArrayIndexKey: words of a fixed string; position is the identity.
export default function Slogan() {
	const text = 'Building the web for everyone';
	const words = text.split(' ');

	return (
		<h2 className="slogan">
			{words.map((word, index) => (
				<span
					key={index}
					style={
						{ '--delay': `${index * 115}ms` } as React.CSSProperties
					}
				>
					{word}
					{index < words.length - 1 && ' '}
				</span>
			))}
		</h2>
	);
}
