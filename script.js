const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const service = String(data.get('service') || '').trim();
  const message = String(data.get('message') || '').trim();

  const text = [
    'Bonjour CYBERTECH BURKINA,',
    '',
    'Je souhaite vous contacter au sujet d’un projet.',
    'Nom : ' + name,
    'Téléphone : ' + phone,
    'Besoin : ' + service,
    'Description : ' + message
  ].join('\n');

  // Numéro WhatsApp professionnel affiché sur le logo et le site.
  const whatsappUrl = 'https://wa.me/22678179210?text=' + encodeURIComponent(text);
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
