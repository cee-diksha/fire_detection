/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import "../styles.css"
import Card from '../components/Card'
import SummaryCard from '../components/SummaryCard'
import Communication from '../components/Communication'

import { Link } from 'react-router-dom'
import {TempChart, BatteryChart, SmokeChart} from '../components/TempChart'
import { MainContext } from '../context/MainContext'
import DeckCard from '../components/DeckCard'
import { DeckDashboardPageDiv } from '../components/DeckModal'
import Footer from '../components/Footer'
import { reduceDeckData } from '../utils/reduceDeckData'

import Header from '../components/Header'
import AlertCard from '../components/AlertCard'
import Header2 from '../components/Header2'

  
const Dashboard = () => {
    const {deviceInfo, deckData, filteredDeckInfo, setfilteredDeckInfo, suppressorStatus, activeSuppressors, setActiveSuppressors} = useContext(MainContext)
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
        <div className='dashboard-wrapper'>
            <Header2 cardData={cardData}/>
            <div className='dashboard-main-screen'>
            <div className='dashboard-middle'>
                <div className='dashboard-content-summary'>
                    <SummaryCard />
                    <div style={{backgroundColor: "var(--bg-color-secondary)", borderRadius: '6px', height: "100%", width: "48%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <DeckCard />
                    </div>
                </div>
                <div style={{backgroundColor: "var(--bg-color-secondary)", width: "100%", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: 'center'}}>
                    <TempChart />
                </div>
                <div style={{backgroundColor: "var(--bg-color-secondary)", width: "100%", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: 'center', marginTop: "14px"}}>
                    <BatteryChart />
                </div>
                <div style={{backgroundColor: "var(--bg-color-secondary)", width: "100%", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', marginTop: "14px"}}>
                <div style={{ display: 'flex', width: "auto", marginTop: "20px"}}>
                    <div style={{ width: '18px', height: '18px', backgroundColor: '#b7ff86', marginRight: '5px'}} />
                    <div style={{color: "var(--text-color)", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontSize: "14px", marginTop: "3px" }}>Normal</div>
                    <div style={{ width: '18px', height: '18px', backgroundColor: '#ff7b7b', marginRight: '5px', marginLeft: "5px" }} />
                    <div style={{color: "var(--text-color)", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontSize: "14px", marginTop: "3px"}}>Smoke</div>
                </div>
                    <SmokeChart />
                </div>
                <div className='dashboard-content-comm'>
                    <Communication />
                </div>
            </div>
            {/* -------------------------------------------------------- */}
                <div className='main-dashboard-wrapper'>
                    <AlertCard/>
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
            
        </div>
    </>
  )
}

export default Dashboard
