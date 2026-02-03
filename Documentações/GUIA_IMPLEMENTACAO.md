# 🚀 Guia de Implementação - Expert Energy

Este guia contém instruções passo a passo para colocar o site no ar e configurar as funcionalidades essenciais.

---

## 📝 Checklist Pré-Lançamento

### ✅ Conteúdo

- [ ] Inserir vídeo institucional no YouTube
- [ ] Atualizar ID do vídeo na página inicial
- [ ] Revisar todos os textos e correções ortográficas
- [ ] Adicionar informações reais de contato
- [ ] Configurar links das redes sociais
- [ ] Adicionar fotos/imagens reais (opcional)
- [ ] Validar informações de endereço e telefone

### ✅ Funcionalidades

- [ ] Testar todos os links internos
- [ ] Validar formulário de análise
- [ ] Testar modo claro/escuro em diferentes navegadores
- [ ] Verificar responsividade em dispositivos móveis
- [ ] Testar calculadora de economia
- [ ] Verificar funcionamento do upload de arquivos

### ✅ SEO e Performance

- [ ] Adicionar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Criar sitemap.xml
- [ ] Configurar robots.txt
- [ ] Otimizar meta tags
- [ ] Adicionar favicon

---

## 🎬 Como Adicionar o Vídeo Institucional

### Passo 1: Upload no YouTube
1. Faça upload do vídeo institucional no canal da Expert Energy no YouTube
2. Configure a privacidade como "Público" ou "Não listado"
3. Copie o ID do vídeo da URL

**Exemplo de URL do YouTube:**
```
https://www.youtube.com/watch?v=ABC123DEF456
                               ^^^^^^^^^^^^
                               Este é o ID
```

### Passo 2: Atualizar no Site
Edite o arquivo `index.html`, procure pela seção de vídeo (linha ~186) e substitua:

```html
<!-- ANTES -->
<iframe src="https://www.youtube.com/embed/SEU_VIDEO_ID" ...>

<!-- DEPOIS -->
<iframe src="https://www.youtube.com/embed/ABC123DEF456" ...>
```

---

## 📞 Configurar Informações de Contato

### Editar em TODOS os arquivos HTML

Procure e substitua em todos os arquivos `.html`:

#### Telefone
```html
<!-- ANTES -->
<a href="tel:+5516999999999">(16) 99999-9999</a>

<!-- DEPOIS -->
<a href="tel:+5516912345678">(16) 91234-5678</a>
```

#### Email
```html
<!-- ANTES -->
<a href="mailto:contato@expertenergy.com.br">contato@expertenergy.com.br</a>

<!-- DEPOIS -->
<a href="mailto:seuemail@empresa.com.br">seuemail@empresa.com.br</a>
```

#### WhatsApp
```html
<!-- ANTES -->
<a href="https://wa.me/5516999999999" target="_blank">WhatsApp</a>

<!-- DEPOIS -->
<a href="https://wa.me/5516912345678" target="_blank">WhatsApp</a>
```

**Formato do WhatsApp:** `55` (Brasil) + `16` (DDD) + `912345678` (número)

---

## 🔗 Configurar Redes Sociais

Edite o footer de todas as páginas:

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

---

## 📧 Integrar Formulário com Backend

### Opção 1: Formspree (Mais Simples)

1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Copie o endpoint fornecido
5. Edite `analise.html`:

```html
<form id="analysisForm" action="https://formspree.io/f/SEU_ID" method="POST">
```

### Opção 2: EmailJS (Sem Backend)

1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Crie conta e configure um serviço de email
3. Adicione antes do `</body>` em `analise.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
(function(){
   emailjs.init("SEU_PUBLIC_KEY");
})();
</script>
```

4. Modifique a função de envio em `js/main.js`

### Opção 3: Backend Próprio (Mais Completo)

Crie uma API REST que receba os dados do formulário e:
- Salve em banco de dados
- Envie email de notificação
- Faça upload do arquivo da fatura
- Retorne confirmação ao usuário

---

## 🎨 Adicionar Favicon

