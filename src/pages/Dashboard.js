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
import { reduceDeckData } from '../utils/reduceDeckData'

const Dashboard = () => {
    const {deviceInfo, isLogin, deckData, filteredDeckInfo, setfilteredDeckInfo} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo)

    useEffect(() => {
        const { filteredDeckInfo, cardData } = reduceDeckData(deckData, deviceInfo);
        setfilteredDeckInfo(filteredDeckInfo);
        setCardData(cardData);
      }, [deckData, deviceInfo]);

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
                {cardData
                .sort((a, b) => {
                    const priority = {danger: 1, orange: 2, yellow: 3, deleted: 4, other: 5 };
                    const statusA = a.status.includes("danger") ? "danger" : a.status.includes("orange") ? "orange" : a.status.includes("yellow") ? "yellow" : a.isDeleted ? "deleted" : "other";
                    const statusB = b.status.includes("danger") ? "danger" : b.status.includes("orange") ? "orange" : b.status.includes("yellow") ? "yellow" : b.isDeleted  ? "deleted" : "other"; 
                    console.log("Priority A: ", priority[statusA], "Priority B: ", priority[statusB], a);

                    return priority[statusA] - priority[statusB];
                })
                .map((item) => {
                    let status = "";
                    if (item.status.includes("danger")) status = "danger";
                    else if (item.status.includes("orange")) status = "orange";
                    else if (item.status.includes("yellow")) status = "yellow";
                    else if (item.isDeleted) status = "deleted";
                    return status && (
                    <Link className='link-style' to={`info/${item.node_name}`} key={item.id}>
                        <Card item={item} />
                    </Link>
                    );
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
