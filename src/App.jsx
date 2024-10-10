import { useState } from "react";
import "./styles.scss";
import Mesa from "./components/Mesa";

/*
  DESAFIO TÉCNICO - JOGO DA VELHA - por fernandev

  * descrição
    desenvolva um jogo da velha (tic tac toe) funcional.
    use qualquer técnica de estilização preferida: css modules, sass, styled.

  * tasks
    ? - crie um board de 3x3
    ? - dois jogadores
    ? - ao clicar em um quadrado, preencher com a jogada
    ? - avisar quando o jogo finalizar, caso dê velha avise também
    ? - fazer um risco na sequência vencedora, caso houver
*/

function App() {
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));
  const [isXProximo, setIsXProximo] = useState(true);

  function handleClick(i) {
    const newQuadrados = quadrados.slice();
    if (calculaVencedor(quadrados).vencedor || quadrados[i]) return;
    newQuadrados[i] = isXProximo ? `X` : `O`;
    setQuadrados(newQuadrados);
    setIsXProximo(!isXProximo);
  }

  const { vencedor, linha } = calculaVencedor(quadrados);
  const deuVelha = quadrados.every((quadrado) => quadrado !== null);

  return (
    <>
      <h3>DESAFIO CP3</h3>
      <h1>Jogo da velha</h1>
      <div className="status">
        {vencedor ? (
          <span className="vencedor-texto">
            Parabéns : "{vencedor}" você Venceu!
          </span>
        ) : deuVelha ? (
          <span className="vencedor-texto">Empate, tente outra vez !</span>
        ) : (
          `Proximo jogador : ${isXProximo ? "X" : "O"}`
        )}
      </div>
      <Mesa
        quadrados={quadrados}
        onClick={handleClick}
        linhaVencedora={linha}
      />
    </>
  );
}

function calculaVencedor(quadrados) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (
      quadrados[a] &&
      quadrados[a] === quadrados[b] &&
      quadrados[a] === quadrados[c]
    ) {
      return { vencedor: quadrados[a], linha: [a, b, c] };
    }
  }
  return { vencedor: null, linha: null };
}

export default App;
