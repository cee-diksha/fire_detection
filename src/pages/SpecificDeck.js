import React, { useContext, useEffect, useState } from 'react'
import "../styles.css"
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import "../comp-styles.css"
import { MainContext } from '../context/MainContext'
import settings from "../assets/settings.png"
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import user from "../assets/user.png"
import Card from '../components/Card'

const SpecificDeck = () => {
    const {deck} = useParams()
    const {isLogin, deckData, deviceInfo} = useContext(MainContext)
    const [deckInfo, setDeckInfo] = useState([])

    useEffect(() => {
      const filtered = deckData.filter(item => item.deck === parseInt(deck)).flatMap(item => {
      const arr = [];
      item.devices.forEach(data => {
        const sortedNodeInfo = data.node_info.sort((a, b) => {
          const statusOrder = { danger: 1, orange: 2, yellow: 3, success: 4 };
          return statusOrder[a.status] - statusOrder[b.status];
        });

        if (sortedNodeInfo.some(info => info.status === "yellow")) {
          arr.unshift({ ...data, node_info: sortedNodeInfo });
        } else if (sortedNodeInfo.some(info => info.status === "orange")) {
          arr.unshift({ ...data, node_info: sortedNodeInfo });
        } else if (sortedNodeInfo.some(info => info.status === "danger")) {
          arr.unshift({ ...data, node_info: sortedNodeInfo });
        } else {
          arr.push({ ...data, node_info: sortedNodeInfo });
        }
        });

        return arr;
      });

      console.log(filtered, "final filtered output", deckData);
      setDeckInfo(filtered)
    }, [deckData])

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
      <div className='card-holder-specificdeck'>
        {deckInfo.map((item, index) => {
          const details = deviceInfo.filter(data => (data.deck === parseInt(deck) && data.compartment === item.comp))
          console.log(details, 'detailsdetails', deviceInfo)
          return(
            details.map(detail => {
              return (
                <div className='specific-card'>
                <h3>Compartment No. - {item.comp}</h3>
                <Card item={detail}key={index} />
              </div>
              )
            })
          )
        })}
      </div>
      <div className="dashboard-sticky">    
        <Footer />
      </div>
    </div>
  )
}

export default SpecificDeck
