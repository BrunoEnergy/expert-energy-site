# ✅ CHECKLIST DE TESTES - Expert Energy

## 🎯 Use este checklist para verificar todas as funcionalidades

---

## 1. 🤖 TESTE DO CHATBOT

### Em TODAS as 10 páginas:

#### Páginas para testar:
- [ ] index.html
- [ ] analise.html
- [ ] cases.html
- [ ] software-energy-link.html
- [ ] mercado-livre.html
- [ ] consultoria.html
- [ ] eficiencia-energetica.html
- [ ] energia-solar.html
- [ ] monitoramento.html
- [ ] gestao-contratos.html

#### Funcionalidades do Chatbot:

**Abertura/Fechamento:**
- [ ] Botão flutuante aparece no canto inferior direito
- [ ] Ícone do robô visível e clicável
- [ ] Ao clicar, chatbot abre com animação suave
- [ ] Botão X fecha o chatbot
- [ ] Botão flutuante desaparece quando chatbot está aberto

**Mensagem Inicial:**
- [ ] Mensagem de boas-vindas aparece automaticamente
- [ ] Texto: "Olá! 👋 Eu sou o Energy Bot..."

**Botões de Opções (9 botões):**
- [ ] "Sobre a Expert" - Responde sobre a empresa
- [ ] "Mercado Livre" - Explica o mercado livre
- [ ] "Serviços" - Lista os serviços (com ✔️)
- [ ] "Dúvidas" - Mostra dúvidas comuns (com 🔹)
- [ ] "Benefícios" - Lista benefícios (com 💰🎯📊🌱)
- [ ] "Migração" - Explica processo (com 1️⃣2️⃣3️⃣4️⃣)
- [ ] "Economia" - Mostra economia média (com link)
- [ ] "WhatsApp" - Abre WhatsApp em nova aba
- [ ] "E-mail" - Abre cliente de email

