/* =====================================================
   Benjamín Burgos — Portafolio
   Interacciones: brasas ambientales, texto tipeado,
   navegación activa y botón volver arriba
   ===================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 1. Brasas flotantes (canvas) ---------- */
(function embers() {
  const canvas = document.getElementById('embers');
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext('2d');

  let width, height, particles;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * width,
      y: height + Math.random() * 100,
      r: 0.6 + Math.random() * 1.8,
      speed: 0.25 + Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 0.4,
      alpha: 0.15 + Math.random() * 0.35,
      flicker: Math.random() * Math.PI * 2
    };
  }

  function init() {
    resize();
    const count = Math.min(60, Math.floor((width * height) / 26000));
    particles = Array.from({ length: count }, makeParticle);
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.y -= p.speed;
      p.x += p.drift;
      p.flicker += 0.05;
      const flickerAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.flicker));

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
      gradient.addColorStop(0, `rgba(95, 176, 224, ${flickerAlpha})`);
      gradient.addColorStop(0.5, `rgba(63, 143, 209, ${flickerAlpha * 0.5})`);
      gradient.addColorStop(1, 'rgba(63, 143, 209, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
      ctx.fill();

      if (p.y < -20) Object.assign(p, makeParticle(), { y: height + 20 });
      if (p.x < -20 || p.x > width + 20) p.x = Math.random() * width;
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', resize);
  init();
  requestAnimationFrame(tick);
})();

/* ---------- 2. Texto tipeado del rol ---------- */
(function typedRole() {
  const el = document.getElementById('typedRole');
  if (!el || prefersReducedMotion) return;
  // El texto vive en el HTML (buscadores y sin JS lo ven); aquí solo se anima
  const text = el.textContent.trim();

  let i = 0;
  function type() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      setTimeout(type, 45);
    }
  }
  type();
})();

/* ---------- 3. Navegación lateral activa por sección ---------- */
(function railNav() {
  const dots = document.querySelectorAll('.rail-dot');
  if (!dots.length) return;

  const targets = Array.from(dots).map(dot => document.querySelector(dot.getAttribute('href')));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = targets.indexOf(entry.target);
          dots.forEach(d => d.classList.remove('active'));
          if (idx !== -1) dots[idx].classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  targets.forEach(t => t && observer.observe(t));
})();

/* ---------- 4. Botón volver arriba ---------- */
(function toTop() {
  const btn = document.getElementById('toTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
})();