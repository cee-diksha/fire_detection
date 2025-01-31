import React, { useContext, useEffect, useState } from 'react'
import DropDown from './DropDown'
import AlertCard from './AlertCard'
import { Link } from 'react-router-dom'
import UserDowndown from './UserDowndown'
import { MainContext } from '../context/MainContext'
import sun from "../assets/sun.png"
import moon from "../assets/moon.png"
import shipcrest from "../assets/INS_Vikrant_crest.jpg"
import settings from "../assets/settings.png"
import settingsLight from "../assets/settingsLight.png"
import LiveClock from './LiveClock'
import { SetSamplingTime } from '../utils/samplingTime'
import './Header.css'


const Header2 = ({cardData}) => {
    const {isLogin, setIsLogin, setTheme, theme} = useContext(MainContext)
    const [isSettingsPg, setIsSettingsPg] = useState(false)
    const settingsRoute = ["/", "/info", "/deck", "/user-management"]
    const dashboardRoute = ["/settings", "/info", "/deck", "/user-management", "/login"]
    const loginRoute = ["/settings", "/info", "/deck", "/user-management", "/"]

    const handleThemeChange =  () => {
        if(theme==="dark") {
            setTheme("light")
            document.body.classList.add('light');
        } else {
            setTheme("dark")
            document.body.classList.remove('light');
        }
    }

    useEffect(() => {
        if(window.location.pathname === "/settings") setIsSettingsPg(true)
    }, [window.location.pathname])

    console.log(window.location, "window.location.pathname")
  return (
    <>
      <div className='header-mn'>

        <div className='header-sec1'>
            {!isSettingsPg && (
                <div className='header-ship-nm'>
                    <div className='ship-logo-div'> 
                        <img  src={shipcrest} alt="ship" />
                    </div>
                    <h2 >Ship Name</h2>
                </div>
            )}

            {isSettingsPg && <div>
                <LiveClock />
                <SetSamplingTime />
            </div>}
        </div>
            
        <div className='header-sec2'>
            {window.location.pathname === "/" && 
                <>
                    <DropDown cardData={cardData} />
                </>
            }

            <div className='header-search-login'>
                <div className='header-icon-div'>
                        <button onClick={handleThemeChange}>
                            <img src={theme==="dark" ? sun : moon} alt="theme-icon" />
                        </button>
                </div>

                <div>
                    {/* show settings icon */}
                    {isLogin && settingsRoute.includes(window.location.pathname) && <Link to={"/settings"} 
                    ><img src={theme === "dark" ? settings : settingsLight} alt="settings"/></Link>}

                    {/* show dashboard icon */}
                    {dashboardRoute.includes(window.location.pathname) && <Link to="/" ><div className='header-icon-div'><img src='/home.svg' alt='dashboard'></img></div></Link>}

                    {/* show login icon if not logged in, otherwise show userdropdown */}
                    {isLogin && loginRoute.includes(window.location.pathname) ? <UserDowndown theme={theme} setIsLogin = {setIsLogin} /> : window.location.pathname === "/login" ? null :  <Link to="/login">
                        <div className='header-icon-div'>
                            <img src="/login.svg" alt="login"/>
                        </div>
                    </Link>}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header2

