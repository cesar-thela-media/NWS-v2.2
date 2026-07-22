# NWS Custom Homes and Remodeling

Frontend site for NWS Custom Homes (Richmond, TX) — **Next.js**, **TypeScript**, **Tailwind CSS v4**. Built for **Vercel** deployment.

## Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS v4 + Glyph-style tokens (`#FF4500` primary)
- Manrope (headings) + Geist (body)
- Node **20+** (see `.nvmrc` / `package.json` engines)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (same as Vercel)

```bash
npm run build
npm start
```

No runtime environment variables are required.  
`.env.local` (gitignored) is only for optional Shadcn Space CLI installs during development.

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. [Import the project](https://vercel.com/new) in Vercel.
3. Framework: **Next.js** (auto-detected; `vercel.json` also sets it).
4. Leave **Build Command** as `npm run build` and **Install** as `npm install`.
5. Deploy — no env vars needed for a static/SSG site.

Optional CLI:

```bash
npx vercel
```

### Notes for deploy

- Contact form is **frontend-only** (success UI; wire to an API/form service later if needed).
- Images live under `public/images/`.
- Routes use `trailingSlash: true` in `next.config.ts` (matches production URL style).
- `scraped/` and local screenshot `*.png` files are gitignored and not deployed.

## Site structure

| Route | Page |
|-------|------|
| `/` | Home |
| `/about/` | About |
| `/contact/` | Contact |
| `/services/` | All services |
| `/services/[slug]/` | Service detail pages |
| `/faqs/` | FAQs |
| `/areas-we-serve/` | Areas hub |
| location slugs | Location pages |
| `/*-gallery/` | Project galleries |
