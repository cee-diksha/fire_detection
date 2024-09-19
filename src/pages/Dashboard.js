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

const Dashboard = () => {
    const [isLogin, setIsLogin] = useState(false)
    const {deviceInfo} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo)

    useEffect(() => {
        setCardData(deviceInfo)
    }, [deviceInfo])
  return (
    <>
        <div  className='dashboard-wrapper'>
            <div className='dashboard-main-screen'>
            <div className='dashboard-middle'>
                <div className='dashboard-content-summary'>
                    <h4>SUMMARY</h4>
                    <SummaryCard />
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
                        <h1 id="dashboard-heading">INS Vikrant</h1>
                    </div>
                    
                    <div className='imgWrapper'>
                        {isLogin ? <img src={user} alt="user-img" className='img'/> : <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>}
                        <Link to="/settings"><img src={settings} alt="settings" className='img'/></Link>
                    </div>
                </div>
                <div className='dashboard-main-wrapper'>
                    {/* -------------------------------------------------------- */}
                    <div className='main-dashboard-wrapper'>
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
                    <div className='dashboard-cardata'>
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
                    </div>
                    </div>

                    {/* -------------------------------------------------------- */}

                    <div className='dashboard-alerts'>
                    {cardData.map((item) => {
                        return (
                            <Link className='link-style' to={`info/${item.node_name}`}><AlertCircle item={item} /></Link>
                        )
                    })}
                    <DropDown cardData={cardData} />
                    </div>
                    <div>
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
