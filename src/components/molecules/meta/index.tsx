import Img from '@/components/atoms/image';
import counter from '@/utils/counter';
import formatDate from '@/utils/formatDate';

export default function Meta({
	publishDate,
	words,
}: {
	publishDate: string;
	words: string;
}) {
	return (
		<article className="my-x6 flex h-x7 w-fit items-center gap-x5 [&>img]:h-full [&>img]:w-auto">
			<Img src="/avatar.jpeg" alt="Sergio’s avatar" />
			<div>
				<p rel="author" className="mb-0 font-medium text-tone-100">
					Sergio Garcia Gallego
				</p>
				<p className="text-sm">
					<span>{counter(words)}</span>
					{' · '}
					<time dateTime={publishDate}>
						{formatDate(publishDate)}
					</time>
				</p>
			</div>
		</article>
	);
}
