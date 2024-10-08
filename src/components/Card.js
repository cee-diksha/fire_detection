import React from 'react'
import "./comp-styles.css"
import stopalarm from "../assets/stop_alarm.png"

const Card = ({item}) => {
    const {status, node_name, node_id, bat_volt, temp, last_update} = item
  return (
    <div className={`${status === "danger" ? "blinking-border" : "card-wrapper"}`} style={{backgroundColor: `${status === "success" ? "#0eec00" : status === "yellow" ? "#FFFF00" : status === "orange" ? "#FFA500" : "#fe2222"}`, color: `${status === "yellow" ? "#000" : "#fff"}`}}>
      <div className='card-details'>
        <div className='card-details-combined'>
          <div id="card-details-span1">{node_name} </div>
          <div id="card-details-span2">{node_id}</div>
        </div>
        <div className='card-details-combined'>
          <div id="card-details-span1">{bat_volt}</div>
          <div id="card-details-span1">{temp}</div>
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
