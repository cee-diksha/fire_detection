import { Modal } from '@mui/material'
import React, { useContext, useState } from 'react'
import "../comp-styles.css"
import { MainContext } from '../context/MainContext'

export const ConfimationModal = ({open, handleClose}) => {
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


export const WarningModal = ({open, handleClose}) => {
  return (
    <>
      <Modal
          className='confimation-modal2'
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <div className='confimation-modal2-div'>
             <h6>Warning</h6>
          </div>
      </Modal>
    </>
  )
}

export const GetCodeForTrigger = ({open, handleClose}) => {
  const {suppressionNode, setSuppressorStatus, setDeviceInfo, deviceInfo} = useContext(MainContext)
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [accessCode, setAccessCode] = useState("")


  const activateSuppressor = (setSuppressorStatus, suppressionNode, setDeviceInfo, deviceInfo) => {
    setSuppressorStatus(true)
    const filteredSuppressor = deviceInfo.filter(item => (item.node_type === "suppressor" && (item.deck === suppressionNode.deck && item.compartment === suppressionNode.compartment)))
    console.log(filteredSuppressor, "filteredSuppressor", suppressionNode, deviceInfo)
     if (filteredSuppressor.length > 0) {
      setDeviceInfo(prev => 
        prev.map(item => {
          if (item.node_id === filteredSuppressor[0].node_id) {
            return { ...item, triggeringDevice: true };
          }
          return item; 
        })
      );
    }
  };

  const handleRefresh = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleProceed = (event) => {
    handleRefresh(event)
    if (accessCode === "1234") {
      activateSuppressor(setSuppressorStatus, suppressionNode, setDeviceInfo, deviceInfo)
      handleClose(false)
    } else {
      // handleClose(false)
      setShowWarningModal(true)
    }
  }

  const closeModal = (event) => {
    handleRefresh(event)
    handleClose(false)
  }

  const enterAccessCode = (event) => {
    handleRefresh(event)
    setAccessCode(event.target.value)
  }

return (
  <>
      <Modal
          className='confimation-modal2'
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <div className='confimation-modal2-div'>
             <h6>Enter access code</h6>
             <input type="text" onClick={(event) => handleRefresh(event)} onChange={(event) => enterAccessCode(event)}/>
             <div className='confimation-modal2-btn-wrapper'>
              <button onClick={(event) => handleProceed(event)}>Proceed</button>
              <button onClick={(event) => closeModal(event)}>Cancel</button>
             </div>
          </div>
      </Modal>
      {console.log(showWarningModal, "showWarningModal")}
      {showWarningModal && <WarningModal open={true} handleClose={setShowWarningModal} />}
  </>
)
}