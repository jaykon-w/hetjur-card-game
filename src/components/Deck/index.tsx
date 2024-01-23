import { useCallback, useState } from "react";
import { useDeck } from "../../stores/deckStore";
import { Card } from "../Card";
import "./styles.css";
import { FaShuffle } from "react-icons/fa6";

interface DeckProps {}

export const Deck: React.FC<DeckProps> = () => {
  const deck = useDeck((state) => state.deck);
  const moveFromTo = useDeck((state) => state.moveFromTo);
  const shuffleDeck = useDeck((state) => state.shuffleDeck);

  const [shuffling, setShuffling] = useState(false);

  const clickHadler = useCallback(
    () => moveFromTo(deck[0].id, "deck", "battlefield"),
    [moveFromTo, deck]
  );

  const shuffle = useCallback(() => {
    setShuffling(true);
    shuffleDeck();
    setTimeout(() => setShuffling(false), 1000);
  }, [shuffleDeck, setShuffling]);

  return (
    <div className="deck">
      <div className="card-place">
        {(deck as any[]).length ? (
          <>
            <div onClick={clickHadler}>
              <Card {...({} as any)} back count={deck.length} />
            </div>
            <div className="tools" title="Embaralhar" onClick={shuffle}>
              <FaShuffle />
            </div>
          </>
        ) : (
          <div style={{ width: "200px" }}></div>
        )}
      </div>
      <div className="card-place-title">
        {shuffling ? "EMBARALHANDO..." : "DECK"}
      </div>
    </div>
  );
};
