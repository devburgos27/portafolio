/* =====================================================
   Benjamín Burgos — Portafolio
   Interacciones: navegación activa por sección
   ===================================================== */

/* ---------- 1. Navegación activa por sección ---------- */
(function navActiva() {
  const links = document.querySelectorAll('.nav-links a');
  if (!links.length || !('IntersectionObserver' in window)) return;

  const targets = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const idx = targets.indexOf(entry.target);
        links.forEach(l => {
          l.classList.remove('active');
          l.removeAttribute('aria-current');
        });
        if (idx !== -1) {
          links[idx].classList.add('active');
          links[idx].setAttribute('aria-current', 'location');
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  targets.forEach(t => t && observer.observe(t));
})();
