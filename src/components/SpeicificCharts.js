import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/MainContext"
import { LineChart } from "@mui/x-charts"

export const SpecificTempChart = () => {
    const {deviceInfo} = useContext(MainContext)
    const [info, setInfo] = useState(deviceInfo)
    const temp = info.map(item => item.temp)
    const node = info.map(item => item.node_id)

    useEffect(() => {
      console.log("chekcinh temp", deviceInfo)
      setInfo(deviceInfo)
    }, [deviceInfo])
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
    const [info, setInfo] = useState(deviceInfo)
    const battery = info.map(item => item.bat_volt)
    const node = info.map(item => item.node_id)

    useEffect(() => {
      setInfo(deviceInfo)
    }, [deviceInfo])
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