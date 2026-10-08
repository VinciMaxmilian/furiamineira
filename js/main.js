// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

// Confirmação após envio do formulário (FormSubmit redireciona com ?enviado=1)
if (new URLSearchParams(location.search).get('enviado')) {
  const ok = document.querySelector('#form-enviado');
  if (ok) { ok.hidden = false; ok.scrollIntoView(); }
}
