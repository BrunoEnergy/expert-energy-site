# 🚀 Guia Completo de Publicação no GitHub Pages

## Seu Site Expert Energy Online Gratuitamente

**Data:** 28/Janeiro/2026  
**Versão:** 4.0.0  
**Tempo estimado:** 10-15 minutos

---

## 📋 Pré-requisitos

1. ✅ Conta no GitHub (gratuita)
2. ✅ Git instalado no seu computador
3. ✅ Arquivos do site prontos

---

## 🎯 Passo a Passo Completo

### **PASSO 1: Criar Conta no GitHub** (se ainda não tem)

1. Acesse: https://github.com
2. Clique em **"Sign up"**
3. Preencha:
   - Email
   - Senha
   - Username (ex: expert-energy)
4. Confirme o email

---

### **PASSO 2: Criar Novo Repositório**

1. Faça login no GitHub
2. Clique no **"+"** (canto superior direito)
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name:** `expert-energy-site` (ou qualquer nome)
   - **Description:** "Site oficial da Expert Energy - Performance em Energia"
   - Marque **"Public"** (obrigatório para GitHub Pages gratuito)
   - ✅ Marque **"Add a README file"**
5. Clique em **"Create repository"**

---

### **PASSO 3: Baixar os Arquivos do Projeto**

**Opção A - Via Interface (Mais Fácil):**

1. No projeto aqui, clique no botão **"Download"** (se disponível)
2. Salve todos os arquivos em uma pasta no seu computador
3. Extraia se vier em ZIP

**Opção B - Via Lista de Arquivos:**

Organize seus arquivos assim:
```
expert-energy-site/
├── index.html
├── cases.html
├── analise.html
├── software-energy-link.html
├── mercado-livre.html
├── consultoria.html
├── eficiencia-energetica.html
├── energia-solar.html
├── monitoramento.html
├── gestao-contratos.html
├── chatbot.html
├── css/
│   ├── style.css
│   └── components.css
├── js/
│   └── main.js
└── images/
    ├── logo-expert-energy.png
    ├── hero-background.mp4
    └── testimonials/
        ├── balsamo.png
        ├── bonfibra.png
        └── pampinella.png
```

---

### **PASSO 4: Subir Arquivos para o GitHub**

**Método 1 - Interface Web (Mais Fácil):**

1. No seu repositório no GitHub
2. Clique em **"Add file"** → **"Upload files"**
3. Arraste TODOS os arquivos e pastas do projeto
4. Adicione mensagem: "Primeira versão do site Expert Energy"
5. Clique em **"Commit changes"**

**Método 2 - Git (Mais Profissional):**

Abra o terminal/CMD na pasta do projeto e execute:

```bash
# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Primeira versão do site Expert Energy"

# Conectar com repositório remoto
git remote add origin https://github.com/SEU-USUARIO/expert-energy-site.git

# Enviar arquivos
git push -u origin main
```

> **Nota:** Substitua `SEU-USUARIO` pelo seu username do GitHub

---

### **PASSO 5: Ativar GitHub Pages**

1. No seu repositório, vá em **"Settings"** (engrenagem)
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**, selecione:
   - **Branch:** `main` (ou `master`)
   - **Folder:** `/ (root)`
4. Clique em **"Save"**
5. Aguarde 2-3 minutos ⏰

---

### **PASSO 6: Acessar Seu Site Online! 🎉**

Seu site estará disponível em:

```
https://SEU-USUARIO.github.io/expert-energy-site/
```

Exemplo:
```
https://expert-energy.github.io/expert-energy-site/
```

---

## 🔧 Possíveis Problemas e Soluções

### ❌ Problema: "404 - Page not found"

**Solução:**
- Aguarde 5-10 minutos (primeira publicação pode demorar)
- Verifique se o arquivo `index.html` está na raiz do repositório
- Limpe o cache do navegador (Ctrl + F5)

---

### ❌ Problema: Vídeo não carrega

**Solução:**
O vídeo `hero-background.mp4` tem 8.3 MB. Se não carregar:

1. **Opção A - Comprimir Vídeo:**
   - Use: https://www.freeconvert.com/video-compressor
   - Reduza para 3-4 MB
   - Re-upload no GitHub

