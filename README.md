# Desafio Técnico - Desenvolvedor Front-End Pleno

**Objetivo:** Desenvolver um jogo da velha (tic-tac-toe) utilizando React.js.

## Requisitos:

1. **Tabuleiro 3x3:** Crie um tabuleiro interativo de 3x3 onde os jogadores podem realizar suas jogadas.
2. **Dois Jogadores:** Implemente a lógica para dois jogadores se alternarem entre 'X' e 'O'.

3. **Interação:** Ao clicar em um quadrado, o símbolo correspondente do jogador atual deve ser exibido.

4. **Condições de Vitória:**

   - Identifique quando um jogador vencer, marcando três símbolos consecutivos na horizontal, vertical ou diagonal.
   - Faça um risco visual na sequência vencedora (horizontal, vertical ou diagonal).

5. **Empate:** Se todos os quadrados forem preenchidos sem um vencedor, exiba uma mensagem informando que o jogo terminou em empate.

6. **Estilo:** Você pode usar o arquivo `styles.scss` já configurado no projeto para customizar a aparência do jogo.

## Ferramentas e Tecnologias:

- **React.js:** Desenvolva a lógica e a interface utilizando React.
- **Vite:** O projeto já está iniciado com Vite, pronto para uso.
- **Sass:** O projeto está configurado com Sass para estilização (arquivo `styles.scss`).

## Dicas:

- Utilize os hooks do React (ex: `useState`) para gerenciar o estado do tabuleiro e do jogador atual.
- Para detectar o vencedor, implemente uma função que verifique todas as combinações possíveis de vitória após cada jogada.
- Exiba mensagens de vitória ou empate conforme necessário.

## Resolução do Desafio:

Há uma branch chamada `solution` com a minha solução para que você possa comparar após completar o desafio. Utilize essa branch apenas para fins de estudo, para que o exercício cumpra seu propósito de prática.
