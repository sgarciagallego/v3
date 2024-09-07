import type { Metadata } from 'next';
import { siteConfig } from '@/lib/constant';
import Hyperlink from '@/components/atoms/link';
import List from '@/components/atoms/list';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A high-level overview of where Sergio has been and how he got here, but remember to take it with a pinch of salt, because that is all it is...',
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
}

export default function WorkPage() {
  return (
    <>
      <header>
        <h1>Work</h1>
        <p>Regardless of where I work, my mission remains: <strong>to create experiences designed to scale</strong>.</p>
        <p>If you prefer to dive deep into my commercial case studies, <Hyperlink href='mailto:gallegogarciasergio@gmail.com'>email me</Hyperlink> and I’ll send you the password to my <Hyperlink href='/portfolio'>portfolio</Hyperlink>. If not, here’s a summary of my work so far.</p>
      </header>
      <hr />
      <main>
        <section>
          <h2>Major Digital</h2>
          <p><small>Web Developer</small></p>
          <p>Major Digital, a web agency, strives to make things better than they were before, everyday.</p>
          <List axis='vertical' type='ul'>
            <li>I work with multidisciplinary teams to build a better web for everyone.</li>
          </List>
        </section>
        <hr />
        <section>
          <h2>Origin Blank</h2>
          <p><small>Founding Design Engineer (Web & Brand)</small></p>
          <p>Origin Blank, an independent brand and web studio, was co-founded by me and my partner as my in for agency-style work.</p>
          <List axis='vertical' type='ul'>
            <li>In 2023, me and my partner began silent work on <Hyperlink href='https://originblank.com'>Origin Blank</Hyperlink>, finalising the registration and version one of the brand right before Christmas.</li>
            <li>In 2024, I attended <Hyperlink href='https://londontechweek.com'>{'conferences'}</Hyperlink> and  landed my first client, all whilst completing version 2 (current) of our rebrand for a cleaner alignment to our foundations and a blog integration for our website.</li>
          </List>
        </section>
        <hr />
        <section>
          <h2>Purple Beard</h2>
          <p><small>Design Engineer</small></p>
          <p>Purple Beard, an award-winning EdTech provider, wanted to scale their brand and training operations.</p>
          <List axis='vertical' type='ul'>
            <li>In 2022, I joined a small team of technical minds as a Frontend Developer, with the initial responsibility of training students in front-end development and web accessibility.</li>
            <li>In 2023, I was promoted to Design Engineer, and led in a fListl <Hyperlink href='https://www.instagram.com/p/CwNAOFILdw1'>rebrand</Hyperlink>, working across branding, design and development to rebuild their legacy WordPress on Elementor site with Next.js and the latest development patterns based on the company’s first-ever design system.</li>
          </List>
          <p>Throughout my two years, I was able to work on some hard problems: breaking down and re-building a brand, building and implementing a design system, decoupling a half-decade-old monolith into a <Hyperlink href='https://jamstack.org'>Jamstack</Hyperlink> application, and more.</p>
        </section>
        <hr />
        <section>
          <h2>Vasave</h2>
          <p><small>Frontend Developer</small></p>
          <p>Vasave ia a startup SaaS company specialising in B2B cloud, cyber security and infra solutions for SMEs. During my time at Vasave, I explored digital marketing and design, but eventually chose web development, providing me with resources and commerical experiences in HTML5, CSS3 and JavaScript ES6+. I also gained my first production experience using React.</p>
        </section>
      </main>
    </>
  );
}