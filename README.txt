HYPEPAD CRISP LOGO PACK (Header + Hero, retina-ready)

Files (put all into /public/brand/):
- hypepad-logo-header@1x.png (160x40)
- hypepad-logo-header@2x.png (320x80)
- hypepad-logo-header@3x.png (480x120)
- hypepad-logo-hero@1x.png   (600x200)
- hypepad-logo-hero@2x.png   (1200x400)
- hypepad-logo-hero@3x.png   (1800x600)
- hypepad-logo.png           (source, transparent)

Use them like this:

HTML (header)
<img
  src="/brand/hypepad-logo-header@1x.png"
  srcset="/brand/hypepad-logo-header@2x.png 2x, /brand/hypepad-logo-header@3x.png 3x"
  width="160" height="40" alt="HYPEPAD" />

HTML (hero)
<img
  src="/brand/hypepad-logo-hero@1x.png"
  srcset="/brand/hypepad-logo-hero@2x.png 2x, /brand/hypepad-logo-hero@3x.png 3x"
  width="600" height="200" alt="HYPEPAD" />

React/Next.js
import Image from 'next/image';
<Image src="/brand/hypepad-logo-header@2x.png" alt="HYPEPAD" width={160} height={40} priority />
<Image src="/brand/hypepad-logo-hero@2x.png" alt="HYPEPAD" width={600} height={200} />

Important
- Do NOT scale the image larger than its @1x dimensions in CSS. If you need a larger display, use @2x/@3x via srcset.
- Remove any CSS filters (blur/shadow) on the image if it looks soft.
- If you still see blur, check for transforms (scale) on the parent—those will blur raster images.
