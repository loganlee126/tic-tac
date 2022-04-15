import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const SelectPlayMode = ({ dispatch }) => {
  const handleSelect = (numberOfPlayers) => {
    dispatch({ type: "selectMode", numberOfPlayers });
  };
  return (
    <>
      <h3>Select Play Mode</h3>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => handleSelect(1)}>One Player</Button>
        <Button onClick={() => handleSelect(2)}>Two Players</Button>
      </ButtonGroup>
    </>
  );
};

export default SelectPlayMode;
