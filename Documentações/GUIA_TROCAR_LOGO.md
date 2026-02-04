# 🎨 Guia Completo: Como Trocar a Logo do Site

## Expert Energy - Substituir Logo Atual pela Logo Real da Empresa

---

## 📋 Índice

1. [Preparar a Logo](#1-preparar-a-logo)
2. [Adicionar Logo ao Projeto](#2-adicionar-logo-ao-projeto)
3. [Modificar o HTML](#3-modificar-o-html)
4. [Ajustar o CSS](#4-ajustar-o-css)
5. [Testando](#5-testando)

---

## 1️⃣ Preparar a Logo

### **Especificações Recomendadas:**

| Aspecto | Recomendação |
|---------|--------------|
| **Formato** | PNG (fundo transparente) ou SVG |
| **Largura Desktop** | 150-200px |
| **Altura Desktop** | 45-60px |
| **Tamanho arquivo** | < 100 KB |
| **Nome** | `logo-expert-energy.png` |

---

## 2️⃣ Adicionar Logo ao Projeto

Crie a pasta `images` e coloque sua logo:

```
expert-energy/
├── images/                          ← CRIAR
│   └── logo-expert-energy.png      ← Sua logo
├── css/
├── js/
└── index.html
```

---

## 3️⃣ Modificar o HTML

### **TROCAR ISSO em TODAS as páginas:**

```html
<a href="index.html" class="logo">
    <div class="logo-icon">⚡</div>
    <span>Expert Energy</span>
</a>
```

### **POR ISSO:**

```html
<a href="index.html" class="logo">
    <img src="images/logo-expert-energy.png" 
         alt="Expert Energy" 
         class="logo-img">
</a>
```

### **📄 Páginas para modificar (10):**
1. index.html
2. software-energy-link.html
3. mercado-livre.html
4. consultoria.html
5. eficiencia-energetica.html
6. energia-solar.html
7. monitoramento.html
8. gestao-contratos.html
9. cases.html
10. analise.html

---

## 4️⃣ Ajustar o CSS

Adicione no arquivo `css/style.css` (após linha ~212):

```css
/* Logo com Imagem */
.logo-img {
    height: 50px;
    width: auto;
    object-fit: contain;
    transition: opacity 0.3s ease;
}

.logo:hover .logo-img {
    opacity: 0.8;
}

/* Mobile */
@media (max-width: 768px) {
    .logo-img {
        height: 40px;
    }
}

@media (max-width: 480px) {
    .logo-img {
        height: 35px;
    }
}
```

---

## 5️⃣ Testando

### **Checklist:**
- [ ] Logo aparece no header
- [ ] Tamanho adequado (não distorcida)
- [ ] Funciona em mobile
- [ ] Link volta para index.html
- [ ] Aparece em todas as 10 páginas

---

## 🚀 Método Rápido: Find & Replace

**No VSCode/Editor:**

1. Pressione `Ctrl+Shift+H` (Find & Replace)
2. **Find:** `<div class="logo-icon">⚡</div>\n                <span>Expert Energy</span>`
3. **Replace:** `<img src="images/logo-expert-energy.png" alt="Expert Energy" class="logo-img">`
4. Selecione arquivos: `*.html`
5. Click "Replace All"

---

## ❓ FAQ

**P: Logo ficou muito grande?**  
**R:** No CSS, diminua: `height: 40px;` ou `height: 35px;`

**P: Logo é SVG?**  
**R:** Troque `.png` por `.svg` no HTML

**P: E o favicon?**  
**R:** Adicione no `<head>`:
```html
<link rel="icon" href="images/favicon.ico">
```

---

## 🆘 Quer Ajuda?

**Posso fazer para você!** 

Opções:
1. Me envie a logo e faço as modificações
2. Me passe a URL da logo online
3. Descreva sua logo para CSS específico

---

**Pronto para começar?** 🎨
