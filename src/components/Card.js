import React, { useContext, useEffect, useState } from 'react';
import "../comp-styles.css";
import battery from "../assets/battery.png";
import temperature from "../assets/temp.png";
import sensor from "../assets/sensor.png";
import sensor2 from "../assets/sensor2.png";
import repeater from "../assets/repeater.png";
import repeater2 from "../assets/repeater2.png";
import suppression from "../assets/suppression.png";
import suppression2 from "../assets/suppression2.png";
import update from "../assets/update.png";
import update2 from "../assets/update2.png";
import smoke from "../assets/smoke.png";
import StatusDisplay from '../utils/StatusDisplay';
import stop from "../assets/stop.png"
import {MainContext} from "../context/MainContext"
import { ConnectedDevicesModal, GetCodeForTrigger, MarkFault } from './ConfimationModal';
import ReactSwitch from 'react-switch';


const handleRefresh = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const toggleSwitch = (trigger, setTrigger, isActivated, node_id, setTargetNode, setIsActivated, targetNode) => {
  const target = isActivated.filter(item => item.suppressor_id === node_id)
  target.length > 0 ? setTargetNode(target[0]) :  setTargetNode(targetNode)

  console.log(isActivated, "isActivated switch", node_id, target, trigger, targetNode)

  if(trigger) {
    console.log(isActivated.filter(item => item.node_id !== target[0].node_id), "isActivated --1") 
    setIsActivated(isActivated.filter(item => item.node_id !== target[0].node_id))
    setTrigger(false)
  } else {
    const active = target.length > 0 ? {node_id: target[0].node_id, suppressor_id: node_id, status: true} : {node_id: targetNode.node_id, suppressor_id: node_id, status: true}
    setIsActivated(prev => [...prev, active])
    setTrigger(true)
  }
}


const SuppressorBtn = ({nodeData, id, setShowModal, trigger}) => {
  const {setTargetNode, isActivated} = useContext(MainContext)
  const [nodeSuppressorActivated, setNodeSuppressorActivated] = useState([])

  const handleShowModal = (event, setShowModal) => {
    handleRefresh(event)
    setShowModal(true)
    console.log(nodeData, "line2222")
    setTargetNode(nodeData)
  }

  useEffect(() => {
    const filtered = isActivated.filter(item => item.node_id === nodeData.node_id)
    setNodeSuppressorActivated(filtered)
    console.log(isActivated, "isActivated", nodeData, filtered)

  }, [isActivated])

  return(
    <div style={{cursor: (nodeSuppressorActivated.length > 0 && nodeSuppressorActivated[0].node_id === nodeData.node_id) ? 'not-allowed' : 'pointer', 
      height: '56px', width: '56px', marginTop: "-15px", marginRight: "10px", background: "linear-gradient(145deg, #b7ff86, #94ffa6)", borderRadius: "100%", 
      boxShadow: "0.3px 0.3px 15px #ff5555", color: "#000000", fontWeight: "500", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center',
      filter: (nodeSuppressorActivated.length > 0 && nodeSuppressorActivated[0].node_id === nodeData.node_id) && "grayscale(100%)", fontSize: "12px"}} 
      onClick={(event) => (nodeSuppressorActivated.length > 0 && nodeSuppressorActivated[0].node_id === nodeData.node_id) ? handleRefresh(event) : handleShowModal(event, setShowModal)}>
      Activate
      <img src = {suppression2} alt="img" style={{height: "26px", width: "26px"}} />
    </div>
  )
}

// --------------------------------------------------------------------------------------------------------

