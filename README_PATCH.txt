
HYPEPAD Vite Patch — Logo, Favicons, Cache Busting, & Leaders Section

What this does
1) Standardizes the logo path to /logo-512.png and adds cache-busting (v5).
2) Regenerates all favicons + manifest from the transparent logo.
3) Provides a head snippet to paste into index.html.
4) Replaces the "Leaders Say" testimonials with a pre‑launch safe section.

How to apply (Vite/React)
A) Copy the files:
   - Copy everything from /public into your project's /public (overwrite if prompted).
   - Copy /src/components/BrandLogo.jsx into your project (replace existing if you use it).
   - Copy /src/sections/Hero.jsx if you want the updated hero (optional).
   - Copy /src/sections/WhyBuildersAreExcited.jsx to replace your testimonials section.

B) Update index.html (root of the project):
   - Open index.html and paste the content of head-snippet.html inside <head> ... </head>.
   - Ensure there are no duplicate <meta> or <link rel="icon"> tags left behind.

C) Replace old logo references:
   - Search your repo for: logo.png, h-rocket-logo.png, rocket-logo.png, /assets/… imports.
   - Replace with /logo-512.png?v5
   - If you used imports like `import logo from "../assets/logo.png"`, switch to the public path.

D) Clear caches:
   - In the browser: DevTools → Network → "Disable cache" (checked) → hard reload.
   - If using a service worker/PWA, bump its cache name or redeploy to update pre-cached files.

Optional: Add WhyBuildersAreExcited to your page
   import WhyBuildersAreExcited from "./src/sections/WhyBuildersAreExcited";
   <WhyBuildersAreExcited />
