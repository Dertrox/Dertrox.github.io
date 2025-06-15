// script.js
// Inicia AOS
AOS.init({ once: true, duration: 800 });

// Typing effect en hero
const words = ['Automatización', 'Embebidos', 'Hardware‑Software'];
let idx = 0, pos = 0, forward = true;
const typer = () => {
  const element = document.querySelector('.typing');
  element.textContent = words[idx].slice(0, pos);
  if (forward) pos++ ; else pos--;
  if (pos === words[idx].length || pos === 0) {
    forward = !forward;
    if (!forward) idx = (idx + 1) % words.length;
  }
  setTimeout(typer, forward ? 150 : 100);
};
typer();

// Toggle menú móvil
document.querySelector('.toggle-btn').onclick = () => {
  document.querySelector('.nav-links').classList.toggle('open');
};

// Toggle modo oscuro
document.getElementById('dark-toggle').onclick = () => {
  document.body.classList.toggle('dark');
};
