import React, { useState } from 'react';
import "../comp-styles.css";
import battery from "../assets/battery.png";
import temperature from "../assets/temp.png";
import sensor from "../assets/sensor.png";
import sensor2 from "../assets/sensor2.png";
import update from "../assets/update.png";
import update2 from "../assets/update2.png";

const Card = ({ item }) => {
  const { status, node_type, node_name, node_id, battery_percentage, temp, last_update, isDeleted, deck, compartment } = item;

  const [isAlarmMuted, setIsAlarmMuted] = useState(false);  // Track if alarm is muted for this card

  const handleRefresh = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleMuteAlarm = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsAlarmMuted(!isAlarmMuted);  // Toggle the mute state for this card
  };

  return (
    <div 
      className={`${isAlarmMuted ? "blinking-border" : "card-wrapper"}`} 
      style={{ 
        backgroundColor: `${isDeleted ? "#D0D0D0" : status === "success" ? "#7BFF6D" : status === "yellow" ? "#FFC648" : status === "orange" ? "#FF6B3B" : "#F84848"}`, 
        color: `${isDeleted ? "#000000" : (status === "yellow" || status === "success") ? "#000" : "#fff"}`
      }}
    >
      <div className="segment" id="node-type-id">
        <p id="sensor-name">
          <img src={(status === "yellow" || status === "success") ? sensor2 : sensor} alt="sensor-logo" style={{ height: "30px", marginTop: "4px", marginRight: "10px" }} />
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
        <div className= {(status === "danger" || status === "orange" || status === "yellow") ? "dangertext" : "normaltext"}>
          <img src={temperature} alt="temperature-logo" style={{ height: "20px", marginRight: "6px" }} />
          {temp}°C
        </div>
        <div className= {(status === "danger" || status === "orange" || status === "yellow") ? "dangertext" : "normaltext"}>
          <img src={battery} alt="battery-logo" style={{ height: "20px", marginRight: "6px" }} />
          {battery_percentage}%
        </div>
      </div>
      <div className="segment" id="last-update">
        <img src={(status === "yellow" || status === "success") ? update2 : update} alt="update-logo" style={{ height: "20px", marginRight: "6px" }} />
        <div>
          <span style={{ fontWeight: "600" }}>Last update</span>
          <span style={{ fontSize: "12px" }}>{last_update}</span>
        </div>
      </div>
      <div className="segment" style={{ borderBottom: "none" }} id="refresh-alarm-btn">
        <button onClick={handleRefresh} id="refresh-alarm-btn-both">Refresh</button>
        <button 
          onClick={handleMuteAlarm} 
          id={`${status === "danger" && !isAlarmMuted? "refresh-alarm-btn-alert" : "refresh-alarm-btn-both"}`} 
          disabled={status !== "danger"}
        >
          {isAlarmMuted ? "Unmute Alarm" : "Mute Alarm"}
        </button>
      </div>
    </div>
  );
};

export default Card;
