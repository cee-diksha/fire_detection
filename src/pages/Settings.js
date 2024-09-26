import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../assets/user.png"
import "../styles.css"
import SettingsTable from '../components/SettingsTable'
import { TotalRepeaterCard, TotalSmokeCard, TotalSuppressionCard } from '../components/SettingsCards'
import LiveClock from '../components/LiveClock'
import { MainContext } from '../context/MainContext'
import Footer from '../components/Footer'

const Settings = () => {
  const {isLogin} = useContext(MainContext)

  return (
    <div className='dashboard-wrapper'>
      <div className='header-settings'>
        <LiveClock />
        <div className='settings-imgWrapper'>
          {isLogin ? <img src={user} alt="user-img" className='settings-img'/> : <Link to="/login" className='link'><h6 className='settings-login'>Login</h6></Link>}
          <Link to="/" className='link'><h6 className='settings-dashboard'>Dashboard</h6></Link>
        </div>
      </div>
      <div className='total-cards-wrapper'>
        <TotalSuppressionCard />
        <TotalRepeaterCard />
        <TotalSmokeCard />
      </div>
      <SettingsTable />
      <div className="dashboard-sticky">    
        <Footer />
      </div>
    </div>
  )
}

export default Settings
