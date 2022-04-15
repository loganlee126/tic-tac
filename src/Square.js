import React, { useContext } from "react";
import { GameContext } from "./GameContext";

const Square = ({ handleFinishTurn, id, turn, mark }) => {
  const [{ status }, dispatch] = useContext(GameContext);
  const handleClick = () => {
    if (mark !== " ") {
      return alert("already filled");
    }
    const nextTurn = turn === "O" ? "X" : "O";
    handleFinishTurn(id, nextTurn);
  };
  return (
    <button onClick={handleClick} disabled={status === "won"}>
      <div
        style={{
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 50, color: "#3d3d38" }}>{mark}</div>
      </div>
    </button>
  );
};

export default Square;
