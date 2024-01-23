import "./App.css";
import { Cemetery } from "./components/Cemetery";
import { BattleField } from "./components/BattleField";
import { Deck } from "./components/Deck";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <div className="table-deck">
        <Cemetery></Cemetery>
        <Deck></Deck>
        <div style={{ width: "264px" }}></div>
      </div>
      <div className="table-battlefield">
        <BattleField></BattleField>
      </div>
    </div>
  );
}

export default App;
