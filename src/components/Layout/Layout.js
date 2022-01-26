import React, {useContext} from "react";
import { Header, Footer } from '../../screens/componentsRoutes' 
import './Layout.css'
import { ThemeContext } from "../../context/themeContext";

const Layout = ({ children, showHeader = true, showFooter = true }) => {
    const {theme} = useContext(ThemeContext)
    
    return (
        <>
            { showHeader && <Header /> }
            <div className={`container-layout ${theme ?  "" : "container-layout-dark"}`}>
                { children }
            </div>
            { showFooter && <Footer /> } 
        </>
    )
}

export { Layout };