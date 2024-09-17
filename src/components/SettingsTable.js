import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch'; 
import './comp-styles.css';
import ConfimationModal from './ConfimationModal';
import { info } from '../assets/info';

const SettingsTable = () => {
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState(info);

    const handleSwitchChange = (node_id, field) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.node_id === node_id ? { ...item, [field]: !item[field] } : item
            )
        );
    };

    const handleLoctionChange= (node_id, location) => {
        setData((prev) => 
            prev.map(item => item.node_id === node_id ? {...item, "location": location} : item)
        )
    }

    const handleTempChange= (node_id, temp) => {
        setData((prev) => 
            prev.map(item => item.node_id === node_id ? {...item, "tempSetpoint": temp} : item)
        )
    }

    useEffect(() => {
        console.log(data, "checking dataa")
    }, [data])

    return (
        <div className='settings-table-resetbtn-wrapper'>
            <button onClick={() => setShowModal(true)}>Reset Database</button>
            {showModal && <ConfimationModal open={true} handleClose={setShowModal}/>}
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
                        <tr key={item.data.node_id}>
                            <td>{index + 1}</td>
                            <td>{item.data.node_id}</td>
                            <td style={{textTransform: "capitalize"}}>{item.data.node_type}</td>
                            <td>{item.data.axis}</td>
                            <td><input type="text" style={{width: "90%"}} value={item.data.node_name} onChange={(e) => handleLoctionChange(item.data.node_id, e.target.value)}/></td>
                            <td><input type="number" id="tempInput" placeholder="Enter a number" value={item.data.tempSetpoint} style={{width: "30%"}} onChange={(e) => handleTempChange(item.data.node_id, e.target.value)}/> °C</td>
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
                                    checked={item.data.smokeSensor}
                                    onChange={() => handleSwitchChange(item.data.node_id, 'smokeSensor')}
                                    disabled={item.data.node_type === 'repeater' || item.data.node_type === 'trigger unit'}
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
                                    checked={item.data.triggeringDevice}
                                    onChange={() => handleSwitchChange(item.data.node_id, 'triggeringDevice')}
                                    disabled={item.data.node_type === 'repeater' || item.data.node_type === 'trigger unit'}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default SettingsTable;
