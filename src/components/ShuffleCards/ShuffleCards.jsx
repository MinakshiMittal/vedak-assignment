import { useCards } from "../../contexts/CardsProvider";

export const ShuffleCards = () => {
  const { cardsDeck, setCardsDeck } = useCards();

  const shuffleCardsDeck = () => {
    let shuffledDeck = cardsDeck
      .map((value) => ({ value, sort: Math.random() }))
      .sort((one, two) => one.sort - two.sort)
      .map(({ value }) => value);
    return setCardsDeck(shuffledDeck);
  };

  return (
    <>
      <button onClick={() => shuffleCardsDeck()}>Shuffle</button>
    </>
  );
};
