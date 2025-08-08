HYPEPAD - Logo Rebuild Integration Kit (v3)

Use this to rebuild the latest logo into your launchpad without changing your layout.
1) Copy everything in /public into your project's /public (overwrite favicons if prompted).
2) Add head-snippet.html to your <head> (index.html for Vite; layout for Next.js).
3) Optionally drop the provided React files into your project:
   - src/components/BrandLogo.jsx  (navbar logo)
   - src/components/Navbar.jsx     (example navbar with Connect Wallet right-aligned)
   - src/sections/Hero.jsx         (hero section with non-overflow title)
These components just reference /logo-512.png and won’t alter your existing theme unless you import them.

Notes
- The PNGs are transparent (no black circle).
- Social previews (og:image & twitter:image) point to /logo-512.png. You can swap in a 1200x630 OG card later.
