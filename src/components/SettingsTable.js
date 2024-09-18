import React, { useContext, useEffect, useState } from 'react';
import Switch from '@mui/material/Switch'; 
import './comp-styles.css';
import ConfimationModal from './ConfimationModal';
import { info } from '../assets/info';
import { MainContext } from '../context/MainContext';

const SettingsTable = () => {
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState(info);
    const {setDeviceInfo} = useContext(MainContext)

    const handleSwitchChange = (node_id, field) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.node_id === node_id ? { ...item, [field]: !item[field] } : item
            )
        );
    };

    const handleLocationChange= (node_id, location) => {
        console.log(node_id, location, "cheking loc node_id", data)
        console.log(data.map(item => item.node_id === node_id), 'loc check')

        setData((prev) => 
            prev.map(item => item.node_id === node_id ? {...item, "location": location, "node_name": location} : item)
        )
    }

    const handleTempChange= (node_id, temp) => {
        setData((prev) => 
            prev.map(item => item.node_id === node_id ? {...item, "tempSetpoint": temp} : item)
        )
    }

    const saveChanges = () => {
        console.log(data, "checking dataa")
        setDeviceInfo(data)
    }

    return (
        <div className='settings-table-resetbtn-wrapper'>
            <div id="btn-wrapper-table">
            <button id="save-changes" onClick={saveChanges}>Save Changes</button>
            <button onClick={() => setShowModal(true)}>Reset Database</button>
            </div>
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
                        <tr key={item.node_id}>
                            <td>{index + 1}</td>
                            <td>{item.node_id}</td>
                            <td style={{textTransform: "capitalize"}}>{item.node_type}</td>
                            <td>{item.axis}</td>
                            <td><input type="text" style={{width: "90%"}} defaultValue={item.node_name} onChange={(e) => handleLocationChange(item.node_id, e.target.value)}/></td>
                            <td><input type="number" id="tempInput" placeholder="Enter a number" value={item.tempSetpoint} style={{width: "30%"}} onChange={(e) => handleTempChange(item.node_id, e.target.value)}/> °C</td>
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
                                    onChange={() => handleSwitchChange(item.node_id, 'smokeSensor')}
                                    disabled={item.node_type === 'repeater' || item.node_type === 'trigger unit'}
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
                                    onChange={() => handleSwitchChange(item.node_id, 'triggeringDevice')}
                                    disabled={item.node_type === 'repeater' || item.node_type === 'trigger unit'}
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
