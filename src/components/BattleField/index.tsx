import { useDeck } from "../../stores/deckStore";
import { Card } from "../Card";
import "./styles.css";
import { BattleFieldTools } from "../BattleFieldTools";

export interface BattleFieldProps {}

export const BattleField: React.FC<BattleFieldProps> = () => {
  const battlefield = useDeck((state) => state.battlefield);

  return (
    <div className="battlefield">
      {battlefield.map((e) => {
        return (
          <Card
            {...e}
            tools={<BattleFieldTools cardId={e.id} />}
            key={crypto.randomUUID()}
          />
        );
      })}
    </div>
  );
};
