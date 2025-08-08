// Root Mobile Header Drawer JS — no subfolders required
(function () {
  const MAX_W = 768;
  const q = (sel, r=document) => r.querySelector(sel);
  function init() {
    try {
      if (window.innerWidth > MAX_W) return;
      const header = q('header') || q('.header') || q('.site-header') || q('.navbar') || q('nav');
      if (!header) return;
      const container = header; // root-level header; treat header itself as container
      if (q('#hp-mobile-toggle', container)) return;

      const logoLink = q('a[href="/"]', container) || q('a', container);
      const toggle = document.createElement('button');
      toggle.id = 'hp-mobile-toggle'; toggle.type = 'button';
      toggle.setAttribute('aria-label','Open menu'); toggle.textContent = '☰';

      if (logoLink && logoLink.parentNode) logoLink.parentNode.insertBefore(toggle, logoLink.nextSibling);
      else container.insertBefore(toggle, container.firstChild);

      // Clone first nav found in header or page
      const nav = q('nav', container) || q('nav', document);
      const navHTML = nav ? nav.innerHTML : '';

      const scrim = document.createElement('div'); scrim.id = 'hp-mobile-scrim';
      const drawer = document.createElement('aside'); drawer.id = 'hp-mobile-drawer';
      drawer.innerHTML = navHTML || '<div class="hp-nav-group">Menu</div>';
      document.body.appendChild(scrim); document.body.appendChild(drawer);

      const closeDrawer = () => { drawer.classList.remove('open'); scrim.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); };
      const openDrawer  = () => { drawer.classList.add('open');  scrim.classList.add('open');  toggle.setAttribute('aria-expanded','true'); };
      toggle.addEventListener('click', () => drawer.classList.contains('open') ? closeDrawer() : openDrawer());
      scrim.addEventListener('click', closeDrawer);
      window.addEventListener('resize', () => { if (window.innerWidth > MAX_W) closeDrawer(); });
    } catch (e) { console.warn('Root hotfix init failed:', e); }
  }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
