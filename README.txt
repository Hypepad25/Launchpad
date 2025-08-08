HYPEPAD Final Patch (real transparent images + code that uses /public)

What to do
1) Merge this zip into your repo ROOT.
   - public/assets/logo-header@1x/2x/3x.png
   - public/assets/logo-hero@1x/2x/3x.png
   - public/assets/favicon.ico
   - src/components/Navbar.jsx
   - src/components/HeroLogo.jsx
   - src/assets/h-rocket-logo.png (safety for old imports)
2) Replace your navbar/hero component with the ones here OR copy the <img> lines exactly.
3) REMOVE any Tailwind size classes from those images (e.g., h-10, w-32, scale-110).
4) Commit & push → redeploy → hard refresh (Ctrl/Cmd + Shift + R).

Why this will look good
- Images are exported at the EXACT display sizes (with 2x/3x) so the browser never upscales.
- True transparency—no white inside letters.
- Components point to /public paths (no bundler transforms).

Adjusting size
- Want header 240x60 or hero 500x170? Tell me exact pixels and I’ll regenerate.
