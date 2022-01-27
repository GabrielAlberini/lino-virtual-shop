import { createContext, useState } from "react";

const CountContext = createContext();
 
const CountProvider = ({children}) => {
    const [key, setKey] = useState(false);
    
    const changeSwitch = () => {
        setKey(true)
    }

    const changeSwitchCart = () => {
        setKey(!key)
    }

    const data = {
        key,
        changeSwitch,
        changeSwitchCart
    } 

    return (
        <CountContext.Provider value={data}>
            {children}
        </CountContext.Provider>
    )
}

export { CountContext, CountProvider };