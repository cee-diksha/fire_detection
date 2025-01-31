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
import Header2 from '../components/Header2'



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
    <>
    {isLogin && (
      <div className='dashboard-wrapper'>
        <Header2 />
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
      )}
      {!isLogin && (
        <div>
          you are not logged in.
          <Link to='/login'>Click to Login</Link>
        </div>
      )}
    </>
  )
}

export default Settings
