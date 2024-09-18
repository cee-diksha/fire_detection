import { info } from "../assets/info"
import "./comp-styles.css"

const totalUnits = (unit) => {
    const result = info.filter(item => item.node_type === unit)
    return result.length
}

totalUnits()

export const TotalSuppressionCard = () => {
    const count = totalUnits("trigger unit")
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
    const count = totalUnits("sensor")
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
    const count = totalUnits("repeater")
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