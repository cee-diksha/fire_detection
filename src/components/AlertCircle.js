import React from 'react'
import "./comp-styles.css"

const AlertCircle = ({item}) => {
    const {status, isDeleted} = item

  return (
    <div className='alertCircle-wrapper' style={{backgroundColor: `${status === "success" ? "#0eec00" : status === "yellow" ? "#FFFF00" : status === "orange" ? "#FFA500" : "#fe2222"}`,  opacity: isDeleted ? 0.5 : 1}}>
      
    </div>
  )
}

export default AlertCircle
