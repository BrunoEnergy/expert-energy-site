// Expert Energy - JavaScript Principal

// ==================== TEMA CLARO/ESCURO ====================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector('.theme-toggle-icon');
    
    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Toggle tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.innerHTML = theme === 'light' 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
    }
}

// ==================== HEADER SCROLL ====================
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ==================== NAVEGAÇÃO SUAVE ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignorar links vazios ou apenas "#"
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== MENU MOBILE ====================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Criar overlay se não existir
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }
    
    if (mobileMenuToggle && navMenu) {
        // Toggle menu ao clicar no botão
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Fechar menu ao clicar no overlay
        overlay.addEventListener('click', () => {
            closeMenu();
        });
        
        // Fechar menu ao clicar em link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
        
        // Fechar menu com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }
    
    function toggleMenu() {
        const isActive = navMenu.classList.contains('active');
        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    function openMenu() {
        navMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll do body
        
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    }
    
    function closeMenu() {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
        
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

// ==================== ANIMAÇÕES DE SCROLL ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animar cards e seções
    document.querySelectorAll('.card, .solution-card, .feature-item, .process-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==================== CONTADOR DE ESTATÍSTICAS ====================
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number, .stat-preview-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => observer.observe(stat));
    
    function animateCounter(element) {
        const text = element.textContent;
        const hasPercent = text.includes('%');
        const hasPlus = text.includes('+');
        const value = parseInt(text.replace(/\D/g, ''));
        
        if (isNaN(value)) return;
        
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                current = value;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current).toString();
            if (hasPercent) displayValue += '%';
            if (hasPlus) displayValue += '+';
            
            element.textContent = displayValue;
        }, duration / steps);
    }
}

/* Animação de estatísticas - VERSÃO CORRIGIDA */
(function(){
  // Pular elementos com data-no-animate
  const stats = document.querySelectorAll('.stat-number:not([data-no-animate])');
  
  if(stats.length === 0) return;

  stats.forEach(el => {
    el.dataset.original = el.textContent.trim();
  });

  const animateStat = (el, duration = 1400) => {
    const original = el.dataset.original;
    
    // Extrair número com regex que preserva caracteres especiais
    const numberMatch = original.match(/(\d+(?:[.,]\d+)?)/);
    
    if(!numberMatch) {
      el.textContent = original;
      return;
    }

    const numStr = numberMatch[0];
    const beforeNum = original.substring(0, numberMatch.index);
    const afterNum = original.substring(numberMatch.index + numStr.length);
    
    const cleanNum = numStr.replace(/\./g, '').replace(',', '.');
    const target = parseFloat(cleanNum) || 0;
    
    let startTime = null;
    
    const step = (now) => {
      if(!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = progress * target;
      
      const display = Math.round(current).toString();
      el.textContent = beforeNum + display + afterNum;
      
      if(progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        animateStat(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  stats.forEach(stat => observer.observe(stat));
})();

// Preservar texto original em elementos com data-no-animate (não animar)
(function(){
  const noAnimateStats = document.querySelectorAll('.stat-number[data-no-animate]');
  noAnimateStats.forEach(el => {
    // Já mantém o texto original, sem fazer nada
    el.dataset.original = el.textContent.trim();
  });
})();

// ==================== VALIDAÇÃO DE FORMULÁRIO ====================
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            const errorElement = field.parentElement.querySelector('.error-message');
            
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#E53E3E';
                
                if (!errorElement) {
                    const error = document.createElement('p');
                    error.className = 'error-message';
                    error.style.color = '#E53E3E';
                    error.style.fontSize = '0.875rem';
                    error.style.marginTop = '0.5rem';
                    error.textContent = 'Este campo é obrigatório';
                    field.parentElement.appendChild(error);
                }
            } else {
                field.style.borderColor = '';
                if (errorElement) {
                    errorElement.remove();
                }
            }
        });
        
        // Validar email
        const emailFields = form.querySelectorAll('input[type="email"]');
        emailFields.forEach(field => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (field.value && !emailRegex.test(field.value)) {
                isValid = false;
                field.style.borderColor = '#E53E3E';
                
                const errorElement = field.parentElement.querySelector('.error-message');
                if (!errorElement) {
                    const error = document.createElement('p');
                    error.className = 'error-message';
                    error.style.color = '#E53E3E';
                    error.style.fontSize = '0.875rem';
                    error.style.marginTop = '0.5rem';
                    error.textContent = 'Digite um email válido';
                    field.parentElement.appendChild(error);
                }
            }
        });
        
        if (isValid) {
            showSuccessMessage(form);
        }
    });
}

