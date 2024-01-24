import "./App.css";
import { Cemetery } from "./components/Cemetery";
import { BattleField } from "./components/BattleField";
import { Deck } from "./components/Deck";
import { hero } from "./data";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="table">
      <div className="table-battlefield">
        <BattleField></BattleField>
      </div>
      <div className="table-deck">
        <Cemetery></Cemetery>
        <Deck></Deck>
        <div
          style={{
            width: "248px",
            transform: "translate(-30px, -348px)",
          }}
        >
          <Card {...hero} zoomed />
        </div>
      </div>
    </div>
  );
}

export default App;
