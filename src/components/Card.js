import React from 'react'
import "./comp-styles.css"
import stopalarm from "../assets/stop_alarm.png"

const Card = ({item}) => {
    const {status, node_name, node_id, bat_volt, temp, last_update, isDeleted} = item
  return (
    <div className={`${status === "danger" ? "blinking-border" : "card-wrapper"}`} style={{backgroundColor: `${isDeleted ? "#D0D0D0" : status === "success" ? "#7BFF6D" : status === "yellow" ? "#FFC648" : status === "orange" ? "#FF6B3B" : "#F84848"}`, color: `${isDeleted ? "#000000" : (status === "yellow" || status === "success") ? "#000" : "#fff"}`}}>
      <div className='card-details'>
        <div className='card-details-combined'>
          <div id="card-details-span1">{node_name} </div>
          <div id="card-details-span2">{node_id}</div>
        </div>
        <div className='card-details-combined'>
          <div id="card-details-span1">{bat_volt} V</div>
          <div id="card-details-span1">{temp}°C</div>
        </div>
        <div id="card-details-span1">Last Update</div>
        <div id="card-details-span2">{last_update}</div>
      </div>
      <div className='card-details-circles'>
          <div id="card-details-circle1">S</div>
          <div id="card-details-circle2">T</div>
          <button id="refresh">Refresh</button>
          <img src={stopalarm} alt="stop-alarm" style={{height: "30px", cursor: "pointer"}}/>        
        </div>
    </div>
  )
}

export default Card
