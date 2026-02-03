#!/bin/bash
# Script para adicionar chatbot em todas as páginas HTML

echo "🤖 Adicionando chatbot em todas as páginas..."

# Lista de arquivos HTML (exceto index.html que já tem)
files=(
    "analise.html"
    "cases.html"
    "software-energy-link.html"
    "mercado-livre.html"
    "consultoria.html"
    "eficiencia-energetica.html"
    "energia-solar.html"
    "monitoramento.html"
    "gestao-contratos.html"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Processando $file..."
        
        # Verificar se já tem o chatbot
        if grep -q "chatbot.js" "$file"; then
            echo "  ✓ $file já possui o chatbot"
        else
            # Adicionar chatbot antes do </body>
            sed -i 's|    <script src="js/main.js"></script>|    <script src="js/main.js"></script>\n    <script src="js/chatbot.js"></script>|g' "$file"
            echo "  ✓ Chatbot adicionado em $file"
        fi
    else
        echo "  ✗ Arquivo $file não encontrado"
    fi
done

echo ""
echo "✅ Processo concluído!"
echo ""
echo "📝 Próximos passos:"
echo "1. Teste o chatbot em cada página"
echo "2. Verifique se o menu mobile funciona"
echo "3. Atualize os footers das páginas simplificadas"
