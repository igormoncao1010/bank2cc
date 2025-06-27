const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav').querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});





function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    } else {
      el.classList.remove('active'); // Remove se quiser efeito ao sair da tela
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Dispara ao carregar a página





const btnAbrir1 = document.getElementById('btnSolicitar1');
const modal1 = document.getElementById('modalProposta1');
const btnFechar1 = document.getElementById('fecharModal1');
const form1 = document.getElementById('formProposta1');

btnAbrir1.addEventListener('click', () => {
  modal1.classList.add('show');
});

btnFechar1.addEventListener('click', () => {
  modal1.classList.remove('show');
});

form1.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome1').value;
  const email = document.getElementById('email1').value;
  const whatsapp = document.getElementById('whatsapp1').value;
  const cargo = document.getElementById('cargo1').value;

  const mensagem = `Olá! Gostaria de solicitar uma proposta:%0A
👤 Nome: ${nome}%0A
📧 Email: ${email}%0A
📱 WhatsApp: ${whatsapp}%0A
💼 Cargo: ${cargo}`;

  const numero = "5561996067198";
  const link = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(link, '_blank');

  modal1.classList.remove('show');
  form1.reset();
});
