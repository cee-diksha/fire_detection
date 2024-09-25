
import { LineChart } from "@mui/x-charts"

export const SpecificBattChart = ({batt}) => {
    console.log(batt, "battbatt")
    const time = [0, ...batt.map(item => item.time)]
    const battery = [0, ...batt.map(item => item.value)]
    const lineColor = "#05abf9"

 return(
        <LineChart
            xAxis={[{ data: time }]}
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
    const lineColor = status === "danger" ? "#F84848" : status === "yellow" ? "#FFC648" : status === "orange" ? "#FF6B3B" : "#05abf9"
    return(
        <LineChart
            xAxis={[{ data: time }]}
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