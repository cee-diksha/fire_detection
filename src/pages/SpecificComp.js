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
import Header2 from '../components/Header2'

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
     <Header2 />
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
