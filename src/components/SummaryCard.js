import React, { useContext, useEffect, useState } from 'react'
import "../comp-styles.css"
import { totalUnits } from '../utils/TotalDevices'
import { MainContext } from '../context/MainContext'

const SummaryCard = () => {
    const {deviceInfo} = useContext(MainContext)
    const [data, setData] = useState(deviceInfo)

    useEffect(() => {
        setData(deviceInfo)
    }, [deviceInfo])

  return (
    <div className='sum-details'>
        <h4>SYSTEM STATUS</h4>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Repeaters</div>
            <div id="sum-details-span2">{totalUnits(data, "repeater")}/{data.filter(item => item.node_type === "repeater").length}</div>
        </div>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Smoke/Fire Sensors</div>
            <div id="sum-details-span2">{totalUnits(data, "sensor")}/{data.filter(item => item.node_type === "sensor").length}</div>
        </div>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Suppressor</div>
            <div id="sum-details-span2">{totalUnits(data, "suppressor")}/{data.filter(item => item.node_type === "suppressor").length}</div>
        </div>
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Total Devices</div>
            <div id="sum-details-span2">{data.length}</div>
        </div>
    </div>
  )
}

export default SummaryCard
