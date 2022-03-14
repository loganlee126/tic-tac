import React, { useState } from "react";
import Square from "./Square";

const Board = ({ handleFinishTurn, turn, squares }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Square
          id={1}
          handleFinishTurn={handleFinishTurn}
          turn={turn}
          mark={squares[1]}
        />
        <Square
          id={2}
          handleFinishTurn={handleFinishTurn}
          turn={turn}
          mark={squares[2]}
        />
        <Square
          id={3}
          handleFinishTurn={handleFinishTurn}
          turn={turn}
          mark={squares[3]}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Square
          id={4}
          handleFinishTurn={handleFinishTurn}
          turn={turn}
          mark={squares[4]}
        />
        <Square
          id={5}
          handleFinishTurn={handleFinishTurn}
          turn={turn}
          mark={squares[5]}
        />
        <Square
          id={6}
          handleFinishTurn={handleFinishTurn}
          turn={turn}
          mark={squares[6]}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Square
          id={7}
          handleFinishTurn={handleFinishTurn}
          turn={turn}
          mark={squares[7]}
        />
        <Square
          id={8}
          handleFinishTurn={handleFinishTurn}
          turn={turn}
          mark={squares[8]}
        />
        <Square
          id={9}
          handleFinishTurn={handleFinishTurn}
          turn={turn}
          mark={squares && squares[9]}
        />
      </div>
    </>
  );
};

export default Board;
