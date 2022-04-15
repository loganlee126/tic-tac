import React, { useContext } from "react";
import { GameContext } from "./GameContext";

const Square = ({ id, mark }) => {
  const [{ status, turn }, dispatch] = useContext(GameContext);

  const handleFinishTurn = (id) => {
    dispatch({ type: "takeTurn", id, turn });
  };

  const handleClick = () => {
    if (mark !== " ") {
      return alert("already filled");
    }
    handleFinishTurn(id);
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
