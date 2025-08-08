HYPEPAD HOTFIX — WHITE NAV LOGO

What this does:
- Drops a **white-on-transparent** `logo.png` into the most common /public paths so your navbar logo blends naturally with dark backgrounds WITHOUT any code changes.

How to use:
1) Copy the `public/` folder into your project root (merge/replace).
   - If your code uses `/images/logo.png` or `/assets/logo.png`, those are included too.
2) Re-deploy.
3) Hard refresh with cache bypass: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac).
4) If you still see the old logo, Vercel is caching it. Change the filename to `/logo.png?v=2` or redeploy once more.

Also included:
- `public/hero-logo.png` (orange transparent) in case your hero references `/hero-logo.png`.
