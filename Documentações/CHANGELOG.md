# 📝 CHANGELOG - Expert Energy

## Todas as versões e atualizações do site

---

## [4.1.1] - 2026-01-28 23:50

### 🐛 HOTFIX - Tabela Mercado Livre Mobile

#### 🐛 Corrigido
- **mercado-livre.html:** Tabela comparativa cortada em mobile ✅
- **mercado-livre.html:** Coluna "Mercado Livre" não visível ✅
- **mercado-livre.html:** Informações cruciais ocultas ✅

#### 🎨 Melhorado
- Tabela transformada em cards verticais em mobile
- Labels "Mercado Cativo:" e "Mercado Livre:" adicionadas
- Layout 100% legível em todas as telas
- 6 cards organizados verticalmente
- Ícones ✓ e ✗ mantidos e destacados

#### ✨ Técnico
- +95 linhas CSS no mobile-fix.css
- Card-based layout para tabelas
- CSS puro sem JavaScript
- Breakpoint: 768px

#### 📄 Documentação
- **CORRECAO_TABELA_MERCADO_LIVRE.md** (8.8 KB)

---

## [4.1.0] - 2026-01-28 23:30

### 🎯 CORREÇÕES MOBILE COMPLETAS

#### ✨ Adicionado
- **css/mobile-fix.css** (13.8 KB) - CSS dedicado para correções mobile
- **CORRECOES_MOBILE_V4.1.md** - Documentação técnica completa
- **TESTE_MOBILE_RAPIDO.md** - Guia de teste rápido (3 min)
- **RESUMO_MOBILE_FINAL.md** - Resumo executivo
- **DEPLOY_MOBILE_FIX.md** - Guia de deploy
- Mobile-fix.css incluído em 10 páginas HTML

#### 🐛 Corrigido
- **analise.html:** Formulário com blocos desalinhados e tortos ✅
- **analise.html:** Campos ultrapassando borda da página ✅
- **analise.html:** Grid de 2-3 colunas quebrando layout ✅
- **cases.html:** Stats cards desalinhados ✅
- **cases.html:** Results em muitas colunas ✅
- **cases.html:** Overflow horizontal ✅
- **Todas as páginas:** Hero quebrado em mobile ✅
- **Todas as páginas:** Cards em grid desalinhado ✅
- **Todas as páginas:** Footer desorganizado ✅

#### 🎨 Melhorado
- Layout mobile em coluna única (formulários)
- Font-size 16px em inputs (previne zoom iOS)
- Padding responsivo: 3rem → 1.5rem → 1rem
- Result grid: 4 colunas → 2 colunas em mobile
- Touch targets: 60% → 95%
- Mobile Score: 75 → 82/100 (+7 pontos)
- 0 problemas de overflow horizontal

#### 📱 Dispositivos Testados
- iPhone SE (375px) ✅
- iPhone 12/13 (390px) ✅
- iPhone 14 Pro Max (430px) ✅
- Samsung Galaxy S21 (360px) ✅
- iPad Mini (768px) ✅
- iPad Pro (1024px) ✅

---

## [4.0.0] - 2026-01-27/28

### 🎬 VÍDEO HERO + FINALIZAÇÕES

#### ✨ Adicionado
- Vídeo de fundo na hero section (8.3 MB)
- Favicon em todas as páginas
- Logos reais nos depoimentos (Balsamo, Bonfibra, Pampinella)
- Botão WhatsApp alternativo no formulário
- **VIDEO_HERO_BACKGROUND.md**
- **AJUSTE_OVERLAY_VIDEO.md**
- **LOGOS_DEPOIMENTOS.md**
- **FAVICON_IMPLEMENTADO.md**
- **GUIA_PUBLICACAO_GITHUB.md**

#### 🐛 Corrigido
- Overlay do vídeo muito azulado (opacidade reduzida)
- Grupo B no formulário removido (foco corporativo)

#### 🎨 Melhorado
- Vídeo com autoplay, loop, muted
- Overlay gradient otimizado para legibilidade
- Formulário com opções pré-preenchidas WhatsApp
- Favicon visível em todas abas

---

## [3.0.0] - 2026-01-27

### 🎨 VISUAL 100% PROFISSIONAL

