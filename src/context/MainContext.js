import { createContext, useState } from "react";
import { info, deckInfo} from "../assets/info";

const MainContext = createContext()

const MainContextProvider = (props) => {
    const [deviceInfo, setDeviceInfo] = useState(info)
    const [deckData, setDeckData] = useState(deckInfo)
    const [isLogin, setIsLogin] = useState(false)

    return (
        <MainContext.Provider
        value={{
            deviceInfo,
            setDeviceInfo,
            deckData,
            setDeckData,
            isLogin,
            setIsLogin
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export {MainContext, MainContextProvider}