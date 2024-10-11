import { Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import stopalarm from "../assets/stop_alarm.png"
import "../comp-styles.css"
import { MainContext } from '../context/MainContext'
import battery from "../assets/battery.png"
import temp from "../assets/temp.png"
import sensor from "../assets/sensor.png"
import sensor2 from "../assets/sensor2.png"
import update from "../assets/update.png"
import update2 from "../assets/update2.png"
import Card from './Card'
import { Link } from 'react-router-dom'


const CardModal = ({open, handleClose, option }) => {
    console.log(option, "option test")
    const {deviceInfo} = useContext(MainContext)
    const [cardData, setCardData] = useState(deviceInfo)
    const [specificData, setSpecificData] = useState(null)

    useEffect(() => {
       const result =  cardData.filter(item => item.node_name === option)
       console.log(result, "result", cardData, option)
       setSpecificData(result[0])
    }, [cardData])

    useEffect(() => {
        setCardData(deviceInfo)
    }, [deviceInfo])
    
  return (
    <>
      <Modal
            className='popup-modal'
            open={open}
            onClose={(e) => handleClose(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div className='status-card-modal' style={{cursor: "pointer"}}>
                <button onClick={(e) => {
                    handleClose(false)
                    e.preventDefault()
                    e.stopPropagation()
                }}>Close</button>
                {specificData && <Link className='link-style' to={`info/${specificData.node_name}`} key={specificData.id}><Card item={specificData} /></Link>}
           </div>
        </Modal>
    </>
  )
}

export default CardModal