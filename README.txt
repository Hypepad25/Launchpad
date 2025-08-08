CRA build error fix + unified logo

What this fixes:
- Build error: "Can't resolve '../assets/hypepad-logo.png' in /src/components"
  → This zip adds the expected file at **src/assets/hypepad-logo.png**.

What else is included:
- public/hypepad-logo.png (same artwork for header/hero usage)
- public/favicon.ico (generated from the same logo)

How to install:
1) Unzip and merge into your repo root (so you end up with:
   - src/assets/hypepad-logo.png
   - public/hypepad-logo.png
   - public/favicon.ico
)
2) Commit & push → Vercel redeploys.
3) Hard refresh (Ctrl/Cmd + Shift + R).

If the white box persists:
- It's CSS on a wrapper. Remove any 'bg-white' on the link/div around the logo or set:
  header img, header .logo, .hero img { background: transparent !important; }
