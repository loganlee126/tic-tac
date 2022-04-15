import React, { useContext, useEffect, useState } from "react";
import Board from "./Board";
import { GameContext } from "./GameContext";
import PlayAgain from "./PlayAgain";

const Game = () => {
  const [{ status, squares, turn }, dispatch] = useContext(GameContext);

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
        {status === "won" ? `${previousTurn()} won` : `Your turn ${turn}`}
      </h3>
      <Board squares={squares} />
      <PlayAgain />
    </>
  );
};

export default Game;
