// ==================== COOKIE CONSENT & GOOGLE ANALYTICS ====================

/**
 * Sistema de Consentimento de Cookies
 * - Exibe banner para usuário aceitar/recusar cookies
 * - Armazena escolha no localStorage
 * - Inicia Google Analytics apenas após consentimento
 * - Conformidade com LGPD e GDPR
 */

class CookieConsent {
    constructor() {
        this.cookieName = 'expertEnergyCookieConsent';
        this.gaId = 'G-HDRJHG0J5G';
        this.init();
    }

    init() {
        // Verifica se já existe consentimento
        const consent = this.getConsent();
        
        if (consent === null) {
            // Usuário ainda não decidiu - mostra banner
            this.showBanner();
        } else if (consent === true) {
            // Usuário aceitou - inicia Google Analytics
            this.initGoogleAnalytics();
        }
        // Se consent === false, não faz nada (usuário recusou)
    }

    showBanner() {
        // Aguarda DOM carregar
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.createBanner());
        } else {
            this.createBanner();
        }
    }

    createBanner() {
        // Cria estrutura HTML do banner
        const banner = document.createElement('div');
        banner.className = 'cookie-consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Consentimento de Cookies');
        
        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <h3 class="cookie-consent-title">
                        <i class="fas fa-cookie-bite"></i>
                        Cookies e Privacidade
                    </h3>
                    <p class="cookie-consent-description">
                        Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site 
                        e personalizar conteúdo. Ao clicar em "Aceitar", você concorda com o uso de 
                        cookies analíticos. Seus dados são tratados conforme nossa 
                        <a href="privacidade.html" id="privacyLink">Política de Privacidade</a> e a LGPD.
                    </p>
                </div>
                <div class="cookie-consent-actions">
                    <button class="cookie-consent-btn cookie-consent-btn-decline" id="cookieDecline">
                        <i class="fas fa-times"></i>
                        Recusar
                    </button>
                    <button class="cookie-consent-btn cookie-consent-btn-accept" id="cookieAccept">
                        <i class="fas fa-check"></i>
                        Aceitar Cookies
                    </button>
                </div>
            </div>
        `;

        // Adiciona ao body
        document.body.appendChild(banner);

        // Mostra banner com animação
        setTimeout(() => banner.classList.add('show'), 100);

        // Event listeners
        document.getElementById('cookieAccept').addEventListener('click', () => this.accept());
        document.getElementById('cookieDecline').addEventListener('click', () => this.decline());
    }

    accept() {
        // Salva consentimento
        this.saveConsent(true);
        
        // Inicia Google Analytics
        this.initGoogleAnalytics();
        
        // Remove banner
        this.removeBanner();
        
        // Feedback visual (opcional)
        this.showToast('✓ Cookies aceitos. Obrigado!', 'success');
    }

    decline() {
        // Salva recusa
        this.saveConsent(false);
        
        // Remove banner
        this.removeBanner();
        
        // Feedback visual (opcional)
        this.showToast('Cookies analíticos desativados.', 'info');
    }

    saveConsent(accepted) {
        const consentData = {
            accepted: accepted,
            timestamp: new Date().toISOString(),
            version: '1.0'
        };
        localStorage.setItem(this.cookieName, JSON.stringify(consentData));
    }

    getConsent() {
        const data = localStorage.getItem(this.cookieName);
        if (!data) return null;
        
        try {
            const consent = JSON.parse(data);
            return consent.accepted;
        } catch (e) {
            return null;
        }
    }

    removeBanner() {
        const banner = document.querySelector('.cookie-consent-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => banner.remove(), 400);
        }
    }

    initGoogleAnalytics() {
        // Evita inicializar múltiplas vezes
        if (window.gaInitialized) return;
        
        console.log('✓ Google Analytics iniciado com consentimento');
        
        // Carrega script do Google Analytics
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.gaId}`;
        document.head.appendChild(script1);

        // Inicializa Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', this.gaId, {
            'anonymize_ip': true, // Anonimiza IP (LGPD/GDPR)
            'cookie_flags': 'SameSite=None;Secure'
        });

        // Define gtag globalmente
        window.gtag = gtag;
        window.gaInitialized = true;
    }

    showPrivacyInfo() {
        // Exibe informações sobre privacidade
        const message = `
            POLÍTICA DE COOKIES E PRIVACIDADE
            
            A Expert Energy utiliza cookies analíticos (Google Analytics) para:
            • Entender como visitantes usam nosso site
            • Melhorar a experiência do usuário
            • Analisar o desempenho de conteúdo
            
            DADOS COLETADOS:
            • Páginas visitadas
            • Tempo de permanência
            • Origem do tráfego
            • Dispositivo e navegador
            
            SEUS DIREITOS (LGPD):
            • Acessar seus dados
            • Solicitar exclusão
            • Revogar consentimento
            
            CONTATO:
            contato@expertenergy.com.br
            (16) 3620-1604
            
            Os dados são anônimos e não compartilhados com terceiros.
        `;
        
        alert(message);
    }

    showToast(message, type = 'info') {
        // Cria toast notification simples
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#48BB78' : '#4299E1'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10001;
            font-size: 0.9375rem;
            font-weight: 500;
            animation: slideIn 0.3s ease;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Remove após 3 segundos
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Método público para revogar consentimento
    static revokeConsent() {
        localStorage.removeItem('expertEnergyCookieConsent');
        alert('Consentimento de cookies revogado. Recarregue a página para ver o banner novamente.');
        window.location.reload();
    }
}

// Animações CSS inline para toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Inicializa automaticamente
const cookieConsent = new CookieConsent();

// Expõe no console para debug (pode remover em produção)
window.CookieConsent = CookieConsent;

// Exemplo de uso: revogar consentimento via console
// CookieConsent.revokeConsent();
