'use client';

import { usePathname } from 'next/navigation';

import Name from '@/components/atoms/name';
import SkipLink from '@/components/atoms/skiplink';
import Slogan from '@/components/atoms/slogan';
import Navigation from '@/components/molecules/navigation';

export default function Header() {
	const path = usePathname();

	return path === '/' ? (
		<>
			<SkipLink />
			<header className="@container mb-x6 [&>nav]:mt-x6 [&>nav]:mb-0">
				<Name />
				<Slogan />
				<Navigation />
			</header>
		</>
	) : (
		<>
			<SkipLink />
			<Navigation />
		</>
	);
}
