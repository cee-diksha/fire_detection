import React, { useContext } from 'react'
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


const Header = ({cardData}) => {
    const {isLogin, setIsLogin, setTheme, theme} = useContext(MainContext)
    const arr = ["/user-management", "/login"]

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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "12%", width: "96%", marginTop: "6px"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto", marginRight: "20px"}}>
                <img style={{height: "100px"}} src={shipcrest} alt="ship" />
                <h2 id="dashboard-heading">Ship Name</h2>
            </div>
            {!arr.includes(window.location.pathname) && <>
                <DropDown cardData={cardData} />
                <AlertCard />
            </>}
            
            <div className='imgWrapper-main'>
                <div className="theme"><button onClick={handleThemeChange} style={{border: `${theme === "dark"? "1px solid #fff" : "1px solid #000"}`}}><img src={theme==="dark" ? sun : moon} style={{ filter: `${theme === "dark" ? "brightness(0) invert(1)": "grayscale(100%)"}`}} alt="theme-icon" /></button></div>
                <div className='imgWrapper'>
                    <Link to={isLogin ? "/settings" : "#"} 
                    style={{ pointerEvents: isLogin ? 'auto' : 'none', opacity: isLogin ? 1 : 0.5, marginRight: "20px" }}><img src={theme === "dark" ? settings : settingsLight} alt="settings" className='img' /></Link>

                    {window.location.pathname === "/login" ? <Link to="/" className='link'><h6 className='login'>Dashboard</h6></Link> : isLogin ? <UserDowndown theme={theme} setIsLogin = {setIsLogin} /> : <Link to="/login" className='link'><h6 className='login'>Login</h6></Link>}


                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