1. Crie um favicon (16x16, 32x32, 180x180)
2. Use ferramentas como [favicon.io](https://favicon.io)
3. Adicione no `<head>` de todas as páginas:

```html
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
```

---

## 📊 Google Analytics

1. Crie uma conta em [analytics.google.com](https://analytics.google.com)
2. Crie uma propriedade para o site
3. Copie o código de acompanhamento
4. Adicione antes do `</head>` em todas as páginas:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔍 SEO Básico

### Meta Tags Essenciais

Adicione/ajuste em cada página HTML:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO -->
    <title>Expert Energy - Performance em Energia | Ribeirão Preto, SP</title>
    <meta name="description" content="Soluções completas em gestão energética...">
    <meta name="keywords" content="energia, gestão energética, mercado livre...">
    <meta name="author" content="Expert Energy">
    
    <!-- Open Graph (Facebook) -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://seusite.com.br/">
    <meta property="og:title" content="Expert Energy - Performance em Energia">
    <meta property="og:description" content="Soluções completas...">
    <meta property="og:image" content="https://seusite.com.br/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://seusite.com.br/">
    <meta property="twitter:title" content="Expert Energy">
    <meta property="twitter:description" content="Soluções completas...">
    <meta property="twitter:image" content="https://seusite.com.br/og-image.jpg">
</head>
```

### Criar sitemap.xml

Crie um arquivo `sitemap.xml` na raiz:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://seusite.com.br/</loc>
      <lastmod>2026-01-23</lastmod>
      <priority>1.0</priority>
   </url>
   <url>
      <loc>https://seusite.com.br/software-energy-link.html</loc>
      <lastmod>2026-01-23</lastmod>
      <priority>0.8</priority>
   </url>
   <!-- Adicione todas as páginas -->
</urlset>
```

### Criar robots.txt

Crie um arquivo `robots.txt` na raiz:

```txt
User-agent: *
Allow: /

Sitemap: https://seusite.com.br/sitemap.xml
```

---

## 🚀 Publicação do Site

### Opção 1: GitHub Pages (Gratuito)

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings > Pages
4. Selecione a branch main
5. Clique em Save
6. Acesse: `https://seuusuario.github.io/nome-repo`

### Opção 2: Netlify (Gratuito)

1. Acesse [netlify.com](https://www.netlify.com/)
2. Arraste a pasta do projeto
3. Site publicado instantaneamente
4. Configure domínio personalizado (opcional)

### Opção 3: Vercel (Gratuito)

1. Acesse [vercel.com](https://vercel.com/)
2. Importe o repositório do GitHub
3. Deploy automático

### Opção 4: Hospedagem Tradicional

1. Contrate hospedagem com cPanel
2. Faça upload via FTP de todos os arquivos
3. Configure domínio

---

## 🔒 HTTPS e Domínio

### Configurar Domínio

1. Registre um domínio (ex: expertenergy.com.br)
2. Configure DNS apontando para sua hospedagem
3. Aguarde propagação (até 48h)

### Certificado SSL (HTTPS)

- **GitHub Pages:** SSL automático
- **Netlify/Vercel:** SSL automático
- **Hospedagem tradicional:** Use Let's Encrypt (gratuito)

---

## 📱 Testes Finais

### Checklist de Testes

- [ ] Testar em Chrome, Firefox, Safari, Edge
- [ ] Testar em dispositivos Android e iOS
- [ ] Verificar todos os links
- [ ] Testar formulários
- [ ] Validar modo claro/escuro
- [ ] Testar velocidade (PageSpeed Insights)
- [ ] Verificar SEO (Lighthouse)
- [ ] Testar compartilhamento em redes sociais

### Ferramentas de Teste

- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **W3C Validator:** https://validator.w3.org/

---

## 🆘 Problemas Comuns

### Vídeo não aparece
- Verifique o ID do vídeo
- Confirme que o vídeo é público
- Teste o iframe diretamente

### Formulário não envia
- Verifique console do navegador (F12)
- Confirme configuração do backend
- Teste validação de campos

### Menu mobile não funciona
- Verifique se `js/main.js` está carregando
- Inspecione erros no console
- Teste em diferentes navegadores

### Modo escuro não persiste
- Verifique localStorage do navegador
- Limpe cache e cookies
- Teste em navegação anônima

---

## 📞 Suporte Técnico

Para dúvidas sobre implementação:
- Email: contato@expertenergy.com.br
- Telefone: (16) 99999-9999

---

**Boa sorte com o lançamento do site! 🚀**
