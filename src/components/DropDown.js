import React, { useState } from 'react'
import CardModal from './CardModal'
import { Link } from 'react-router-dom'
import Select from 'react-select'


const DropDown = ({cardData}) => {
  const [showModal, setShowModal] = useState(false)
  const [option, setOption] = useState(null)

    const optionsData = cardData.map(item => {
        return {value: item.node_name, label: item.node_name, disabled: item.isDeleted}
    })
  
    const handleClick = (selectedOption) => {
      setOption(selectedOption.value)
      setShowModal(true)
    }
  return (
    <div style={{width: "auto", display: "flex", alignItems: "center", justifyContent: "center", margin: "22px 10px 0 0"}}>
        {/* <select style={{height: "40px", width: "50%",borderRadius: "10px", marginBottom: "18px", padding: "0 4px", backgroundColor: "#3F3F3F", color: "#ffffff", borderColor: "transparent"}} onChange={(e) => handleClick(e)}>
            {optionsData.map((item, index) => {
              console.log(item, item, "item.isDeleted")
               return <option key={index} value={item.value} disabled = {item.disabled ? true : false}>{item.label}</option>
            })}
        </select> */}
         <Select options={optionsData} 
        placeholder="Search or select a device..."
        onChange={handleClick}
        menuPortalTarget={document.body}
        isSearchable={true}
        styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          height: '40px',
          width: '240px',
          borderRadius: '10px',
          backgroundColor: '#3F3F3F',
          color: '#ffffff',
          marginBottom: "20px",
          fontSize: "14px",
          borderColor: 'transparent',
        }),
        placeholder: (defaultStyles) => ({
          ...defaultStyles,
          color: '#ffffff',
        }),
        singleValue: (defaultStyles) => ({
          ...defaultStyles,
          color: '#ffffff',
        }),
        input: (defaultStyles) => ({
          ...defaultStyles,
          color: '#ffffff',
        }),
        menu: (defaultStyles) => ({
          ...defaultStyles,
          backgroundColor: '#3F3F3F',
        }),
        option: (defaultStyles, { isFocused }) => ({
          ...defaultStyles,
          backgroundColor: isFocused ? '#505050' : '#3F3F3F',
          color: '#ffffff',
        }),
        }}/>
        {showModal && <CardModal open={true} handleClose={setShowModal} option={option} />}
    </div>
  )
}

export default DropDown
