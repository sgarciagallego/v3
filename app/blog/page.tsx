import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import Posts from '@/components/molecules/posts';

export const metadata: Metadata = {
  title: `Blog`,
  description: siteConfig.description,
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export default function BlogPage() {
  return (
    <>
      <section><h1>Blog</h1></section>
      <Posts />
    </>
  );
}