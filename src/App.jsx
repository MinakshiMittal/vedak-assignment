import "./App.css";
import { Deck, DrawCardsButton, ShuffleCards, DrawnCards } from "./components";

function App() {
  return (
    <div className="App">
      <Deck />
      <DrawCardsButton />
      <ShuffleCards />
      <DrawnCards />
    </div>
  );
}

export default App;
