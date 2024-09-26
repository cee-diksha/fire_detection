import { Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import stopalarm from "../assets/stop_alarm.png"
import "../comp-styles.css"
import { MainContext } from '../context/MainContext'
import battery from "../assets/battery.png"
import temp from "../assets/temp.png"
import sensor from "../assets/sensor.png"
import sensor2 from "../assets/sensor2.png"
import update from "../assets/update.png"
import update2 from "../assets/update2.png"


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
            {/* <div className='status-card-modal' style={{cursor: "pointer"}}>
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
            </div> */}
            {console.log(specificData, "resultresult")}
            {specificData && <div className={`${specificData.status === "danger" ? "blinking-border" : "card-wrapper"}`} style={{backgroundColor: `${specificData.isDeleted ? "#D0D0D0" : specificData.status === "success" ? "#7BFF6D" : specificData.status === "yellow" ? "#FFC648" : specificData.status === "orange" ? "#FF6B3B" : "#F84848"}`, color: `${specificData.isDeleted ? "#000000" : (specificData.status === "yellow" || specificData.status === "success") ? "#000" : "#fff"}`}}>
            <div className="segment" id='node-type-id'>
                <p id="sensor-name"><img src={(specificData.status === "yellow" || specificData.status === "success") ? sensor2 : sensor} alt="sensor-logo" style={{height: "30px", marginTop: "4px", marginRight: "10px"}}/>{specificData.node_type}</p>
                <p>{specificData.node_id}</p>
            </div>
            <div className="segment" id='node-location'>
                <div style={{fontWeight: "600"}}>{specificData.node_name}</div>
                <div><span style={{fontWeight: "600"}}>Deck: </span>{specificData.deck}</div>
                <div><span style={{fontWeight: "600"}}>Compartment:</span> {specificData.compartment}</div>
            </div>
            <div className="segment" id='temp-battery'>
                <div><img src={specificData.temperature} alt="temperature-logo" style={{height: "20px", marginRight: "6px"}}/>{temp}°C</div>
                <div><img src={battery} alt="battery-logo" style={{height: "20px", marginRight: "6px"}}/>{specificData.battery_percentage}%</div>
            </div>
            <div className="segment" id='last-update'>
                <img src={(specificData.status === "yellow" || specificData.status === "success") ? update2 : update} alt="update-logo" style={{height: "20px", marginRight: "6px"}}/>
                <div>
                    <span style={{fontWeight: "600"}}>Last update</span>
                    <span style={{fontSize: "12px"}}>{specificData.last_update}</span>
                </div>
            </div>
            <div className="segment" style={{borderBottom: "none"}} id='refresh-alarm-btn'>
                <button onClick={handleRefresh} id='refresh-alarm-btn-both'>Refresh</button>
                <button onClick={handleStopAlarm} id={`${specificData.status === "danger" ? "refresh-alarm-btn-alert" : "refresh-alarm-btn-both"}`} disabled = {specificData.status === "danger" ? false : true}>Stop Alarm</button>
            </div>
        </div>}
        </Modal>
    </>
  )
}

export default CardModal
