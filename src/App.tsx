import "./App.css";
import { Cemetery } from "./components/Cemetery";
import { BattleField } from "./components/BattleField";
import { Deck } from "./components/Deck";
import { hero } from "./data";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="table-wrapper">
      <div className="table">
        <div className="table-battlefield">
          <BattleField></BattleField>
        </div>
        <div className="table-deck">
          <Cemetery></Cemetery>
          <Deck></Deck>
          <div className="table-hero-card">
            <Card {...hero} disableZoom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
