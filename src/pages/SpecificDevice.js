import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import { SpecificBattChart, SpecificTempChart } from '../components/SpeicificCharts'
import shipcrest from "../assets/INS_Vikrant_crest.jpg"


const SpecificDevice = () => {
    const {id} = useParams()
    const {deviceInfo} = useContext(MainContext)
    const device = deviceInfo.filter(item => item.node_name === id)
    console.log(device[0], id, "device")

  return (
    <div className='specific-device-wrapper'>
      <div className='specific-device-mainheader'>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto"}}>
            <img style={{height: "100px"}} src={shipcrest} alt="ship" />
            <h1 id="dashboard-heading">INS Vikrant</h1>
        </div>
        <div className='specific-device-imgWrapper'>
            <Link to="/" className='link'><h6 className='login'>Dashboard</h6></Link>
            <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>
            <Link to="/settings"><img src={settings} alt="settings" className='img'/></Link>
        </div>
      </div>
        <div className='specific-device-header'>
            <div id="status-circle" style={{backgroundColor: `${device[0].status === "success" ? "#0eec00" : device[0].status === "yellow" ? "#FFFF00" : device[0].status === "orange" ? "#FFA500" : "#fe2222"}`, color: `${device[0].status === "yellow" ? "#000" : "#fff"}`}}></div>
            <h4 id="h4">{device[0].node_name}</h4> 
        </div>
      <div>
        <table>
            <thead>
                <tr>
                    <th>Node ID</th>
                    <th>Node Type</th>
                    <th>3 Axis</th>
                    <th>Location</th>
                    <th>Temperature</th>
                    <th>Battery Volt</th>
                    <th>Last Update</th>
                    <th>Smoke Sensor</th>
                    <th>Triggering Device</th>
                </tr>
            </thead>
            <tbody>
                <td>{device[0].node_id}</td>
                <td style={{textTransform: "capitalize"}}>{device[0].node_type}</td>
                <td>{device[0].axis}</td>
                <td>{device[0].node_name}</td>
                <td>{device[0].temp}</td>
                <td>{device[0].bat_volt}</td>
                <td>{device[0].last_update}</td>
                <td>{device[0].smokeSensor ? "True" : "False"}</td>
                <td>{device[0].triggeringDevice ? "True" : "False"}</td>
            </tbody>
        </table>
      </div>
      <div className='specific-device-charts'>
        <SpecificTempChart />
        <SpecificBattChart />
      </div>
    </div>
  )
}

export default SpecificDevice
