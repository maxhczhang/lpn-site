# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build (also type-checks)
npm run lint     # ESLint
```

## Architecture

This is a **Next.js 14 App Router** site for Lambda Phi Nu (LPN), a business leadership fraternity at UCI. The original CRA/React 16 code is archived in `archived/`.

**Tech stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui. Deployed to Vercel (or GitHub Pages via static export).

**Design system:**
- Dark mode only (`<html class="dark">`) — no toggle
- CSS variables in `src/app/globals.css` define the palette: `--navy`, `--burgundy`, `--surface`, `--surface-raised`
- Fonts: Inter (body, `--font-inter`) + Playfair Display (headings/serif, `--font-playfair`) via `next/font/google`
- Custom Tailwind utilities: `glass`, `glass-light`, `gradient-text`, `section-padding`

**Pages (App Router):**

| Route | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/active-brothers` | `src/app/active-brothers/page.tsx` |
| `/active-brothers/[name]` | `src/app/active-brothers/[name]/page.tsx` |
| `/careers` | `src/app/careers/page.tsx` |
| `/campus-involvement` | `src/app/campus-involvement/page.tsx` |
| `/recruitment` | `src/app/recruitment/page.tsx` |
| `/faqs` | `src/app/faqs/page.tsx` |
| `/gallery` | `src/app/gallery/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

**Shared components:**
- `src/components/layout/Navbar.tsx` — sticky glass-morphism navbar with active route indicator (Framer Motion `layoutId`)
- `src/components/layout/Footer.tsx` — dark footer with social links
- `src/components/ui/AnimatedSection.tsx` — `useInView` fade-in-up wrapper (most page sections use this)
- `src/components/ui/BrotherCard.tsx` — headshot card with hover lift + company logo reveal
- `src/components/ui/SectionHeader.tsx` — eyebrow + serif title + subtitle pattern

**Data layer** (`src/lib/data/`):
- `types.ts` — TypeScript interfaces (Brother, CSuiteMember, Director, Profile, etc.)
- `csuite.ts` / `directors.ts` / `brothers.ts` — Brother lists (image paths are `/assets/...` strings pointing to `public/assets/`)
- `profiles.ts` — Detailed profile data keyed by `FirstName_LastName` (e.g. `Max_Zhang`). Profile route `/active-brothers/[name]` uses this key directly.
- `rushEvents.ts`, `faqs.ts`, `facts.ts`, `coreValues.ts`, `chartData.ts`, `gallery.ts`, `companyLogos.ts`, `involvements.ts`

**Assets** are in `public/assets/` (migrated from the archived CRA's `src/assets/`):
- `actives/brothers/` — headshots (`FirstName_LastName.jpg`)
- `companyLogos/` — company logo images
- `lpn_assets/` — LPN branding (logo.png, logo_white.png)
- `gallery/`, `home/`, `about/`, `backgrounds/`, `recruitment/`

**Animation patterns:**
- Scroll-triggered fade-in-up: wrap content in `<AnimatedSection delay={0.1}>` — uses Framer Motion `useInView`
- Hover lift on cards: `motion.div` with `whileHover={{ y: -6 }}`
- Company logo marquee: CSS `animate-marquee` (defined in tailwind.config.ts keyframes)
- Animated stat counters: custom `Counter` component in `StatsBar.tsx`

**Contact form** sends PUT requests to `https://modern-yeti-376205.uw.r.appspot.com/` (Google Cloud App Engine backend).

**Deployment:** `next.config.mjs` has `images.unoptimized: true` for static-asset compatibility. Deploy to Vercel by connecting the repo.
