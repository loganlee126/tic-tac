import React, { createContext, useReducer } from "react";
import { gameReducer, initialGame } from "./gameReducer";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const game = useReducer(gameReducer, initialGame);
  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
