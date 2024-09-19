import React from 'react'
import "./comp-styles.css"

const AlertCircle = ({item}) => {
    const {status, isDeleted, node_id} = item

  return (
    <div className='alertCircle-wrapper' style={{backgroundColor: `${isDeleted ? "#D0D0D0" :  status === "success" ? "#0eec00" : status === "yellow" ? "#FFFF00" : status === "orange" ? "#FFA500" : "#fe2222"}`, display: "flex", alignItems: "center", justifyContent: "center", color: status==="yellow" ? "#000000" : "#ffffff", fontWeight: "600"}}>
      {node_id}
    </div>
  )
}

export default AlertCircle
