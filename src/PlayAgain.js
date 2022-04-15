import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { GameContext } from "./GameContext";

const PlayAgain = () => {
  const [{ status }, dispatch] = useContext(GameContext);

  return (
    <>
      {status === "won" && (
        <Button
          sx={{ mt: "2rem" }}
          variant="contained"
          onClick={() => dispatch({ type: "initialize" })}
        >
          Play Again
        </Button>
      )}
    </>
  );
};

export default PlayAgain;
