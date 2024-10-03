import React from 'react'
import "../comp-styles.css"

const SummaryCard = () => {
  return (
    <div className='sum-details'>
        <h4>SYSTEM STATUS</h4>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Repeaters</div>
            <div id="sum-details-span2">9/10</div>
        </div>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Smoke Sensors</div>
            <div id="sum-details-span2">12/12</div>
        </div>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Suppression Units</div>
            <div id="sum-details-span2">1/1</div>
        </div>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Total Devices</div>
            <div id="sum-details-span2">24/25</div>
        </div>
    </div>
  )
}

export default SummaryCard
