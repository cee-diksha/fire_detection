import React, { useContext, useEffect, useState } from 'react'
import { LineChart } from "@mui/x-charts";
import { MainContext } from '../context/MainContext';


export const TempChart = () => {
    const {deviceInfo} = useContext(MainContext)
    const [info, setInfo] = useState(deviceInfo)
    const temp = [0, ...info.map(item => item.temp)]
    const node = [0, ...info.map(item => item.node_id)]

    console.log(temp, node, "nodetempchart")

    useEffect(() => {
      console.log("chekcinh temp", deviceInfo)
      setInfo(deviceInfo.filter(item => item.node_type === "sensor"))
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

export const BatteryChart = () => {
  const {deviceInfo} = useContext(MainContext)
  const [info, setInfo] = useState(deviceInfo)
  const battery = [0, ...info.map(item => item.battery_percentage)]
  const node = [0, ...info.map(item => item.node_id)]

  console.log(battery, node, "nodetempchart")

  useEffect(() => {
    console.log("chekcinh temp", deviceInfo)
    setInfo(deviceInfo.filter(item => item.node_type === "sensor"))
  }, [deviceInfo])
    return (
      <>
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
              const battValue = params.y;
              return `Node ID: ${nodeId}\nBattery: ${battValue}°C`;
            },
          }}
          width={500}
          height={180}
        />
      </>
    )
}
