import React from 'react'
import "../comp-styles.css"


const AlertCard = () => {
  return (
    <div className='alert-wrapper'>
       {/* <div className='alert-details-combined' > */}
            <div id="alert-details-span1">ALERTS</div>
        {/* </div> */}
        <div className='alert-label-wrap'>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "#ff7b7b"}}></div>
                <div id="alert-details-span1">Fire</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "#8f8d8d"}}></div>
                <div id="alert-details-span1">Replacement</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3"style={{backgroundColor: "#ff9863"}}></div>
                <div id="alert-details-span1">Temp ↑</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "#FFC648"}}></div>
                <div id="alert-details-span1">Battery ↓</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "#b6d9cc"}}></div>
                <div id="alert-details-span1">Smoke</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "#9dff80"}}></div>
                <div id="alert-details-span1">Normal</div>
            </div>
        </div>
    </div>
  )
}

export default AlertCard
