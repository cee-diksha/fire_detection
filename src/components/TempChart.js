import React, { useContext, useEffect, useState } from 'react'
import { BarChart, LineChart } from "@mui/x-charts";
import { MainContext } from '../context/MainContext';
import "../styles.css"

export const TempChart = () => {
  const { deviceInfo } = useContext(MainContext);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(deviceInfo.filter(item => item.node_type === "sensor"));
  }, [deviceInfo]);

  // Sort data by node_id
  const sortedInfo = [...info].sort((a, b) => a.node_id - b.node_id);

  const temp = sortedInfo.map(item => item.temp);
  const node = sortedInfo.map(item => item.node_id);

  const valueFormatter = (nodeId, context) => {
    const nodeItem = sortedInfo.find((item) => item.node_id === nodeId);
    if (context.location === "tick") {
      return String(nodeId);  // Ensure nodeId is always a string
    } else if (nodeItem && nodeItem.node_name) {
      return `${nodeItem.node_name} (ID: ${nodeItem.node_id})`;
    } else {
      return String(nodeId);  // Fallback to nodeId if no node_name is found
    }
  };

  return (
    <>
      <LineChart
        xAxis={[{ 
          data: node,  
          scaleType: 'band', 
          label: "Node ID",  
          valueFormatter: (nodeId, context) => valueFormatter(nodeId, context),
        }]}
        yAxis={[{
          min: 0,
          label: 'Temperature(°C)',
          colorMap: {
            type: 'piecewise',
            thresholds: [40, 60],
            colors: ['red', 'orange', 'red'],
          },
        }]}
        series={[
            {
              data: temp,
              label: 'Temperature(°C)',
              color: 'transparent',
            },
        ]}
        width={500}
        height={180}
      />
    </>
  );
};


export const BatteryChart = () => {
  const { deviceInfo } = useContext(MainContext);
  const [filteredInfo, setFilteredInfo] = useState([]);

  useEffect(() => {
    
    const sortedData = deviceInfo
      .filter((item) => item.battery_percentage < 100)
      .sort((a, b) => a.node_id - b.node_id);

    setFilteredInfo(sortedData);
  }, [deviceInfo]);

  const battery = filteredInfo.map((item) => item.battery_percentage);
  const node = filteredInfo.map((item) => item.node_id);
  return (
    <>
      <LineChart
        xAxis={[{
          data: node,
          scaleType: "point",
          label: "Node ID",
        }]}
        yAxis={[{
          min: 0,
          max: 100,
          label: "Battery (%)",
          colorMap: {
            type: 'piecewise',
            thresholds: [20, 40],
            colors: ['red', 'orange','green'],
          },
        }]}
        series={[{
          data: battery,
          label: "Battery (%)",
          color: "transparent",
        }]}
        width={500}
        height={200}
      >
      </LineChart>
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
    smoke: item.status.includes('smoke') ? '#ff7b7b' : '#b7ff86', 
    nodeId: item.node_id,
  }));

  const nodeIds = smokearr.map((item) => item.nodeId);
  const barColors = smokearr.map((item) => item.smoke);
  const yAxisData = Array(nodeIds.length).fill(1); 

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
  
  return (
    <BarChart
    style={{marginTop: "20px"}}
      xAxis={[{ scaleType: 'band', data: nodeIds, label: 'Node ID', colorMap: {
        type: "ordinal",
        values: nodeIds,
        colors: barColors,
      },  valueFormatter: (nodeId, context) => valueFormatter(nodeId, context)}]} 
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