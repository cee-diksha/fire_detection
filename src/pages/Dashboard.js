import React, { useContext, useEffect, useState } from 'react'
import "../styles.css"
import Card from '../components/Card'
import AlertCircle from '../components/AlertCircle'
import SummaryCard from '../components/SummaryCard'
import AlertCard from '../components/AlertCard'
import Communication from '../components/Communication'
import user from "../assets/user.png"
import settings from "../assets/settings.png"
import { Link } from 'react-router-dom'
import DropDown from '../components/DropDown'
import TempChart from '../components/TempChart'
import { MainContext } from '../context/MainContext'
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import DeckCard from '../components/DeckCard'
import { DeckDashboardPageDiv } from '../components/DeckModal'

const Dashboard = () => {
    const {deviceInfo, isLogin} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo)
    const filtering = cardData.filter(item => item.status === "danger").reduce((acc, curr) => {
        const exists = acc.find(item => item.deck === curr.deck)
        if (exists) {
            exists.compartment = [...new Set([...exists.compartment, ...curr.compartment])];
        } else {
            acc.push({
                ...curr,
                compartment: [...curr.compartment]
            })
        }
        return acc
    }, [])
    console.log(filtering, "check filtering")

    const [deck, setDeck] = useState(filtering)

    useEffect(() => {
        setDeck(filtering)
        setCardData(deviceInfo)
    }, [deviceInfo])

    console.log(isLogin, "is logged in")
  return (
    <>
        <div  className='dashboard-wrapper'>
            <div className='dashboard-main-screen'>
            <div className='dashboard-middle'>
                <div className='dashboard-content-summary'>
                    <div className='div1'>
                        <SummaryCard />
                    </div>
                    <div className='div2'>
                        <DeckCard />
                    </div>
                </div>
                <div style={{backgroundColor: "#ffffff", width: "100%", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: 'center'}}>
                    <TempChart />
                </div>
                <div className='dashboard-content-comm'>
                    <Communication />
                </div>
            </div>
            {/* -------------------------------------------------------- */}
            <div className='dashboard-header-cards'>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "12%"}}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto"}}>
                        <img style={{height: "100px"}} src={shipcrest} alt="ship" />
                        <h2 id="dashboard-heading">Ship Name</h2>
                    </div>
                    
                    <div className='imgWrapper'>
                        {isLogin ? <img src={user} alt="user-img" className='img'/> : <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>}
                        <Link to={isLogin ? "/settings" : "#"} 
                        style={{ pointerEvents: isLogin ? 'auto' : 'none', opacity: isLogin ? 1 : 0.5 }}><img src={settings} alt="settings" className='img'/></Link>
                    </div>
                </div>
                <div className='dashboard-main-wrapper'>
                    {/* -------------------------------------------------------- */}
                    <div className='main-dashboard-wrapper'>
                    <DropDown cardData={cardData} />
                    {deck.length > 0 && <div className='deck-display-grid'>
                       {deck.map((item, index) => {
                        return (
                            <DeckDashboardPageDiv key={index} data={item} />
                        )
                       })} 
                    </div>}
                    <div className='fixed-content'>
                        {console.log(cardData, "checking if updates")}
                            {cardData.map((item) => {
                                return (
                                    item.status === "danger" && <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id} item={item} /></Link>
                                ) 
                            })}
                            {cardData.map((item) => {
                                return (
                                    item.status === "orange" && <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id} item={item} /></Link>
                                ) 
                            })}
                            {cardData.map((item) => {
                                return (
                                    item.status === "yellow" && <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id} item={item} /></Link>
                                ) 
                            })}
                        </div>
                    {/* <div className='dashboard-cardata'>
                        <div className='scrollable-content'>
                            {cardData.map((item) => {
                                return (
                                item.status === "success" && <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id} item={item} /></Link>
                                ) 
                            })}
                            {cardData.map((item) => {
                                return (
                                    item.status === "success" &&  <Link className='link-style' to={`info/${item.node_name}`}><Card key={item.id + '-duplicate'} item={item} /></Link>
                                ) 
                            })}
                        </div>
                    </div> */}
                    </div>

                    {/* -------------------------------------------------------- */}

                    <div className='dashboard-alerts'>
                    {cardData.map((item) => {
                        return (
                            <Link className='link-style' to={`info/${item.node_name}`}>
                                <div className="hover-container">
                                    <AlertCircle item={item} />
                                    <div className="hover-text">{item.node_name}</div>
                                </div>
                            </Link>
                        )
                    })}
                    </div>
                </div>
            </div>
            </div>
            <div className="dashboard-sticky">
                <AlertCard />
            </div>
        </div>
    </>
  )
}

export default Dashboard
