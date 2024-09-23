import React from 'react'
import "./comp-styles.css"
import stopalarm from "../assets/stop_alarm.png"

const Card = ({item}) => {
    const {status, node_name, node_id, bat_volt, temp, last_update, isDeleted, smokeSensor, triggeringDevice} = item

    const handleRefresh = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    const handleStopAlarm =  (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

  return (
    <div className={`${status === "danger" ? "blinking-border" : "card-wrapper"}`} style={{backgroundColor: `${isDeleted ? "#D0D0D0" : status === "success" ? "#7BFF6D" : status === "yellow" ? "#FFC648" : status === "orange" ? "#FF6B3B" : "#F84848"}`, color: `${isDeleted ? "#000000" : (status === "yellow" || status === "success") ? "#000" : "#fff"}`}}>
      <div className='card-details'>
        <div className='card-details-combined'>
          <div id="card-details-span1">{node_name} </div>
          <div id="card-details-span2">{node_id}</div>
        </div>
        <div className='card-details-combined'>
          <div id="card-details-span1">{bat_volt} V</div>
          {temp !== null && <div id="card-details-span1">{temp}°C</div>}
        </div>
        <div id="card-details-span1">Last Update</div>
        <div id="card-details-span2">{last_update}</div>
      </div>
      <div className='card-details-circles'>
          {smokeSensor !== null && <div id="card-details-circle1">S</div>}
          {triggeringDevice !== null && <div id="card-details-circle2">T</div>}
          <button id="refresh" onClick={handleRefresh}>Refresh</button>
          <img src={stopalarm} alt="stop-alarm" onClick={handleStopAlarm} style={{height: "30px", cursor: "pointer"}}/>        
        </div>
    </div>
  )
}

export default Card
