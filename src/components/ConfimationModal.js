import { Modal } from '@mui/material'
import React from 'react'
import "./comp-styles.css"

const ConfimationModal = ({open, handleClose}) => {
    const handleResetDatabase = () => {
        // api call to reset db
        handleClose(false)
    }
  return (
    <>
        <Modal
            className='confimation-modal'
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div className='confimation-modal-div'>
               <h6>Are you sure you want to reset database?</h6>
               <div className='confimation-modal-btn-wrapper'>
                <button onClick={handleResetDatabase}>Yes</button>
                <button onClick={() => handleClose(false)}>Cancel</button>
               </div>
            </div>
        </Modal>
    </>
  )
}

export default ConfimationModal
