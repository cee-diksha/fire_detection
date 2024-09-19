import { createContext, useState } from "react";
import { info } from "../assets/info";

const MainContext = createContext()

const MainContextProvider = (props) => {
    const [deviceInfo, setDeviceInfo] = useState(info)
    const [isLogin, setIsLogin] = useState(false)

    return (
        <MainContext.Provider
        value={{
            deviceInfo,
            setDeviceInfo,
            isLogin,
            setIsLogin
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export {MainContext, MainContextProvider}