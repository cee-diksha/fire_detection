import React, { useContext } from 'react'
import { LineChart } from "@mui/x-charts";
import { MainContext } from '../context/MainContext';


const TempChart = () => {
    const {deviceInfo} = useContext(MainContext)
    const temp = deviceInfo.map(item => item.temp)
    const node = deviceInfo.map(item => item.node_id)
    const nodeName = deviceInfo.map(item => item.node_name)

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
