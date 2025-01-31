import React, { Children, useContext, useEffect, useState } from 'react'
import "../comp-styles.css"
import { totalUnits } from '../utils/TotalDevices'
import { MainContext } from '../context/MainContext'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const SummaryCard = () => {
    const {deviceInfo} = useContext(MainContext)
    const [data, setData] = useState(deviceInfo)
    const [open, setOpen] = useState(false);
    const functional = (totalUnits(data, "repeater")+totalUnits(data, "sensor")+totalUnits(data, "suppressor"))
    const percentage = data.length > 0 ? Math.ceil((functional / data.length) * 100) : 0;

    useEffect(() => {
        setData(deviceInfo)
    }, [deviceInfo])

  return (
    <div className='sum-details'>
        <h4>SYSTEM STATUS</h4>
        {!open && (
            <div className='sum-guage'>
                <Gauge
                    cornerRadius="50%"
                    sx={{
                        [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 18,
                            fontWeight:600,
                            transform: 'translate(3px, -4px)',
                            fill:'white !important',
                            color:'white',
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                            fill: '#52b202',
                        },
                    }}
                    text={
                        ({ value }) => `${value}%`} 
                    width={150} 
                    height={80} 
                    value={percentage} 
                    startAngle={-90} 
                    endAngle={90} 
                />
            </div>
        )}
        

        {open && (
            <div className='sum-more-details'>
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
            </div>
        )}
        
        <div className='sum-details-combined' >
            <div id="sum-details-span1">Active devices</div>
            <div id="sum-details-span2">{functional}/{data.length}</div>
        </div>
        <div className='sum-all-div' onClick={()=>{setOpen(!open)}}>
            <span>Show all</span>
        </div>
    </div>
  )
}

export default SummaryCard
