import React, { useContext, useEffect, useState } from 'react';
import Switch from '@mui/material/Switch'; 
import './comp-styles.css';
import ConfimationModal from './ConfimationModal';
import { MainContext } from '../context/MainContext';

const SettingsTable = () => {
    const [showModal, setShowModal] = useState(false);
    const { setDeviceInfo, deviceInfo } = useContext(MainContext);
    const [data, setData] = useState(deviceInfo);

    const handleSwitchChange = (node_id, field) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.node_id === node_id ? { ...item, [field]: !item[field] } : item
            )
        );
    };

    const handleLocationChange = (node_id, location) => {
        setData((prev) => 
            prev.map(item => item.node_id === node_id ? { ...item, location, node_name: location } : item)
        );
    };

    const handleTempChange = (node_id, temp) => {
        setData((prev) => 
            prev.map(item => item.node_id === node_id ? { ...item, temp: temp } : item)
        );
    };

    const handleDeleteRow = (node_id) => {
        const updated =  data.map(item =>
            item.node_id === node_id ? { ...item, isDeleted: !item.isDeleted } : item
        )
        setData(prevData =>
            prevData.map(item =>
                item.node_id === node_id ? { ...item, isDeleted: !item.isDeleted } : item
            )
        );
        setDeviceInfo(updated)
    };

    const saveChanges = () => {
        console.log(data, "checking dataa");
        setDeviceInfo(data);
    };

    useEffect(() => {
        setData(deviceInfo)
    }, [deviceInfo])

    return (
        <div className='settings-table-resetbtn-wrapper'>
            <div id="btn-wrapper-table">
                <button id="save-changes" onClick={saveChanges}>Save Changes</button>
                <button onClick={() => setShowModal(true)}>Reset Database</button>
            </div>
            {showModal && <ConfimationModal open={true} handleClose={setShowModal} />}
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
                            <th>Deck No.</th>
                            <th>Compartment No.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={item.node_id} style={{ opacity: item.isDeleted ? 0.5 : 1 }}>
                            <td>{index + 1}</td>
                            <td>{item.node_id}</td>
                            <td style={{ textTransform: "capitalize" }}>{item.node_type}</td>
                            <td>{item.axis}</td>
                            <td>
                                <input
                                    type="text"
                                    style={{ width: "90%" }}
                                    defaultValue={item.node_name}
                                    onChange={(e) => handleLocationChange(item.node_id, e.target.value)}
                                    disabled={item.isDeleted} // Disable input if greyed out
                                />
                            </td>
                            <td>
                                {item.temp === null ? "NA" :   <>
                                    <input
                                        type="number"
                                        id="tempInput"
                                        placeholder="Enter a number"
                                        value={item.temp}
                                        style={{ width: "30%" }}
                                        onChange={(e) => handleTempChange(item.node_id, e.target.value)}
                                        disabled={item.isDeleted} // Disable input if greyed out
                                    />
                                    <span> °C</span> {/* Place °C in a span */}
                                </>}
                            </td>
                            <td>
                                {item.smokeSensor !== null ? (
                                    <Switch
                                        sx={{
                                            '& .MuiSwitch-thumb': { backgroundColor: "#3F3F3F" },
                                            '& .MuiSwitch-track': { backgroundColor: "#3F3F3F" }
                                        }}
                                        checked={item.smokeSensor}
                                        onChange={() => handleSwitchChange(item.node_id, 'smokeSensor')}
                                        disabled={item.isDeleted || item.node_type === 'repeater' || item.node_type === 'trigger unit'}
                                    />
                                ) : (
                                    "NA" // Display "NA" if smokeSensor is null
                                )}
                            </td>
                            <td>
                                {item.triggeringDevice !== null ? (
                                    <Switch
                                        sx={{
                                            '& .MuiSwitch-thumb': { backgroundColor: "#3F3F3F" },
                                            '& .MuiSwitch-track': { backgroundColor: "#3F3F3F" }
                                        }}
                                        checked={item.triggeringDevice}
                                        onChange={() => handleSwitchChange(item.node_id, 'triggeringDevice')}
                                        disabled={item.isDeleted || item.node_type === 'repeater' || item.node_type === 'trigger unit'}
                                    />
                                ) : (
                                    "NA" // Display "NA" if triggeringDevice is null
                                )}
                            </td>
                            <td>
                                <input
                                        type="number"
                                        style={{ width: "40%" }}
                                        defaultValue={item.deck}
                                        onChange={(e) => handleLocationChange(item.node_id, e.target.value)}
                                        disabled={item.isDeleted} // Disable input if greyed out
                                    />
                            </td>
                            <td>
                                <input
                                        type="number"
                                        style={{ width: "40%" }}
                                        defaultValue={item.compartment}
                                        onChange={(e) => handleLocationChange(item.node_id, e.target.value)}
                                        disabled={item.isDeleted} // Disable input if greyed out
                                    />
                            </td>
                            <td>
                                <button onClick={() => handleDeleteRow(item.node_id)}>
                                    {item.isDeleted ? "Undo" : "Delete"}
                                </button>
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
