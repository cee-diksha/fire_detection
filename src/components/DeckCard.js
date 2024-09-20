import React, { useContext, useEffect, useState } from 'react'
import "./Grid-style.css"
import { MainContext } from '../context/MainContext'
import DeckModal from './DeckModal'


const DeckCard = () => {
    const {deviceInfo} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo)
    const [showModal, setShowModal] = useState(false)
    const [deck, setDeck] = useState(null)
    const [compartment, setCompartment] = useState(null)
    const [deckNo, setDeckNo] = useState(null)
    const totalDecks = 6
    const danger = cardData.filter(item => item.status === "danger")

    const handleBtnClick = (deckNo) => {
      setShowModal(true)
      setDeckNo(deckNo)
    }

    useEffect(() => {
        setDeck(danger[0].deck)
        console.log(danger[0].deck, "danger[0].deck")
        setCompartment(danger[0].compartment)
        setCardData(deviceInfo)
    }, [deviceInfo])
     
  return (
    <div className='deckcard'>
        {Array(totalDecks).fill().map((_, index) => {
          return(
            <button className={`${index+1 === deck ? "alert" : "btnstyle"}`} onClick={ () => handleBtnClick((index+1))}>Deck {index+1}</button>          
          )
        })}
        {showModal && <DeckModal open={true} handleClose={setShowModal} deck={deckNo} compartment={compartment} alertDeck={deck}/>}
    </div>
  )
}

export default DeckCard
