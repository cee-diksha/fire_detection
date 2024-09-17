import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { info } from '../assets/info'
import stopalarm from "../assets/stop_alarm.png"
import "./comp-styles.css"


const CardModal = ({open, handleClose, option }) => {
    console.log(option, "option test")
    const [cardData, setCardData] = useState(info)
    const [specificData, setSpecificData] = useState(null)
    const [status, setStatus] = useState(null)

    useEffect(() => {
       const result =  cardData.filter(item => item.data.node_name === option)
       console.log(result, "result", cardData)
       setSpecificData(result[0].data)
       setStatus(result[0].status)
    }, [])
  return (
    <>
      <Modal
            className='popup-modal'
            open={open}
            onClose={() => handleClose(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div className='status-card-modal'>
                <button onClick={() => handleClose(false)}>Close</button>
            {(status && specificData) && <div className={`${status === "danger" ? "blinking-border" : "card-wrapper"}`} style={{backgroundColor: `${status === "success" ? "#0eec00" : status === "yellow" ? "#FFFF00" : status === "orange" ? "#FFA500" : "#fe2222"}`, color: `${status === "yellow" ? "#000" : "#fff"}`}}>
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
