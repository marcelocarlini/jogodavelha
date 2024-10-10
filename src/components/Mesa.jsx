import React from "react";
import Quadrado from "./Quadrado";

const Mesa = ({ quadrados, onClick, linhaVencedora }) => {
  const renderQuadrado = (i) => {
    const isVencedor = linhaVencedora && linhaVencedora.includes(i);
    return (
      <Quadrado
        value={quadrados[i]}
        onClick={() => onClick(i)}
        vencedor={isVencedor}
      />
    );
  };

  return (
    <div className="board-game">
      <div className="board-row">
        {renderQuadrado(0)}
        {renderQuadrado(1)}
        {renderQuadrado(2)}
      </div>
      <div className="board-row">
        {renderQuadrado(3)}
        {renderQuadrado(4)}
        {renderQuadrado(5)}
      </div>
      <div className="board-row">
        {renderQuadrado(6)}
        {renderQuadrado(7)}
        {renderQuadrado(8)}
      </div>
      {linhaVencedora && (
        <div
          className={`linha-vencedora ${determineLineType(linhaVencedora)}`}
        ></div>
      )}
    </div>
  );
};
const determineLineType = (linhaVencedora) => {
  if (linhaVencedora[0] % 3 === linhaVencedora[1] % 3) {
    return "linha-vertical"; // Linha vertical
  } else if (linhaVencedora[0] < 3) {
    return "linha-horizontal"; // Linha horizontal
  } else if (linhaVencedora[0] === 0 && linhaVencedora[2] === 8) {
    return "linha-diagonal"; // Diagonal principal
  } else if (linhaVencedora[0] === 2 && linhaVencedora[2] === 6) {
    return "linha-diagonal"; // Diagonal inversa
  }
  return "";
};

export default Mesa;
