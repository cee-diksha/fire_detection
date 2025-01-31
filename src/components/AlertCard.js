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
                <div id="alert-details-span3" style={{backgroundColor: "var(--fire-alert)"}}></div>
                <div id="alert-details-span1">Fire</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "var(--replace-alert)"}}></div>
                <div id="alert-details-span1">Replacement</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3"style={{backgroundColor: "var(--temp-alert)"}}></div>
                <div id="alert-details-span1">Temp Rise</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "var(--battery-alert)"}}></div>
                <div id="alert-details-span1">Low Battery</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "var(--smoke-alert)"}}></div>
                <div id="alert-details-span1">Smoke</div>
            </div>
            <div className='alert-details-combined' >
                <div id="alert-details-span3" style={{backgroundColor: "var(--normal)"}}></div>
                <div id="alert-details-span1">Normal</div>
            </div>
        </div>
    </div>
  )
}

export default AlertCard
