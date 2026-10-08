// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

// Dropdown "Páginas"
document.querySelectorAll('.dropdown').forEach(dd => {
  const btn = dd.querySelector('.dropdown-toggle');
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = dd.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown.open').forEach(dd => {
    dd.classList.remove('open');
    dd.querySelector('.dropdown-toggle').setAttribute('aria-expanded', false);
  });
});

// Formulário de contato (placeholder – sem backend)
document.querySelector('#contato-form')?.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  document.querySelector('#form-ok').hidden = false;
});
