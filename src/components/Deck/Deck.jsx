import "./Deck.css";
import { useCards } from "../../contexts/CardsProvider";

export const Deck = () => {
  const { cardsDeck, setCardsDeck, setDrawnCards } = useCards();

  const handleDrawCards = () => {
    let size = 0;
    let drawnCards = cardsDeck.slice(size, size + 5);
    setDrawnCards(drawnCards);
    let remainingCards = cardsDeck.filter((card) => {
      for (let i = 0; i < drawnCards.length; i++) {
        if (
          card.value === drawnCards[i].value &&
          card.suit === drawnCards[i].suit
        )
          return false;
      }
      return true;
    });
    setCardsDeck(remainingCards);
  };
  return (
    <div className="container">
      <img
        src="https://deck.of.cards/old/faces/back.png"
        alt="Playing Cards Deck Cover"
        className="deck"
        onClick={handleDrawCards}
      />
    </div>
  );
};
