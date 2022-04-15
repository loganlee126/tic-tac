import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";
import { GameProvider } from "./GameContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameProvider>
          <Game />
        </GameProvider>
      </header>
    </div>
  );
}
export default App;
