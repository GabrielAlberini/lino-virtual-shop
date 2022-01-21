import React from "react";
import { Header, Footer } from '../../screens/componentsRoutes' 
import './Layout.css'

const Layout = ({ children, showHeader = true, showFooter = true }) => {
    
    return (
        <>
            { showHeader && <Header /> }
            <div className="container-layout">
                { children }
            </div>
            { showFooter && <Footer /> } 
        </>
    )
}

export { Layout };