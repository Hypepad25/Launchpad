# HYPEPAD Combined Hotfix (Transparent Logos + Mobile Header)

## Files
- `/public/hotfix_all.css` — Transparent logos (header + hero) + mobile header redesign
- `/public/hotfix_mobile.js` — Drawer behavior for mobile
- `/public/brand/h-rocket-logo-transparent-hq.png` — Included for convenience

## Install
1. Add files to your project so they serve at the paths above.
2. In your HTML template (e.g., `index.html`), include **after** your normal CSS/JS:
```html
<link rel="stylesheet" href="/hotfix_all.css" />
<script src="/hotfix_mobile.js" defer></script>
```
3. Ensure your banner exists at `/hypepad-banner.jpg` (or update `hotfix_all.css` to your path).
4. Deploy with **Ignore Build Cache** on Vercel. Hard refresh on phone.

## Notes
- Desktop layout remains unchanged; mobile header kicks in at ≤768px.
- If your site already includes older hotfix files, you can remove them and just use `hotfix_all.css` + `hotfix_mobile.js`.
- Adjust the header logo size by editing `width: 180px` in the header rule, or hero logo size in the `background-size` of the hero overlay.