const Card = ({ item }) => {
  const { status, node_type, node_name, node_id, battery_percentage, temp, last_update, isDeleted, deck, compartment, triggeringDevice, faultReason } = item;
  const {isActivated, setTargetNode, setIsActivated, targetNode, setDeviceInfo} = useContext(MainContext)
  const [showConn, setShowConn] = useState(false);
  const [isAlarmMuted, setIsAlarmMuted] = useState(false); 
  const [trigger, setTrigger] = useState(triggeringDevice)
  const [showModal, setShowModal] = useState(false);
  const [isFault, setIsFault] = useState(false)
  const whiteLogo = status.includes("danger") || status.includes("orange") || status.includes("deleted")

  const handleMuteAlarm = (event) => {
    console.log(isAlarmMuted, "isAlarmMuted")
    event.preventDefault();
    event.stopPropagation();
    setIsAlarmMuted(!isAlarmMuted);
  };

  const showConnectedDevices = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowConn(true)
  }

  const markFault = (event) => {
    handleRefresh(event)
    setIsFault(true)
  }

  useEffect(() => {
    if (node_id === 106) setIsAlarmMuted(true)
  }, [])

  return (
    <div 
      className={`${(node_type === "sensor" && !status.includes("deleted")) ? isAlarmMuted ? "blinking-border" : "card-wrapper" : triggeringDevice ? "blinking-activesupp"  : "card-wrapper" }`} 
      style={{ 
        backgroundColor: `${isDeleted ? "#8f8d8d" : status.includes("success") ? "#b7ff86" : status.includes("danger" )? "#ff7b7b " : status.includes("orange" )? "#ff9863" : status.includes("yellow") ? "#FFC648" : status.includes("smoke") ? "#b6ccc4 " : "#a391b8"}`, 
        color: `${isDeleted ? "#FFF" : (status.includes("danger") || status.includes("orange") ) ? "#fff" : "#000"}`
      }}
    >
      {showModal && <GetCodeForTrigger open={true} handleClose={setShowModal} />}
       <div className="segment" id="status-text">
       <StatusDisplay status={status} />
      </div>
      <div className="segment" id="node-type-id">
        <p id="sensor-name">
          <img src={
          node_type === "sensor" ? 
            (whiteLogo ? sensor : sensor2) :
          node_type === "repeater" ? 
            (whiteLogo ? repeater : repeater2) :
          node_type === "suppressor" ? 
            (whiteLogo ? suppression : suppression2) : null} alt="sensor-logo" style={{ height: "30px", marginTop: "4px", marginRight: "10px" }} />
          {node_type}
        </p>
        <p>{node_id}</p>
      </div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <div className="segment" id="node-location">
          <div style={{ fontWeight: "600" }}>{node_name}</div>
          <div><span style={{ fontWeight: "600" }}>Deck: </span>{deck}</div>
          <div><span style={{ fontWeight: "600"}}>Compartment:</span> {compartment}</div>
        </div>
        {(node_type === "sensor" && status.includes("danger")) && <SuppressorBtn nodeData = {item} id={node_id} setShowModal={setShowModal} trigger={trigger} />}
        {node_type === "suppressor" && <ReactSwitch onChange={() => toggleSwitch(trigger, setTrigger, isActivated, node_id, setTargetNode, setIsActivated,targetNode)} checked={trigger} />}
      </div>
      <div className="segment" id="temp-battery">
        {temp && <div className= {(status.includes("danger") || status.includes("orange")) ? "dangertext" : ((status.includes("danger") || status.includes("orange")) && status.includes("yellow")) ? "dangertext" : "normaltext"}>
          <img src={temperature} alt="temperature-logo" style={{ height: "20px", marginRight: "4px" }} />
          {temp}°C
        </div>}
        {node_type === "sensor" ? status.includes("smoke") ? <img src={smoke} alt="smoke" style={{ height: "24px", marginTop: "2px"}} className='smoke-img'/> : <img src={smoke} alt="smoke" style={{ height: "24px", marginTop: "2px"}} /> : null}
        <div className= {(status.includes("yellow")) ? "dangertext" : "normaltext"}>
          <img src={battery} alt="battery-logo" style={{ height: "20px", marginRight: "4px" }} />
          {battery_percentage}%
        </div>
      </div>
      {isFault && <MarkFault open={true} handleClose={setIsFault} setDeviceInfo ={setDeviceInfo} item= {item} />}
      <div className="segment" id="last-update">
        {!status.includes("deleted") ? <button onClick={markFault} style={{backgroundColor: faultReason!=="" ?'#bfbfbf' : '#393939', borderRadius: '6px', height: "24px", width: "90px", fontSize: "12px", cursor: faultReason!=="" ? "not-allowed" :"pointer", color: isFault ? "#000000" : "#ffffff"}}>Mark Faulty</button> : <img src={whiteLogo ? update : update2} alt="update-logo" style={{ height: "20px", marginRight: "6px" }} />}
        <div>
          <span style={{ fontWeight: "600" }}>Last update</span>
          <span style={{ fontSize: "12px" }}>{last_update}</span>
        </div>
      </div>
      <div className="segment" style={{ borderBottom: "none" }} id="refresh-alarm-btn">
      {status.includes("deleted") ? node_type === "repeater" ? <button 
          onClick={(event) => showConnectedDevices(event)} 
          id="refresh-alarm-btn-alert"  
        >
          Show Connected devices
        </button> : <button id="faultReason">Show fault reason</button> : <button onClick={handleRefresh} id="refresh-alarm-btn-both">Refresh</button>}
        {showConn && <ConnectedDevicesModal open={true} handleClose={setShowConn} node_id={node_id} />}
        {(status.includes("danger") || status.includes("orange") || status.includes("smoke")) && <button 
          onClick={handleMuteAlarm} 
          id={`${(status.includes("danger") || status.includes("orange") || status.includes("smoke")) && !isAlarmMuted? "refresh-alarm-btn-alert" : "refresh-alarm-btn-both"}`} 
        >
          {isAlarmMuted ? "Unmute Alarm" : "Mute Alarm"}
        </button>}
      </div>
    </div>
  );
};

export default Card;
