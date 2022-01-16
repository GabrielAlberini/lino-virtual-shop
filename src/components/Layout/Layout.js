import React from "react";
import { Header, Footer } from '../../screens/index' 
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