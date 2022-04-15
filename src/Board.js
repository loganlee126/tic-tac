import React, { useState } from "react";
import Square from "./Square";

const Board = ({ squares }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Square id={1} mark={squares[1]} />
        <Square id={2} mark={squares[2]} />
        <Square id={3} mark={squares[3]} />
      </div>
      <div style={{ display: "flex" }}>
        <Square id={4} mark={squares[4]} />
        <Square id={5} mark={squares[5]} />
        <Square id={6} mark={squares[6]} />
      </div>
      <div style={{ display: "flex" }}>
        <Square id={7} mark={squares[7]} />
        <Square id={8} mark={squares[8]} />
        <Square id={9} mark={squares[9]} />
      </div>
    </>
  );
};

export default Board;
