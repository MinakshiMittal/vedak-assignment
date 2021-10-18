import { useCards } from "../../contexts/CardsProvider";

export const DrawCardsButton = () => {
  const { cardsDeck, setDrawnCards, setCardsDeck } = useCards();

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
  return <button onClick={handleDrawCards}>Draw Cards</button>;
};
