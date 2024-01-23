import { useDeck } from "../../stores/deckStore";
import { Card } from "../Card";
import "./styles.css";

interface CemeteryProps {}

export const Cemetery: React.FC<CemeteryProps> = () => {
  const cemetery = useDeck((state) => state.cemetery);

  return (
    <div className="cemetery">
      <div className="card-place">
        {(cemetery as any[]).length ? (
          <div>
            <Card {...({} as any)} back count={cemetery.length} />
          </div>
        ) : (
          <div style={{ width: "200px" }}></div>
        )}
      </div>
      <div className="card-place-title">CEMITÉRIO</div>
    </div>
  );
};
