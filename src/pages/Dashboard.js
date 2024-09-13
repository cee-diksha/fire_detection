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
    const [cardData, setCardData] = useState([
        {id: 1, status: "success", data: {node_name: "Engine Room", node_id: 101, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 2, status: "success", data: {node_name: "GT Room", node_id: 105, bat_volt: 3.6, temp: "50", last_update: "12/9/24 13:14:18"}},
        {id: 3, status: "success", data: {node_name: "Boiler Room", node_id: 103, bat_volt: 3.6, temp: "50", last_update: "12/9/24 15:24:08"}},
        {id: 4, status: "success", data: {node_name: "Gallery", node_id: 111, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 5, status: "success", data: {node_name: "SS Dining Hall", node_id: 109, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 6, status: "success", data: {node_name: "VS Dining Hall", node_id: 114, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 7, status: "success", data: {node_name: "Main Switch Board", node_id: 107, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 8, status: "success", data: {node_name: "MCO", node_id: 108, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 9, status: "success", data: {node_name: "Engg JS Mess", node_id: 102, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 10, status: "success", data: {node_name: "Engg SS Mess", node_id: 104, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 11, status: "success", data: {node_name: "Spare Gear Store", node_id: 106, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 12, status: "success", data: {node_name: "CMR", node_id: 110, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 13, status: "success", data: {node_name: "AC Compartment", node_id: 112, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 14, status: "success", data: {node_name: "ASP", node_id: 113, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 15, status: "success", data: {node_name: "Pump Room", node_id: 115, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 16, status: "success", data: {node_name: "Cabin Flat", node_id: 116, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 17, status: "success", data: {node_name: "Fwd JS Mess", node_id: 114, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
        {id: 18, status: "success", data: {node_name: "Fwd SS Mess", node_id: 117, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}}
    ])

    setTimeout(() => {
        setCardData([
            {id: 1, status: "success", data: {node_name: "Engine Room", node_id: 101, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 2, status: "success", data: {node_name: "GT Room", node_id: 105, bat_volt: 3.6, temp: "50", last_update: "12/9/24 13:14:18"}},
            {id: 3, status: "yellow", data: {node_name: "Boiler Room", node_id: 103, bat_volt: 3.6, temp: "50", last_update: "12/9/24 15:24:08"}},
            {id: 4, status: "success", data: {node_name: "Gallery", node_id: 111, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 5, status: "success", data: {node_name: "SS Dining Hall", node_id: 109, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 6, status: "success", data: {node_name: "VS Dining Hall", node_id: 114, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 7, status: "success", data: {node_name: "Main Switch Board", node_id: 107, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 8, status: "orange", data: {node_name: "MCO", node_id: 108, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 9, status: "success", data: {node_name: "Engg JS Mess", node_id: 102, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 10, status: "success", data: {node_name: "Engg SS Mess", node_id: 104, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 11, status: "success", data: {node_name: "Spare Gear Store", node_id: 106, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 12, status: "success", data: {node_name: "CMR", node_id: 110, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 13, status: "success", data: {node_name: "AC Compartment", node_id: 112, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 14, status: "success", data: {node_name: "ASP", node_id: 113, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 15, status: "success", data: {node_name: "Pump Room", node_id: 115, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 16, status: "success", data: {node_name: "Cabin Flat", node_id: 116, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 17, status: "danger", data: {node_name: "Fwd JS Mess", node_id: 114, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}},
            {id: 18, status: "danger", data: {node_name: "Fwd SS Mess", node_id: 117, bat_volt: 3.6, temp: "50", last_update: "12/9/24 11:54:58"}}
        ])
    }, 5000)
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
                <div className='main-dashboard-wrapper'>
                <div className='fixed-content'>
                        {cardData.map((item) => {
                            return (
                                item.status === "danger" && <Card key={item.id} item={item} />
                            ) 
                        })}
                        {cardData.map((item) => {
                            return (
                                item.status === "orange" && <Card key={item.id} item={item} />
                            ) 
                        })}
                        {cardData.map((item) => {
                            return (
                                item.status === "yellow" && <Card key={item.id} item={item} />
                            ) 
                        })}
                    </div>
                <div className='dashboard-cardata'>
                    <div className='scrollable-content'>
                        {cardData.map((item) => {
                            return (
                               item.status === "success" && <Card key={item.id} item={item} />
                            ) 
                        })}
                        {cardData.map((item) => {
                            return (
                                item.status === "success" &&  <Card key={item.id + '-duplicate'} item={item} />
                            ) 
                        })}
                    </div>
                </div>
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
