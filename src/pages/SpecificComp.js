/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import { info } from '../assets/info'
import Card from '../components/Card'
import Footer from '../components/Footer'
import UserDowndown from '../components/UserDowndown'
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"

const SpecificComp = () => {
    const {deck, comp} = useParams()
    const {isLogin,theme, setIsLogin, setTheme} = useContext(MainContext)
    const [compData, setCompData] = useState([])

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
      const compdata = info.filter(item => (item.deck === parseInt(deck) && item.compartment === parseInt(comp)))
      // const compdata = deckdata[0].devices.filter(item => item.comp === parseInt(comp))
      console.log(compdata, "compdata", info)
      setCompData(compdata)
    }, [info])

  return (
    <div className='specific-deck-wrapper'>
      <div className='specific-device-mainheader'>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto"}}>
            <img style={{height: "100px"}} src={shipcrest} alt="ship" />
            <h1 id="dashboard-heading">Ship Name</h1>
        </div>
        <div className='specific-device-imgWrapper'>
          {isLogin && <Link to={"/settings"} 
            style={{ cursor: "pointer", marginRight: "10px" }}><img src={settings} alt="settings" className='img'/></Link>}
          <Link to="/" className='link'><h6 className='login' style={{marginRight: "10px"}}>Dashboard</h6></Link>
          {isLogin ? <UserDowndown theme={theme} setIsLogin = {setIsLogin}/> : <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>}      
        </div>
        <div className="theme" style={{ position: 'absolute', top: "6px", right: "30px"}}><button onClick={handleThemeChange} style={{border: `${theme === "dark"? "1px solid #fff" : "1px solid #000"}`}}><img src={theme==="dark" ? sun : moon} style={{ filter: `${theme === "dark" ? "brightness(0) invert(1)": "grayscale(100%)"}`}} alt="theme-icon" /></button></div>
      </div>
      <div style={{marginTop: "-16%", display: "flex", flexDirection: "column", alignItems: "center", width: "auto"}}>
        <h4 className="h4">Deck - {deck}, Compartment - {comp} </h4>
        <div className='display-specific-comp-card'>
        {compData?.length !== 0 ? compData.map((item, index) => {
          console.log(item, "item check")
          return <Link className='link-style' to={`/info/${item.node_name}`}><Card key={index} item={item} /></Link>
          }) : <h2>No device installed in this compartment</h2>}
        </div>
      </div>
      <div className="dashboard-sticky">    
      <Footer />
    </div>
    </div>
  )
}

export default SpecificComp
