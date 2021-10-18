import "./Card.css";
import Hearts from "../../assets/hearts.png";
import Spades from "../../assets/spades.png";
import Diamonds from "../../assets/diamonds.png";
import Clubs from "../../assets/clubs.png";

export const Card = ({ value, suit }) => {
  return (
    <div className="card">
      <div className="card-upper">
        <p className="card-value">{value}</p>
        {suit === "hearts" && (
          <img src={Hearts} alt="hearts" className="card-image" />
        )}
        {suit === "clubs" && <img src={Clubs} alt="clubs" />}
        {suit === "spades" && <img src={Spades} alt="spades" />}
        {suit === "diamonds" && <img src={Diamonds} alt="spades" />}
      </div>
      {suit === "clubs" && (
        <img src={Clubs} alt="clubs" className="card-middle" />
      )}
      {suit === "hearts" && (
        <img src={Hearts} alt="hearts" className="card-middle" />
      )}
      {suit === "spades" && (
        <img src={Spades} alt="spades" className="card-middle" />
      )}
      {suit === "diamonds" && (
        <img src={Diamonds} alt="spades" className="card-middle" />
      )}
      <div className="card-lower">
        {suit === "hearts" && <img src={Hearts} alt="hearts" />}
        {suit === "clubs" && <img src={Clubs} alt="clubs" />}
        {suit === "spades" && <img src={Spades} alt="spades" />}
        {suit === "diamonds" && <img src={Diamonds} alt="spades" />}
        <p className="card-value">{value}</p>
      </div>
    </div>
  );
};
