import { createContext, useState } from "react";
import { info } from "../assets/info";

const MainContext = createContext()

const MainContextProvider = (props) => {
    const [deviceInfo, setDeviceInfo] = useState(info)
    return (
        <MainContext.Provider
        value={{
            deviceInfo,
            setDeviceInfo
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export {MainContext, MainContextProvider}