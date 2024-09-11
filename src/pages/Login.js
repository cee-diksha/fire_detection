import React, { useState } from 'react'
import settings from "../assets/settings.png"
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <div className='imgWrapper'>
        <Link to="/" className='link'><h6 className='login'>Dashboard</h6></Link>
        <Link to="/settings"><img src={settings} alt="settings" className='img'/></Link>
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
                <button type="submit" className="login-button">Login</button>
            </form>
    </div>
  )
}

export default Login