2. **Opção B - Usar CDN Externo:**
   - Faça upload em: https://streamable.com ou https://vimeo.com
   - Substitua o caminho no `index.html`

---

### ❌ Problema: Imagens não aparecem

**Solução:**
- Verifique se a pasta `images/` foi enviada corretamente
- Caminhos devem ser relativos: `images/logo.png`
- Nunca use caminhos absolutos: `C:/Users/...`

---

## 🎨 Personalizando a URL (Opcional)

### Domínio Personalizado Gratuito

Se quiser: `www.expertenergy.com.br` em vez de `github.io`:

1. Compre domínio em: Registro.br, Hostinger, GoDaddy
2. No GitHub Pages → Settings → Pages → Custom domain
3. Adicione seu domínio
4. Configure DNS no seu provedor:
   ```
   Type: CNAME
   Name: www
   Value: SEU-USUARIO.github.io
   ```

---

## 📱 Testando o Site

### Checklist de Testes:

- ✅ Página inicial carrega
- ✅ Vídeo de fundo roda em loop
- ✅ Menu funciona no mobile
- ✅ Chatbot abre e fecha
- ✅ Formulário de análise funciona
- ✅ Botão WhatsApp redireciona
- ✅ Logos nos depoimentos aparecem
- ✅ Favicon aparece na aba
- ✅ Todas as páginas carregam
- ✅ Links internos funcionam

---

## 🔄 Atualizando o Site

Sempre que fizer alterações:

**Via Interface Web:**
1. Vá no arquivo no GitHub
2. Clique no lápis (Edit)
3. Faça alterações
4. Commit changes

**Via Git:**
```bash
git add .
git commit -m "Atualização: descrição do que mudou"
git push
```

As mudanças aparecem em 1-2 minutos! ⚡

---

## 📊 Monitorando Visitas

### Google Analytics (Gratuito):

1. Crie conta: https://analytics.google.com
2. Crie propriedade para seu site
3. Copie o código de rastreamento
4. Cole no `<head>` de todas as páginas HTML

---

## 💡 Dicas Extras

### Performance:

- ✅ Comprima imagens: https://tinypng.com
- ✅ Minifique CSS/JS se site ficar lento
- ✅ Use cache do navegador

### SEO:

- ✅ Adicione `sitemap.xml`
- ✅ Configure `robots.txt`
- ✅ Registre no Google Search Console

### Backup:

- ✅ GitHub já é seu backup automático!
- ✅ Todo commit fica salvo no histórico
- ✅ Pode reverter mudanças a qualquer momento

---

## 🆘 Precisa de Ajuda?

### Recursos Úteis:

- **Documentação GitHub Pages:** https://pages.github.com
- **Guia Git:** https://git-scm.com/book/pt-br/v2
- **Suporte GitHub:** https://support.github.com

---

## ✅ Checklist Final de Publicação

- [ ] Conta GitHub criada
- [ ] Repositório criado
- [ ] Arquivos enviados
- [ ] GitHub Pages ativado
- [ ] Site acessível online
- [ ] Testes realizados
- [ ] URL compartilhada com equipe
- [ ] Google Analytics configurado (opcional)
- [ ] Domínio personalizado (opcional)

---

## 🎯 Resultado Final

Após seguir este guia, você terá:

✅ Site Expert Energy online 24/7  
✅ URL profissional acessível de qualquer lugar  
✅ Hospedagem gratuita e ilimitada  
✅ SSL/HTTPS automático (segurança)  
✅ Atualizações fáceis  
✅ Backup automático no GitHub  

---

## 📞 Próximos Passos Sugeridos

1. **Divulgue o site:**
   - Adicione em assinatura de email
   - Compartilhe no LinkedIn
   - Envie para clientes

2. **Configure Analytics:**
   - Monitore visitas
   - Veja quais páginas convertem mais
   - Otimize baseado nos dados

3. **Marketing Digital:**
   - Crie campanhas Google Ads
   - Faça posts nas redes sociais
   - Email marketing com link do site

---

**🎉 PARABÉNS! Seu site está pronto para gerar leads!**

---

**Versão:** 4.0.0  
**Última atualização:** 28/Jan/2026  
**Autor:** Expert Energy Development Team  
**Suporte:** Via GitHub Issues ou WhatsApp +55 16 3620-1604
