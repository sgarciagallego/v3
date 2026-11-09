import { getPosts } from '@/app/db/blog';
import Hyperlink from '@/components/atoms/link';
import List from '@/components/atoms/list';
import cn from '@/utils/cn';
import counter from '@/utils/counter';
import formatDate from '@/utils/formatDate';

const properties = [
	'[&_ol]:ps-0',
	'[&_ol]:list-none',
	'[&_ol_a]:no-underline',
	'[&_h2]:mb-0',
	'[&_h2]:w-fit',
	'[&_h2]:font-sans',
	'[&_h2]:text-base',
	'[&_h2]:leading-[1.75]',
	'[&_h2]:font-normal',
	'[&_h2]:tracking-normal',
	'[&_ol_p]:text-text',
	'[&_ol_p]:text-sm',
].join(' ');

const deck = [
	'[&_ol]:grid',
	'[&_ol]:gap-x5',
	'lg:[&_ol]:grid-cols-2',
	'[&_ol:not(:last-child)]:mb-x5',
	'[&_li]:mb-0!',
	'[&_ol_a]:block',
	'[&_ol_a]:hairline',
	'[&_ol_a]:border-border',
	'[&_ol_a]:rounded-parent',
	'[&_ol_a]:bg-layer',
	'[&_ol_a]:px-[calc(var(--spacing-layer)*2)]',
	'[&_ol_a]:py-layer',
	'[&_ol_a:focus-visible]:border-tone-100',
	'[&_ol_a:focus-visible]:bg-layer-hover',
	'[&_ol_a:active]:border-tone-100',
	'[&_ol_a:active]:bg-layer-hover',
	'[&_ol_a:active>h2]:bg-layer-hover',
].join(' ');

const index = [
	'[&_li:not(:last-child)]:mb-x5!',
	'[&_ol_a:hover>h2]:bg-background-hover',
	'[&_ol_a:focus-visible]:outline-none',
	'[&_ol_a:focus-visible>h2]:bg-tone-100',
	'[&_ol_a:focus-visible>h2]:text-tone-0',
	'[&_ol_a:focus-visible>h2]:no-underline',
	'[&_ol_a:active>h2]:bg-tone-100',
	'[&_ol_a:active>h2]:text-tone-0',
	'[&_ol_a:active>h2]:no-underline',
].join(' ');

export default function Posts({ trim }: { trim?: boolean }) {
	const posts = getPosts();
	const Element = trim ? 'div' : 'main';

	return (
		<Element className={cn(properties, trim ? deck : index)}>
			<List type="ol" axis="vertical">
				{posts
					.sort(
						(a, b) =>
							new Date(b.metadata.publishDate).getTime() -
							new Date(a.metadata.publishDate).getTime()
					)
					.slice(0, trim ? 4 : undefined)
					.map(post => (
						<li key={post.slug}>
							<Hyperlink href={`/writing/${post.slug}`}>
								<h2>{post.metadata.title}</h2>
								<p>
									<span>{counter(post.content)}</span>
									{' · '}
									<time dateTime={post.metadata.publishDate}>
										{formatDate(post.metadata.publishDate)}
									</time>
								</p>
							</Hyperlink>
						</li>
					))}
			</List>
			{trim && posts.length >= 4 && (
				<Hyperlink href="/writing">View all</Hyperlink>
			)}
		</Element>
	);
}
