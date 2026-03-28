// Auto-clear form after Formspree submit
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function() {
    setTimeout(() => {
      form.reset();
    }, 500);
  });
}

// Fade in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.product-card, .timeline-item, .process-step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Nav scroll effect
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.borderBottomColor = window.scrollY > 60
    ? 'rgba(196,65,12,0.4)' : 'rgba(196,65,12,0.25)';
});