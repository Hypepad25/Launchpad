# HYPEPAD Hotfix Replacement

## Why this will apply on your live site
You already included `/hotfix.css` before. This ZIP **replaces that same file name**, so the new mobile styles will load without changing your HTML.

## Files
- `/public/hotfix.css` — Replaces your existing hotfix with transparent logos + mobile header styles.
- `/public/hotfix_mobile.js` — Adds the hamburger + drawer behavior on mobile.
- `/public/brand/h-rocket-logo-transparent-hq.png` — HQ transparent logo for header/hero.

## Install
1. Replace your current files with these (keep the same paths).
2. Ensure your HTML still has `<link rel="stylesheet" href="/hotfix.css" />` in it.
3. Add this once near the end of your HTML (before `</body>`):

```html
<script src="/hotfix_mobile.js" defer></script>
```

4. Deploy with **Ignore Build Cache** and hard refresh.
