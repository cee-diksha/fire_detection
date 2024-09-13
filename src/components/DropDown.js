import React from 'react'

const DropDown = ({cardData}) => {
    const optionsData = cardData.map(item => {
        return {value: item.data.node_name, label: item.data.node_name}
    })
  return (
    <div>
        <select>
            {optionsData.map((item, index) => {
               return <option key={index} value={item.value}>{item.label}</option>
            })}
        </select>
    </div>
  )
}

export default DropDown
