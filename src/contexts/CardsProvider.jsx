import { createContext, useContext, useState } from "react";
import { playingCardsDeck } from "../playingCardsData";

const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const [cardsDeck, setCardsDeck] = useState(playingCardsDeck);
  const [drawnCards, setDrawnCards] = useState();

  return (
    <CardsContext.Provider
      value={{ cardsDeck, setCardsDeck, drawnCards, setDrawnCards }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export const useCards = () => {
  return useContext(CardsContext);
};
