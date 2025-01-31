import { useContext, useState } from "react"
import { MainContext } from "../context/MainContext"

export const SetSamplingTime = () => {
    const {setSamplingTime} = useContext(MainContext)
    const [time, setTime] = useState(null)
  
    const handleSamplingTime = (event) => {
      setTime(event.target.value)
    }
  
    const changeSamplingTime = () => {
      setSamplingTime(time)
    }
  
    return (
      <div className='samplingtime'>
        <span style={{marginTop: "-8px", fontWeight: "500"}}>Set Sampling Time</span>
        <span style={{marginTop: "8px"}}><input value={time} className='samplingtime-input' type="text" onChange={handleSamplingTime} /> min <button onClick={changeSamplingTime}>Set</button></span>
      </div>
    )
  }