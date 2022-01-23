import React, {useContext} from "react";
import './Header.css';
import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CardWidget } from "../CardWidget/CardWidget";
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import { ThemeContext } from "../../context/themeContext"

const Header = () => {
   /*Para usar un contexto en un componente wrappeado en app necesitamos exportar primero
   el hooks: useContext, despues los estados declarados en Themecontex en objeto data y por ultimo 
   ThemeContext*/
   const {theme, changeTheme} = useContext(ThemeContext)
   
    return(
      <AppBar className={theme ? "light-mood" : "dark-mood"} position="static">
      <nav >
            <Link to='/'>
            <div className="container-logo">
               <img src="../../assets/lino-logo.jpg" alt="logo"/>
            </div>
            </Link>
            <ul className="container-list">
               <Link to='/'>
                  <li><Button variant="outlined">Inicio</Button></li>
               </Link>
               <Link to='/aboutus'>
                  <li><Button variant="outlined">¿Quiénes somos?</Button></li>
               </Link>
               <Link to='/contact'>
                  <li><Button variant="outlined">Contacto</Button></li>
               </Link>
               <CardWidget />
            </ul>
            <Switch  defaultChecked onClick={changeTheme} />
      </nav>
      </AppBar>
    )
}

export { Header };
