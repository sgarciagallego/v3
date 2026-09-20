# v4

The fourth iteration of my personal site — blog, photography album, and work
history. Built with Next.js and Tailwind, written in TypeScript.

Live at [sergiogarciagallego.com](https://sergiogarciagallego.com).

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 |
| Styling | Tailwind CSS 4 (CSS-first config, no `tailwind.config`) |
| Language | TypeScript 7 |
| Content | MDX via `@next/mdx`, frontmatter through `remark-frontmatter` |
| Auth | NextAuth 4 (credentials, JWT session) |
| Syntax highlighting | sugar-high |
| Images | `next/image` with `sharp`-generated blur placeholders |
| Lint & format | Biome |
| Git hooks | Lefthook + commitlint |
| Package manager | pnpm |

## Getting started

Requires **Node 24** (see `.nvmrc`) and **pnpm**.

```bash
pnpm install          # also installs the git hooks via `prepare`
cp .env.example .env.local
pnpm dev              # http://localhost:3000
```

Fill in `.env.local` before starting — see [Environment](#environment).

## Scripts

| Script | Does |
| --- | --- |
| `pnpm dev` | Dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve a production build |
| `pnpm preview` | `build` then `start` |
| `pnpm check` | Biome lint + format check |
| `pnpm fix` | Biome lint + format, writing fixes |
| `pnpm typecheck` | `tsc --noEmit` |

## Environment

| Variable | Required | Notes |
| --- | --- | --- |
| `NEXTAUTH_SECRET` | yes | Signs the session JWT. `openssl rand -base64 32` |
| `NEXTAUTH_PASSWORD` | yes | Shared password for `/portfolio` |
| `NEXTAUTH_URL` | dev only | Vercel infers this in production |

Without `NEXTAUTH_PASSWORD` set, `/portfolio` cannot be unlocked at all — the
credentials provider fails closed rather than granting access.

## Structure

```
src/
  app/          routes, route handlers, metadata
    db/blog.ts  reads content/ off disk for listings, RSS and sitemap
  components/   atoms -> molecules -> organisms -> templates
  fonts/        next/font definitions and local font files
  lib/          static data (album, carousel, social, site config) and auth
  styles/       globals.css plus base/ (theme tokens, base layer, utilities)
  utils/        small pure helpers
content/        blog posts as .mdx
public/         images, favicons
```

### Styling

There is no `tailwind.config` — Tailwind 4 is configured in CSS. Design tokens
live in `@theme` blocks under `src/styles/base/`:

- `palette.css` — the tone ramp plus semantic colours, with a
  `prefers-color-scheme: dark` override
- `spacing.css` — spacing scale, radii, breakpoints (px, because the root
  font-size is itself a fluid `clamp`)
- `typography.css` — type scale and the `@layer base` element defaults
- `animation.css` / `utilities.css` — keyframes and the structural utilities
  that read badly as utility classes (masonry columns, the photo mosaic, code
  block line-number counters)

`src/utils/cn.ts` joins class names and resolves Tailwind conflicts so the last
class setting a given property wins. Unrecognised classes always pass through.

### Writing a post

Add an `.mdx` file to `content/`. The filename becomes the slug, and the
frontmatter drives metadata, the blog index, RSS and the sitemap:

```mdx
---
title: How to build an RSS feed in Next.js 14
summary: And why you should...
description: Longer text used for SEO and social cards.
publishDate: 2024-08-14
---

Your post here.
```

`opengraph_image` is optional — without it, a card is generated at `/api/og`.

## Git hooks

Installed automatically by `pnpm install`.

- **pre-commit** — Biome checks and formats staged files, restaging what it fixes
- **commit-msg** — commitlint enforces
  [Conventional Commits](https://www.conventionalcommits.org)

```
feat: add photography album
fix(blog): correct reading-time calculation
chore(deps): bump next to 16.3.5
```

To skip them for one commit: `git commit --no-verify`.

## Licence

[MIT](./LICENSE) — the code is yours to reuse.

The written content in `content/` and the photography in `public/photography`
are not; please don't republish those.
