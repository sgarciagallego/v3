import Figcaption from '@/components/atoms/figcaption';
import Img from '@/components/atoms/image';

export default function Figure({
	src,
	alt,
	caption,
	location,
	device,
}: {
	src: string;
	alt: string;
	caption: string;
	location: string;
	device: string;
}) {
	return (
		<figure className="hairline flex flex-col gap-layer rounded-parent border-border bg-layer p-layer [&>img]:rounded-child">
			<Img src={src} alt={alt} />
			<Figcaption caption={caption} location={location} device={device} />
		</figure>
	);
}
