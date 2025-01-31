/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import settingsLight from "../assets/settingsLight.png"
import { SpecificBattChart, SpecificTempChart } from '../components/SpecificCharts'
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import { specificDeviceChartData } from '../assets/info'
import Footer from '../components/Footer'
import { downloadSpecificReport } from '../utils/ExportPdfButton'
import Card from '../components/Card'
import sensor from "../assets/sensor.png";
import repeater from "../assets/repeater.png";
import suppression from "../assets/suppression.png";
import UserDowndown from '../components/UserDowndown'
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"
import Header2 from '../components/Header2'

const SpecificDevice = () => {
  const {id} = useParams()
  const {deviceInfo, isLogin, theme, setIsLogin, setTheme} = useContext(MainContext)
  const device = deviceInfo.filter(item => item.node_name === id)
  const specificData = specificDeviceChartData.filter(item => item.node_name === id)

  const alertlogsInfoTemp = specificData[0].temperature
  console.log(alertlogsInfoTemp, "specificData", specificData)

  const [affectedDevices, setAffectedDevices] = useState([])
  console.log("affectedDevices", specificData[0].node_id)

  const handleThemeChange =  () => {
    if(theme==="dark") {
        setTheme("light")
        document.body.classList.add('light');
    } else {
        setTheme("dark")
        document.body.classList.remove('light');
    }
  }

  useEffect(() => {
    const filtered = deviceInfo.filter(item => item.connectedTo === specificData[0].node_id)
    setAffectedDevices(filtered)
    console.log(filtered, "affectedDevices", specificData[0].node_id)
  }, [deviceInfo, id])

  return (
    <div className='specific-device-wrapper'>
      <Header2 />
      <button onClick={() => downloadSpecificReport(specificData[0])}style={{width: "150px", cursor: "pointer", borderRadius: "6px", color: "var(--text-color)", backgroundColor: "var(--bg-color-secondary)", border: "1px solid #ffffff", height: "30px", fontSize: "14px", fontWeight: "500", marginRight: "20px"}}>
                Generate Report
        </button>
      <div className='specific-header-location'>
        <h4 className="h4"> {device[0].node_type} - Deck: {device[0].deck}, Compartment: {device[0].compartment} </h4>
          <div className='specific-device-header'>
          <img src={
            device[0].node_type === "sensor" ? sensor :
            device[0].node_type === "repeater" ? repeater :
            device[0].node_type === "suppressor" ? suppression : null} alt="sensor-logo" style={{ height: "30px", marginTop: "-26px", marginRight: "10px", filter: `${theme === "dark" ? "brightness(0) invert(1)":"grayscale(1) invert(1)"}` }} />
              <h4 className="h4">{device[0].node_name}</h4> 
          </div>
       </div>
      {(!device[0].status.includes("success") || device[0].isDeleted !== false) && <div className='indication' style={{backgroundColor: `${device[0].status.includes("danger") ? "#ff7b7b" : device[0].status.includes("orange") ? "#ff9863" : device[0].status.includes("yellow") ? "#FFC648" : device[0].isDeleted ? "#D0D0D0"  :  device[0].status.includes("smoke") ? "#b6d9cc" : "#a391b8" }`,
        color: `${ (device[0].status.includes("danger") ||  device[0].status.includes("orange")) ? "#ffffff" : (device[0].status.includes("yellow") || device[0].status.includes("smoke") || device[0].isDeleted) ? "#000000" : "#ffffff"}`
      }}>
      {device[0].status.includes("danger") ? "Fire" : device[0].status.includes("orange") ? "Temp Rising" : device[0].status.includes("smoke") ? "Smoke" : device[0].status.includes("yellow") ? "Low Battery" : device[0].isDeleted ? "Needs Replacement" :  "Not Responding" }
      </div>}    
      {device[0].faultReason !== "" && <div style={{fontSize: "18px"}}><span style={{color: "#ff5a5a"}}>Fault Reason: </span>{device[0].faultReason}</div>}
      {device[0].isDeleted && <Link to="/settings" style={{margin: "4px 34px 0 auto"}}><button style={{border: '1px solid var(--text-color)', color: "var(--text-color)", padding: "6px", borderRadius: "6px", cursor: "pointer", backgroundColor: "transparent"}}>Click here to replace</button></Link> }

      <div className='alerts-chart-wrapper'>
          {(specificData[0].alertlogstemp !== null && specificData[0].alertlogstemp.length !== 0) && <div className='alert-logs'>
            <h2 style={{color:"#ff7b7b"}}>Alert Logs - Temperature</h2>
          {specificData[0].alertlogstemp !== null && specificData[0].alertlogstemp.map(item => <div className='single-alert'>
            <span className='alert-span'style={{fontWeight: "600"}}>{item.time} - </span>
            <span className='alert-span'>{item.message}</span>
          </div>)}
          </div>}
          {(specificData[0].alertlogsbattery !== null  && specificData[0].alertlogsbattery.length !== 0) && <div className='alert-logs'>
            <h2 style={{color:"#FFC648"}}>Alert Logs - Battery</h2>
          {specificData[0].alertlogsbattery !== null && specificData[0].alertlogsbattery.map(item => <div className='single-alert'>
            <span className='alert-span'style={{fontWeight: "600"}}>{item.time} - </span>
            <span className='alert-span'>{item.message}</span>
          </div>)}
          </div>}
          <div className='specific-device-charts'>
            {specificData[0].node_type === "sensor" && <SpecificTempChart temperature = {specificData[0].temperature} status={device[0].status}/>}
            <SpecificBattChart batt = {specificData[0].battery_percentage} status={device[0].status}/>
          </div>   
      </div>
      {affectedDevices.length > 0  && <hr style={{color: "white", width: "96%"}}></hr>}

      {console.log(affectedDevices.length, "affectedDevices.length")}
      {affectedDevices.length > 0  && <div className='affected-devices'>
        <h4>Affected Devices</h4>
        <div className='cards'>
          {affectedDevices.length > 0 && affectedDevices.map(item => {
            return (
              <Link className='link-style' to={`/info/${item.node_name}`} key={item.id}>
                <Card item={item} />
              </Link>
            )
          })}
        </div>
      </div>}
      {isLogin && <hr style={{color: "white", width: "96%"}}></hr>}
          {isLogin && <div style={{margin: "0 0 20px 0", width: "80%"}}>
            <h4 style={{fontSize: "24px", textAlign: "center"}}>Past 12 hour Alert Logs</h4>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
           {specificData[0].temperature && <div>
            <h4 style={{fontSize: "20px"}}>Temperature Logs</h4>
           {specificData[0].temperature.map(item => {
               let statusColor;
               switch (item.info) {
                 case "[INFO]":
                   statusColor = "#0096FF";
                   break;
                 case "[WARNING]":
                   statusColor = "#FFC300";
                   break;
                 case "[ALERT]":
                   statusColor = "red";
                   break;
                 default:
                   statusColor = "white";
               }
              return(
              <div style={{marginBottom: "10px"}}><span style={{width: "100px", color: statusColor}}>{item.info} - {item.time}00 hrs - </span> <span style={{fontWeight: "600"}}>temperature: {item.value} °C</span> - {item.status} </div>
              )
            })}
           </div>}
            {/* --------------------------------------------------------------------------------------------------------------------- */}
            {specificData[0].battery_percentage && <div>
              <h4 style={{fontSize: "20px"}}>Battery Logs</h4>
            {specificData[0].battery_percentage.map(item => {
               let statusColor;
               switch (item.info) {
                 case "[INFO]":
                   statusColor = "#0096FF";
                   break;
                 case "[WARNING]":
                   statusColor = "#FFC300";
                   break;
                 case "[ALERT]":
                   statusColor = "red";
                   break;
                 default:
                   statusColor = "white";
               }
              return(
              <div style={{marginBottom: "10px"}}><span style={{width: "100px", color: statusColor}}>{item.info} - {item.time}00 hrs - </span> <span style={{fontWeight: "600"}}>battery: {item.value}% </span> - {item.status} </div>
              )
            })}
            </div>}
            </div>
          </div>}
      <div className="dashboard-sticky">    
        <Footer />
      </div>
    </div>
  )
}

export default SpecificDevice
