Fix for build error:
"Module not found: Can't resolve '../assets/h-rocket-logo.png' in /src/components"

What this zip does:
- Adds BOTH files so either import works:
  - src/assets/h-rocket-logo.png   ← exact filename your code is requesting
  - src/assets/hypepad-logo.png    ← future-proof if you switch imports back
- Also includes:
  - public/hypepad-logo.png        ← for <img src="/hypepad-logo.png">
  - public/favicon.ico             ← from the same logo

How to install:
1) Unzip and merge into your repo root so you end up with:
   - src/assets/h-rocket-logo.png
   - src/assets/hypepad-logo.png
   - public/hypepad-logo.png
   - public/favicon.ico
2) Commit & push → Vercel redeploys.
3) Hard refresh (Ctrl/Cmd + Shift + R).

Tip (optional cleanup):
- In components, prefer referencing the public asset
  <img src="/hypepad-logo.png" alt="HYPEPAD" />
  so you don't need a JS import for static logos.
