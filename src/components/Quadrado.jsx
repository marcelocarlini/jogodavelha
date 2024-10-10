import React from "react";

const Quadrado = ({ value, onClick, vencedor }) => {
  return (
    <button
      className={`quadrado ${vencedor ? "vencedor-texto" : ""}`}
      onClick={onClick}
    >
      <span className="simbolo">{value}</span>
    </button>
  );
};
export default Quadrado;
