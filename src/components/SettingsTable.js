import React, { useState } from 'react';
import Switch from '@mui/material/Switch'; 
import './comp-styles.css';

const SettingsTable = () => {
    const [data, setData] = useState([
        { id: 1, nodeId: 'A001', nodeType: 'sensor', axis: 'X-Y-Z', location: 'Room 101', tempSetpoint: '22°C', smokeSensor: true, triggeringDevice: false },
        { id: 2, nodeId: 'A002', nodeType: 'repeater', axis: 'X-Y-Z', location: 'Room 102', tempSetpoint: '24°C', smokeSensor: false, triggeringDevice: true },
        { id: 3, nodeId: 'A003', nodeType: 'trigger unit', axis: 'X-Y-Z', location: 'Room 103', tempSetpoint: '23°C', smokeSensor: true, triggeringDevice: true },
        { id: 4, nodeId: 'A004', nodeType: 'sensor', axis: 'X-Y-Z', location: 'Room 104', tempSetpoint: '21°C', smokeSensor: false, triggeringDevice: false },
    ]);

    const handleSwitchChange = (id, field) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, [field]: !item[field] } : item
            )
        );
    };

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
                            <td>{item.nodeType}</td>
                            <td>{item.axis}</td>
                            <td>{item.location}</td>
                            <td>{item.tempSetpoint}</td>
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
