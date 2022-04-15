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
  }, [squares]);

  useEffect(() => {
    if (numberOfPlayers === 1 && turn === "X") {
      setTimeout(() => {
        if (status === "inProgress") {
          dispatch({ type: "runAI", turn });
        }
      }, 500);
    }
  }, [turn, status]);

  const previousTurn = () => {
    return turn === "O" ? "X" : "O";
  };

  const whosTurn = numberOfPlayers === 1 && turn === "X" ? "AI" : "Your";

  return (
    <>
      <h2>Tic Tac Toe</h2>
      {status === "start" ? (
        <SelectPlayMode dispatch={dispatch} />
      ) : (
        <>
          <h3 style={{ color: "#edaa66" }}>
            {status === "won"
              ? `${previousTurn()} won`
              : `${whosTurn} turn ${turn}`}
          </h3>
          <Board squares={squares} />
          <PlayAgain />
        </>
      )}
    </>
  );
};

export default Game;
