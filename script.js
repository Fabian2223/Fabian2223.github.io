// ===================================
//      INTERACCIÓN Y FUNCIONES JS
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar animaciones AOS (al hacer scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true
      });
    }
  
    // ==============================
    //       Menú Hamburguesa
    // ==============================
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav__list');
  
    if (menuToggle && navList) {
      menuToggle.addEventListener('click', () => {
        navList.classList.toggle('nav__list--active');
      });
  
      document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
          navList.classList.remove('nav__list--active');
        });
      });
    }
  
    // ==============================
    //       Glide.js Testimonios
    // ==============================
    if (typeof Glide !== 'undefined') {
      new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 5000,
        hoverpause: true
      }).mount();
    }
  
    // ==============================
    //     Validación del Formulario
    // ==============================
    const form = document.getElementById('form-contacto');
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();
  
        if (!nombre || !email || !mensaje) {
          alert('Por favor, completa todos los campos.');
          return;
        }
  
        if (!validateEmail(email)) {
          alert('Por favor, introduce un email válido.');
          return;
        }
  
        alert('Mensaje enviado con éxito (simulado).');
        form.reset();
      });
    }
  
    function validateEmail(email) {
      return /^\S+@\S+\.\S+$/.test(email);
    }
  
    // ==============================
    //    Filtro dinámico Portafolio
    // ==============================
    const filters = document.querySelectorAll('.portfolio__filter');
    const items = document.querySelectorAll('.portfolio__item');
  
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        filters.forEach(btn => btn.classList.remove('portfolio__filter--active'));
        filter.classList.add('portfolio__filter--active');
  
        const selected = filter.getAttribute('data-filter');
  
        items.forEach(item => {
          const category = item.getAttribute('data-category');
  
          if (selected === 'all' || selected === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
  