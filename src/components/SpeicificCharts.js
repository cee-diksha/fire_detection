import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import { LineChart } from "@mui/x-charts"

export const SpecificTempChart = () => {
    const {deviceInfo} = useContext(MainContext)
    const temp = deviceInfo.map(item => item.temp)
    const node = deviceInfo.map(item => item.node_id)
    return(
        <LineChart
            xAxis={[{ data: node }]}
            series={[
                {
                data: temp,
                label: 'Temperature'
                },
            ]}
            tooltip={{
            formatter: (params) => {
                const nodeId = params.x;
                const tempValue = params.y;
                return `Node ID: ${nodeId}\nTemperature: ${tempValue}°C`;
            },
            }}
            width={500}
            height={300}
      />
    )
}

export const SpecificBattChart = () => {
    const {deviceInfo} = useContext(MainContext)
    const battery = deviceInfo.map(item => item.bat_volt)
    const node = deviceInfo.map(item => item.node_id)
 return(
        <LineChart
            xAxis={[{ data: node }]}
            series={[
                {
                data: battery,
                label: 'Battery'
                },
            ]}
            tooltip={{
            formatter: (params) => {
                const nodeId = params.x;
                const batteryVal = params.y;
                return `Node ID: ${nodeId}\nBattery: ${batteryVal}°C`;
            },
            }}
            width={500}
            height={300}
        />
    )
}