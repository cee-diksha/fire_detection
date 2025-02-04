import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles.css"
import SettingsTable from '../components/SettingsTable'
import { TotalRepeaterCard, TotalSmokeCard, TotalSuppressionCard } from '../components/SettingsCards'
import { MainContext } from '../context/MainContext'
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
      </div>
      )}
      {!isLogin && (
        <div className='sttngs-user'>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 17.4V27M27 36.6H27.024M51 27C51 40.2548 40.2548 51 27 51C13.7452 51 3 40.2548 3 27C3 13.7452 13.7452 3 27 3C40.2548 3 51 13.7452 51 27Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h2>You need to be logged in to access settings.</h2>
          <Link to='/login'>Login</Link>
        </div>
      )}
    </>
  )
}

export default Settings
