import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/MainContext'

const Communication = () => {
  const {deviceInfo} = useContext(MainContext)
    const [info, setInfo] = useState(deviceInfo)

    useEffect(() => {
      setInfo(deviceInfo)
  }, [deviceInfo])
  return (
    <div className='comm-wrapper'>
      <h3>Last 5 Communication</h3>

      <div>
        {info.map(item => {
          return (
            <h4>{``}</h4>
          )
        })}
      </div>
    </div>
  )
}

export default Communication
