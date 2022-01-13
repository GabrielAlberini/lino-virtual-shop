import React from "react";
import './NavBar.css';
import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";

export const NavBar = () => {
    return(
        <AppBar position="static">
         <nav>
             <div className="container-logo">
                 <img src="../../assets/lino-logo.jpg" alt="logo"/>
             </div>
             <ul className="container-list">
                 <li><Button variant="outlined">Home</Button></li>
                 <li><Button variant="outlined">Products</Button></li>
                 <li><Button variant="outlined">Contact</Button></li>
                 <li><Button variant="outlined">About Us</Button></li>
             </ul>
         </nav>
         </AppBar>
    )
}

