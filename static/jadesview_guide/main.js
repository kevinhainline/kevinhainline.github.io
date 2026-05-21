/* ===================================================
   EAZY-py User's Guide — main.js
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Syntax highlighting ──────────────────────────
  hljs.highlightAll();

  // ── Build nav from sections ──────────────────────
  const sections = document.querySelectorAll('#content section[id]');
  const navList  = document.getElementById('nav-list');

  const navLabels = {
    s1:  'What is JADESView?',
    s2:  'Installation & Setup',
    s3:  'The JADES Catalogs and Mosaics',
    s4:  'How the Code Works',
    s5:  'JADESView Parameters',
    s6:  'Running JADESView',
    s7: 'Common Pitfalls & Tips',
    resources: 'Further Resources',
  };

  sections.forEach(sec => {
    const id    = sec.id;
    const label = navLabels[id] || sec.querySelector('h2')?.textContent.replace(/^\d+\s*/, '') || id;
    const num   = id.startsWith('s') ? id.replace('s', '').padStart(2, '0') : '';

    const li  = document.createElement('li');
    const a   = document.createElement('a');
    a.href    = `#${id}`;
    a.dataset.id = id;

    if (num) {
      const numSpan = document.createElement('span');
      numSpan.className = 'nav-num';
      numSpan.textContent = num;
      a.appendChild(numSpan);
    }

    const textSpan = document.createElement('span');
    textSpan.textContent = label;
    a.appendChild(textSpan);

    li.appendChild(a);
    navList.appendChild(li);
  });

  // ── Active nav on scroll ─────────────────────────
  const navLinks = navList.querySelectorAll('a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = navList.querySelector(`a[data-id="${entry.target.id}"]`);
        if (active) {
          active.classList.add('active');
          // Scroll sidebar to keep active link visible
          active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));

  // ── Mobile sidebar toggle ────────────────────────
  const sidebar = document.getElementById('sidebar');
  const toggle  = document.getElementById('menu-toggle');

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close sidebar when nav link clicked on mobile
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 700) sidebar.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 700 &&
        !sidebar.contains(e.target) &&
        !toggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  // ── Starfield canvas ─────────────────────────────
  const canvas = document.getElementById('starfield');
  const ctx    = canvas.getContext('2d');

  let stars = [];
  const STAR_COUNT = 220;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        r:       Math.random() * 1.2 + 0.2,
        alpha:   Math.random() * 0.6 + 0.15,
        speed:   Math.random() * 0.0015 + 0.001,
        phase:   Math.random() * Math.PI * 2,
      });
    }
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame += 0.5;

    stars.forEach(s => {
      const twinkle = s.alpha + Math.sin(frame * s.speed * 100 + s.phase) * 0.12;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,215,255,${Math.max(0, Math.min(1, twinkle))})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    initStars();
  });

  resize();
  initStars();
  draw();

  // ── Smooth copy on code block click ─────────────
  document.querySelectorAll('pre').forEach(pre => {
    pre.style.position = 'relative';

    const btn = document.createElement('button');
    btn.textContent = 'copy';
    btn.style.cssText = `
      position: absolute; top: 10px; right: 12px;
      background: rgba(74,158,255,0.12);
      border: 1px solid rgba(74,158,255,0.25);
      color: rgba(126,200,227,0.8);
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 3px 9px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.18s;
      opacity: 0;
    `;

    pre.addEventListener('mouseenter', () => btn.style.opacity = '1');
    pre.addEventListener('mouseleave', () => btn.style.opacity = '0');

    btn.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.innerText || '';
      try {
        await navigator.clipboard.writeText(code);
        btn.textContent = '✓ copied';
        btn.style.color = 'rgba(92,219,138,0.9)';
        btn.style.borderColor = 'rgba(92,219,138,0.3)';
        setTimeout(() => {
          btn.textContent = 'copy';
          btn.style.color = 'rgba(126,200,227,0.8)';
          btn.style.borderColor = 'rgba(74,158,255,0.25)';
        }, 2000);
      } catch (e) {
        btn.textContent = 'error';
      }
    });

    pre.appendChild(btn);
  });

});
