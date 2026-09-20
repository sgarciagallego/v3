// biome-ignore-all lint/correctness/useUniqueElementIds: the skip link targets this id.
import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import Footer from '@/components/molecules/footer';
import Header from '@/components/organisms/header';
import { heading, mono, sans } from '@/fonts';
import { siteConfig } from '@/lib/constant';

export const generateMetadata = (): Metadata => ({
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	robots: { index: true, follow: true },
	icons: {
		icon: '/favicon/favicon.ico',
		shortcut: '/favicon/favicon-16x16.png',
		apple: '/favicon/apple-touch-icon.png',
	},
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.title,
		locale: 'en_GB',
		type: 'website',
	},
	twitter: {
		title: siteConfig.title,
		description: siteConfig.description,
		card: 'summary_large_image',
	},
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en-GB"
			suppressHydrationWarning
			data-scroll-behavior="smooth"
			className={`${heading.variable} ${mono.variable} ${sans.variable}`}
		>
			<body className="app">
				<Header />
				<div id="skip-to-content">{children}</div>
				<Footer />
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
