import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainContext';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setIsLogin} = useContext(MainContext)

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', username);
      console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <Header />
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
        <div className="dashboard-sticky">    
          <Footer />
        </div>
    </div>
  )
}

export default Login
