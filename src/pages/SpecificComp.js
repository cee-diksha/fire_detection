import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import { info } from '../assets/info'
import Card from '../components/Card'
import Footer from '../components/Footer'
import user from "../assets/user.png"

const SpecificComp = () => {
    const {deck, comp} = useParams()
    const {isLogin} = useContext(MainContext)
    const [compData, setCompData] = useState([])
    console.log(compData, "deckData", deck, comp)

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
            <Link to="/" className='link'><h6 className='login'>Dashboard</h6></Link>
            {isLogin ? <img src={user} alt="user-img" className='img' style={{marginRight: "20px", marginTop: "3px"}}/> : <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>}
            <Link to={isLogin ? "/settings" : "#"} 
             style={{ pointerEvents: isLogin ? 'auto' : 'none', opacity: isLogin ? 1 : 0.5 }}><img src={settings} alt="settings" className='img'/></Link>
        </div>
      </div>
      <h4 className="h4">Deck - {deck}, Compartment - {comp} </h4>
      <div className='display-specific-comp-card'>
      {compData?.length !== 0 ? compData.map((item, index) => {
        console.log(item, "item check")
        return <Link className='link-style' to={`/info/${item.node_name}`}><Card key={index} item={item} /></Link>
        }) : <h2>No device installed in this compartment</h2>}
      </div>
      <div className="dashboard-sticky">    
      <Footer />
    </div>
    </div>
  )
}

export default SpecificComp
