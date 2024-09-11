import React, { useState } from 'react'
import "../styles.css"
import Card from '../components/Card'
import AlertCircle from '../components/AlertCircle'
import SummaryCard from '../components/SummaryCard'
import AlertCard from '../components/AlertCard'
import Communication from '../components/Communication'
import user from "../assets/user.png"
import settings from "../assets/settings.png"
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [isLogin, setIsLogin] = useState(false)
    const cardData = [
        {id: 1, status: "success"},
        {id: 2, status: "success"},
        {id: 3, status: "danger"},
        {id: 4, status: "danger"},
        {id: 5, status: "success"},
        {id: 6, status: "danger"},
        {id: 7, status: "success"},
        {id: 8, status: "success"},
        {id: 9, status: "danger"},
        {id: 10, status: "danger"},
        {id: 11, status: "success"},
        {id: 12, status: "danger"},
        {id: 7, status: "success"},
        {id: 8, status: "success"},
        {id: 9, status: "danger"},
        {id: 10, status: "danger"},
        {id: 11, status: "success"},
        {id: 12, status: "danger"}
    ]
  return (
    <>
        <div className='dashboard-wrapper'>
            <h1 id="dashboard-heading">Dashboard</h1>
            <div className='imgWrapper'>
                {isLogin ? <img src={user} alt="user-img" className='img'/> : <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>}
                <Link to="/settings"><img src={settings} alt="settings" className='img'/></Link>
            </div>
            <div className='dashboard-main-wrapper'>
                {/* -------------------------------------------------------- */}

                <div className='dashboard-middle'>
                    <div className='dashboard-content-summary'>
                        <h4>SUMMARY</h4>
                        <SummaryCard />
                    </div>
                    <div className='dashboard-content-comm'>
                        <Communication />
                    </div>
                </div>

                {/* -------------------------------------------------------- */}

                <div className='dashboard-cardata'>
                {cardData.map((item) => {
                    return (
                        <Card item={item} />
                    ) 
                })}
                </div>

                {/* -------------------------------------------------------- */}

                <div className='dashboard-alerts'>
                {cardData.map((item) => {
                    return (
                        <AlertCircle item={item} />
                    )
                })}
                </div>
                <div>
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
