import React, { useContext, useState } from 'react'
import settings from "../assets/settings.png"
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainContext';
import Footer from '../components/Footer';
import shipcrest from "../assets/INS_Vikrant_crest.jpg"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isLogin, setIsLogin} = useContext(MainContext)

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <div className='specific-device-mainheader'>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "auto"}}>
            <img style={{height: "100px"}} src={shipcrest} alt="ship" />
            <h1 id="dashboard-heading" style={{color: "#ffffff"}}>Ship Name</h1>
        </div>
        <div className='specific-device-imgWrapper'>
        <Link to="/" className='link'><h6 className='login'>Dashboard</h6></Link>
        <Link to={isLogin ? "/settings" : "#"} 
        style={{ pointerEvents: isLogin ? 'auto' : 'none', opacity: isLogin ? 1 : 0.5 }}><img src={settings} alt="settings" className='img'/></Link>
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-wrapper">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-wrapper">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <Link to="/" className='link-style'><button type="submit" className="login-button" onClick={() =>setIsLogin(true)}>Login</button></Link>
            </form>
        <div className="dashboard-sticky">    
          <Footer />
        </div>
    </div>
  )
}

export default Login
