HYPEPAD — ONE PATCH (assets + favicon + white-box fix + crisp retina logos)

Merge the contents of `merge-into-root/` into your repo root.

It includes:
- src/assets/h-rocket-logo.png & src/assets/hypepad-logo.png  ← fixes CRA import errors
- public/hypepad-logo.png                                     ← same logo for header/hero
- public/brand/hypepad-logo-header@1x/2x/3x.png               ← crisp header set
- public/brand/hypepad-logo-hero@1x/2x/3x.png                 ← crisp hero set
- public/favicon.ico + PNG favicons + site.webmanifest        ← from the same logo
- public/hypepad-logo-override.css                            ← kills white background boxes
- public/index.html                                           ← CRA template with <link> to the override CSS

How to apply:
1) Copy **merge-into-root/** into your project root (merge folders).
2) Commit & push → Vercel redeploys.
3) In your components, point to the retina assets (or keep your current imports):
   Header:
     <img src="/brand/hypepad-logo-header@1x.png"
          srcset="/brand/hypepad-logo-header@2x.png 2x, /brand/hypepad-logo-header@3x.png 3x"
          width="160" height="40" alt="HYPEPAD" />
   Hero:
     <img src="/brand/hypepad-logo-hero@1x.png"
          srcset="/brand/hypepad-logo-hero@2x.png 2x, /brand/hypepad-logo-hero@3x.png 3x"
          width="600" height="200" alt="HYPEPAD" />

Notes:
- If you already have public/index.html, keep yours and just add this line in <head>:
    <link rel="stylesheet" href="%PUBLIC_URL%/hypepad-logo-override.css" />
- If you still see a white box, inspect the logo wrapper in DevTools; send me its outerHTML and I’ll ship a pinpoint rule.
- If images look soft, ensure you aren’t upscaling the @1x sizes; use the @2x or @3x from /public/brand/ instead.
