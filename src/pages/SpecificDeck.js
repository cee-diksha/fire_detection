import React, { useContext } from 'react'
import "../styles.css"
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import "../comp-styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import user from "../assets/user.png"

const SpecificDeck = () => {
    const {deck} = useParams()
    const {isLogin} = useContext(MainContext)

  return (
    <div className='specific-deck-wrapper'>
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
      <h4 className="h4">Deck - {deck} </h4>
    <div className="dashboard-sticky">    
      <Footer />
    </div>
    </div>
  )
}

export default SpecificDeck
