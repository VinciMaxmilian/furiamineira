// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

// Formulário de contato (placeholder – sem backend)
document.querySelector('#contato-form')?.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  document.querySelector('#form-ok').hidden = false;
});
