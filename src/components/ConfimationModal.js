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

const handleRefresh = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

export const WarningModal = ({open, handleClose, handleCloseMain}) => {
  const {suppressionNode, setSuppressorStatus, setDeviceInfo, deviceInfo, setIsActivated} = useContext(MainContext)

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
    const isActivated = {node_id: suppressionNode.node_id, status: true}
    setIsActivated(prev => [...prev, isActivated])
  };

  const handleProceed = (event) => {
    handleRefresh(event)
    activateSuppressor(setSuppressorStatus, suppressionNode, setDeviceInfo, deviceInfo)
    handleClose(false)
    handleCloseMain(false)
  }

  return (
    <>
      <Modal
          className='warning-modal'
          onClick = {(event) => handleRefresh(event)}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <div className='warning-modal-div'>
             <h6>Wrong access code entered. Do you still wish to activate suppressor ?</h6>
             <h6><span>Warning:</span>
             This option is to be exercised only in case of dire emergency under the authorization of OOD/ WICO.</h6>
             <button onClick={handleProceed}>Activate</button>
          </div>
      </Modal>
    </>
  )
}

export const GetCodeForTrigger = ({open, handleClose}) => {
  const {suppressionNode, setSuppressorStatus, setDeviceInfo, deviceInfo, setIsActivated} = useContext(MainContext)
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [accessCode, setAccessCode] = useState("")


  const activateSuppressor = (setSuppressorStatus, suppressionNode, setDeviceInfo, deviceInfo) => {
    setSuppressorStatus(true)
    const filteredSuppressor = deviceInfo.filter(item => (item.node_type === "suppressor" && (item.deck === suppressionNode.deck && item.compartment === suppressionNode.compartment)))
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
    const isActivated = {node_id: suppressionNode.node_id, status: true}
    setIsActivated(prev => [...prev, isActivated])
  };

  const handleProceed = (event) => {
    handleRefresh(event)
    if (accessCode === "1234") {
      activateSuppressor(setSuppressorStatus, suppressionNode, setDeviceInfo, deviceInfo)
      handleClose(false)
    } else {
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
          onClick = {(event) => handleRefresh(event)}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <div className='confimation-modal2-div'>
             <h6>Enter access code</h6>
             <input type="text" onClick={(event) => handleRefresh(event)} onChange={(event) => enterAccessCode(event)}/>
             <div className='confimation-modal2-btn-wrapper'>
              <button onClick={(event) => handleProceed(event)}>Activate</button>
              <button onClick={(event) => closeModal(event)}>Cancel</button>
             </div>
          </div>
      </Modal>
      {console.log(showWarningModal, "showWarningModal")}
      {showWarningModal && <WarningModal open={true} handleClose={setShowWarningModal}  handleCloseMain = {handleClose} />}
  </>
)
}