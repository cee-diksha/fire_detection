import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../assets/user.png"
import userLight from "../assets/userLight.png"
import "../styles.css"
import SettingsTable from '../components/SettingsTable'
import { TotalRepeaterCard, TotalSmokeCard, TotalSuppressionCard } from '../components/SettingsCards'
import LiveClock from '../components/LiveClock'
import { MainContext } from '../context/MainContext'
import Footer from '../components/Footer'
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"

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
  const {isLogin, setTheme, theme} = useContext(MainContext)

  const handleThemeChange =  () => {
      if(theme==="dark") {
          setTheme("light")
          document.body.classList.add('light');
      } else {
          setTheme("dark")
          document.body.classList.remove('light');
      }
    }

  return (
    <div className='dashboard-wrapper'>
      <div className='header-settings' style={{marginTop: "6px"}}>
        <div style={{display: "flex"}}>
          <LiveClock />
          <SetSamplingTime />
        </div>
        <div className='settings-imgWrapper'>
          {isLogin ? <img src={theme==="dark" ? user: userLight} alt="user-img" className='settings-img'/> : <Link to="/login" className='link'><h6 className='settings-login'>Login</h6></Link>}
          <Link to="/" className='link'><h6 className='settings-dashboard'>Dashboard</h6></Link>
        </div>
        <div className="theme" style={{ position: 'absolute', top: "6px", right: "30px"}}><button onClick={handleThemeChange} style={{border: `${theme === "dark"? "1px solid #fff" : "1px solid #000"}`}}><img src={theme==="dark" ? sun : moon} style={{ filter: `${theme === "dark" ? "brightness(0) invert(1)": "grayscale(100%)"}`}} alt="theme-icon" /></button></div>
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
