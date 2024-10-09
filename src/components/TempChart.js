import React, { useContext, useEffect, useState } from 'react'
import { BarChart, LineChart } from "@mui/x-charts";
import { MainContext } from '../context/MainContext';
import "../styles.css"
import { Tooltip } from '@mui/material';


export const TempChart = () => {
    const {deviceInfo} = useContext(MainContext)
    const [info, setInfo] = useState(deviceInfo)
    const temp = info.map(item => item.temp)
    const node = info.map(item => item.node_id)

    const valueFormatter = (nodeId, context) => {
      const nodeItem = info.find((item) => item.node_id === nodeId);
      if (context.location === "tick") {
        return String(nodeId);  // ensure nodeId is always a string
      } else if (nodeItem && nodeItem.node_name) {
        return `${nodeItem.node_name} (ID: ${nodeItem.node_id})`;
      } else {
        return String(nodeId);  // fallback to nodeId if no node_name is found
      }
    };

    useEffect(() => {
      setInfo(deviceInfo.filter(item => item.node_type === "sensor"))
    }, [deviceInfo])
  return (
    <>
      <LineChart
        xAxis={[{ data: node,  scaleType: 'band', label: "Node ID",  valueFormatter: (nodeId, context) => valueFormatter(nodeId, context) }]}
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
  const lineColor = "#7F00FF"

  const valueFormatter = (nodeId, context) => {
    const nodeItem = info.find((item) => item.node_id === nodeId);
    if (context.location === "tick") {
      return String(nodeId);  // ensure nodeId is always a string
    } else if (nodeItem && nodeItem.node_name) {
      return `${nodeItem.node_name} (ID: ${nodeItem.node_id})`;
    } else {
      return String(nodeId);  // fallback to nodeId if no node_name is found
    }
  };


  useEffect(() => {
    const sortedData = deviceInfo.sort((a, b) => a.node_id - b.node_id);
    setInfo(sortedData);
  }, [deviceInfo]);

  return (
    <>
      <LineChart
        xAxis={[
          {data: node, scaleType: 'band', label: 'Node ID', valueFormatter: (nodeId, context) => valueFormatter(nodeId, context)},
        ]}
        yAxis={[
          { min: 0, label: 'Battery(%)' },
        ]}
        series={[
          { data: battery, label: 'Battery (%)', color : lineColor},
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
    smoke: item.status.includes('smoke') ? '#ff7b7b' : '#9dff80', 
    nodeId: item.node_id,
  }));

  const nodeIds = smokearr.map((item) => item.nodeId);
  const barColors = smokearr.map((item) => item.smoke);
  const yAxisData = Array(nodeIds.length).fill(1); 
  return (
    <BarChart
    style={{marginTop: "-20px"}}
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