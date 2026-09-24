(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (header && menu && nav) {
    header.classList.add('menu-ready');
    menu.hidden = false;
    const closeMenu = () => {
      menu.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      menu.querySelector('span').textContent = '＋';
    };
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(expanded));
      nav.classList.toggle('is-open', expanded);
      menu.querySelector('span').textContent = expanded ? '−' : '＋';
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    header.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menu.focus();
      }
    });
    const mobile = window.matchMedia('(max-width: 950px)');
    mobile.addEventListener('change', closeMenu);
  }
  const magic = document.querySelector('.magic-button');
  const art = document.querySelector('.hero-art');
  if (magic && art) {
    magic.hidden = false;
    magic.addEventListener('click', () => {
      const enchanted = art.classList.toggle('enchanted');
      magic.setAttribute('aria-pressed', String(enchanted));
      art.querySelector('.magic-status').textContent = enchanted ? 'The magic is in the details.' : '';
    });
  }
})();
