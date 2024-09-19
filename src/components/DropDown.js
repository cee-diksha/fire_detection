import React, { useState } from 'react'
import CardModal from './CardModal'
import { Link } from 'react-router-dom'

const DropDown = ({cardData}) => {
  const [showModal, setShowModal] = useState(false)
  const [option, setOption] = useState(null)

    const optionsData = cardData.map(item => {
        return {value: item.node_name, label: item.node_name, disabled: item.isDeleted}
    })
  
    const handleClick = (e) => {
      setOption(e.target.value)
      setShowModal(true)
    }
  return (
    <div>
        <select style={{height: "40px", width: "100%",borderRadius: "10px", padding: "0 4px"}} onChange={(e) => handleClick(e)}>
            {optionsData.map((item, index) => {
              console.log(item, item, "item.isDeleted")
               return <option key={index} value={item.value} disabled = {item.disabled ? true : false}>{item.label}</option>
            })}
        </select>
        {showModal && <Link className='link-style' to={`info/${option}`}><CardModal open={true} handleClose={setShowModal} option={option} /></Link>}
    </div>
  )
}

export default DropDown
