import type { Metadata } from 'next';
import Hyperlink from '@/components/atoms/link';

export const metadata: Metadata = {
  title: 'Erm...',
  description: 'This is awkward, there doesn’t seem to be anything around here...',
};

export default function NotFoundPage() {
  return (
    <main id='height-fill'>
      <h1>{'Erm...'}</h1>
      <p>{'This is awkward, there doesn’t seem to be anything around here...'}</p>
      <Hyperlink href='/'>{'Back home'}</Hyperlink>
    </main>
  );
}