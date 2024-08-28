import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import Footer from '@/components/molecules/footer';
import Header from '@/components/organisms/header';
import { heading, mono, sans } from '@/fonts';
import '@/styles/globals.css';

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
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: '/opengraph-image.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: '/opengraph-image.png',
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en-GB' suppressHydrationWarning>
      <body className={`app ${heading.variable} ${mono.variable} ${sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}