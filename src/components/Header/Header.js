import React from "react";
import './Header.css';
import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CardWidget } from "../CardWidget/CardWidget";
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <AppBar position="static">
         <nav>
             <Link to='/'>
               <div className="container-logo">
                  <img src="../../assets/lino-logo.jpg" alt="logo"/>
               </div>
             </Link>
             <ul className="container-list">
                 <Link to='/'>
                    <li><Button variant="outlined">Home</Button></li>
                 </Link>
                 <Link to='/products'>
                    <li><Button variant="outlined">Products</Button></li>
                 </Link>
                 <Link to='/contact'>
                    <li><Button variant="outlined">Contact</Button></li>
                 </Link>
                 <Link to='/aboutus'>
                    <li><Button variant="outlined">About Us</Button></li>
                 </Link>
                 <Link to='/cart'>
                 <CardWidget>
                     <span>1</span>
                 </CardWidget>
                 </Link>
                 
                 
                 
                 
                 
                 
             </ul>
         </nav>
         </AppBar>
    )
}

export { Header };
