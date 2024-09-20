import React from 'react'

const AlertCard = () => {
  return (
    <div className='alert-details'>
        <div className='alert-details-combined' >
            <div id="alert-details-span1">ALERTS</div>
        </div>
        <div className='alert-details-combined' >
            <div id="alert-details-span1">Level - 0</div>
            <div id="alert-details-span3" style={{backgroundColor: "#7BFF6D"}}></div>
            <div id="alert-details-span2">Green</div>
        </div>
        <div className='alert-details-combined' >
            <div id="alert-details-span1">Level - 1</div>
            <div id="alert-details-span3" style={{backgroundColor: "#FFC648"}}></div>
            <div id="alert-details-span2">Yellow</div>
        </div>
        <div className='alert-details-combined' >
            <div id="alert-details-span1">Level - 2</div>
            <div id="alert-details-span3"style={{backgroundColor: "#FF6B3B"}}></div>
            <div id="alert-details-span2">Orange</div>
        </div>
        <div className='alert-details-combined' >
            <div id="alert-details-span1">Level - 3</div>
            <div id="alert-details-span3" style={{backgroundColor: "#F73030"}}></div>
            <div id="alert-details-span2">Red</div>
        </div>
    </div>
  )
}

export default AlertCard
