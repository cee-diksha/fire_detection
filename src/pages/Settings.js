import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../assets/user.png"
import "../styles.css"
import SettingsTable from '../components/SettingsTable'
import { TotalRepeaterCard, TotalSmokeCard, TotalSuppressionCard } from '../components/SettingsCards'
import LiveClock from '../components/LiveClock'
import { MainContext } from '../context/MainContext'
import Footer from '../components/Footer'

const SetSamplingTime = () => {
  const {setSamplingTime} = useContext(MainContext)
  const [time, setTime] = useState(null)

  const handleSamplingTime = (event) => {
    setTime(event.target.value)
  }

  const changeSamplingTime = () => {
    setSamplingTime(time)
  }

  return (
    <div className='samplingtime'>
      <span style={{marginTop: "-8px", fontWeight: "500"}}>Set Sampling Time</span>
      <span style={{marginTop: "8px"}}><input value={time} className='samplingtime-input' type="text" onChange={handleSamplingTime} /> min <button onClick={changeSamplingTime}>Set</button></span>
    </div>
  )
}

const Settings = () => {
  const {isLogin} = useContext(MainContext)

  return (
    <div className='dashboard-wrapper'>
      <div className='header-settings'>
        <div style={{display: "flex"}}>
          <LiveClock />
          <SetSamplingTime />
        </div>
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
