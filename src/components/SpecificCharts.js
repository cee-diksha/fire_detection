
import { LineChart } from "@mui/x-charts"

export const SpecificBattChart = ({batt, status}) => {
    console.log(batt, status, "battbatt")
    const time = [0, ...batt.map(item => item.time)]
    const battery = [0, ...batt.map(item => item.value)]
    const lineColor =  status === "yellow" ? "#FFC648" : "#05abf9"

 return(
        <LineChart
            xAxis={[{ data: time, scaleType: 'band'}]}
            series={[
                {
                data: battery,
                label: 'Battery',
                color: lineColor
                },
            ]}
            tooltip={{
            formatter: (params) => {
                const time = params.x;
                const batteryVal = params.y;
                return `Node ID: ${time}\nBattery: ${batteryVal}°C`;
            },
            }}
            width={500}
            height={300}
        />
    )
}

export const SpecificTempChart = ({temperature, status}) => {
    console.log(temperature, status, "speciifc temp chart")
    const time = [0, ...temperature.map(item => item.time)]
    const temp = [0, ...temperature.map(item => item.value)]
    const lineColor = status === "danger" ? "#F84848" : status === "orange" ? "#FF6B3B" : "#05abf9"
    return(
        <LineChart
            xAxis={[{ data: time, scaleType: 'band' }]}
            series={[
                {
                data: temp,
                label: 'Temperature',
                color : lineColor
                },
            ]}
            tooltip={{
            formatter: (params) => {
                const time = params.x;
                const tempValue = params.y;
                return `Node ID: ${time}\nTemperature: ${tempValue}°C`;
            },
            }}
            width={500}
            height={300}
      />
    )
}