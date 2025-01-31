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
import '../styles.css'


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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "12%", width: "100%",padding:"20px 30px 10px 30px",boxSizing:'border-box'}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto" }}>
                <div className='ship-logo-div'>
                    <img style={{height: "100px"}} src={shipcrest} alt="ship" />
                </div>
                <h2 id="dashboard-heading">Ship Name</h2>
            </div>
            <div className='hm-search-login'>
                {!arr.includes(window.location.pathname) && 
                    <>
                        <DropDown cardData={cardData} />
                        {/* <AlertCard /> */}
                    </>
                }
            
                <div className='imgWrapper-main'>
                    <div className="dashboard-img-div"><button onClick={handleThemeChange}><img src={theme==="dark" ? sun : moon} alt="theme-icon" /></button></div>
                    <div className='imgWrapper'>
                        {isLogin && <Link to={"/settings"} 
                        style={{ cursor: "pointer", marginRight: "20px" }}><img src={theme === "dark" ? settings : settingsLight} alt="settings" className='img' /></Link>}

                        {window.location.pathname === "/login" ? <Link to="/" className='link'><div className='dashboard-img-div'><img src='home.svg' alt='dashboard'></img></div></Link> : isLogin ? <UserDowndown theme={theme} setIsLogin = {setIsLogin} /> : <Link to="/login" className='link'>
                            <div className='login-div'>
                                <img src="login.svg" alt="login"/>
                            </div>
                        </Link>}


                        
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Header
