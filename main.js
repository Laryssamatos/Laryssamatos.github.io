document.addEventListener('DOMContentLoaded', () => {
    
    // 1. EFEITO INTERATIVO 1: Alternador de Modo Escuro / Dark Mode
    const themeToggle = document.getElementById('dark-theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if(document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Modo Claro';
        } else {
            themeToggle.textContent = 'Modo Escuro';
        }
    });

    // 2. EFEITO INTERATIVO 2: Menu Mobile de Navegação Retrátil
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // 3. EFEITO INTERATIVO 3: Accordion das Dúvidas Frequentes (FAQ)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isVisible = content.style.display === 'block';
            
            // Fecha todos antes de abrir o clicado
            document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
            
            if (!isVisible) {
                content.style.display = 'block';
            }
        });
    });

    // 4. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Bloqueia o envio do navegador para fazer o teste antes
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Expressão Regular simples para validar formato do E-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nome.length < 3) {
                feedback.textContent = "Por favor, digite seu nome completo (mínimo 3 letras).";
                feedback.className = "feedback-message error";
                return;
            }

            if (!emailRegex.test(email)) {
                feedback.textContent = "Por favor, digite um e-mail válido.";
                feedback.className = "feedback-message error";
                return;
            }

            if (mensagem.length < 5) {
                feedback.textContent = "A mensagem deve ser um pouco mais detalhada.";
                feedback.className = "feedback-message error";
                return;
            }

            // Se tudo estiver certo!
            feedback.textContent = "Sucesso! Sua mensagem foi validada e enviada para o BioLabs.";
            feedback.className = "feedback-message success";
            form.reset();
        });
    }
});
