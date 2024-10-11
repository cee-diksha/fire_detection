import React, { useContext, useEffect, useState } from 'react'
import "../styles.css"
import Card from '../components/Card'
import SummaryCard from '../components/SummaryCard'
import Communication from '../components/Communication'
import user from "../assets/user.png"
import settings from "../assets/settings.png"
import { Link } from 'react-router-dom'
import DropDown from '../components/DropDown'
import {TempChart, BatteryChart, SmokeChart} from '../components/TempChart'
import { MainContext } from '../context/MainContext'
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import DeckCard from '../components/DeckCard'
import { DeckDashboardPageDiv } from '../components/DeckModal'
import Footer from '../components/Footer'
import AlertCard from '../components/AlertCard'
import { reduceDeckData } from '../utils/reduceDeckData'
import { ExportPdfButton } from '../utils/ExportPdfButton'

const Dashboard = () => {
    const {deviceInfo, isLogin, deckData, filteredDeckInfo, setfilteredDeckInfo, suppressorStatus, activeSuppressors, setActiveSuppressors} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo) 

    useEffect(() => {
        const { filteredDeckInfo, cardData } = reduceDeckData(deckData, deviceInfo);
        setfilteredDeckInfo(filteredDeckInfo);
        console.log("filteredDeckInfo", filteredDeckInfo)
        setCardData(cardData);
        setActiveSuppressors(deviceInfo.filter(item => item.triggeringDevice === true))

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
            <ExportPdfButton data={cardData}/>
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
                <div style={{backgroundColor: "#ffffff", width: "100%", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', marginTop: "14px"}}>
                <div style={{ display: 'flex', width: "auto", marginTop: "20px"}}>
                    <div style={{ width: '18px', height: '18px', backgroundColor: '#9dff80', marginRight: '5px'}} />
                    <div style={{color: "#000000", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontSize: "14px", marginTop: "3px" }}>Nornal</div>
                    <div style={{ width: '18px', height: '18px', backgroundColor: '#ff7b7b', marginRight: '5px', marginLeft: "5px" }} />
                    <div style={{color: "#000000", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontSize: "14px", marginTop: "3px"}}>Smoke</div>
                </div>
                    <SmokeChart />
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
                    const priority = {danger: 1, orangeSmoke: 2, smoke: 3, orange: 4, yellow: 5, deleted: 6, other: 7 };
                    const statusA = a.status.includes("danger") ? "danger" : (a.status.includes("orange") &&  a.status.includes("smoke")) ? "orangeSmoke" : a.status.includes("smoke") ? "smoke" : a.status.includes("orange") ? "orange" : a.status.includes("yellow") ? "yellow" : a.isDeleted ? "deleted" : "other";
                    const statusB = b.status.includes("danger") ? "danger" : (b.status.includes("orange") &&  b.status.includes("smoke")) ? "orangeSmoke" : b.status.includes("smoke") ? "smoke" : b.status.includes("orange") ? "orange" : b.status.includes("yellow") ? "yellow" : b.isDeleted  ? "deleted" : "other"; 
                    return priority[statusA] - priority[statusB];
                })
                .map((item) => {
                    let status = "";
                    if (item.status.includes("danger")) status = "danger";
                    else if (item.status.includes("orange") && item.status.includes("smoke")) status = "orange";
                    else if (item.status.includes("smoke")) status = "smoke";
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
                    {suppressorStatus && <div className='suppressor-status'>
                        {activeSuppressors.map(item => {
                            return (
                                <Link className='link-style' to={`info/${item.node_name}`} key={item.id}>
                                    <Card item={item} />
                                </Link>
                            )
                        })}
                    </div>}
                    {filteredDeckInfo !== null && filteredDeckInfo.length > 0 && <div className='deck-display-grid'>
                    {filteredDeckInfo.map((item, index) => {
                    return (
                        <DeckDashboardPageDiv key={index} data={item} deckNo={item.deck} param={"dashboard"}/>
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
