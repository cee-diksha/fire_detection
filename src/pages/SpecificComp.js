import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import { deckInfo } from '../assets/info'


const SpecificComp = () => {
    const {deck, comp} = useParams()
    const {isLogin} = useContext(MainContext)
    const [compData, setCompData] = useState(null)
    console.log(compData, "deckData")

    useEffect(() => {
      const deckdata = deckInfo.filter(item => item.deck === parseInt(deck))
      const compdata = deckdata[0].devices.filter(item => item.comp === parseInt(comp))
      console.log(compdata, "compdata")
      setCompData(compdata)
    }, [deckInfo])

  return (
    <div className='specific-deck-wrapper'>
      <div className='specific-device-mainheader'>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto"}}>
            <img style={{height: "100px"}} src={shipcrest} alt="ship" />
            <h1 id="dashboard-heading">Ship Name</h1>
        </div>
        <div className='specific-device-imgWrapper'>
            <Link to="/" className='link'><h6 className='login'>Dashboard</h6></Link>
            <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>
            <Link to={isLogin ? "/settings" : "#"} 
             style={{ pointerEvents: isLogin ? 'auto' : 'none', opacity: isLogin ? 1 : 0.5 }}><img src={settings} alt="settings" className='img'/></Link>
        </div>
      </div>
      <h4 className="h4">Deck - {deck}, Compartment - {comp} </h4>
      <div>
        
      </div>
    </div>
  )
}

export default SpecificComp
