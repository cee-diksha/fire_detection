import React, { useState } from 'react'
import CardModal from './CardModal'

const DropDown = ({cardData}) => {
  const [showModal, setShowModal] = useState(false)
  const [option, setOption] = useState(null)

    const optionsData = cardData.map(item => {
        return {value: item.data.node_name, label: item.data.node_name}
    })
  
    const handleClick = (e) => {
      setOption(e.target.value)
      setShowModal(true)
    }
  return (
    <div>
        <select style={{height: "40px", borderRadius: "10px", padding: "0 4px"}} onChange={(e) => handleClick(e)}>
            {optionsData.map((item, index) => {
               return <option key={index} value={item.value}>{item.label}</option>
            })}
        </select>
        {showModal && <CardModal open={true} handleClose={setShowModal} option={option} />}
    </div>
  )
}

export default DropDown
