# HYPEPAD CSS Hotfix

This is a **drop-in CSS override** that makes your site look like it did before the logo changes — without touching your components.

## How to use
1. Put `public/hotfix.css` into your project (any public/static folder that serves at `/hotfix.css`).
2. Add this tag **AFTER** all other styles, typically in `index.html` (or your HTML template):
   ```html
   <link rel="stylesheet" href="/hotfix.css" />
   ```
3. Ensure `public/hypepad-banner.jpg` exists (the hotfix uses it as the hero background).
4. Redeploy and **Ignore Build Cache** on Vercel.

If it still doesn't look right, send me your repo ZIP and I'll tailor the hotfix to your exact structure.
