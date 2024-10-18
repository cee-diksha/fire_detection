import React, { useContext, useEffect, useState } from 'react'

import "../styles.css"
import Header from '../components/Header'
import { MainContext } from '../context/MainContext'

const UserMangement = () => {
    const {deviceInfo} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo) 

    useEffect(() => {
        setCardData(cardData);
      }, [deviceInfo]);
      
  return (
    <div className='userManagement'>
        <Header cardData={cardData}/>
        <h4>User Management</h4>
        <div className='access-code'>
            Change Access Code
            <p>Please enter the new access code to activate the suppressor. Click 'Reset Access Code' to apply the changes.</p>
            <input type="text" placeholder='Enter access code' />
            <button>Reset Access Code</button>
        </div>
        <div className='reset-password'>
            Change Password
            <p>Update your password by entering your username and new password. Click 'Change Password' to save the new credentials.</p>
            <div>
                <input placeholder='Enter username' type="text" />
                <input style={{marginLeft: "20px"}} placeholder='Enter password' type="password" />
                <input style={{marginLeft: "20px"}} placeholder='Confirm password' type="password" />
            </div>
            <button>Change Password</button>
        </div>
        <div className='add-new-user'>
            Add New Authorized User
            <p>Fill in the username and password to create a new authorized user. Click 'Add User' to complete the registration.</p>
            
            <div>
                <input placeholder='Enter username' type="text" />
                <input style={{marginLeft: "20px"}} placeholder='Enter password' type="password" />
                <input style={{marginLeft: "20px"}} placeholder='Confirm password' type="password" />
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default UserMangement
