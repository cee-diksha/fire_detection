import { useContext, useEffect, useState } from "react"
import "../comp-styles.css"
import { MainContext } from "../context/MainContext"
import { totalUnits } from "../utils/TotalDevices"

export const TotalSuppressionCard = () => {
    const {deviceInfo} = useContext(MainContext)
    const [data, setData] = useState(deviceInfo)
    const [count, setCount] = useState(totalUnits(data, "suppressor"))

    useEffect(() => {
        setData(deviceInfo)
        setCount(totalUnits(deviceInfo, "suppressor"))
    }, [deviceInfo])
    return(
        <div className="total-cards">
            <div className="total-label">
                <h4>Total Supression Units</h4>
            </div>  
            <div className="total-num">
                {count}
            </div>      
        </div>
    )
}

export const TotalSmokeCard = () => {
    const {deviceInfo} = useContext(MainContext)
    const [data, setData] = useState(deviceInfo)
    const [count, setCount] = useState(totalUnits(data, "sensor"))

    useEffect(() => {
        setData(deviceInfo)
        setCount(totalUnits(deviceInfo, "sensor"))
    }, [deviceInfo])
    return(
        <div className="total-cards">
            <div className="total-label">
                <h4>Total Smoke Sensors</h4>
            </div>  
            <div className="total-num">
                {count}
            </div>      
        </div>
    )
}


export const TotalRepeaterCard = () => {
    const {deviceInfo} = useContext(MainContext)
    const [data, setData] = useState(deviceInfo)
    const [count, setCount] = useState(totalUnits(data, "repeater"))

    useEffect(() => {
        setData(deviceInfo)
        setCount(totalUnits(deviceInfo, "repeater"))
    }, [deviceInfo])
    return(
        <div className="total-cards">
            <div className="total-label">
                <h4>Total Repeaters</h4>
            </div>  
            <div className="total-num">
            {count}
            </div>      
        </div>
    )
}