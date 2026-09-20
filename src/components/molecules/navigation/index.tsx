import Hyperlink from '@/components/atoms/link';
import List from '@/components/atoms/list';

export default function Navigation() {
	return (
		<nav className="mb-x7 flex h-x6 items-center">
			<List type="ul" axis="horizontal">
				<li>
					<Hyperlink href="/">home</Hyperlink>
				</li>
				<li>
					<Hyperlink href="/work">work</Hyperlink>
				</li>
				<li>
					<Hyperlink href="/blog">blog</Hyperlink>
				</li>
				<li>
					<Hyperlink href="/album">album</Hyperlink>
				</li>
			</List>
		</nav>
	);
}
