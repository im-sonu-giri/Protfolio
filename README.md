# Sonu Giri — Portfolio

A multipage, black-and-white developer portfolio built with Next.js 15 (App
Router), TypeScript, Tailwind CSS, GSAP 3, and Lenis smooth scroll.

## Stack

- **Next.js 15** (App Router, TypeScript, static generation for project pages)
- **Tailwind CSS** — strict monochrome token set (see `tailwind.config.ts`)
- **GSAP 3** + **ScrollTrigger** — all animation (reveals, timeline draw, tilt, magnetic buttons, navbar morph)
- **Lenis** — smooth scroll, wired into GSAP's ticker so ScrollTrigger stays in sync
- **lucide-react** — icons

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, Navbar/Footer/SmoothScroll wrapper
  template.tsx           Per-navigation page-enter transition
  page.tsx               Home
  about/page.tsx
  experience/page.tsx
  projects/page.tsx      Filterable grid
  projects/[slug]/page.tsx   Case study detail (statically generated per project)
  skills/page.tsx
  contact/page.tsx
  api/contact/route.ts   Contact form submission handler
  sitemap.ts / robots.ts
  globals.css

components/
  Navbar.tsx             Scroll-morphing nav
  Hero.tsx               Staggered text reveal
  ProjectCard.tsx        3D tilt-on-hover card
  Timeline.tsx           Experience timeline with animated spine
  ScrollReveal.tsx        Reusable scroll-triggered fade/rise wrapper
  MagneticButton.tsx     Cursor-following button micro-interaction
  CustomCursor.tsx       Desktop-only ring cursor
  SmoothScroll.tsx       Lenis + GSAP ticker wiring
  ContactForm.tsx
  Footer.tsx

data/
  site.ts        Contact / social links — EDIT THIS FIRST
  projects.ts     Project case studies — content lives here, not in components
  experience.ts   Timeline entries
  skills.ts       Skills breakdown
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customizing content

Everything text-based lives in `data/`, not scattered across components:

1. **`data/site.ts`** — email, phone, GitHub, LinkedIn, resume path. Replace
   every `TODO` before deploying.
2. **`data/projects.ts`** — add, remove, or edit projects. Each one follows
   the same shape (`problem` / `approach` / `impact`), which is what powers
   the case-study layout on `/projects/[slug]` automatically — no template
   changes needed to add a new project.
3. **`data/experience.ts`** — internship/education timeline entries, newest first.
4. **`data/skills.ts`** — the four skill groups shown on `/skills` and the home page.

## Hero background video

The hero (`components/HeroBackground.tsx`) renders an animated monochrome
grid by default — pure CSS, zero network dependency, so the site never ships
a broken-video icon. To layer a real video on top:

1. Source a dark, abstract, seamlessly-loopable clip (grid / particle /
   network style reads best against this palette — Pixabay's "abstract tech
   loop" and Mixkit's free stock video library both have suitable options;
   pick one licensed for your use and download it directly, since third-party
   video CDN links tend to break or rate-limit over time).
2. Save it as `public/videos/hero-bg.mp4` (and optionally a poster frame at
   `public/videos/hero-bg-poster.jpg`).
3. Nothing else changes — the component detects the file automatically,
   cross-fades it in over the grid via GSAP once it's ready to play, and
   falls back to the grid silently (via `onError`) if the file is missing
   or fails to decode.

The dark overlay (`bg-black/70`) and subtle scroll parallax are already
wired regardless of whether a real video is present.

## Tech marquee

`components/TechMarquee.tsx` renders an infinite horizontal scroll of the
stack list directly in the file — edit the `STACK` array there to change
what's shown. It uses GSAP's standard seamless-loop trick (duplicate the
list once, animate `xPercent` from 0 to -50, repeat forever) rather than a
JS-measured width, so there's no layout thrash on resize.

## Adding your photo

Drop a portrait photo at `public/images/profile.jpg`, then in
`app/about/page.tsx` swap:

```tsx
src="/images/profile-placeholder.svg"
```

for:

```tsx
src="/images/profile.jpg"
```

The frame is `aspect-[4/5]` (portrait) with a grayscale filter applied via
`className="object-cover grayscale contrast-125"` — remove that class if your
photo is already black-and-white and you want to preserve its original tonal
range.

## Making the contact form fully live

The form posts to `app/api/contact/route.ts`, which currently logs
submissions to the server console. To actually receive emails:

1. `npm install resend`
2. Create a free [Resend](https://resend.com) account and verify a sending domain.
3. Add `RESEND_API_KEY` to your environment (`.env.local` locally, Vercel
   project settings in production).
4. Uncomment the Resend block in `app/api/contact/route.ts`.

Alternatively, swap in any other provider (SendGrid, Postmark, Nodemailer +
SMTP) — the route handler is a plain fetch endpoint, so any Node-compatible
mail library works.

## Fonts

The display face is declared as a `--font-display` CSS variable in
`globals.css`, currently falling back to system sans (`Helvetica Neue` /
`Arial`). If you have a license for a geometric/grotesk display face (Neue
Montreal, General Sans, etc.), drop the font files in `public/fonts/` and
load them with `next/font/local`, then point `--font-display` at the result.
Body text and code/mono text use Google's Inter and JetBrains Mono via
`next/font/google`, already wired in `app/layout.tsx`.

## Animation notes

- All GSAP plugin registration happens once, in `lib/gsap.ts` — import
  `{ gsap, ScrollTrigger }` from there everywhere, never from `"gsap"` directly,
  so you don't accidentally register plugins twice.
- `prefers-reduced-motion` is respected in two places: `lib/gsap.ts` (zeroes
  default tween duration) and `globals.css` (hard override on all
  animations/transitions). No component needs its own reduced-motion branch.
- `ScrollReveal` is the one reusable primitive for scroll-triggered fades —
  reach for it before writing a new ScrollTrigger from scratch.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (auto-detected). No build config changes needed.
4. Add `RESEND_API_KEY` (if configured) under Project Settings → Environment Variables.
5. Deploy. Vercel handles the rest — static project pages are pre-rendered at build time via `generateStaticParams`.

Update `metadataBase` in `app/layout.tsx` and the URLs in `app/sitemap.ts` /
`app/robots.ts` to match your actual production domain if it differs from
`sonugiri.com.np`.

## Lighthouse / performance notes

- Images use `next/image` with `fill` + explicit aspect ratios to avoid layout shift.
- Fonts are loaded via `next/font`, self-hosted at build time (no render-blocking Google Fonts request).
- GSAP/Lenis are the only client-side animation dependencies — no heavier animation library is loaded.
- Project detail pages are statically generated (`generateStaticParams`), not client-fetched.
