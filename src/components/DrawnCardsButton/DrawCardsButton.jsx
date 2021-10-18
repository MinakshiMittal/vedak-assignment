import { useCards } from "../../contexts/CardsProvider";

export const DrawCardsButton = () => {
  const { cardsDeck, setDrawnCards, setCardsDeck } = useCards();

  const handleDrawCards = () => {
    let drawnCards = [];
    let remainingCards = [...cardsDeck];

    for (let i = 0; i < 5; i++) {
      let drawnCard =
        remainingCards[Math.floor(Math.random() * remainingCards.length)];
      remainingCards = remainingCards.filter((card) => {
        if (card.value === drawnCard.value && card.suit === drawnCard.suit)
          return false;
        return true;
      });
      drawnCards = [...drawnCards, drawnCard];
    }
    setDrawnCards(drawnCards);
    setCardsDeck(remainingCards);
  };
  return (
    <>
      {cardsDeck.length >= 5 && (
        <button onClick={handleDrawCards}>Draw Cards</button>
      )}
      {cardsDeck.length < 5 && <h1>Insufficient Cards Reamaining</h1>}
    </>
  );
};
