import { Modal } from '@mui/material'
import React from 'react'
import Grid from "./Grid.js"

export const DeckModal = ({open, handleClose, clickedDeck, deckinfo}) => {
const alertdeck = deckinfo.filter(item => item.deck === clickedDeck)
  return (
    <div>
      <Modal
            className='popup-grid-modal'
            open={open}
            onClose={() => handleClose(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
           
            <div className='status-grid-modal' style={{cursor: "pointer"}}>
            <button className='close-btn' onClick={() => handleClose(false)}>Close</button>
              <h4>Deck {clickedDeck}</h4>
               {alertdeck.length > 0 && <Grid compartment={alertdeck[0].compartment} /> }
            </div>
        </Modal>
    </div>
  )
}

export const DeckDashboardPageDiv = ({data}) => {
  console.log(data, "deckdivdatacheeck")
    return (
      <div>
        <div className='status-grid-modal' style={{cursor: "pointer"}}>
          <h4>Deck {data.deck}</h4>
          <Grid compartment={data.compartment} /> 
        </div>
      </div>
    )
  }

