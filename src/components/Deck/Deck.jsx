import "./Deck.css";
import { useCards } from "../../contexts/CardsProvider";
import { Card } from "../Card/Card";
export const Deck = () => {
  const { cardsDeck } = useCards();

  return (
    <div className="container">
      {cardsDeck?.map((card) => {
        return <Card value={card.value} suit={card.suit} />;
      })}
    </div>
  );
};
