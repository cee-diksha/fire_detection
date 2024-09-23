import React, { useContext, useEffect, useState } from 'react'
import "./Grid-style.css"
import { MainContext } from '../context/MainContext'
import {DeckModal} from "./DeckModal"


const DeckCard = () => {
    const {deviceInfo} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo)
    const [showModal, setShowModal] = useState(false)
    const danger = cardData.filter(item => item.status === "danger")
    const [deck, setDeck] = useState(danger)
    const [deckNo, setDeckNo] = useState(null)
    const totalDecks = 6

    const handleBtnClick = (deckNo) => {
      setShowModal(true)
      setDeckNo(deckNo)
    }

    useEffect(() => {
        setDeck(danger)
        setCardData(deviceInfo)
    }, [deviceInfo])
     
  return (
    <div className='deckcard'>
        {Array(totalDecks).fill().map((_, index) => {
          console.log(deck, "deck check")
          const dangerDeckNos = deck.map(item => item.deck)
          return(
            <button className={`${dangerDeckNos.includes(index+1)  ? "alert" : "btnstyle"}`} onClick={ () => handleBtnClick((index+1))}>Deck {index+1}</button>          
          )
        })}
        {showModal && deck.map((item, index) =>{
          return (
            <DeckModal key= {index} open={true} handleClose={setShowModal} clickedDeck={deckNo} deckinfo = {deck}/>
          )
        })}
    </div>
  )
}

export default DeckCard
