import { useCards } from "../../contexts/CardsProvider";

export const ShuffleCards = () => {
  const { cardsDeck, setCardsDeck } = useCards();
  console.log(cardsDeck);

  const shuffleCards = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  const handleShuffleCards = () => {
    const cards = shuffleCards(cardsDeck);
    console.log(cards);
    setCardsDeck(cards);
  };
  return (
    <>
      <button onClick={handleShuffleCards}>Shuffle</button>
    </>
  );
};
