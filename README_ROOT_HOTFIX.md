# HYPEPAD Root Hotfix (no subfolders)

Everything here lives in the **root**. No `/public` or `/src` folders needed.

## Files
- `/hotfix.css` — transparent logo + hero overlay + mobile header styles
- `/hotfix_mobile.js` — hamburger drawer logic
- `/h-rocket-logo-transparent-hq.png` — HQ transparent logo

## How to use
1. Put these **three files in your site root** (same folder as `index.html`).
2. In your `index.html`, include them after your existing CSS/JS:
   ```html
   <link rel="stylesheet" href="/hotfix.css?v=2" />
   <script src="/hotfix_mobile.js?v=2" defer></script>
   ```
3. Make sure your banner image is available at `/hypepad-banner.jpg` (or edit `hotfix.css` to your path).
4. Deploy and hard refresh.

If header still doesn’t change, send me your `index.html` and I’ll target the exact DOM names you use.
