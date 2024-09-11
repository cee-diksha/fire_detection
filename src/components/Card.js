import React from 'react'
import "./comp-styles.css"
import stopalarm from "../assets/stop_alarm.png"

const Card = ({item}) => {
    const {status} = item
    // const data = [
    //   {
    //     label: "node_name ",
    //     value: "Engine Room",
    //   },
    //   {
    //     label: "node_id",
    //     value: "101"
    //   },
    //   {
    //     label: "bat_volt",
    //     value: "3.6"
    //   },
    //   {
    //     label: "temp",
    //     value: "3.6"
    //   },
    //   {
    //     label: "last_update",
    //     value: "12/8/24 11:48:44"
    //   }
    // ]
  return (
    <div className='card-wrapper' style={{backgroundColor: `${status === "success" ? "#0eec00" : "#fe2222"}`}}>
      <div className='card-details'>
        <div className='card-details-combined'>
          <div id="card-details-span1">Engine Room</div>
          <div id="card-details-span2">101</div>
        </div>
        <div className='card-details-combined'>
          <div id="card-details-span1">3.6 V</div>
          <div id="card-details-span1">3.6°C</div>
        </div>
        <div id="card-details-span1">Last Update</div>
        <div id="card-details-span2">12/8/24 11:48:44</div>
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