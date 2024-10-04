import React, { useContext, useEffect, useState } from 'react'
import { BarChart, LineChart } from "@mui/x-charts";
import { MainContext } from '../context/MainContext';
import "../styles.css"


export const TempChart = () => {
    const {deviceInfo} = useContext(MainContext)
    const [info, setInfo] = useState(deviceInfo)
    const temp = info.map(item => item.temp)
    const node = info.map(item => item.node_id)

    useEffect(() => {
      setInfo(deviceInfo.filter(item => item.node_type === "sensor"))
    }, [deviceInfo])
  return (
    <>
      <LineChart
        xAxis={[{ data: node,  scaleType: 'band', label: "Node ID" }]}
        yAxis={[{
          min: 0,
          label: 'Temperature(°C)',
      }]}
        series={[
            {
            data: temp,
            label: 'Temperature(°C)'
            },
        ]}
        width={500}
        height={180}
      />
    </>
  )
}

export const BatteryChart = () => {
  const { deviceInfo } = useContext(MainContext);
  const [info, setInfo] = useState(deviceInfo);

  const battery = info.map((item) => item.battery_percentage);
  const node = info.map((item) => item.node_id);

  // const valueFormatter = (value) => {
  //   console.log(value, "valueeee")
  //   const nodeItem = info.find((item) => item.node_id === value);
  //   return nodeItem ? `${nodeItem.node_name} (ID: ${nodeItem.node_id})` : value;
  // };

  useEffect(() => {
    const sortedData = deviceInfo.sort((a, b) => a.node_id - b.node_id);
    setInfo(sortedData);
  }, [deviceInfo]);

  return (
    <>
      <LineChart
        xAxis={[
          {
            data: node,
            scaleType: 'band',
            label: 'Node ID',
            
          },
        ]}
        yAxis={[
          {
            min: 0,
            label: 'Battery(%)',
          },
        ]}
        series={[
          {
            data: battery,
            label: 'Battery (%)',
          },
        ]}
        width={500}
        height={180}
      />
    </>
  );
};

export const SmokeChart = () => {
  const { deviceInfo } = useContext(MainContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(deviceInfo); 
  }, [deviceInfo]);

  const smokearr = info.map((item) => ({
    smoke: item.status.includes('smoke') ? 'red' : '#7BFF6D', 
    nodeId: item.node_id,
  }));

  const nodeIds = smokearr.map((item) => item.nodeId);
  const barColors = smokearr.map((item) => item.smoke);
  const yAxisData = Array(nodeIds.length).fill(1); 
console.log(barColors, "barcolors")
  return (
    <BarChart
    // style={{width: "100%"}}
      xAxis={[{ scaleType: 'band', data: nodeIds, label: 'Node ID', colorMap: {
        type: "ordinal",
        values: nodeIds,
        colors: barColors,
      }, }]} 
      series={[
        {
          data: yAxisData,
        },
      ]}
      leftAxis={null}
      width={500}
      height={150}
    />
  );
};