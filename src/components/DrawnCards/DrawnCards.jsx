import { useCards } from "../../contexts/CardsProvider";
import { Card } from "../../components";
import "./DrawnCards.css";

export const DrawnCards = () => {
  const { drawnCards } = useCards();
  return (
    <>
      <div className="drawn-cards-container">
        {drawnCards?.map((card) => {
          return <Card value={card.value} suit={card.suit} />;
        })}
      </div>
    </>
  );
};