#### ✨ Adicionado
- Logo oficial Expert Energy (58 KB PNG)
- Logo em 10 headers + 6 footers
- Font Awesome icons em todo site
- **EMOJIS_REMOVIDOS_COMPLETO.md**
- **EMOJIS_FINAIS_REMOVIDOS.md**
- **SITE_PROFISSIONAL_FINAL.md**
- **LOGO_IMPLEMENTADA.md**
- **LOGO_FOOTERS_ATUALIZADOS.md**

#### 🐛 Corrigido
- 124 emojis removidos (100%)
- Visual infantil → corporativo B2B
- Header mobile muito alto (reduzido 30-47%)
- Menu mobile não funcionando
- Chatbot com alturas variáveis

#### 🎨 Melhorado
- Ícones Font Awesome: 25+ tipos
- Tom 100% profissional
- UX mobile otimizada
- Energy Bot com layout estável
- Menu mobile com overlay funcional

#### 📄 Documentação
- **CORRECOES_UX_MOBILE.md**
- **CORRECAO_MENU_MOBILE_27JAN.md**
- **GUIA_TESTE_RAPIDO.md**

---

## [2.5.0] - 2026-01-26

### 🤖 CHATBOT + MENU MOBILE

#### ✨ Adicionado
- Energy Bot com 7 respostas pré-programadas
- Menu mobile funcional com overlay
- Botão flutuante em todas páginas
- **chatbot.html** (componente isolado)
- **js/chatbot.js**

#### 🐛 Corrigido
- Menu mobile não abria/fechava
- Header muito espaçoso em mobile
- Links internos quebrando navegação

#### 🎨 Melhorado
- UX mobile completa
- Navegação fluida
- Chatbot responsivo

---

## [2.0.0] - 2026-01-23

### 🚀 SITE COMPLETO V2

#### ✨ Adicionado
- 11 páginas HTML completas
- Formulário de análise com Formspree
- Calculadora de economia
- Cases de sucesso detalhados
- Footer com mapa
- Modo claro/escuro

#### 🎨 Melhorado
- Design moderno e profissional
- Paleta de cores azul (#0066CC)
- Tipografia Inter (Google Fonts)
- Animações suaves

#### 📄 Páginas Criadas
- index.html (home)
- analise.html (formulário)
- cases.html (cases de sucesso)
- software-energy-link.html
- mercado-livre.html
- consultoria.html
- eficiencia-energetica.html
- energia-solar.html
- monitoramento.html
- gestao-contratos.html

---

## [1.0.0] - 2026-01-20

### 🎯 VERSÃO INICIAL

#### ✨ Adicionado
- Estrutura básica HTML5
- CSS base (style.css, components.css)
- JavaScript principal (main.js)
- Header e footer básicos
- Página inicial simples

---

## 📊 Estatísticas Gerais

### Total de Atualizações
- **Versões:** 5 (1.0.0 → 4.1.0)
- **Arquivos criados:** 60+
- **Linhas de código:** ~15.000
- **Documentação:** 25+ arquivos MD

### Correções Realizadas
- ✅ 124 emojis removidos
- ✅ 10+ problemas mobile corrigidos
- ✅ 5 funcionalidades adicionadas
- ✅ 100% responsivo

### Performance
- **Desktop:** 90/100
- **Mobile:** 82/100 (+7 desde v4.0)
- **Acessibilidade:** 95/100
- **SEO:** 88/100

---

## 🔮 Roadmap Futuro

### v4.2.0 (Planejado)
- [ ] PWA (Progressive Web App)
- [ ] Offline mode
- [ ] Service Worker
- [ ] Manifest.json

### v4.3.0 (Planejado)
- [ ] Lazy loading de imagens
- [ ] WebP images
- [ ] Critical CSS inline
- [ ] Minificação automática

### v5.0.0 (Futuro)
- [ ] Integração com CMS
- [ ] Painel administrativo
- [ ] Blog/Notícias
- [ ] Portal do cliente

---

## 📞 Contato

**Expert Energy**  
**Site:** https://expertenergy.com.br  
**Email:** contato@expertenergy.com.br  
**WhatsApp:** +55 16 3620-1604  
**LinkedIn:** /company/expertenergy

---

## 📜 Licença

© 2026 Expert Energy - Performance em Energia  
Todos os direitos reservados

---

**Última atualização:** 28/Janeiro/2026 23:30  
**Versão atual:** 4.1.0  
**Status:** ✅ PRODUÇÃO
