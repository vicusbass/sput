# SPUT — Robert "Sput" Searight

Portfolio site for drummer / producer / bandleader **Robert "Sput" Searight**, implemented from the
`Sput Searight.dc.html` design canvas. Neo-brutalist aesthetic: cream `#F4E8D2` paper, hard 3px ink
borders, offset hard shadows, the "Hot Funk" accent palette, and Syne / Space Grotesk / Space Mono
type.

## Stack

- **[Astro](https://astro.build)** 6 — static multi-page site (one real route per section)
- **[Tailwind CSS](https://tailwindcss.com)** 4 via `@tailwindcss/vite`
- Vanilla `<script>` islands for the few interactive pieces (no UI framework)

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output → dist/
pnpm preview    # preview the production build
```

> Native deps (`esbuild`, `sharp`) are allowed to run their build scripts via
> `pnpm-workspace.yaml` (`allowBuilds`). A fresh `pnpm install` runs them automatically.

## Routes

| Route       | Section                                                                    |
| ----------- | -------------------------------------------------------------------------- |
| `/`         | Hero (rotating word, equalizer, sticker), marquee, philosophy, feature tiles |
| `/tour`     | 2026 tour dates with ticket / sold-out status                              |
| `/collabs`  | Interactive collab timeline + spinning-record detail panel (Spotify links) |
| `/about`    | Bio, framed portrait, pull quote, gear grid                                |
| `/contact`  | Client-validated booking form with success state + direct contacts         |

## Structure

```
src/
├── data/site.ts          # all content (tour, collabs, gear, copy)
├── layouts/Layout.astro  # head, fonts, grain overlay, reveal-on-scroll observer
├── components/           # Nav (+ mobile menu), Footer
├── pages/                # one .astro file per route
└── styles/global.css     # theme tokens, palette, keyframe animations
public/
└── sput-hero.jpg         # hero / portrait image
```

## Theming

The five accent colors live as CSS custom properties on `:root` (`--mar`, `--mag`, `--teal`,
`--tang`, `--violet`) and are exposed to Tailwind via `@theme inline`, so utilities like `bg-mag` and
arbitrary values like `shadow-[6px_6px_0_var(--color-mag)]` resolve to the live palette.

## Reference

The original design lives in `design/` (gitignored) and is not part of the build.