function showSuccessMessage(form) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        background: #48BB78;
        color: white;
        padding: 1.5rem;
        border-radius: 12px;
        margin-top: 1.5rem;
        text-align: center;
        font-weight: 600;
        animation: fadeInUp 0.5s ease;
    `;
    successDiv.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
        <p style="margin: 0;">Formulário enviado com sucesso! Entraremos em contato em breve.</p>
    `;
    
    form.appendChild(successDiv);
    form.reset();
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ==================== UPLOAD DE ARQUIVO ====================
function initFileUpload() {
    const fileUploadAreas = document.querySelectorAll('.file-upload');
    
    fileUploadAreas.forEach(area => {
        const input = area.querySelector('input[type="file"]');
        if (!input) return;
        
        area.addEventListener('click', () => {
            input.click();
        });
        
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            area.style.borderColor = 'var(--primary-blue)';
            area.style.background = 'var(--bg-tertiary)';
        });
        
        area.addEventListener('dragleave', () => {
            area.style.borderColor = '';
            area.style.background = '';
        });
        
        area.addEventListener('drop', (e) => {
            e.preventDefault();
            area.style.borderColor = '';
            area.style.background = '';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                input.files = files;
                updateFileUploadUI(area, files[0]);
            }
        });
        
        input.addEventListener('change', () => {
            if (input.files.length > 0) {
                updateFileUploadUI(area, input.files[0]);
            }
        });
    });
}

function updateFileUploadUI(area, file) {
    const fileName = area.querySelector('.file-name');
    const icon = area.querySelector('.file-upload-icon');
    
    if (fileName) {
        fileName.textContent = file.name;
    }
    
    if (icon) {
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
    }
    
    area.style.borderColor = '#48BB78';
}

// ==================== CALCULADORA DE ECONOMIA ====================
function initEconomyCalculator() {
    const calculator = document.getElementById('economyCalculator');
    if (!calculator) return;
    
    const consumptionInput = document.getElementById('consumption');
    const priceInput = document.getElementById('price');
    const resultDiv = document.getElementById('calculatorResult');
    
    function calculateSavings() {
        const consumption = parseFloat(consumptionInput.value);
        const price = parseFloat(priceInput.value);
        
        if (isNaN(consumption) || isNaN(price) || consumption <= 0 || price <= 0) {
            resultDiv.style.display = 'none';
            return;
        }
        
        const currentCost = consumption * price;
        const savingsPercentage = 0.30; // 30% de economia
        const monthlySavings = currentCost * savingsPercentage;
        const yearlySavings = monthlySavings * 12;
        
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <div style="background: var(--bg-tertiary); padding: 2rem; border-radius: 16px; text-align: center;">
                <h3 style="color: var(--text-primary); margin-bottom: 1.5rem;">Sua Economia Potencial</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">
                            R$ ${monthlySavings.toFixed(2).replace('.', ',')}
                        </div>
                        <div style="color: var(--text-secondary);">Por mês</div>
                    </div>
                    <div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">
                            R$ ${yearlySavings.toFixed(2).replace('.', ',')}
                        </div>
                        <div style="color: var(--text-secondary);">Por ano</div>
                    </div>
                </div>
                <p style="margin-top: 1.5rem; color: var(--text-secondary);">
                    * Cálculo baseado em economia média de 30% com migração para o mercado livre de energia.
                </p>
            </div>
        `;
    }
    
    consumptionInput.addEventListener('input', calculateSavings);
    priceInput.addEventListener('input', calculateSavings);
}

// ==================== NAVEGAÇÃO ATIVA ====================
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ==================== FAQ ACCORDION ====================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fechar todos os outros
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                });
                
                // Toggle atual
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initHeaderScroll();
    initSmoothScroll();
    initMobileMenu();
    initScrollAnimations();
    // initStatsCounter();  <-- COMENTE ESTA LINHA
    initFileUpload();
    initEconomyCalculator();
    setActiveNavigation();
    initFAQ();
    
    // Validar formulários específicos
    validateForm('analysisForm');
    validateForm('contactForm');
    
    console.log('Expert Energy - Site carregado com sucesso!');
});

// ==================== UTILITÁRIOS ====================
// Formatar moeda
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Formatar telefone
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 11) {
        value = value.slice(0, 11);
    }
    
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
        value = value.replace(/^(\d*)/, '($1');
    }
    
    input.value = value;
}

// Aplicar máscara de telefone em inputs
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', () => formatPhone(input));
});
