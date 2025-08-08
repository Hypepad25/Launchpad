# HYPEPAD Navbar + Hero (Ready-to-Go)

This package gives you drop-in React components and correctly named assets so the logo looks natural on your dark background.

## What's included
- `public/hypepad-logo-mask.png` — used by the mask-based navbar logo
- `public/hypepad-logo-hero.png` — transparent hero logo (centered on 1000x333)
- `public/hypepad-logo.png` — base transparent logo (reference/backup)
- `src/styles/logo.css` — CSS for `.logo--mask` and `.logo--blend`
- `src/components/Navbar.jsx` — navbar using the mask logo (inherits #fff)
- `src/components/HeroBanner.jsx` — hero using the orange PNG

## How to use (Vite/React)
1. Copy **everything inside `react/`** into your project root, merging `public/`, `src/components/`, and `src/styles/`.
2. Import the components:
   ```jsx
   import Navbar from "./src/components/Navbar";
   import HeroBanner from "./src/components/HeroBanner";
   ```
3. Ensure your global CSS includes Tailwind or compatible classes, or replace with your styles.
4. Deploy. If an old cached logo appears, rename the file or add `?v=2` to the URL.

## Notes
- The navbar logo uses **masking** so it inherits your text color (`#fff`) and blends seamlessly with the dark header.
- The hero uses the **orange transparent PNG** so it pops on the banner.
