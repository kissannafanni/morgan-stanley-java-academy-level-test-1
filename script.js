// Nav scroll shadow
const navWrap = document.querySelector('.nav-wrap');
window.addEventListener('scroll', () => {
  navWrap.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  toggle.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Waitlist form
const form = document.getElementById('waitlistForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.hidden = true;
  success.hidden = false;
  // In production: POST to your backend / email service here
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll('.step, .value-card, .farmer-card, .mission-text, .mission-visual').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
