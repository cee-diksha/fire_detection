import React, { useEffect, useState, useContext } from "react";
import { MainContext } from "../context/MainContext"; 
import "./Grid-style.css"; 
import { Link } from "react-router-dom";

const DeckCard = () => {
  const { deviceInfo } = useContext(MainContext);
  const [cardData, setCardData] = useState(deviceInfo);
  const danger = cardData.filter(item => item.status.includes("danger"));
  const [deck, setDeck] = useState(danger);

  const totalDecks = 6; 

  useEffect(() => {
    setDeck(danger);
    setCardData(deviceInfo);
  }, [deviceInfo]);
  

  return (
    <div className='deckcard-container'>
      {Array(totalDecks).fill().map((_, index) => {
        const deckNo = index + 1;
        const dangerDeckNos = deck.map(item => item.deck);

        return (
          <Link to={`/deck/${deckNo}`}  className={`${dangerDeckNos.includes(deckNo) ? "alert" : "btnstyle"}`} style={{textDecoration: "none", color: `${dangerDeckNos.includes(deckNo) ? "#ffffff" : "#000000"}`, width: `${90 - index * 12}%`,textAlign:'center', height: "17px", fontWeight: "400", cursor: "pointer"}}>
            <div
              key={deckNo}
            >
             Deck {deckNo}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default DeckCard;
