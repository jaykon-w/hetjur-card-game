import { FaClone, FaTrash, FaUndo } from "react-icons/fa";
import "./style.css";
import { CardDataType } from "../../data";
import { useDeck } from "../../stores/deckStore";

interface BattleFieldToolsProps {
  cardId: CardDataType[0]["id"];
}

export const BattleFieldTools: React.FC<BattleFieldToolsProps> = ({
  cardId,
}) => {
  const moveFromTo = useDeck((state) => state.moveFromTo);
  const clone = useDeck((state) => state.clone);

  return (
    <div className="battlefield-tools">
      <FaTrash
        title="Mover para o cemitério"
        onClick={() => moveFromTo(cardId, "battlefield", "cemetery")}
      />
      <FaClone title="Clonar a carta" onClick={() => clone(cardId)} />
      <FaUndo
        title="Voltar para o início do Deck"
        onClick={() => moveFromTo(cardId, "battlefield", "deck", true)}
      />
      <FaUndo
        transform="rotate(180)"
        title="Voltar para o fundo do Deck"
        onClick={() => moveFromTo(cardId, "battlefield", "deck")}
      />
    </div>
  );
};
