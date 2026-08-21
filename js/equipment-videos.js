/**
 * Expert Energy - Equipment Videos Manager
 * Gerenciamento de vídeos de demonstração dos equipamentos
 */

// Mapeamento de vídeos por equipamento (ID do YouTube)
const equipmentVideos = {
    'gerador-estatico-var': '', // Sem vídeo ainda
    'painel-controlador': '', // Sem vídeo ainda
    'kfp3': '', // Sem vídeo ainda
    'gateway-gt202': '', // Sem vídeo ainda
    'gateway-gt204': '88hZyZCeZTs',
    'psm7300': '' // Sem vídeo ainda
};

/**
 * Abre vídeo do YouTube ou mostra aviso
 */
function openEquipmentVideo(equipmentId) {
    const videoId = equipmentVideos[equipmentId];
    
    if (videoId && videoId.trim() !== '') {
        // Abre vídeo no YouTube em nova aba
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    } else {
        // Mostra aviso elegante
        showVideoNotAvailableNotice();
    }
}

/**
 * Exibe aviso de vídeo não disponível
 */
function showVideoNotAvailableNotice() {
    // Remove aviso anterior se existir
    const existingNotice = document.querySelector('.video-notice');
    if (existingNotice) {
        existingNotice.remove();
    }
    
    // Cria novo aviso
    const notice = document.createElement('div');
    notice.className = 'video-notice';
    notice.innerHTML = `
        <div class="video-notice-content">
            <i class="fas fa-video-slash"></i>
            <h4>Vídeo em Produção</h4>
            <p>Estamos preparando um vídeo demonstrativo deste equipamento.<br>Em breve estará disponível!</p>
            <button onclick="closeVideoNotice()" class="btn-close-notice">
                <i class="fas fa-times"></i> Fechar
            </button>
        </div>
    `;
    
    document.body.appendChild(notice);
    
    // Adiciona animação de entrada
    setTimeout(() => notice.classList.add('show'), 10);
    
    // Remove automaticamente após 5 segundos
    setTimeout(() => {
        closeVideoNotice();
    }, 5000);
}

/**
 * Fecha aviso de vídeo
 */
function closeVideoNotice() {
    const notice = document.querySelector('.video-notice');
    if (notice) {
        notice.classList.remove('show');
        setTimeout(() => notice.remove(), 300);
    }
}

// Fecha aviso ao clicar fora do conteúdo
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('video-notice')) {
        closeVideoNotice();
    }
});

// Fecha aviso com tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideoNotice();
    }
});
