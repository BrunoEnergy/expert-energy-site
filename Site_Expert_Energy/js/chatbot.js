// Carregar Chatbot automaticamente em todas as páginas
(function() {
    // HTML do chatbot
    const chatbotHTML = `
    <!-- Energy Bot - Expert Energy Chatbot -->
    <style>
      .chatbot-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 350px;
        max-width: calc(100vw - 40px);
        height: 500px;
        max-height: 500px;
        background: #fff;
        border: 2px solid #002b5c;
        border-radius: 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        display: none;
        flex-direction: column;
        overflow: hidden;
        animation: fadeIn 0.5s;
        z-index: 9999;
      }

      @media (max-width: 768px) {
        .chatbot-container {
          bottom: 10px;
          right: 10px;
          left: 10px;
          width: auto;
          max-width: none;
          height: 500px;
          max-height: 70vh;
          border-radius: 16px;
        }
      }

      @media (max-width: 480px) {
        .chatbot-container {
          bottom: 0;
          right: 0;
          left: 0;
          width: 100%;
          height: 500px;
          max-height: 70vh;
          border-radius: 16px 16px 0 0;
        }
      }

      @keyframes fadeIn {
        from {opacity: 0; transform: scale(0.9);}
        to {opacity: 1; transform: scale(1);}
      }

      .chatbot-header {
        background-color: #002b5c;
        color: #fff;
        padding: 15px;
        font-weight: bold;
        text-align: center;
        font-family: Arial;
        position: relative;
        font-size: 1rem;
      }

      @media (max-width: 480px) {
        .chatbot-header {
          padding: 12px;
          font-size: 0.9rem;
        }
      }

      .chatbot-header span {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 24px;
        line-height: 1;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .chatbot-body {
        flex: 1;
        padding: 15px;
        background: #f9f9f9;
        overflow-y: auto;
        font-family: Arial;
        display: flex;
        flex-direction: column;
        height: 250px;
        max-height: 250px;
      }

      @media (max-width: 480px) {
        .chatbot-body {
          padding: 12px;
          font-size: 0.9rem;
          height: 200px;
          max-height: 200px;
        }
      }

      .chatbot-footer {
        padding: 10px;
        background: #eee;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-content: center;
        height: 120px;
        max-height: 120px;
        overflow-y: auto;
      }

      @media (max-width: 480px) {
        .chatbot-footer {
          padding: 8px;
          gap: 4px;
          height: 100px;
          max-height: 100px;
        }
      }

      .chatbot-footer button {
        background-color: #0056a6;
        color: white;
        border: none;
        padding: 6px 10px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        font-size: 13px;
        white-space: nowrap;
      }

      @media (max-width: 480px) {
        .chatbot-footer button {
          padding: 5px 8px;
          font-size: 11px;
          border-radius: 8px;
        }
      }

      .chatbot-footer button:hover {
        background-color: #003d7a;
      }

      .chatbot-message {
        background-color: #0056a6;
        color: white;
        padding: 8px 12px;
        border-radius: 15px;
        margin: 5px 0;
        max-width: 80%;
        animation: fadeIn 0.4s;
        word-wrap: break-word;
        font-size: 0.95rem;
        line-height: 1.4;
      }

      @media (max-width: 480px) {
        .chatbot-message {
          font-size: 0.85rem;
          padding: 7px 10px;
          max-width: 85%;
        }
      }

      .user-message {
        background-color: #002b5c;
        align-self: flex-end;
      }

      .chatbot-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        border: 2px solid #002b5c;
        border-radius: 50%;
        width: 65px;
        height: 65px;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        z-index: 9998;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
      }

      @media (max-width: 768px) {
        .chatbot-toggle {
          bottom: 15px;
          right: 15px;
          width: 60px;
          height: 60px;
        }
      }

      @media (max-width: 480px) {
        .chatbot-toggle {
          bottom: 10px;
          right: 10px;
          width: 55px;
          height: 55px;
        }
      }
      
      .chatbot-toggle:hover {
        transform: scale(1.1);
      }

      .chatbot-toggle:active {
        transform: scale(0.95);
      }

      .chatbot-toggle img {
        width: 40px;
        height: 40px;
      }

      @media (max-width: 480px) {
        .chatbot-toggle img {
          width: 35px;
          height: 35px;
        }
      }

      .chatbot-input {
        display: flex;
        width: 100%;
        margin-top: 5px;
      }

      .chatbot-input input {
        flex: 1;
        border: none;
        padding: 10px;
        border-radius: 10px 0 0 10px;
        outline: none;
        font-size: 14px;
      }

      @media (max-width: 480px) {
        .chatbot-input input {
          padding: 8px;
          font-size: 13px;
        }
      }

      .chatbot-input button {
        background-color: #0056a6;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
        font-size: 16px;
      }

      @media (max-width: 480px) {
        .chatbot-input button {
          padding: 8px 12px;
          font-size: 14px;
        }
      }

      /* Scroll customizado */
      .chatbot-body::-webkit-scrollbar,
      .chatbot-footer::-webkit-scrollbar {
        width: 6px;
      }

      .chatbot-body::-webkit-scrollbar-track,
      .chatbot-footer::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      .chatbot-body::-webkit-scrollbar-thumb,
      .chatbot-footer::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px;
      }

      .chatbot-body::-webkit-scrollbar-thumb:hover,
      .chatbot-footer::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    </style>

    <div class="chatbot-toggle" id="chatbotToggle" onclick="window.toggleChatbot()">
      <img src="https://static.vecteezy.com/system/resources/previews/037/037/469/original/chatbot-icon-concept-chat-bot-or-chatterbot-robot-virtual-assistance-of-website-or-mobile-applications-illustration-vector.jpg" alt="Energy Bot" loading="lazy">
    </div>

    <div class="chatbot-container" id="chatbot">
      <div class="chatbot-header">
        Energy Bot • Expert Energy <span onclick="window.toggleChatbot()">×</span>
      </div>
      <div class="chatbot-body" id="chat-body">
        <div class="chatbot-message">
          Olá! Eu sou o Energy Bot, seu assistente da Expert Energy. <br><br>
          Estou aqui para te ajudar sobre gestão de energia, mercado livre e como gerar economia para sua empresa.<br><br>
          Como posso te ajudar hoje?
        </div>
      </div>

      <div class="chatbot-footer">
        <button onclick="window.sendOption('sobre')">Sobre a Expert</button>
        <button onclick="window.sendOption('mercado')">Mercado Livre</button>
        <button onclick="window.sendOption('servicos')">Serviços</button>
        <button onclick="window.sendOption('duvidas')">Dúvidas</button>
        <button onclick="window.sendOption('beneficios')">Benefícios</button>
        <button onclick="window.sendOption('migracao')">Migração</button>
        <button onclick="window.sendOption('economia')">Economia</button>
        <button onclick="window.openWhatsApp()">WhatsApp</button>
        <button onclick="window.openEmail()">E-mail</button>
      </div>

      <div class="chatbot-input">
        <input type="text" id="user-input" placeholder="Digite sua pergunta..." onkeypress="window.handleKey(event)">
        <button onclick="window.sendMessage()">➔</button>
      </div>
    </div>
    `;

    // Inserir HTML no body
    document.addEventListener('DOMContentLoaded', function() {
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    });

    // Funções do chatbot
    window.toggleChatbot = function () {
      const bot = document.getElementById('chatbot');
      const toggle = document.getElementById('chatbotToggle');
      if (bot) {
        const isOpen = bot.style.display === 'flex';
        bot.style.display = isOpen ? 'none' : 'flex';
        if (toggle) {
          toggle.style.display = isOpen ? 'flex' : 'none';
        }
      }
    };

    window.addMessage = function (content, sender = 'bot') {
      const chat = document.getElementById('chat-body');
      const msg = document.createElement('div');
      msg.className = sender === 'bot' ? 'chatbot-message' : 'chatbot-message user-message';
      msg.innerHTML = content;
      chat.appendChild(msg);
      chat.scrollTop = chat.scrollHeight;
    };

    window.openWhatsApp = function () {
      window.open('https://api.whatsapp.com/send?phone=551636201604', '_blank');
    };

    window.openEmail = function () {
      window.location.href = 'mailto:info@expertenergy.com.br';
    };

    window.sendOption = function (type) {
      const responses = {
        sobre: {
          user: 'Quero saber sobre a Expert Energy',
          bot: 'Somos uma empresa especializada em gestão e performance energética, com foco em tecnologia e inovação desde 2012.'
        },
        mercado: {
          user: 'O que é o Mercado Livre de Energia?',
          bot: 'No Mercado Livre, sua empresa pode escolher o fornecedor de energia e negociar preços mais baixos, economizando até 30%!'
        },
        servicos: {
          user: 'Quais são os serviços da Expert Energy?',
          bot: '• Gestão de energia no Mercado Livre.<br>• Plataforma Energy Link.<br>• Consultoria e eficiência energética.<br>• Soluções em geração renovável.<br>• Energia Solar.'
        },
        duvidas: { 
           user: 'Quais são as dúvidas comuns?',
           bot: '• O que é gestão de energia?<br>• Minha empresa pode migrar para o Mercado Livre?<br>• Quanto posso economizar?<br>• Como funciona o Energy Link?<br><br>Entre em contato pelo WhatsApp e tire suas dúvidas!' 
        },
        beneficios: {
          user: 'Quais são os benefícios?',
          bot: '• Redução de até 30% nos custos<br>• Liberdade de escolha de fornecedor<br>• Previsibilidade financeira<br>• Sustentabilidade e energia limpa'
        },
        migracao: {
          user: 'Como funciona a migração?',
          bot: 'A Expert cuida de todo o processo:<br>1. Análise de viabilidade<br>2. Adesão à CCEE<br>3. Negociação com fornecedores<br>4. Gestão contínua<br><br>Simples e seguro!'
        },
        economia: {
          user: 'Quanto posso economizar?',
          bot: 'Empresas no Mercado Livre economizam em média 20-30% com a gestão certa!<br><br>Faça uma <a href="analise.html" style="color: white; font-weight: bold;">análise gratuita</a> e descubra seu potencial de economia.'
        }
      };

      const r = responses[type];
      if (r) {
        addMessage(r.user, 'user');
        setTimeout(() => addMessage(r.bot, 'bot'), 500);
      }
    };

    window.sendMessage = async function () {
      const input = document.getElementById('user-input');
      const text = input.value.trim();
      if (!text) return;
      
      addMessage(text, 'user');
      input.value = '';
      
      // Mensagem de digitando
      addMessage('Digitando...', 'bot');

      try {
        const res = await fetch('https://energy-bot-backend.onrender.com/api/chat', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ prompt: text })
        });
        
        const data = await res.json();
        const reply = data.reply || 'Desculpe, não entendi. Pode reformular a pergunta?';
        
        // Remover "digitando..."
        const typing = document.querySelector('.chatbot-body .chatbot-message:last-child');
        if (typing && typing.textContent === 'Digitando...') typing.remove();
        
        addMessage(reply, 'bot');
      } catch (error) {
        // Remover "digitando..."
        const typing = document.querySelector('.chatbot-body .chatbot-message:last-child');
        if (typing && typing.textContent === 'Digitando...') typing.remove();
        
        addMessage('Ops! Tive um problema ao conectar.<br>Tente novamente ou entre em contato pelo WhatsApp!', 'bot');
      }
    };

    window.handleKey = function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    };
})();
