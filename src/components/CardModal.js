import { Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import stopalarm from "../assets/stop_alarm.png"
import "./comp-styles.css"
import { MainContext } from '../context/MainContext'


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
    
  return (
    <>
      <Modal
            className='popup-modal'
            open={open}
            onClose={() => handleClose(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div className='status-card-modal' style={{cursor: "pointer"}}>
                <button onClick={() => handleClose(false)}>Close</button>
            {specificData && <div className={`${specificData.status === "danger" ? "blinking-border" : "card-wrapper"}`} style={{backgroundColor: `${specificData.status === "success" ? "#7BFF6D" : specificData.status === "yellow" ? "#FFC648" : specificData.status === "orange" ? "#FF6B3B" : "#F84848"}`, color: `${(specificData.status === "yellow" || specificData.status ==="success") ? "#000" : "#fff"}`}}>
                <div className='card-details'>
                    <div className='card-details-combined'>
                        <div id="card-details-span1">{specificData.node_name} </div>
                        <div id="card-details-span2">{specificData.node_id}</div>
                    </div>
                    <div className='card-details-combined'>
                        <div id="card-details-span1">{specificData.bat_volt}</div>
                        <div id="card-details-span1">{specificData.temp}</div>
                    </div>
                    <div id="card-details-span1">Last Update</div>
                    <div id="card-details-span2">{specificData.last_update}</div>
                </div>
                <div className='card-details-circles'>
                    <div id="card-details-circle1">S</div>
                    <div id="card-details-circle2">T</div>
                    <button id="refresh">Refresh</button>
                    <img src={stopalarm} alt="stop-alarm" style={{height: "30px", cursor: "pointer"}}/>        
                </div>
                </div>}
            </div>
        </Modal>
    </>
  )
}

export default CardModal
