
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded','false');
    }));
  }

  document.querySelectorAll('[data-accordion]').forEach(card => {
    const trigger = card.querySelector('.accordion-trigger');
    const panel = card.querySelector('.accordion-panel');
    trigger.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      card.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(!isOpen));
      if (!isOpen) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = '0px';
      }
    });
  });
});
