// Replaces need for adding a new filename; include this script once in your HTML.
// It injects the hamburger + drawer on mobile and keeps Connect Wallet visible.
(function () {
  const MAX_W = 768;
  const q = (sel, root=document) => root.querySelector(sel);

  function enhanceMobileHeader() {
    try {
      if (window.innerWidth > MAX_W) return;
      const header = q('header'); if (!header) return;
      const container = header.querySelector('.container') || header.firstElementChild || header;
      if (!container || q('#hp-mobile-toggle', container)) return;

      const logoLink = container.querySelector('a[href="/"]') || container.querySelector('a');

      const toggle = document.createElement('button');
      toggle.id = 'hp-mobile-toggle'; toggle.type = 'button';
      toggle.setAttribute('aria-label', 'Open menu'); toggle.textContent = '☰';

      if (logoLink && logoLink.parentNode) logoLink.parentNode.insertBefore(toggle, logoLink.nextSibling);
      else container.insertBefore(toggle, container.firstChild);

      const nav = header.querySelector('nav'); const navHTML = nav ? nav.innerHTML : '';

      const scrim = document.createElement('div'); scrim.id = 'hp-mobile-scrim';
      const drawer = document.createElement('aside'); drawer.id = 'hp-mobile-drawer';
      drawer.innerHTML = navHTML || '<div class="hp-nav-group">Menu</div>';

      document.body.appendChild(scrim); document.body.appendChild(drawer);

      function closeDrawer() { drawer.classList.remove('open'); scrim.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
      function openDrawer()  { drawer.classList.add('open');  scrim.classList.add('open');  toggle.setAttribute('aria-expanded','true'); }

      toggle.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
      scrim.addEventListener('click', closeDrawer);
      window.addEventListener('resize', () => { if (window.innerWidth > MAX_W) closeDrawer(); });
    } catch (e) { console.warn('Hotfix mobile header init failed:', e); }
  }

  if (document.readyState !== 'loading') enhanceMobileHeader();
  else document.addEventListener('DOMContentLoaded', enhanceMobileHeader);
})();
