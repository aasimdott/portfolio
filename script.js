function createHoles() {
  const rule = document.querySelector('.margin-rule');
  if (!rule) return;
  const count = Math.ceil(window.innerHeight / 90) + 2;
  rule.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const hole = document.createElement('div');
    hole.className = 'hole';
    hole.style.top = 50 + i * 90 + 'px';
    rule.appendChild(hole);
  }
}

// ===== Scroll reveal =====
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 110) {
      el.style.transitionDelay = (i % 4) * 0.08 + 's';
      el.classList.add('active');
    }
  });
}

// ===== Mobile menu =====
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ===== Active nav tab =====
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.tab-link');
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });
  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ===== Contact form =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const msg = document.getElementById('successMsg');
  const original = btn.textContent;
  btn.textContent = 'sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    msg.classList.remove('hidden');
    e.target.reset();
    setTimeout(() => msg.classList.add('hidden'), 5000);
  }, 1200);
}

// ===== Smooth scroll for in-page links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

createHoles();
window.addEventListener('resize', createHoles);
window.addEventListener('scroll', () => {
  revealOnScroll();
  updateActiveNav();
});
window.addEventListener('load', revealOnScroll);