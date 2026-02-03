# 🔧 Guia de Manutenção e Personalização

## 📋 Índice Rápido

1. [Atualizar Informações de Contato](#atualizar-contatos)
2. [Modificar Respostas do Chatbot](#modificar-chatbot)
3. [Alterar Cores do Site](#alterar-cores)
4. [Adicionar Nova Página](#adicionar-pagina)
5. [Atualizar Redes Sociais](#redes-sociais)
6. [Modificar Menu](#modificar-menu)
7. [Troubleshooting Comum](#troubleshooting)

---

## 🔄 1. ATUALIZAR INFORMAÇÕES DE CONTATO {#atualizar-contatos}

### Onde Atualizar:

**Footer (presente em TODAS as páginas HTML):**

Procure por esta seção em cada arquivo `.html`:

```html
<div class="footer-section">
    <h3>Contato</h3>
    <ul class="footer-links">
        <li>
            <i class="fas fa-map-marker-alt"></i>
            Ribeirão Preto, SP  <!-- ALTERE AQUI -->
        </li>
        <li>
            <i class="fas fa-phone"></i>
            <a href="tel:+551636201604">(16) 3620-1604</a>  <!-- ALTERE AQUI -->
        </li>
        <li>
            <i class="fas fa-envelope"></i>
            <a href="mailto:info@expertenergy.com.br">info@expertenergy.com.br</a>  <!-- ALTERE AQUI -->
        </li>
        <li>
            <i class="fab fa-whatsapp"></i>
            <a href="https://api.whatsapp.com/send?phone=551636201604" target="_blank">WhatsApp</a>  <!-- ALTERE AQUI -->
        </li>
    </ul>
</div>
```

**Chatbot (`js/chatbot.js`):**

Procure pelas funções:

```javascript
// Linha ~218
window.openWhatsApp = function () {
  window.open('https://api.whatsapp.com/send?phone=551636201604', '_blank');  // ALTERE AQUI
};

// Linha ~222
window.openEmail = function () {
  window.location.href = 'mailto:info@expertenergy.com.br';  // ALTERE AQUI
};
```

### Dica Rápida:
Use "Find and Replace" no seu editor para atualizar em massa:
- Buscar: `551636201604`
- Substituir: `seu_novo_numero`

---

## 🤖 2. MODIFICAR RESPOSTAS DO CHATBOT {#modificar-chatbot}

### Arquivo: `js/chatbot.js`

Procure pelo objeto `responses` (linha ~226):

```javascript
window.sendOption = function (type) {
  const responses = {
    sobre: {
      user: 'Quero saber sobre a Expert Energy',
      bot: 'Somos uma empresa especializada...'  // ALTERE AQUI
    },
    mercado: {
      user: 'O que é o Mercado Livre de Energia?',
      bot: 'No Mercado Livre, sua empresa...'  // ALTERE AQUI
    },
    // ... continue alterando
  };
```

### Adicionar Nova Opção:

1. Adicione um novo botão no HTML (linha ~150):
```javascript
<button onclick="window.sendOption('nova_opcao')">Novo Botão</button>
```

2. Adicione a resposta no objeto `responses`:
```javascript
nova_opcao: {
  user: 'Texto que aparece quando usuário clica',
  bot: 'Resposta do bot. Pode usar <br> para quebra de linha!'
}
```

---

## 🎨 3. ALTERAR CORES DO SITE {#alterar-cores}

### Arquivo: `css/style.css`

Procure por `:root` (linha ~2):

```css
:root {
    /* Cores Primárias - Azul Moderno */
    --primary-blue: #0066CC;      /* COR PRINCIPAL - ALTERE AQUI */
    --primary-dark: #004C99;       /* AZUL ESCURO - ALTERE AQUI */
    --primary-light: #3399FF;      /* AZUL CLARO - ALTERE AQUI */
    --accent-blue: #00A3FF;        /* ACCENT - ALTERE AQUI */
    
    /* Cores de Fundo - Modo Claro */
    --bg-primary: #FFFFFF;         /* FUNDO PRINCIPAL */
    --bg-secondary: #F8FAFB;       /* FUNDO SECUNDÁRIO */
    --bg-tertiary: #EBF5FF;        /* FUNDO TERCIÁRIO */
    
    /* Cores de Texto - Modo Claro */
    --text-primary: #1A202C;       /* TEXTO PRINCIPAL */
    --text-secondary: #4A5568;     /* TEXTO SECUNDÁRIO */
    --text-tertiary: #718096;      /* TEXTO TERCIÁRIO */
}
```

### Modo Escuro:

Procure por `[data-theme="dark"]` (linha ~30):

```css
[data-theme="dark"] {
    --bg-primary: #0F1419;         /* FUNDO MODO ESCURO */
    --bg-secondary: #1A1F29;       /* FUNDO SECUNDÁRIO ESCURO */
    --text-primary: #F7FAFC;       /* TEXTO MODO ESCURO */
    /* ... */
}
```

### Chatbot:

No arquivo `js/chatbot.js`, procure por `.chatbot-header` (linha ~28):

```css
.chatbot-header {
  background-color: #002b5c;  /* COR DO HEADER - ALTERE AQUI */
  color: #fff;
}
```

---

## ➕ 4. ADICIONAR NOVA PÁGINA {#adicionar-pagina}

### Passo 1: Criar novo arquivo HTML

Copie uma página existente como template:
```bash
cp consultoria.html nova-pagina.html
```

### Passo 2: Atualizar conteúdo

- Altere o `<title>` na tag `<head>`
- Altere o conteúdo do `<section class="page-header">`
- Atualize as seções com seu conteúdo

### Passo 3: Adicionar no menu

Em **TODAS as páginas**, adicione no `<ul class="nav-menu">`:

```html
<li><a href="nova-pagina.html">Nova Página</a></li>
```

### Passo 4: Adicionar no footer

Em **TODAS as páginas**, adicione na coluna apropriada:

```html
<div class="footer-section">
    <h3>Soluções</h3> <!-- ou Empresa -->
    <ul class="footer-links">
        <!-- ... links existentes ... -->
        <li><a href="nova-pagina.html">Nova Página</a></li>
    </ul>
</div>
```

### Passo 5: Verificar se tem:
- ✅ `<script src="js/main.js"></script>`
- ✅ `<script src="js/chatbot.js"></script>`

---

## 📱 5. ATUALIZAR REDES SOCIAIS {#redes-sociais}

### Em TODAS as páginas, no footer:

```html
<div class="social-links">
    <a href="https://linkedin.com/company/sua-empresa" class="social-link" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://instagram.com/sua_empresa" class="social-link" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://facebook.com/sua.empresa" class="social-link" target="_blank">
        <i class="fab fa-facebook"></i>
    </a>
    <a href="https://youtube.com/@suaempresa" class="social-link" target="_blank">
        <i class="fab fa-youtube"></i>
    </a>
</div>
```

Substitua os `#` pelos links reais das redes sociais.

---

## 🧭 6. MODIFICAR MENU {#modificar-menu}

### Em TODAS as páginas HTML:

Procure por `<ul class="nav-menu">`:

```html
<ul class="nav-menu">
    <li><a href="index.html">Início</a></li>
    <li><a href="index.html#solucoes">Soluções</a></li>
    <li><a href="cases.html">Cases</a></li>
    <li><a href="analise.html">Análise Gratuita</a></li>
    <li><a href="index.html#contato">Contato</a></li>
</ul>
```

### Para adicionar item:
```html
<li><a href="nova-pagina.html">Novo Item</a></li>
```

### Para remover item:
Simplesmente delete a linha `<li>...</li>`

---

## 🔧 7. TROUBLESHOOTING COMUM {#troubleshooting}

### Problema 1: Chatbot não aparece

**Causa:** Script não carregado
**Solução:** Verifique se tem no final do HTML:
```html
<script src="js/chatbot.js"></script>
```

### Problema 2: Menu mobile não abre

**Causa:** JavaScript com erro ou CSS incorreto
**Solução:**
1. Abra DevTools (F12)
2. Vá na aba "Console"
3. Veja se há erros em vermelho
4. Verifique se `css/style.css` está carregando

### Problema 3: Modo escuro não funciona

**Causa:** Theme toggle não inicializado
**Solução:** Verifique se `js/main.js` está carregando antes de `chatbot.js`

### Problema 4: Footer diferente em algumas páginas

**Causa:** Footer não atualizado
**Solução:** Copie o footer de `footer-template.html` ou `index.html` e cole nas outras páginas

### Problema 5: Links quebrados

**Causa:** Caminho relativo incorreto
**Solução:** Use caminhos relativos à raiz:
- ✅ `href="index.html"`
- ❌ `href="/index.html"`
- ❌ `href="../index.html"`

### Problema 6: Imagens não aparecem

**Causa:** URL externa quebrada ou caminho incorreto
**Solução:** Verifique o link da imagem ou substitua por imagem local

---

## 🚀 DICAS DE PERFORMANCE

### 1. Minificar CSS e JS (Produção)

Use ferramentas online:
- CSS: https://cssminifier.com/
- JS: https://javascript-minifier.com/

### 2. Otimizar Imagens

- Use formatos modernos (WebP)
- Comprima imagens antes de subir
- Lazy loading: `loading="lazy"`

### 3. CDN para Bibliotecas

Já implementado:
- Font Awesome via CDN
- Google Fonts via CDN

---

## 📝 CHECKLIST DE MANUTENÇÃO MENSAL

- [ ] Verificar links externos (redes sociais, WhatsApp)
- [ ] Testar chatbot em todas as páginas
- [ ] Verificar formulário de análise
- [ ] Atualizar cases de sucesso
- [ ] Revisar informações de contato
- [ ] Testar em navegadores diferentes
- [ ] Verificar performance (PageSpeed)
- [ ] Backup dos arquivos

---

## 🆘 PRECISA DE AJUDA?

### Documentação do Projeto:
- `README.md` - Documentação completa
- `RESUMO_FINAL.md` - Resumo de implementações
- `CHECKLIST_TESTES.md` - Checklist completo de testes
- `GUIA_IMPLEMENTACAO.md` - Guia de publicação
- `ATUALIZACOES_IMPLEMENTADAS.md` - Últimas atualizações

### Recursos Online:
- HTML: https://developer.mozilla.org/pt-BR/docs/Web/HTML
- CSS: https://developer.mozilla.org/pt-BR/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

---

**Mantenha este guia sempre atualizado conforme faz modificações no site!** 📚
