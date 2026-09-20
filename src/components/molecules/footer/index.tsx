import Hyperlink from '@/components/atoms/link';
import List from '@/components/atoms/list';
import { social } from '@/lib/social';

export default function Footer() {
	return (
		<footer className="mt-x7 flex items-center max-sm:h-x7 sm:h-x6">
			<List type="ul" axis="horizontal">
				{social.map(obj => (
					<li key={obj.name.toLowerCase()}>
						<Hyperlink href={obj.href}>{obj.name}</Hyperlink>
					</li>
				))}
			</List>
		</footer>
	);
}
