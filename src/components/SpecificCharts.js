
import { LineChart } from "@mui/x-charts"

export const SpecificBattChart = ({batt, status}) => {
    console.log(batt, status, "battbatt")
    const time = batt.map(item => item.time)
    const battery = batt.map(item => item.value)
    const lineColor =  status === "yellow" ? "#FFC648" : "#05abf9"

 return(
        <LineChart
            xAxis={[{ data: time, scaleType: 'band', label: "Time(hrs)"}]}
            yAxis={[{
                min: 0,
                label: 'Battery(%)',
            }]}
            series={[
                {
                data: battery,
                label: 'Battery(%)',
                color: lineColor
                },
            ]}
            tooltip={{
            formatter: (params) => {
                const time = params.x;
                const batteryVal = params.y;
                return `Time(hrs): ${time}\nBattery: ${batteryVal}°C`;
            },
            }}
            width={500}
            height={200}
        />
    )
}

export const SpecificTempChart = ({temperature, status}) => {
    console.log(temperature, status, "speciifc temp chart")
    const time = temperature.map(item => item.time)
    const temp = temperature.map(item => item.value)
    const lineColor = status === "danger" ? "#F84848" : status === "orange" ? "#FF6B3B" : "#05abf9"
    return(
        <LineChart
            xAxis={[{ data: time, scaleType: 'band', label: "Time(hrs)" }]}
            yAxis={[{
                min: 0, // Ensure y-axis starts from 0
                label: 'Temperature(°C)',
            }]}
            series={[
                {
                data: temp,
                label: 'Temperature(°C)',
                color : lineColor
                },
            ]}
            tooltip={{
            formatter: (params) => {
                const time = params.x;
                const tempValue = params.y;
                return `Time(hrs): ${time}\nTemperature: ${tempValue}°C`;
            },
            }}
            width={500}
            height={200}
      />
    )
}