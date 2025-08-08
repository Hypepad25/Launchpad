HYPEPAD White-Box Fix — Vite/React Bundle (merge directly into repo root)

Files included:
- src/styles/hypepad-logo-whitebox-patch.css  ← the fix
- src/logo-patch.inject.js                    ← import this once to autoload the CSS

How to apply (60 seconds):
1) Copy the **contents of `merge-into-root/`** into your project root (merge folders).
2) Open `src/main.jsx` (or `src/main.tsx`) and add **this one line at the top**:
   import './logo-patch.inject.js';
3) Commit & push → Vercel redeploys.
4) Hard refresh the browser (Ctrl/Cmd + Shift + R).

If the white box persists:
- Open DevTools → select the logo container → check **Computed → background** to see which selector is painting white.
- Send me the element's **outerHTML** and the offending selector; I'll ship a targeted rule.
