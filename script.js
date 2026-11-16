/**
 * Rodrigo | Portfólio Pessoal - Agenda 10 (EAD TEC / CPS)
 * Script Interativo (JavaScript ES6+)
 * 
 * Recursos implementados:
 * 1. Alternador de Tema Claro / Escuro (Dark/Light Mode) com persistência LocalStorage
 * 2. Botão flutuante "Voltar ao Topo" dinâmico com scroll suave
 * 3. Validação interativa do formulário de contato com feedback visual Bootstrap
 * 4. Fechamento automático do menu mobile ao clicar em um link
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. RECURSO NOVO: MODO CLARO / ESCURO (DARK MODE)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  const htmlElement = document.documentElement;

  // Verifica preferência prévia salva no navegador
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });

  function applyTheme(theme) {
    htmlElement.setAttribute('data-bs-theme', theme);
    if (theme === 'dark') {
      themeIcon.className = 'bi bi-sun-fill text-warning';
      if (themeText) themeText.textContent = 'Modo Claro';
      themeToggleBtn.setAttribute('title', 'Mudar para Modo Claro');
    } else {
      themeIcon.className = 'bi bi-moon-stars-fill text-secondary';
      if (themeText) themeText.textContent = 'Modo Escuro';
      themeToggleBtn.setAttribute('title', 'Mudar para Modo Escuro');
    }
  }

  // ==========================================
  // 2. BOTÃO VOLTAR AO TOPO (SCROLL TO TOP)
  // ==========================================
  const btnTop = document.getElementById('btn-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTop.style.display = 'flex';
    } else {
      btnTop.style.display = 'none';
    }
  });

  btnTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==========================================
  // 3. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
      } else {
        contactForm.classList.remove('was-validated');
        
        // Exibe alerta de sucesso
        formAlert.classList.remove('d-none');
        formAlert.classList.add('d-flex');
        
        // Limpa campos
        contactForm.reset();

        // Oculta feedback após 5 segundos
        setTimeout(() => {
          formAlert.classList.add('d-none');
          formAlert.classList.remove('d-flex');
        }, 5000);
      }
    });
  }

  // ==========================================
  // 4. FECHAR MENU MOBILE AO CLICAR EM LINK
  // ==========================================
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

});
