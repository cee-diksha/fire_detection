import { Modal } from '@mui/material'
import React from 'react'
import Grid from "./Grid.js"

const DeckModal = ({open, handleClose, deck, compartment, alertDeck}) => {

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
              <h4>Deck {deck}</h4>
               {deck === alertDeck ? <Grid compartment={compartment} /> : <Grid compartment={null} />}
            </div>
        </Modal>
    </div>
  )
}

export default DeckModal
