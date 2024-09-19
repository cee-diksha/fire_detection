import React, { useContext, useEffect, useState } from 'react'
import { LineChart } from "@mui/x-charts";
import { MainContext } from '../context/MainContext';


const TempChart = () => {
    const {deviceInfo} = useContext(MainContext)
    const [info, setInfo] = useState(deviceInfo)
    const temp = info.map(item => item.temp)
    const node = info.map(item => item.node_id)

    useEffect(() => {
      console.log("chekcinh temp", deviceInfo)
      setInfo(deviceInfo)
    }, [deviceInfo])
  return (
    <>
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
        height={180}
      />
    </>
  )
}

export default TempChart
