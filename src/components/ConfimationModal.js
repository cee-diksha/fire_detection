import { Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import "../comp-styles.css"
import { MainContext } from '../context/MainContext'
import { Link } from 'react-router-dom'
import Card from './Card'
import { toast } from 'react-toastify'

export const ConfimationModal = ({open, handleClose}) => {
    const handleResetDatabase = () => {
        // api call to reset db
        handleClose(false)
        toast.success("Database has been successfully reset")
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
               <h6>Are you sure you want to reset database? <br></br> <span style={{color: "#FFC300"}}>This will erase the full configuration</span></h6>
              
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

export const MarkFault = ({open, handleClose, setDeviceInfo, item}) => {
  const [reason, setReason] = useState("")

  const submit = (event) => {
    handleRefresh(event)
    if(reason!=="") {
      handleClose(false)
      setDeviceInfo(prev => prev.map(device => {
      if (device.node_id === item.node_id) return {...device, status: ["deleted"], isDeleted: true, faultReason: reason}
      return device
    }))
    toast.success("Fault reason submitted")
  }
  toast.error("Please provide the reason for the fault")
  }

  const cancel = (event) => {
    handleRefresh(event)
    handleClose(false)
  }

  const handleInput = (event) => {
    handleRefresh(event)
    setReason(event.target.value)
  }

  return (
   <>
   <Modal
      className='fault-modal'
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <div className='confimation-modal-div'>
          <h6 style={{fontSize: "14px"}}>Provide a reason for the fault in the selected device. <br></br> This information will help in troubleshooting and resolving the issue more effectively.</h6>
          <input style={{marginTop: "-14px", height: "10px", width: "240px"}} type="text" onChange={handleInput} onClick={handleRefresh} />
          <div className='confimation-modal-btn-wrapper' style={{marginTop: "4px"}}>
          <button style={{fontSize: "12px"}} onClick={submit}>Submit</button>
          <button style={{fontSize: "12px"}} onClick={cancel}>Cancel</button>
          </div>
      </div>
    </Modal>
   </>
  )
}

export const WarningModal = ({open, handleClose, handleCloseMain}) => {
  const {targetNode, setSuppressorStatus, setDeviceInfo, deviceInfo, setIsActivated} = useContext(MainContext)

  const activateSuppressor = (setSuppressorStatus, targetNode, setDeviceInfo, deviceInfo) => {
    setSuppressorStatus(true)
    const filteredSuppressor = deviceInfo.filter(item => (item.node_type === "suppressor" && (item.deck === targetNode.deck && item.compartment === targetNode.compartment)))
    console.log(filteredSuppressor, "filteredSuppressor", targetNode, deviceInfo)
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
    const isActivated = {node_id: targetNode.node_id, suppressor_id: filteredSuppressor[0].node_id, status: true}
    setIsActivated(prev => [...prev, isActivated])
  };

  const handleProceed = (event) => {
    handleRefresh(event)
    activateSuppressor(setSuppressorStatus, targetNode, setDeviceInfo, deviceInfo)
    handleClose(false)
    handleCloseMain(false)
    toast.success("Suppressor activated")
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
  const {targetNode, setSuppressorStatus, setDeviceInfo, deviceInfo, setIsActivated} = useContext(MainContext)
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [accessCode, setAccessCode] = useState("")


  const activateSuppressor = (setSuppressorStatus, targetNode, setDeviceInfo, deviceInfo) => {
    setSuppressorStatus(true)
    const filteredSuppressor = deviceInfo.filter(item => (item.node_type === "suppressor" && (item.deck === targetNode.deck && item.compartment === targetNode.compartment)))
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
    const isActivated = {node_id: targetNode.node_id, suppressor_id: filteredSuppressor[0].node_id, status: true}
    setIsActivated(prev => [...prev, isActivated])
  };

  const handleProceed = (event) => {
    handleRefresh(event)
    if (accessCode === "1234") {
      activateSuppressor(setSuppressorStatus, targetNode, setDeviceInfo, deviceInfo)
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

export const ConnectedDevicesModal = ({open, handleClose, node_id}) => {
  const {deviceInfo} = useContext(MainContext)

  const closeModal = (event) => {
    handleClose(false)
    handleRefresh(event)
  }
  const [affectedDevices, setAffectedDevices] = useState([])

  useEffect(() => {
    const filtered = deviceInfo.filter(item => item.connectedTo === node_id)
    setAffectedDevices(filtered)
    console.log(filtered, "affectedDevices", node_id)
  }, [deviceInfo, node_id])

return (
  <>
      <Modal
          className='conn-modal'
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <div className='conn-modal-div'>
          <div className='conn-cards'>
          {affectedDevices.length > 0 && affectedDevices.map(item => {
            return (
              <Link className='link-style' to={`/info/${item.node_name}`} key={item.id}>
                <Card item={item} />
              </Link>
            )
            })}
          </div>
             <button className="conn-btn" onClick={(event) => closeModal(event)}>Close</button>
          </div>
      </Modal>
  </>
)
}