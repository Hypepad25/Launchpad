# HYPEPAD – Full Source Bundle (Hero Fix + Theme Revert + Runtime Removal)

This bundle is a **drop-in `src/` + `index.html`** you can paste into your project.

## What it does
- Keeps the **header logo** (top-left) exactly as-is.
- **Removes the giant hero logo** (runtime + CSS kill-switch).
- Restores the older spacing/typography rhythm and prevents hero text overflow.
- Uses your `public/hypepad-banner.jpg` as the hero background.

## How to use (merge)
1) Back up your project.
2) Copy the included **`src/`** folder and **`index.html`** into your repo, replacing existing files.
3) Ensure these assets exist:
   - `public/hypepad-banner.jpg`
   - `public/brand/hypepad-header-logo.png`
4) Build & deploy. On Vercel, choose **Deploy** and check **"Ignore Build Cache."**

## Notes
- If your project uses a router or different layout structure, keep your layout files and only swap **`Hero.tsx`**, **`Header.tsx`**, **`globals.css`**, and **`removeHeroLogo.ts`**. Then import `removeHeroLogo()` in your app entry file.
- Case-sensitive file names matter on Linux.

If you want me to mirror your exact file tree, attach your current repository ZIP and I’ll generate a tailor-fit bundle.
