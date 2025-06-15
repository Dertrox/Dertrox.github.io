// script.js

// Animación al hacer scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Toggle manual modo oscuro
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙 Modo Oscuro';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '1rem';
toggleBtn.style.right = '1rem';
toggleBtn.style.padding = '0.5rem 1rem';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '5px';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.zIndex = '1000';
toggleBtn.style.backgroundColor = '#000';
toggleBtn.style.color = '#fff';
document.body.appendChild(toggleBtn);

let darkMode = false;
toggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.classList.toggle('manual-dark', darkMode);
});
