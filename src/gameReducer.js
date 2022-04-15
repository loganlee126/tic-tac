const initialGame = {
  status: "start",
  squares: {
    1: " ",
    2: " ",
    3: " ",
    4: " ",
    5: " ",
    6: " ",
    7: " ",
    8: " ",
    9: " ",
  },
  turn: "O",
  numberOfPlayers: 2,
};

const WinningCases = [
  [1, 5, 9],
  [1, 2, 3],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

const preferredSqures = [5, 1, 3, 7, 9, 2, 4, 6, 8];

const allThreeMatched = (squares, _case) => {
  return (
    squares[_case[0]] !== " " &&
    squares[_case[0]] === squares[_case[1]] &&
    squares[_case[0]] === squares[_case[2]]
  );
};

const checkWinningStatus = (squares) => {
  let won = false;
  WinningCases.forEach((_case) => {
    if (allThreeMatched(squares, _case)) {
      won = true;
    }
  });
  return won;
};

const runAI = (squares) => {
  for (let number of preferredSqures) {
    if (squares[number] === " ") {
      return number;
    }
  }
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "takeTurn":
      return {
        ...state,
        squares: { ...state.squares, [action.id]: action.turn },
        turn: state.turn === "O" ? "X" : "O",
      };
    case "checkWin":
      const checkWin = checkWinningStatus(state.squares);
      return {
        ...state,
        status: checkWin ? "won" : state.status,
      };
    case "initialize":
      return initialGame;
    case "selectMode":
      return {
        ...state,
        numberOfPlayers: action.numberOfPlayers,
        status: "inProgress",
      };
    case "runAI":
      if (state.status === "won") {
        return state;
      }
      const aIPick = runAI(state.squares);
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
        squares: { ...state.squares, [aIPick]: action.turn },
      };
    default:
      throw new Error();
  }
};

export { initialGame, gameReducer };
