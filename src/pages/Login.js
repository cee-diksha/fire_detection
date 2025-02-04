import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainContext';
import Header2 from '../components/Header2';
import '../styles.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isLogin,setIsLogin} = useContext(MainContext)

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', username);
      console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <Header2/>
      {isLogin && (
        <div>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 17.4V27M27 36.6H27.024M51 27C51 40.2548 40.2548 51 27 51C13.7452 51 3 40.2548 3 27C3 13.7452 13.7452 3 27 3C40.2548 3 51 13.7452 51 27Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2>You are already logged in.</h2>
        </div>
      )}
      {!isLogin && (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-wrapper">
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
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
      )}
      
    </div>
  )
}

export default Login
