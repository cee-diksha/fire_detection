import { Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import stopalarm from "../assets/stop_alarm.png"
import "../comp-styles.css"
import { MainContext } from '../context/MainContext'
import battery from "../assets/battery.png"
import temp from "../assets/temp.png"


const CardModal = ({open, handleClose, option }) => {
    console.log(option, "option test")
    const {deviceInfo} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo)
    const [specificData, setSpecificData] = useState(null)

    useEffect(() => {
       const result =  cardData.filter(item => item.node_name === option)
       console.log(result, "result", cardData)
       setSpecificData(result[0])
    }, [])

    useEffect(() => {
        setCardData(deviceInfo)
    }, [deviceInfo])

    const handleRefresh = (event) => {
        event.preventDefault()
        event.stopPropagation()
      }
  
      const handleStopAlarm =  (event) => {
        event.preventDefault()
        event.stopPropagation()
      }
    
  return (
    <>
      <Modal
            className='popup-modal'
            open={open}
            onClose={(e) => handleClose(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div className='status-card-modal' style={{cursor: "pointer"}}>
                <button onClick={(e) => {
                    handleClose(false)
                    e.preventDefault()
                    e.stopPropagation()
                }}>Close</button>
            {specificData && <div className={`${specificData.status === "danger" ? "blinking-border" : "card-wrapper"}`} style={{ height: "180px", width: "200px", backgroundColor: `${specificData.status === "success" ? "#7BFF6D" : specificData.status === "yellow" ? "#FFC648" : specificData.status === "orange" ? "#FF6B3B" : "#F84848"}`, color: `${(specificData.status === "yellow" || specificData.status ==="success") ? "#000" : "#fff"}`}}>
                <div className='card-details'>
                    <div className='card-details-combined'>
                        <div id="card-details-span1">{specificData.node_name} </div>
                        <div id="card-details-span2">{specificData.node_id}</div>
                    </div>
                    <div className='card-details-combined'>
                        <div class="battery-span"><img src={battery} alt="battery-logo" style={{height: "20px"}}/>{specificData.battery_percentage}</div>
                        <div class="battery-span"><img src={temp} alt="battery-logo" style={{height: "20px"}}/>{specificData.temp}</div>
                    </div>
                    <div id="card-details-span1">Last Update</div>
                    <div id="card-details-span2">{specificData.last_update}</div>
                </div>
                <div className='card-details-circles'>
                    <div id="card-details-circle1"  style={{margin: "0 6px"}}>S</div>
                    <div id="card-details-circle2">T</div>
                    <button id="refresh" onClick={handleRefresh}>Refresh</button>
                    <img src={stopalarm} onClick={handleStopAlarm} style={{margin: "0 4px", height: "30px", cursor: "pointer"}} alt="stop-alarm" />        
                </div>
                </div>}
            </div>
        </Modal>
    </>
  )
}

export default CardModal
