import type { Metadata } from 'next';
import { getPosts } from '@/app/db/blog';
import { siteConfig } from '@/lib/constant';
import { notFound } from 'next/navigation';
import Headline from '@/components/atoms/headline';
import Subtitle from '@/components/atoms/subtitle';
import Meta from '@/components/molecules/meta';
import { CustomMDX } from '@/components/atoms/mdx';

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  let post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishDate: publishedTime,
    description: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${siteConfig.url}${image}`
    : `${siteConfig.url}/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <header>
        <Headline>{post.metadata.title}</Headline>
        <Subtitle>{post.metadata.summary}</Subtitle>
        <Meta words={post.content} publishDate={post.metadata.publishDate} />
      </header>
      <main>
        <article>
          <CustomMDX source={post.content} />
        </article>
      </main>
    </>
  );
}
