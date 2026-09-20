import Image from 'next/image';
import Link from 'next/link';

import { work } from '@/lib/constant';
import { social } from '@/lib/social';
import cn from '@/utils/cn';

const properties =
	'text-tone-100 underline decoration-underline [text-decoration-thickness:var(--spacing-x1)] underline-offset-[var(--spacing-x3)] hover:cursor-pointer hover:bg-background-hover focus-visible:bg-tone-100 focus-visible:text-tone-0 focus-visible:no-underline focus-visible:outline-none active:bg-tone-100 active:text-tone-0 active:no-underline active:outline-none';

const label =
	'mb-x2 inline-flex h-[1.75em] items-center gap-x3 rounded-parent hairline border-border bg-layer p-layer align-middle text-[0.9375em] leading-[normal] text-tone-100 no-underline [&>img]:aspect-square [&>img]:h-full [&>img]:w-auto [&>img]:rounded-child hover:bg-layer-hover focus-visible:border-tone-100 focus-visible:bg-layer-hover focus-visible:outline-none active:border-tone-100 active:bg-layer-hover';

const brand: Record<string, string> = {
	github: 'bg-brand-github',
	linkedin: 'bg-brand-linkedin',
	rss: 'bg-tone-100',
};

type HyperlinkProps = React.ComponentPropsWithoutRef<'a'> & { href: string };

export default function Hyperlink({
	className,
	children,
	...props
}: HyperlinkProps) {
	const href = props.href;
	const current = work.currentTech.find(obj => obj.href === href);

	if (href.startsWith('/')) {
		return (
			<Link className={cn(properties, className)} {...props}>
				{children}
			</Link>
		);
	}

	if (href.startsWith('#')) {
		return (
			<a className={cn(properties, className)} {...props}>
				{children}
			</a>
		);
	}

	const network = social.find(obj => obj.href === href);

	if (network) {
		return (
			<a
				target="_blank"
				rel="me noopener noreferrer"
				className={cn(properties, 'leading-[1.25em]', className)}
				{...props}
			>
				<span
					className={cn(
						'mr-x3 inline-block h-x4 w-x4',
						brand[network.name.toLowerCase()]
					)}
				/>
				{children}
				<span className="sr-only"> (opens in a new tab)</span>
			</a>
		);
	}

	if (href === work.currentCompanyHref) {
		return (
			<a
				target="_blank"
				rel="noopener noreferrer"
				className={cn(label, className)}
				{...props}
			>
				<Image
					width={64}
					height={64}
					src={`/ext/${work.currentCompanyImage}`}
					alt=""
				/>
				{children}
				<span className="sr-only"> (opens in a new tab)</span>
			</a>
		);
	}

	if (current) {
		return (
			<a
				target="_blank"
				rel="noopener noreferrer"
				className={cn(label, className)}
				{...props}
			>
				<Image
					width={64}
					height={64}
					src={`/ext/${current.image}`}
					alt=""
				/>
				{children}
				<span className="sr-only"> (opens in a new tab)</span>
			</a>
		);
	}

	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			className={cn(properties, className)}
			{...props}
		>
			{children}
			<span className="sr-only"> (opens in a new tab)</span>
		</a>
	);
}
