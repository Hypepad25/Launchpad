
No-White-Background Patch (Vite/React)

1) Copy /public/logo-512.png into your project's /public (overwrite).
2) Import override CSS once, e.g. in src/main.jsx:
   import "./no-white-bg-override.css";
3) Swap your hero with:
   import HeroNoCard from "./sections/HeroNoCard";
   <HeroNoCard />
4) Remove any wrapper with `bg-white` or `bg-gray-50` around the logo.
5) If you still see white, hard refresh with cache disabled.
