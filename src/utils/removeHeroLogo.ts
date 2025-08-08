// src/utils/removeHeroLogo.ts
export function removeHeroLogo() {
  const selectors = [
    'img[src*="hypepad-logo-hero"]',
    'img[alt="HYPEPAD HERO"]',
    '.hero-logo',
    '.HeroLogo'
  ];

  const nuke = () => {
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });
  };

  if (document.readyState !== 'loading') {
    nuke();
  } else {
    document.addEventListener('DOMContentLoaded', nuke);
  }

  setTimeout(nuke, 500);
  setTimeout(nuke, 1500);
  setTimeout(nuke, 3000);
}
