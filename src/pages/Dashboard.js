import React, { useContext, useEffect, useState } from 'react'
import "../styles.css"
import Card from '../components/Card'
import SummaryCard from '../components/SummaryCard'
import Communication from '../components/Communication'
import user from "../assets/user.png"
import settings from "../assets/settings.png"
import { Link } from 'react-router-dom'
import DropDown from '../components/DropDown'
import {TempChart, BatteryChart} from '../components/TempChart'
import { MainContext } from '../context/MainContext'
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import DeckCard from '../components/DeckCard'
import { DeckDashboardPageDiv } from '../components/DeckModal'
import Footer from '../components/Footer'
import AlertCard from '../components/AlertCard'

const Dashboard = () => {
    const {deviceInfo, isLogin, deckData, filteredDeckInfo, setfilteredDeckInfo} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo)
    useEffect(() => {
        const reducedData = deckData.reduce((acc, curr) => {
            const existingDeck = acc.find(item => item.deck === curr.deck);
          
           const hasDanger = [];
            const hasOrange = [];
            const hasYellow = [];
            const hasSuccess = [];
          
            curr.devices.forEach(device => {
              const compartments = device.node_info.map(item => ({
                node: item.node,
                status: item.status,
                comp: device.comp 
              }));
          
              compartments.forEach(compartment => {
                if (compartment.status.includes("danger")) {
                  hasDanger.push(compartment.comp);
                } else if (compartment.status.includes("orange")) {
                  hasOrange.push(compartment.comp);
                } else if (compartment.status.includes("yellow")) {
                  hasYellow.push(compartment.comp);
                } else if (compartment.status.includes("success")) {
                  hasSuccess.push(compartment.comp);
                }
              });
            });       
            if (existingDeck) {
              existingDeck.danger.push(...hasDanger);
              existingDeck.normal.push(...hasSuccess);
              existingDeck.temprise.push(...hasOrange);
              existingDeck.lowbattery.push(...hasYellow);
            } else {
                const newDeck = {
                    deck: curr.deck,
                    danger: hasDanger,
                    normal: hasSuccess,
                    temprise: hasOrange,
                    lowbattery: hasYellow,
                };
            
                if (hasDanger.length > 0) {
                    acc.unshift(newDeck);  //to insert the decks having danger at start
                } else {
                    acc.push(newDeck);   
                }
            }
          
            return acc;
          }, []);
          
        setfilteredDeckInfo(reducedData)
        setCardData(deviceInfo)
    }, [deviceInfo, deckData])

  return (
    <>
        <div  className='dashboard-wrapper'>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "12%", width: "96%"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "300px"}}>
                <img style={{height: "100px"}} src={shipcrest} alt="ship" />
                <h2 id="dashboard-heading">Ship Name</h2>
            </div>
            <DropDown cardData={cardData} />
            <div className='imgWrapper'>
                {isLogin ? <img src={user} alt="user-img" className='img' style={{marginTop: "3px"}}/> : <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>}
                <Link to={isLogin ? "/settings" : "#"} 
                style={{ pointerEvents: isLogin ? 'auto' : 'none', opacity: isLogin ? 1 : 0.5 }}><img src={settings} alt="settings" className='img'/></Link>
            </div>
            </div>
            <div className='dashboard-main-screen'>
            <div className='dashboard-middle'>
                <div className='dashboard-content-summary'>
                    <AlertCard />
                    <div className='div-nested'>
                        <SummaryCard />
                        <DeckCard />
                    </div>
                </div>
                <div style={{backgroundColor: "#ffffff", width: "100%", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: 'center'}}>
                    <TempChart />
                </div>
                <div style={{backgroundColor: "#ffffff", width: "100%", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: 'center', marginTop: "14px"}}>
                    <BatteryChart />
                </div>
                <div className='dashboard-content-comm'>
                    <Communication />
                </div>
            </div>
            {/* -------------------------------------------------------- */}
                <div className='main-dashboard-wrapper'>
                <div className='fixed-content'>
                    {cardData.map((item) => {
                        return (
                            item.status.includes("danger") && <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id} item={item} /></Link>
                        ) 
                    })}
                    {cardData.map((item) => {
                        return (
                            item.status.includes("orange") && <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id} item={item} /></Link>
                        ) 
                    })}
                    {cardData.map((item) => {
                        return (
                            item.status.includes("yellow") && <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id} item={item} /></Link>
                        ) 
                    })}
                </div>
                    {filteredDeckInfo !== null && filteredDeckInfo.length > 0 && <div className='deck-display-grid'>
                    {filteredDeckInfo.map((item, index) => {
                    return (
                        <DeckDashboardPageDiv key={index} data={item} deckNo={item.deck}/>
                    )
                    })} 
                </div>}

                </div>
            </div>
            {/* -------------------------------------------------------- */}
            <div className="dashboard-sticky">
                <Footer />
            </div>
        </div>
    </>
  )
}

export default Dashboard



    // {/* <div className='dashboard-alerts'>
    // {cardData.map((item) => {
    //     return (
    //         <Link className='link-style' to={`info/${item.node_name}`}>
    //             <div className="hover-container">
    //                 <AlertCircle item={item} />
    //                 <div className="hover-text">{item.node_name}</div>
    //             </div>
    //         </Link>
    //     )
    // })}
    // </div> */}




    //     {/* <div className='dashboard-cardata'>
    //     <div className='scrollable-content'>
    //         {cardData.map((item) => {
    //             return (
    //             item.status === "success" && <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id} item={item} /></Link>
    //             ) 
    //         })}
    //         {cardData.map((item) => {
    //             return (
    //                 item.status === "success" &&  <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id + '-duplicate'} item={item} /></Link>
    //             ) 
    //         })}
    //     </div>
    // </div> */}