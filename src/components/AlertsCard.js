import React from 'react'
import "./Grid-style.css"
// import { MainContext } from '../context/MainContext'
// import {DeckModal} from "./DeckModal"


const AlertsCard = () => {
    // const {deviceInfo} = useContext(MainContext)
    // const [cardData, setCardData] = useState(deviceInfo)
    // const [showModal, setShowModal] = useState(false)
    // const danger = cardData.filter(item => item.status === "danger")
    // const [deck, setDeck] = useState(danger)
    // const [deckNo, setDeckNo] = useState(null)
    // const totalDecks = 6

    // const handleBtnClick = (deckNo) => {
    //   setShowModal(true)
    //   setDeckNo(deckNo)
    // }

    // useEffect(() => {
    //     setDeck(danger)
    //     setCardData(deviceInfo)
    // }, [deviceInfo])
     
  return (
    <div className='deckcard'>
        {/* {Array(totalDecks).fill().map((_, index) => {
          console.log(deck, "deck check")
          const dangerDeckNos = deck.map(item => item.deck)
          return(
            <button className={`${dangerDeckNos.includes(index+1)  ? "alert" : "btnstyle"}`} onClick={ () => handleBtnClick((index+1))}>Deck {index+1}</button>          
          )
        })} */}
        <div className='alert-details-combined' >
            <div id="alert-details-span1">ALERTS</div>
        </div>
        <div className='alert-details-combined' >
            <div id="alert-details-span1">Level - 0</div>
            <div id="alert-details-span3" style={{backgroundColor: "#7BFF6D"}}></div>
        </div>
        <div className='alert-details-combined' >
            <div id="alert-details-span1">Level - 1</div>
            <div id="alert-details-span3" style={{backgroundColor: "#FFC648"}}></div>
        </div>
        <div className='alert-details-combined' >
            <div id="alert-details-span1">Level - 2</div>
            <div id="alert-details-span3"style={{backgroundColor: "#FF6B3B"}}></div>
        </div>
        <div className='alert-details-combined' >
            <div id="alert-details-span1">Level - 3</div>
            <div id="alert-details-span3" style={{backgroundColor: "#F84848"}}></div>
        </div>
    </div>
  )
}

export default AlertsCard
