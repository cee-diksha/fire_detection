import React from 'react'
import "./comp-styles.css"
import stopalarm from "../assets/stop_alarm.png"
import battery from "../assets/battery.png"
import temperature from "../assets/temp.png"
import sensor from "../assets/sensor.png"
import sensor2 from "../assets/sensor2.png"
import update from "../assets/update.png"
import update2 from "../assets/update2.png"

// const Card = ({item}) => {
//     const {status, node_type, node_name, node_id, battery_percentage, temp, last_update, isDeleted, smokeSensor, triggeringDevice, deck, compartment} = item

//     const handleRefresh = (event) => {
//       event.preventDefault()
//       event.stopPropagation()
//     }

//     const handleStopAlarm =  (event) => {
//       event.preventDefault()
//       event.stopPropagation()
//     }

//   return (
//     <div className={`${status === "danger" ? "blinking-border" : "card-wrapper"}`} style={{backgroundColor: `${isDeleted ? "#D0D0D0" : status === "success" ? "#7BFF6D" : status === "yellow" ? "#FFC648" : status === "orange" ? "#FF6B3B" : "#F84848"}`, color: `${isDeleted ? "#000000" : (status === "yellow" || status === "success") ? "#000" : "#fff"}`}}>
//       <div className='card-details'>
//       <div className='card-details-nodetype'>{node_type} </div>
    

//         <div className='card-details-location'>
//           <div>Deck {deck} </div>
//           <div>Compartment {compartment}</div>
//           <div className='card-details-combined'>
//             <div id="card-details-span1">{node_name} </div>
//             <div id="card-details-span2">{node_id}</div>
//           </div>
//         </div>
//         <div className='card-details-combined'>
//           <div class="battery-span"><img src={battery} alt="battery-logo" style={{height: "20px"}}/>{battery_percentage}</div>
//           {temp !== null && <div class="battery-span"><img src={temperature} alt="battery-logo" style={{height: "20px"}}/>{temp}°C</div>}
//         </div>
//         <div id="card-details-span1">Last Update</div>
//         <div id="card-details-span2">{last_update}</div>
//       </div>
//       <div className='card-details-circles'>
//           {smokeSensor !== null && <div id="card-details-circle1">S</div>}
//           {triggeringDevice !== null && <div id="card-details-circle2">T</div>}
//           <button id="refresh" onClick={handleRefresh}>Refresh</button>
//           <img src={stopalarm} alt="stop-alarm" onClick={handleStopAlarm} style={{height: "30px", cursor: "pointer"}}/>        
//         </div>
//     </div>
//   )
// }

// export default Card



const Card = ({item}) => {
  const {status, node_type, node_name, node_id, battery_percentage, temp, last_update, isDeleted, smokeSensor, triggeringDevice, deck, compartment} = item

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
    <div className="segment" id='node-type-id'>
      <p id="sensor-name"><img src={status === "yellow" ? sensor2 : sensor} alt="sensor-logo" style={{height: "30px", marginTop: "4px", marginRight: "10px"}}/>{node_type}</p>
      <p>{node_id}</p>
    </div>
    <div className="segment" id='node-location'>
      <div style={{fontWeight: "600"}}>{node_name}</div>
      <div><span style={{fontWeight: "600"}}>Deck: </span>{deck}</div>
      <div><span style={{fontWeight: "600"}}>Compartment:</span> {compartment}</div>
    </div>
    <div className="segment" id='temp-battery'>
      <div><img src={temperature} alt="temperature-logo" style={{height: "20px", marginRight: "6px"}}/>{temp}°C</div>
      <div><img src={battery} alt="battery-logo" style={{height: "20px", marginRight: "6px"}}/>{battery_percentage}%</div>
    </div>
    <div className="segment" id='last-update'>
      <img src={status === "yellow" ? update2 : update} alt="update-logo" style={{height: "20px", marginRight: "6px"}}/>
      <div>
        <span style={{fontWeight: "600"}}>Last update</span>
        <span style={{fontSize: "12px"}}>{last_update}</span>
      </div>
    </div>
    <div className="segment" style={{borderBottom: "none"}} id='refresh-alarm-btn'>
      <button onClick={handleRefresh} id='refresh-alarm-btn-both'>Refresh</button>
      <button onClick={handleStopAlarm} id={`${status === "danger" ? "refresh-alarm-btn-alert" : "refresh-alarm-btn-both"}`}>Stop Alarm</button>
    </div>
  </div>
)
}

export default Card