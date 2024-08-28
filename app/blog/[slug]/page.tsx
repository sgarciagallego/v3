import type { Metadata } from 'next';
import { getPosts } from '@/app/db/blog';
import { notFound } from 'next/navigation';
import Headline from '@/components/atoms/headline';
import Subtitle from '@/components/atoms/subtitle';
import Meta from '@/components/molecules/meta';
import { CustomMDX } from '@/components/atoms/mdx';

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata | undefined> {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    description: description,
  } = post.metadata;
  
  return {
    title,
    description,
  };
}

export default function SlugPage({ params }: { params: { slug: string } }) {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section>
        <Headline>{post.metadata.title}</Headline>
        <Subtitle>{post.metadata.summary}</Subtitle>
        <Meta 
          words={post.content}
          publishDate={post.metadata.publishDate}
        />
      </section>
      <main>
        <CustomMDX source={post.content} />
      </main>
    </>
  );
}