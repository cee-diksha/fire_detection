import React from 'react'
import "./comp-styles.css"

const AlertCircle = ({item}) => {
    const {status, isDeleted, node_id} = item

  return (
    <div className='alertCircle-wrapper' style={{backgroundColor: `${isDeleted ? "#D0D0D0" :  status === "success" ? "#7BFF6D" : status === "yellow" ? "#FFC648" : status === "orange" ? "#FF6B3B" : "#F73030"}`, display: "flex", alignItems: "center", justifyContent: "center", color: (status==="yellow" || status==="success") ? "#000000" : "#ffffff", fontWeight: "600"}}>
      {node_id}
    </div>
  )
}

export default AlertCircle