**Input de Texto:**
- [ ] Campo de texto funciona
- [ ] Placeholder: "Digite sua pergunta..."
- [ ] Enter envia mensagem
- [ ] Botão ➔ envia mensagem
- [ ] Mensagem do usuário aparece à direita (fundo #002b5c)
- [ ] Resposta do bot aparece à esquerda (fundo #0056a6)

**Integração com Backend:**
- [ ] Ao enviar mensagem, aparece "Digitando..."
- [ ] Após resposta, "Digitando..." é removido
- [ ] Se houver erro, mostra mensagem de erro amigável
- [ ] Scroll automático para última mensagem

**Responsividade:**
- [ ] Chatbot funciona em desktop (> 1024px)
- [ ] Chatbot funciona em tablet (768px - 1024px)
- [ ] Chatbot funciona em mobile (< 768px)
- [ ] Botões se reorganizam em telas pequenas

---

## 2. 🍔 TESTE DO MENU MOBILE

### Desktop (> 1024px):
- [ ] Menu horizontal visível no header
- [ ] Botão hambúrguer NÃO aparece
- [ ] Links funcionam normalmente
- [ ] Hover nos links mostra underline

### Mobile/Tablet (< 1024px):
- [ ] Menu horizontal desaparece
- [ ] Botão hambúrguer (☰) aparece
- [ ] Ao clicar, menu desliza da direita
- [ ] Ícone muda para X (✕)
- [ ] Menu ocupa 80% da largura
- [ ] Fundo semi-transparente atrás do menu
- [ ] Links em lista vertical
- [ ] Ao clicar em link, menu fecha
- [ ] Ícone volta para hambúrguer (☰)
- [ ] Menu desliza para fora da tela

### Teste em diferentes resoluções:
- [ ] 1920x1080 (Desktop Full HD)
- [ ] 1366x768 (Laptop)
- [ ] 768x1024 (iPad)
- [ ] 375x667 (iPhone)
- [ ] 360x640 (Android)

---

## 3. 📄 TESTE DO FOOTER

### Em TODAS as páginas:

#### Estrutura Visual:
- [ ] 4 colunas visíveis (desktop)
- [ ] Coluna 1: Logo + descrição + redes sociais
- [ ] Coluna 2: Lista de Soluções (5 links)
- [ ] Coluna 3: Lista Empresa (4 links)
- [ ] Coluna 4: Informações de Contato

#### Links de Soluções (Coluna 2):
- [ ] Software Energy Link → software-energy-link.html
- [ ] Mercado Livre → mercado-livre.html
- [ ] Consultoria Estratégica → consultoria.html
- [ ] Eficiência Energética → eficiencia-energetica.html
- [ ] Energia Solar → energia-solar.html

#### Links da Empresa (Coluna 3):
- [ ] Cases de Sucesso → cases.html
- [ ] Análise Gratuita → analise.html
- [ ] Sobre Nós → index.html#video-institucional
- [ ] Contato → #contato (scroll para footer)

#### Informações de Contato (Coluna 4):
- [ ] 📍 Ribeirão Preto, SP
- [ ] 📞 (16) 3620-1604 (link tel:+551636201604)
- [ ] ✉️ info@expertenergy.com.br (link mailto:)
- [ ] 💬 WhatsApp (link para api.whatsapp.com)

#### Redes Sociais:
- [ ] LinkedIn (ícone visível)
- [ ] Instagram (ícone visível)
- [ ] Facebook (ícone visível)
- [ ] YouTube (ícone visível)
- [ ] Links abrem em nova aba (target="_blank")
- [ ] Hover muda cor para azul/gradiente

#### Rodapé:
- [ ] Copyright: "© 2026 Expert Energy - Performance em Energia"

#### Responsividade:
- [ ] Desktop: 4 colunas lado a lado
- [ ] Tablet: 2 colunas (2x2)
- [ ] Mobile: 1 coluna (stack vertical)

---

## 4. 🎨 TESTE DE MODO CLARO/ESCURO

### Funcionalidade:
- [ ] Botão de toggle visível no header (🌙 ou ☀️)
- [ ] Ao clicar, cores mudam instantaneamente
- [ ] Ícone muda (🌙 → ☀️ ou vice-versa)
- [ ] Preferência salva no localStorage
- [ ] Ao recarregar página, mantém tema escolhido

### Cores Modo Claro:
- [ ] Fundo principal: branco (#FFFFFF)
- [ ] Texto: preto (#1A202C)
- [ ] Cards: branco com sombra

### Cores Modo Escuro:
- [ ] Fundo principal: escuro (#0F1419)
- [ ] Texto: claro (#F7FAFC)
- [ ] Cards: cinza escuro (#1E2735)

---

## 5. 📋 TESTE DO FORMULÁRIO DE ANÁLISE

### Página: analise.html

#### Campos Obrigatórios (*):
- [ ] Nome da Empresa
- [ ] Nome Completo
- [ ] E-mail
- [ ] Telefone/WhatsApp
- [ ] Endereço Completo
- [ ] Cidade
- [ ] Estado
- [ ] Consumo Mensal (kWh)
- [ ] Valor Médio da Fatura
- [ ] Upload de Fatura

#### Validações:
- [ ] Campos vazios mostram erro
- [ ] Email valida formato (xxx@xxx.xxx)
- [ ] Telefone aplica máscara automaticamente
- [ ] Upload só aceita PDF, JPG, PNG
- [ ] Mensagem de erro em vermelho
- [ ] Checkbox de termos obrigatório

#### Upload de Arquivo:
- [ ] Clique abre seletor de arquivos
- [ ] Drag & drop funciona
- [ ] Nome do arquivo aparece após upload
- [ ] Ícone muda para check (✓)
- [ ] Borda fica verde após upload

#### Envio:
- [ ] Ao enviar, mostra mensagem de sucesso
- [ ] Formulário é resetado
- [ ] Mensagem verde com ícone ✓
- [ ] Desaparece após 5 segundos

---

## 6. 💰 TESTE DA CALCULADORA DE ECONOMIA

### Página: mercado-livre.html

#### Funcionalidade:
- [ ] Campo "Consumo Mensal (kWh)" aceita números
- [ ] Campo "Preço Atual (R$/kWh)" aceita decimais
- [ ] Ao digitar, calcula automaticamente
- [ ] Resultado aparece abaixo dos campos

#### Cálculo:
- [ ] Economia Mensal = Consumo × Preço × 30%
- [ ] Economia Anual = Economia Mensal × 12
- [ ] Valores formatados em R$ (ex: R$ 1.234,56)
- [ ] Nota explicativa sobre 30% de economia

---

## 7. 📊 TESTE DE CASES DE SUCESSO

### Página: cases.html

#### Estatísticas Gerais:
- [ ] 500+ Empresas Atendidas
- [ ] R$ 150M+ Economizados
- [ ] 2.5 GWh Energia Gerenciada
- [ ] 98% Taxa de Satisfação

#### Cases Detalhados (3):

**Case 1: Indústria Alimentícia**
- [ ] Ícone 🏭 visível
- [ ] Tags: Mercado Livre, Eficiência Energética
- [ ] Descrição do cliente
- [ ] Desafios listados (3 itens)
- [ ] Soluções listadas (3 itens)
- [ ] Grid de resultados (4 métricas)
- [ ] Depoimento do cliente com autor

**Case 2: Shopping Center**
- [ ] Ícone 🏢 visível
- [ ] Tags: Energia Solar, Monitoramento
- [ ] Similar ao Case 1

**Case 3: Rede de Hospitais**
- [ ] Ícone 🏥 visível
- [ ] Tags: Consultoria, Eficiência, Gestão de Contratos
- [ ] Similar aos anteriores

#### Depoimentos (4):
- [ ] 4 cards de depoimentos
- [ ] Avatar com iniciais
- [ ] Nome e cargo
- [ ] Texto do depoimento

---

## 8. 🚀 TESTE DE PERFORMANCE

### Velocidade de Carregamento:
- [ ] Página carrega em < 3 segundos
- [ ] Imagens carregam progressivamente
- [ ] Chatbot carrega sem travar
- [ ] Animações são suaves (60fps)

### Teste com PageSpeed Insights:
- [ ] Performance > 80
- [ ] Accessibility > 90
- [ ] Best Practices > 80
- [ ] SEO > 80

---

## 9. 🌐 TESTE DE COMPATIBILIDADE

### Navegadores Desktop:
- [ ] Google Chrome (última versão)
- [ ] Mozilla Firefox (última versão)
- [ ] Microsoft Edge (última versão)
- [ ] Safari (macOS)

### Navegadores Mobile:
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Samsung Internet

### Dispositivos Reais:
- [ ] iPhone (qualquer modelo)
- [ ] iPad
- [ ] Android phone
- [ ] Android tablet

---

## 10. 🔗 TESTE DE LINKS E NAVEGAÇÃO

### Navegação Interna:
- [ ] Todos os links do menu funcionam
- [ ] Links do footer funcionam
- [ ] Botões CTA levam para páginas corretas
- [ ] Âncoras (#) funcionam (scroll suave)

### Links Externos:
- [ ] WhatsApp abre em nova aba
- [ ] Email abre cliente de email
- [ ] Telefone abre discador (mobile)
- [ ] Redes sociais abrem em nova aba

### Smooth Scroll:
- [ ] Clique em link #ancora rola suavemente
- [ ] Header não cobre conteúdo ao rolar

---

## 11. 📱 TESTE DE ACESSIBILIDADE

### Navegação por Teclado:
- [ ] Tab navega entre elementos
- [ ] Enter ativa links e botões
- [ ] Esc fecha chatbot
- [ ] Focus visível em todos os elementos

### Screen Reader:
- [ ] Alt text em todas as imagens
- [ ] Labels em todos os inputs
- [ ] ARIA labels onde necessário

---

## 🎉 RESULTADO ESPERADO

### Ao finalizar todos os testes, você deve ter:

✅ Chatbot funcionando em todas as 10 páginas
✅ Menu mobile abrindo e fechando corretamente
✅ Footer completo e padronizado em todas as páginas
✅ Todos os links funcionando
✅ Formulários validando corretamente
✅ Calculadora calculando economia
✅ Site responsivo em todos os dispositivos
✅ Modo claro/escuro funcionando
✅ Performance aceitável (< 3s)
✅ Compatível com principais navegadores

---

## 📝 ANOTAÇÕES

Use este espaço para anotar problemas encontrados durante os testes:

```
Problema encontrado:


Página afetada:


Como reproduzir:


Urgência: [ ] Baixa  [ ] Média  [ ] Alta  [ ] Crítica
```

---

**Bons testes! 🚀**

*Se encontrar algum problema, consulte o RESUMO_FINAL.md ou ATUALIZACOES_IMPLEMENTADAS.md*
