# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static portfolio site for drummer/producer Robert "Sput" Searight. Neo-brutalist aesthetic
(cream paper, hard 3px ink borders, offset hard shadows, "Hot Funk" accent palette). Built from
the design canvas in `design/` (see "Reference" below).

## Commands

```bash
pnpm install      # uses pnpm; native deps (esbuild, sharp) build via pnpm-workspace.yaml allowBuilds
pnpm dev          # dev server at http://localhost:4321
pnpm build        # static output → dist/
pnpm preview      # serve the production build
```

No test runner and no lint script are configured. Type checking is via `astro/tsconfigs/strict`
(`tsconfig.json`); run `pnpm astro check` for a one-off type check.

## Stack

- **Astro 6** — static multi-page site, one real route per section (`src/pages/*.astro`)
- **Tailwind CSS 4** via `@tailwindcss/vite` (no `tailwind.config.*`; theme lives in CSS — see Theming)
- Vanilla `<script>` islands for interactivity. **No UI framework** — do not add React/Vue/etc.
- Deploys to Vercel (`astro.config.mjs` `site: https://sput.vercel.app`)

## Architecture

**Content lives in one file: `src/data/site.ts`.** Tour dates, collab timeline, gear, bios,
nav, copy, and the typed enums/metadata that drive them (e.g. `EVENT_TYPES`, `STATUS_LABEL`) are
all here. To change site content, edit this file — pages and client scripts both import from it.
Adding a typed entry (e.g. a new `EventType`) propagates its label + accent color automatically.

**Pages import data, then render.** Each `src/pages/*.astro` wraps its body in
`layouts/Layout.astro` and pulls content from `data/site.ts`. `Layout.astro` owns all `<head>`
SEO/OG metadata, font loading, the grain overlay, and the global reveal-on-scroll observer.

**Interactivity = per-page vanilla `<script>` islands** (`index`, `collabs`, `contact`). These
scripts re-`import` from `data/site.ts`, so the data is bundled into the client island and stays
in sync with the server-rendered markup (see the collab timeline in `collabs.astro`). When a
script needs an accent color it reads the live CSS custom property at runtime via
`getComputedStyle(document.documentElement).getPropertyValue("--mag")`, not a hardcoded hex.

**Reveal-on-scroll is global.** Add `data-reveal` (and optional `data-delay="200"` in ms) to any
element; the `IntersectionObserver` in `Layout.astro` adds `.is-in` to fade/slide it in. Honors
`prefers-reduced-motion`. Don't reimplement this per page.

## Theming (two-tier, in `src/styles/global.css`)

1. **Static brand surfaces + fonts** under `@theme` (`--color-ink`, `--color-paper`, fonts) →
   compiled into utilities like `bg-paper`, `font-display`.
2. **Runtime-swappable accent palette** ("Hot Funk"): the five accents are defined as live CSS
   custom properties on `:root` (`--mar`, `--mag`, `--teal`, `--tang`, `--violet`) and re-exported
   through `@theme inline`. So `bg-mag` and arbitrary values like
   `shadow-[6px_6px_0_var(--color-mag)]` resolve to the live `var(...)` and can be re-skinned by
   overriding `:root`. Keyframe animation utilities (`anim-spin`, `anim-marq`, etc.) also live here.

The neo-brutalist look is hand-authored Tailwind utilities, not components: `border-[3px]
border-ink` + offset hard shadows (`shadow-[Npx_Npx_0_...]`) + hover translate. Match that idiom.

## Not indexed yet (flip on Production launch)

This site is deliberately kept out of search engines and AI crawlers **while pre-launch**, enforced
in three places: `<meta name="robots"/googlebot" content="noindex, ...">` in `Layout.astro`, the
`X-Robots-Tag` header in `vercel.json`, and `public/robots.txt`.

The plan is to **make the site indexable once it's released to Production** — at that point, relax
all three guards. Until launch, leave them in place; do not make the site indexable unsolicited.

## Reference (not part of the build)

`design/` holds the original design canvas (`Sput Searight.dc.html` + shots). It is **gitignored**
and excluded in `tsconfig.json` — it's the visual source of truth to match against, not code to
edit or ship.
