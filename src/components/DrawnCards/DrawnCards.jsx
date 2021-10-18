import { useCards } from "../../contexts/CardsProvider";
import { Card } from "../../components";
import "./DrawnCards.css";

export const DrawnCards = () => {
  const { drawnCards } = useCards();
  return (
    <>
      {drawnCards && (
        <div className="drawn-cards-container">
          {drawnCards?.map((card) => {
            return <Card value={card.value} suit={card.suit} />;
          })}
        </div>
      )}
      {drawnCards?.length === 0 && <h1>Deck Over</h1>}
    </>
  );
};
