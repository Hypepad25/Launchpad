HYPEPAD Ultra-Crisp Code Pack

- Bigger, crisp logos (header 200x50, hero 900x300) with 2x/3x retina variants.
- Ready-made components for React (Vite/CRA) and Next.js.

Install
1) Copy **public/brand/** into your repo's `public/brand/`.
2) Replace or update your components with the ones in:
   - `src/components/Navbar.jsx`
   - `src/components/HeroBanner.jsx`
   (or the Next.js versions in `next/components/`)
3) Remove any size classes (e.g., `h-10`, `w-32`, `scale-*`) from your `<img>` that could rescale and blur the logos.
4) Redeploy and hard refresh (Ctrl/Cmd + Shift + R).

Why this works
- We provide exact target display sizes and `srcSet` so the browser picks the best asset without upscaling.
- Images are supersampled then downsampled with an unsharp mask for crisp edges.
