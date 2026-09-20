export default function Figcaption({
	caption,
	location,
	device,
}: {
	caption: string;
	location: string;
	device: string;
}) {
	return (
		<figcaption>
			<p className="mb-0 text-base text-tone-100">{caption}</p>
			<p className="mb-0 text-sm">
				{'@ '}
				{location}
			</p>
			<p className="mb-0 text-sm">
				{'Shot on '}
				{device}
			</p>
		</figcaption>
	);
}
