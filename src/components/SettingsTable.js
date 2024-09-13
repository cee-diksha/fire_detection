import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch'; 
import './comp-styles.css';

const SettingsTable = () => {
    const [data, setData] = useState([
        { id: 1, nodeId: 'A001', nodeType: 'sensor', axis: 'X-Y-Z', location: 'Room 101', tempSetpoint: 50, smokeSensor: true, triggeringDevice: false },
        { id: 2, nodeId: 'A002', nodeType: 'repeater', axis: 'X-Y-Z', location: 'Room 102', tempSetpoint: 50, smokeSensor: false, triggeringDevice: true },
        { id: 3, nodeId: 'A003', nodeType: 'trigger unit', axis: 'X-Y-Z', location: 'Room 103', tempSetpoint: 50, smokeSensor: true, triggeringDevice: true },
        { id: 4, nodeId: 'A004', nodeType: 'sensor', axis: 'X-Y-Z', location: 'Room 104', tempSetpoint: 50, smokeSensor: false, triggeringDevice: false },
        { id: 5, nodeId: 'A001', nodeType: 'sensor', axis: 'X-Y-Z', location: 'Room 101', tempSetpoint: 50, smokeSensor: true, triggeringDevice: false },
        { id: 6, nodeId: 'A002', nodeType: 'repeater', axis: 'X-Y-Z', location: 'Room 102', tempSetpoint: 50, smokeSensor: false, triggeringDevice: true },
        { id: 7, nodeId: 'A003', nodeType: 'trigger unit', axis: 'X-Y-Z', location: 'Room 103', tempSetpoint: 50, smokeSensor: true, triggeringDevice: true },
        { id: 8, nodeId: 'A004', nodeType: 'sensor', axis: 'X-Y-Z', location: 'Room 104', tempSetpoint: 50, smokeSensor: false, triggeringDevice: false },
    ]);

    const handleSwitchChange = (id, field) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, [field]: !item[field] } : item
            )
        );
    };

    const handleLoctionChange= (id, location) => {
        setData((prev) => 
            prev.map(item => item.id === id ? {...item, "location": location} : item)
        )
    }

    const handleTempChange= (id, temp) => {
        setData((prev) => 
            prev.map(item => item.id === id ? {...item, "tempSetpoint": temp} : item)
        )
    }

    useEffect(() => {
        console.log(data, "checking dataa")
    }, [data])

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Node ID</th>
                        <th>Node Type</th>
                        <th>3 Axis</th>
                        <th>Location</th>
                        <th>Temp Setpoint</th>
                        <th>Smoke Sensor</th>
                        <th>Triggering Device</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.nodeId}</td>
                            <td style={{textTransform: "capitalize"}}>{item.nodeType}</td>
                            <td>{item.axis}</td>
                            <td><input type="text" style={{width: "90%"}} value={item.location} onChange={(e) => handleLoctionChange(item.id, e.target.value)}/></td>
                            <td><input type="number" id="tempInput" placeholder="Enter a number" value={item.tempSetpoint} style={{width: "30%"}} onChange={(e) => handleTempChange(item.id, e.target.value)}/> °C</td>
                            <td>
                                <Switch
                                    sx={{
                                        '& .MuiSwitch-thumb': {
                                          backgroundColor: "#433D8B", 
                                        },
                                        '& .MuiSwitch-track': {
                                          backgroundColor: "#433D8B",
                                        },
                                      }}
                                    checked={item.smokeSensor}
                                    onChange={() => handleSwitchChange(item.id, 'smokeSensor')}
                                    disabled={item.nodeType === 'repeater' || item.nodeType === 'trigger unit'}
                                />
                            </td>
                            <td>
                                <Switch
                                    sx={{
                                        '& .MuiSwitch-thumb': {
                                          backgroundColor: "#433D8B", 
                                        },
                                        '& .MuiSwitch-track': {
                                          backgroundColor: "#433D8B",
                                        },
                                      }}
                                    checked={item.triggeringDevice}
                                    onChange={() => handleSwitchChange(item.id, 'triggeringDevice')}
                                    disabled={item.nodeType === 'repeater' || item.nodeType === 'trigger unit'}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SettingsTable;
