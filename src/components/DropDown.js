import React from 'react'

const DropDown = ({cardData}) => {
    const optionsData = cardData.map(item => {
        return {value: item.data.node_name, label: item.data.node_name}
    })
  return (
    <div>
        <select style={{height: "40px", borderRadius: "10px", padding: "0 4px"}}>
            {optionsData.map((item, index) => {
               return <option key={index} value={item.value}>{item.label}</option>
            })}
        </select>
    </div>
  )
}

export default DropDown
