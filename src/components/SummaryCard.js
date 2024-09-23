import React from 'react'
import "./comp-styles.css"

const SummaryCard = () => {
  return (
    <div className='sum-details'>
        <h4>SUMMARY</h4>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Available devices</div>
            <div id="sum-details-span2">24/25</div>
        </div>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Available Repeaters</div>
            <div id="sum-details-span2">10/10</div>
        </div>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Available Smoke Sensors</div>
            <div id="sum-details-span2">11/12</div>
        </div>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Available Suppression Units</div>
            <div id="sum-details-span2">1/1</div>
        </div>
    </div>
  )
}

export default SummaryCard
