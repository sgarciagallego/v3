'use client';

import { useSearchParams } from 'next/navigation';

export default function Prompt({ children }: { children: React.ReactNode }) {
	const searchParams = useSearchParams();
	const error = searchParams.get('error');

	if (error) {
		return <p className="mb-x4! text-sh-keyword text-sm">{children}</p>;
	}
}
