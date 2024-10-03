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
                <div id="alert-details-span3" style={{backgroundColor: "#F84848"}}></div>
                <div id="alert-details-span1">Fire</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "#8f8d8d"}}></div>
                <div id="alert-details-span1">Needs Replacement</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3"style={{backgroundColor: "#FF6B3B"}}></div>
                <div id="alert-details-span1">Temp Rise</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "#FFC648"}}></div>
                <div id="alert-details-span1">Low battery</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "#7BFF6D"}}></div>
                <div id="alert-details-span1">Normal</div>
            </div>
        </div>
    </div>
  )
}

export default AlertCard
