import React, { useEffect, useState } from 'react';
import "../comp-styles.css";
import battery from "../assets/battery.png";
import temperature from "../assets/temp.png";
import sensor from "../assets/sensor.png";
import sensor2 from "../assets/sensor2.png";
import update from "../assets/update.png";
import update2 from "../assets/update2.png";

const Card = ({ item }) => {
  const { status, node_type, node_name, node_id, battery_percentage, temp, last_update, isDeleted, deck, compartment } = item;

  const [isAlarmMuted, setIsAlarmMuted] = useState(false); 

  const handleRefresh = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleMuteAlarm = (event) => {
    console.log(isAlarmMuted, "isAlarmMuted")
    event.preventDefault();
    event.stopPropagation();
    setIsAlarmMuted(!isAlarmMuted);
  };

  useEffect(() => {
    if (node_id === 106) setIsAlarmMuted(true)
  }, [])
console.log(status.includes("success"), "status check", isAlarmMuted)
  return (
    <div 
      className={`${isAlarmMuted ? "blinking-border" : "card-wrapper"}`} 
      style={{ 
        backgroundColor: `${isDeleted ? "#8f8d8d" : status.includes("success") ? "#7BFF6D" : status.includes("danger" )? "#F84848" : status.includes("orange" )? "#FF6B3B" : "#FFC648"}`, 
        color: `${isDeleted ? "#FFF" : (status.includes("danger") || status.includes("orange")) ? "#fff" : "#000"}`
      }}
    >
       <div className="segment" id="status-text">
        <p>
        {status.includes("danger")? "FIRE" : status.includes("orange") ? "TEMP RISING" : status.includes("yellow") ? "LOW BATTERY" : isDeleted ? "NEEDS REPLACEMENT" : "NORMAL"}
        </p>
      </div>
      <div className="segment" id="node-type-id">
        <p id="sensor-name">
          <img src={(status.includes("danger") || status.includes("orange")) ? sensor : sensor2} alt="sensor-logo" style={{ height: "30px", marginTop: "4px", marginRight: "10px" }} />
          {node_type}
        </p>
        <p>{node_id}</p>
      </div>
      <div className="segment" id="node-location">
        <div style={{ fontWeight: "600" }}>{node_name}</div>
        <div><span style={{ fontWeight: "600" }}>Deck: </span>{deck}</div>
        <div><span style={{ fontWeight: "600" }}>Compartment:</span> {compartment}</div>
      </div>
      <div className="segment" id="temp-battery">
        {temp && <div className= {(status.includes("danger") || status.includes("orange")) ? "dangertext" : ((status.includes("danger") || status.includes("orange")) && status.includes("yellow")) ? "dangertext" : "normaltext"}>
          <img src={temperature} alt="temperature-logo" style={{ height: "20px", marginRight: "6px" }} />
          {temp}°C
        </div>}
        <div className= {(status.includes("yellow")) ? "dangertext" : "normaltext"}>
          <img src={battery} alt="battery-logo" style={{ height: "20px", marginRight: "6px" }} />
          {battery_percentage}%
        </div>
      </div>
      <div className="segment" id="last-update">
        <img src={(status.includes("danger") || status.includes("orange")) ? update : update2} alt="update-logo" style={{ height: "20px", marginRight: "6px" }} />
        <div>
          <span style={{ fontWeight: "600" }}>Last update</span>
          <span style={{ fontSize: "12px" }}>{last_update}</span>
        </div>
      </div>
      <div className="segment" style={{ borderBottom: "none" }} id="refresh-alarm-btn">
        <button onClick={handleRefresh} id="refresh-alarm-btn-both">Refresh</button>
        {status.includes("danger") && <button 
          onClick={handleMuteAlarm} 
          id={`${status.includes("danger") && !isAlarmMuted? "refresh-alarm-btn-alert" : "refresh-alarm-btn-both"}`} 
        >
          {isAlarmMuted ? "Unmute Alarm" : "Mute Alarm"}
        </button>}
      </div>
    </div>
  );
};

export default Card;
