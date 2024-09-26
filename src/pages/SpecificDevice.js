import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import { SpecificBattChart, SpecificTempChart } from '../components/SpecificCharts'
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import { specificDeviceChartData } from '../assets/info'
import Footer from '../components/Footer'
import user from "../assets/user.png"


const SpecificDevice = () => {
  const {id} = useParams()
  const {deviceInfo, isLogin} = useContext(MainContext)
  const device = deviceInfo.filter(item => item.node_name === id)
  const specificData = specificDeviceChartData.filter(item => item.node_name === id)
  const alertlogsInfoTemp = specificData[0].temperature
  console.log(alertlogsInfoTemp, "specificData")


  return (
    <div className='specific-device-wrapper'>
      <div className='specific-device-mainheader'>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto"}}>
            <img style={{height: "100px"}} src={shipcrest} alt="ship" />
            <h1 id="dashboard-heading">Ship Name</h1>
        </div>
        <div className='specific-device-imgWrapper'>
            <Link to="/" className='link'><h6 className='login'>Dashboard</h6></Link>
            {isLogin ? <img src={user} alt="user-img" className='img' style={{marginRight: "20px", marginTop: "3px"}} /> : <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>}
            <Link to={isLogin ? "/settings" : "#"} 
             style={{ pointerEvents: isLogin ? 'auto' : 'none', opacity: isLogin ? 1 : 0.5 }}><img src={settings} alt="settings" className='img'/></Link>
        </div>
      </div>
      <div className='specific-header-location'>
        <h4 className="h4"> {device[0].node_type} - Deck: {device[0].deck}, Compartment: {device[0].compartment} </h4>
        <div className='specific-device-header'>
            <div id="status-circle" style={{backgroundColor: `${device[0].status === "success" ? "#7BFF6D" : device[0].status === "yellow" ? "#FFC648" : device[0].status === "orange" ? "#FF6B3B" : "#F84848"}`, color: `${device[0].status === "yellow" ? "#000" : "#fff"}`, opacity: device[0].isDeleted ? 0.5 : 1  }}></div>
            <h4 className="h4">{device[0].node_name}</h4> 
        </div>
      </div>
       
      {/* <div className='alerts-chart-wrapper'>
        {specificData[0].node_type === "sensor"&& <div className='alert-logs'>
          <h2>Alert Logs</h2>
         {alertlogsInfoTemp.map(item => <div className='single-alert'>
          <span className='alert-span' style={{ fontWeight: "600", color: item.info === "[INFO]" ? "#05abf9" : item.info === "[WARNING]" ? "#FFC300" : "#F84848" }}>{item.info}</span>
          <span className='alert-span'style={{fontWeight: "600"}}>{item.time}:00 hrs</span>
          <span className='alert-span'>{item.status}</span>
          <span className='alert-span' style={{color: item.info === "[INFO]" ? "#05abf9" : item.info === "[WARNING]" ? "#FFC300" : "#F84848" }}>Temperature: {item.value} °C</span>
         </div>)}
        </div>}
        
      </div> */}
      <div className='specific-device-charts'>
          {specificData[0].node_type === "sensor" && <SpecificTempChart temperature = {specificData[0].temperature} status={device[0].status}/>}
          <SpecificBattChart batt = {specificData[0].battery_percentage} status={device[0].status}/>
        </div>
      {/* <div className='device-table'>
        <table>
            <thead>
                <tr>
                    <th>Node ID</th>
                    <th>Node Type</th>
                    <th>3 Axis</th>
                    <th>Location</th>
                    <th>Temperature</th>
                    <th>Battery</th>
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
                <td>{device[0].temp}°C</td>
                <td>{device[0].battery_percentage}</td>
                <td>{device[0].last_update}</td>
                <td>{device[0].smokeSensor ? "True" : "False"}</td>
                <td>{device[0].triggeringDevice ? "True" : "False"}</td>
            </tbody>
        </table>
      </div> */}
      <div className="dashboard-sticky">    
        <Footer />
      </div>
    </div>
  )
}

export default SpecificDevice
