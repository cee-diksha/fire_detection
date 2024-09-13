import React from 'react'
import "./comp-styles.css"
import stopalarm from "../assets/stop_alarm.png"

const Card = ({item}) => {
    const {status, data} = item
  return (
    <div className='card-wrapper' style={{backgroundColor: `${status === "success" ? "#0eec00" : status === "yellow" ? "#FFFF00" : status === "orange" ? "#FFA500" : "#fe2222"}`, color: `${status === "yellow" ? "#000" : "#fff"}`}}>
      <div className='card-details'>
        <div className='card-details-combined'>
          <div id="card-details-span1">{data.node_name} </div>
          <div id="card-details-span2">{data.node_id}</div>
        </div>
        <div className='card-details-combined'>
          <div id="card-details-span1">{data.bat_volt}</div>
          <div id="card-details-span1">{data.temp}</div>
        </div>
        <div id="card-details-span1">Last Update</div>
        <div id="card-details-span2">{data.last_update}</div>
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
