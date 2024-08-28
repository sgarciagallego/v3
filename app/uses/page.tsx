import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import List from '@/components/atoms/list';

export const metadata: Metadata = {
  title: `What I use`,
  description: 'What Sergio uses on a regular basis to make his life easier, and hopefully yours too!',
  alternates: {
    canonical: `${siteConfig.url}/uses`,
  },
}

export default function UsesPage() {
  return (
    <>
      <section>
        <h1>What I use</h1>
        <p>What I use on a regular basis to make my life easier.</p>
      </section>
      <hr />
      <main>
        <h2 id='office'>Home office</h2>
        <List axis='vertical' type='ul'>
          <li>14{'"'} Macbook Pro (2021)</li>
          <li>Logitech MX Master 3</li>
          <li>28{'"'} Philips 288E2UAE</li>
          <li>Journey ALTI Wireless Chargining Desk Mat</li>
          <li>Custom Grafeio Desk by PastosCo</li>
          <li>Sihoo Doro C300 Ergonomic Chair</li>
          <li>Custom Build PC (post coming soon)</li>
          <li>IQUNIX ZX75 Gravity Wave 75% Keyboard w/ Moonstone Turbo switches</li>
        </List>
        <h2 id='coding'>Coding</h2>
        <List axis='vertical' type='ul'>
          <li>Visual Studio Code</li>
          <li>Theme: One Dark Pro</li>
          <li>Type: Dank Mono or SF Mono</li>
          <li>Terminal: MacOS w/ Oh My Zsh</li>
        </List>
        <h2 id='home'>Home</h2>
        <List axis='vertical' type='ul'>
          <li>Eufy Robovac 15C Max</li>
          <li>Philips Ambilight</li>
          <li>TP Link Tapo L510B Dimmable Smart Lights</li>
        </List>
        <h2 id='photography'>Photography</h2>
        <List axis='vertical' type='ul'>
          <li>Fujifilm X-S10</li>
          <li>Tamron 17-70mm f2.8 Zoom Lens</li>
          <li>Manfrotto 290 Light</li>
        </List>
        <h2 id='software'>Software</h2>
        <List axis='vertical' type='ul'>
          <li>Spotify</li>
          <li>Aldente</li>
          <li>Figma</li>
          <li>Capture One</li>
          <li>Routinery</li>
          <li>Reeder 5</li>
        </List>
        <h2 id='following'>Following</h2>
        <List axis='vertical' type='ul'>
          <li>Josh W Comeau</li>
          <li>Kent C. Dodds</li>
          <li>Alex Chan</li>
          <li>Lee Rob</li>
          <li>Jack Cheng</li>
          <li>The League of Moveable Type</li>
          <li>TLDR;</li>
        </List>
        <h2 id='other'>Other tech</h2>
        <List axis='vertical' type='ul'>
          <li>Apple iPhone</li>
          <li>Apple Airpods Pro</li>
          <li>Fitbit Sense 2</li>
          <li>UGREEN Nexode 200W USB C GaN Charger</li>
        </List>
      </main>
    </>
  );
}