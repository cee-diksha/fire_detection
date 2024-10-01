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
  console.log(specificData, "specificData", id, device)

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
              <div id="status-circle" style={{backgroundColor: `${device[0].status.includes("danger") ? "#F84848" : device[0].status.includes("orange") ? "#FF6B3B" : device[0].status.includes("yellow") ? "#FFC648" : device[0].isDeleted ? "#D0D0D0"  : device[0].status.includes("success") ? "#7BFF6D" : null }`, color: `${device[0].status.includes("yellow") ? "#000" : "#fff"}`, opacity: device[0].isDeleted ? 0.5 : 1  }}></div>
              <h4 className="h4">{device[0].node_name}</h4> 
          </div>
       </div>
      {(!device[0].status.includes("success") || device[0].isDeleted !== false) && <div className='indication' style={{backgroundColor: `${device[0].status.includes("danger") ? "#F84848" : device[0].status.includes("orange") ? "#FF6B3B" : device[0].status.includes("yellow") ? "#FFC648" : device[0].isDeleted ? "#D0D0D0"  : null }`,
        color: `${ device[0].status.includes("danger") ? "#ffffff" : (device[0].status.includes("yellow") || device[0].isDeleted) ? "#000000" : "#ffffff"}`
      }}>
        {console.log(device[0], "device[0].isDeleted")}
      {device[0].status.includes("danger") ? "Fire" : device[0].status.includes("orange") ? "Temp Rising" : device[0].status.includes("yellow") ? "Low Battery" : device[0].isDeleted ? "Needs Replacement" :  null }
      </div>}
      <div className='alerts-chart-wrapper'>
          {(specificData[0].alertlogstemp !== null && specificData[0].alertlogstemp.length !== 0) && <div className='alert-logs'>
            <h2 style={{color:"#F84848"}}>Alert Logs - Temperature</h2>
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
      <div className="dashboard-sticky">    
        <Footer />
      </div>
    </div>
  )
}

export default SpecificDevice
