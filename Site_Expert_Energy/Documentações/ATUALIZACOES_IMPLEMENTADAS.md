# 🔧 Guia Rápido de Implementação - Chatbot e Footer

## ✅ IMPLEMENTAÇÕES CONCLUÍDAS

### 1. **Chatbot Energy Bot**
- ✅ Arquivo criado: `js/chatbot.js`
- ✅ Chatbot integrado no `index.html`
- ✅ Design moderno com cores da Expert Energy
- ✅ 7 respostas pré-programadas
- ✅ Integração com backend (API)
- ✅ Links diretos para WhatsApp e Email
- ✅ Botão flutuante responsivo

### 2. **Menu Mobile Corrigido**
- ✅ CSS atualizado em `css/style.css`
- ✅ Menu slide-in lateral funcional
- ✅ Ícone animado (hambúrguer ↔ X)
- ✅ Z-index corrigido

### 3. **Footer Padrão**
- ✅ Template criado: `footer-template.html`
- ✅ Footer completo implementado no `index.html`
- ✅ 4 colunas: Logo + Soluções + Empresa + Contato
- ✅ Links de redes sociais
- ✅ Informações de contato atualizadas

---

## 📋 PARA ADICIONAR O CHATBOT NAS DEMAIS PÁGINAS

### Opção 1: Adicionar Manualmente (Recomendado)

Em **CADA arquivo HTML** (exceto index.html que já está pronto), adicione antes do `</body>`:

```html
    <script src="js/main.js"></script>
    <script src="js/chatbot.js"></script>
</body>
```

**Arquivos que precisam dessa alteração:**
- analise.html
- cases.html
- software-energy-link.html
- mercado-livre.html
- consultoria.html
- eficiencia-energetica.html
- energia-solar.html
- monitoramento.html
- gestao-contratos.html

---

### Opção 2: Buscar e Substituir em Massa

Use um editor de código (VS Code, Sublime, etc.) com "Find and Replace in Files":

**BUSCAR:**
```html
    <script src="js/main.js"></script>
</body>
</html>
```

**SUBSTITUIR POR:**
```html
    <script src="js/main.js"></script>
    <script src="js/chatbot.js"></script>
</body>
</html>
```

---

## 🔄 PARA PADRONIZAR FOOTERS

### Páginas que precisam de footer completo:

As seguintes páginas têm footer simplificado e devem ser atualizadas:

1. **eficiencia-energetica.html**
2. **energia-solar.html**
3. **monitoramento.html**
4. **gestao-contratos.html**

### Como atualizar:

1. Abra o arquivo `footer-template.html`
2. Copie TODO o conteúdo do `<footer>...</footer>`
3. Substitua o footer atual em cada página acima

**OU use o script de substituição:**

**BUSCAR (footer simplificado):**
```html
    <footer class="footer">
        <div class="footer-bottom"><p>&copy; 2026 Expert Energy. Todos os direitos reservados.</p></div>
    </footer>
```

**SUBSTITUIR pelo conteúdo completo de `footer-template.html`**

---

## ✅ STATUS DAS PÁGINAS

### Páginas PRONTAS (com footer completo):
- ✅ index.html
- ✅ software-energy-link.html
- ✅ mercado-livre.html
- ✅ consultoria.html
- ✅ cases.html
- ✅ analise.html

### Páginas PENDENTES (footer simplificado):
- ⚠️ eficiencia-energetica.html
- ⚠️ energia-solar.html
- ⚠️ monitoramento.html
- ⚠️ gestao-contratos.html

---

## 🎯 FUNCIONALIDADES DO CHATBOT

### Botões Rápidos:
1. **Sobre a Expert** - Apresentação da empresa
2. **Mercado Livre** - Explicação do mercado livre
3. **Serviços** - Lista de serviços oferecidos
4. **Dúvidas** - Perguntas frequentes
5. **Benefícios** - Vantagens das soluções
6. **Migração** - Processo de migração
7. **Economia** - Potencial de economia
8. **WhatsApp** - Link direto: +55 16 3620-1604
9. **E-mail** - Link direto: info@expertenergy.com.br

### Funcionalidades Adicionais:
- ✅ Input de texto livre
- ✅ Integração com backend AI
- ✅ Animações suaves
- ✅ Responsivo mobile
- ✅ Mensagens de "digitando..."
- ✅ Scroll automático
- ✅ Links clicáveis nas respostas

---

## 🔧 TESTE DO CHATBOT

1. Abra qualquer página com chatbot
2. Clique no botão flutuante (ícone do robô)
3. Teste os botões de opções
4. Digite uma mensagem no input
5. Pressione Enter ou clique em ➔
6. Verifique se abre/fecha corretamente

---

## 📱 TESTE DO MENU MOBILE

1. Redimensione o navegador para < 1024px
2. Clique no ícone de hambúrguer (☰)
3. Verifique se o menu desliza da direita
4. Clique em um link
5. Menu deve fechar automaticamente
6. Ícone deve alternar entre ☰ e ✕

---

## 🚀 PRÓXIMOS PASSOS

1. Adicionar `<script src="js/chatbot.js"></script>` em todas as páginas
2. Atualizar footers das 4 páginas pendentes
3. Testar chatbot em todas as páginas
4. Testar menu mobile em dispositivos reais
5. Verificar links de WhatsApp e Email
6. Testar backend do chatbot (se disponível)

---

## 📞 CONTATOS ATUALIZADOS NO SITE

- **Telefone:** (16) 3620-1604
- **WhatsApp:** +55 16 3620-1604
- **Email:** info@expertenergy.com.br
- **Localização:** Ribeirão Preto, SP

---

## ✨ MELHORIAS IMPLEMENTADAS

### CSS:
- Menu mobile com z-index corrigido
- Transições suaves
- Botão de toggle visível em mobile

### JavaScript:
- Chatbot auto-carregável
- Funções globais (window.)
- Event listeners otimizados
- Tratamento de erros

### HTML:
- Footer padronizado
- Links de redes sociais com target="_blank"
- Contatos atualizados

---

**Tudo pronto para uso! 🎉**

Basta seguir as instruções acima para completar a implementação.
