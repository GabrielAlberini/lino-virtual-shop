import { createContext, useState } from "react";

const CountContext = createContext();
 
const CountProvider = ({children}) => {
    const [key, setKey] = useState(false);
    const [stateLouder, setStateLouder] = useState(true);
    
    const changeSwitch = () => {
        setKey(true)
    }

    const changeSwitchCart = () => {
        setKey(!key)
    }

    const stateLouderState = () => {
        setStateLouder(!stateLouder)
    }

    const data = {
        key,
        changeSwitch,
        changeSwitchCart,
        stateLouderState,
        stateLouder
    } 

    return (
        <CountContext.Provider value={data}>
            {children}
        </CountContext.Provider>
    )
}

export { CountContext, CountProvider };