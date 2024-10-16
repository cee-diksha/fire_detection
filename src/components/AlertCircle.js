import React from 'react'
import "../comp-styles.css"

const AlertCircle = ({item}) => {
    const {status, isDeleted, node_id} = item

  return (
    <div className='alertCircle-wrapper' style={{backgroundColor: `${isDeleted ? "#D0D0D0" :  status === "success" ? "#b7ff86" : status === "yellow" ? "#FFC648" : status === "orange" ? "#ff9863" : "#ff7b7b"}`, display: "flex", alignItems: "center", justifyContent: "center", color: (status==="yellow" || status==="success") ? "#000000" : "#ffffff", fontWeight: "600"}}>
      {node_id}
    </div>
  )
}

export default AlertCircle
