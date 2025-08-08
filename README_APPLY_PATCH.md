# HYPEPAD UI – Hero/Theme Revert Patch

This patch keeps the **header logo** as-is, **removes the giant hero logo**, and restores the old theme/spacing so the site looks like it did before the logo edits.

## What’s included
- `src/components/Hero.tsx` – background banner hero without overlaid logo
- `src/components/Header.tsx` – header logo preserved
- `src/styles/globals.css` – restores typography rhythm and prevents hero text overflow
- `index.html` – removes unused hero-logo preload

## How to apply
1. **Back up** your project.
2. Copy each file into the same path in your repo:
   - `src/components/Hero.tsx`
   - `src/components/Header.tsx`
   - `src/styles/globals.css`
   - `index.html`
3. Ensure you have `public/hypepad-banner.jpg` and `public/brand/hypepad-header-logo.png` present.
4. Rebuild and deploy.

If your file locations differ, replace the corresponding files in your structure—logic is the same.
