import React, { useContext, useEffect, useState } from "react";
import Board from "./Board";
import { GameContext } from "./GameContext";
import PlayAgain from "./PlayAgain";
import SelectPlayMode from "./SelectPlayMode";

const Game = () => {
  const [{ numberOfPlayers, status, squares, turn }, dispatch] =
    useContext(GameContext);
  useEffect(() => {
    dispatch({ type: "checkWin" });
    if (numberOfPlayers === 1 && turn === "X") {
      dispatch({ type: "runAI" });
    }
  }, [squares]);

  const previousTurn = () => {
    return turn === "O" ? "X" : "O";
  };

  return (
    <>
      <h2>Tic Tac Toe</h2>
      {status === "start" ? (
        <SelectPlayMode dispatch={dispatch} />
      ) : (
        <>
          {numberOfPlayers === 1 && <h2>Not Ready</h2>}
          <h3 style={{ color: "#edaa66" }}>
            {status === "won" ? `${previousTurn()} won` : `Your turn ${turn}`}
          </h3>
          <Board squares={squares} />
          <PlayAgain />
        </>
      )}
    </>
  );
};

export default Game;
