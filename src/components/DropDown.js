import React, { useState } from 'react'
import CardModal from './CardModal'
import Select from 'react-select'
import { ExportPdfButton } from '../utils/ExportPdfButton'


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
    <div style={{display: 'flex', flexDirection: "column", width: 'auto'}}>
      <div style={{width: "auto", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", top: "14px"}}>
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
            backgroundColor: "var(--bg-color-secondary)",
            color: '#ffffff',
            marginBottom: "20px",
            fontSize: "14px",
            borderColor: 'transparent',
          }),
          placeholder: (defaultStyles) => ({
            ...defaultStyles,
            color: 'var(--text-color)',
          }),
          singleValue: (defaultStyles) => ({
            ...defaultStyles,
            color: 'var(--text-color)',
          }),
          input: (defaultStyles) => ({
            ...defaultStyles,
            color: 'var(--text-color)',
          }),
          menu: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "var(--bg-color-secondary)",
          }),
          option: (defaultStyles, { isFocused }) => ({
            ...defaultStyles,
            backgroundColor: isFocused ? "var(--dropdown-focused)" : "var(--color-secondary)",
            color: 'var(--text-color)',
          }),
          }}/>
          {showModal && <CardModal open={true} handleClose={setShowModal} option={option} />}
      </div>
      <ExportPdfButton data={cardData}/>
    </div>
  )
}

export default DropDown
