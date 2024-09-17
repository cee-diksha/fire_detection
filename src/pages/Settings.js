import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../assets/user.png"
import "../styles.css"
import SettingsTable from '../components/SettingsTable'
import { TotalRepeaterCard, TotalSmokeCard, TotalSuppressionCard } from '../components/SettingsCards'
import LiveClock from '../components/LiveClock'
import TempChart from '../components/TempChart'

const Settings = () => {
  const [isLogin, setIsLogin] = useState(false)

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
    </div>
  )
}

export default Settings
