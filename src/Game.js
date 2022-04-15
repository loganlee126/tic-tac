import React, { useContext, useEffect, useState } from "react";
import Board from "./Board";
import { GameContext } from "./GameContext";

const Game = () => {
  const [turn, setTurn] = useState("O");

  const [{ status, squares }, dispatch] = useContext(GameContext);

  const handleFinishTurn = (id, nextTurn) => {
    dispatch({ type: "turn", id, turn });
    setTurn(nextTurn);
  };

  useEffect(() => {
    dispatch({ type: "checkWin" });
  }, [squares]);

  const previousTurn = () => {
    return turn === "O" ? "X" : "O";
  };

  return (
    <>
      <h2>Tic Tac Toe</h2>
      <h3 style={{ color: "#edaa66" }}>
        {status.includes("won") ? `${previousTurn()} won` : `Your turn ${turn}`}
      </h3>
      <Board
        turn={turn}
        handleFinishTurn={handleFinishTurn}
        squares={squares}
      />
    </>
  );
};

export default Game;
