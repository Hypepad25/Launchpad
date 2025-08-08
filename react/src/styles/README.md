# Logo Hotfix CSS

This file force-removes any white background around the logo by overriding styles on the image and its wrappers.

## How to use

### Vite / CRA
1. Copy `logo-hotfix.css` into `src/styles/` (or anywhere in `src/`).
2. Import it in your entry file so it loads globally:
   ```js
   // src/main.jsx (or src/index.jsx)
   import './styles/logo-hotfix.css';
   ```

### Next.js (App Router)
1. Copy `logo-hotfix.css` somewhere in your project, e.g. `app/logo-hotfix.css`.
2. Import it once in your root layout (`app/layout.tsx`) or `app/globals.css`:
   ```ts
   import './logo-hotfix.css'
   ```

### Next.js (Pages Router)
- Add to `_app.tsx`:
   ```ts
   import '../logo-hotfix.css'
   ```

After including the CSS, **hard refresh with cache bypass** (Ctrl/Cmd + Shift + R).

If you still see a white box, send me the HTML of your header/logo element from DevTools (right click → "Copy → Copy outerHTML") and the **Computed** styles for `background` so I can produce an exact selector.
