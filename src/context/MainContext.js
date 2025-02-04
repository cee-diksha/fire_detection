import { createContext, useEffect, useState } from "react";
import { info, deckInfo} from "../assets/info";
import connectWebSocket from "../socket/socket";

const MainContext = createContext()

const MainContextProvider = (props) => {
    const [messages, setMessages] = useState([]);

    let socket;

    useEffect(() => {
        socket = connectWebSocket(); // Initialize WebSocket

        socket.onmessage = (event) => {
            console.log("Received message in MainContext:", event.data);
            setMessages((prev) => [...prev, event.data]);
        };

        return () => {
            socket.close();
        };
    }, []);

    const [deviceInfo, setDeviceInfo] = useState(info)
    const [deckData, setDeckData] = useState(deckInfo)
    const [isLogin, setIsLogin] = useState(false)
    const [filteredDeckInfo, setfilteredDeckInfo] = useState(null)
    const [deletedDevices, setDeletedDevices] = useState([])
    const [suppressorStatus, setSuppressorStatus] = useState(false)
    const [activeSuppressors, setActiveSuppressors] = useState([])
    const [targetNode, setTargetNode] = useState([])
    const [isActivated, setIsActivated] = useState([])
    const [samplingTime, setSamplingTime] = useState(null)
    const [theme, setTheme] = useState("dark")

    useEffect(() => {

        const deletedDevice = 102
        const data = [...deletedDevices, deletedDevice]
        setDeletedDevices(data)
        const filteredDevices = deviceInfo.filter(item => data.some(value => item.connectedTo === value))
        filteredDevices.map(item => item.status = ["not responding"])
        const updatedDeviceInfo = deviceInfo.map(item => {
            const matchedDevice = filteredDevices.find(device => device.node_id === item.node_id); 
            return matchedDevice ? matchedDevice : item;
          });
          console.log(filteredDevices, "filtered devices", data, updatedDeviceInfo)
    }, [])

    return (
        <MainContext.Provider
        value={{
            deviceInfo,
            setDeviceInfo,
            deckData,
            setDeckData,
            isLogin,
            setIsLogin,
            filteredDeckInfo,
            setfilteredDeckInfo,
            deletedDevices,
            setDeletedDevices,
            suppressorStatus,
            setSuppressorStatus,
            activeSuppressors,
            setActiveSuppressors,
            targetNode,
            setTargetNode,
            isActivated,
            setIsActivated,
            samplingTime,
            setSamplingTime,
            theme,
            setTheme
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export {MainContext, MainContextProvider}