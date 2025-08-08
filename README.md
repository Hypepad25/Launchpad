# HYPEPAD Drop-in Assets & Components

This zip includes ready-to-use **transparent PNG logos** and example code for **React (Vite)**, **Next.js**, and **plain HTML**.

## Files
- `react/public/hypepad-logo.png` — header logo (transparent)
- `react/public/hypepad-logo-hero.png` — hero logo (transparent)
- `react/src/components/Navbar.jsx` — React component using `/hypepad-logo.png`
- `react/src/components/HeroBanner.jsx` — React hero section
- `next/components/Navbar.tsx` — Next.js navbar component (uses `next/image`)
- `html/index.html`, `html/styles.css`, `html/assets/*` — simple HTML demo

## Usage (React / Vite)
1. Copy `react/public/*` into your project's `public/` directory.
2. Copy `react/src/components/*` into your project and import the components.
3. Ensure no CSS sets a white background on the logo or its parent.

## Usage (Next.js)
1. Copy the PNGs to your Next.js `public/` directory.
2. Drop `Navbar.tsx` into your components folder and import it.

## Cache Busting
If Vercel shows the old white-boxed logo, rename the file (e.g., `hypepad-logo.png?v=2`) or update the filename.
