import React, {useState, useContext} from "react";
import './Header.css';
import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CardWidget } from "../CardWidget/CardWidget";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../context/themeContext"
import MenuIcon from '@mui/icons-material/Menu';
import { MaterialUISwitch } from '../DarkMood/DarkMood'

const Header = () => {
   /*Para usar un contexto en un componente wrappeado en app necesitamos exportar primero
   el hooks: useContext, despues los estados declarados en Themecontex en objeto data y por ultimo 
   ThemeContext*/
   const {theme, changeTheme} = useContext(ThemeContext)
   const [menuHam, setHam] = useState(false)

   const handleState = () => {
      setHam(!menuHam)
   }
   
    return(
      <AppBar className={theme ? "light-mood" : "dark-mood"} position="static">
      <nav>
         <Button className="menu" onClick={handleState} >
            <MenuIcon/>
         </Button>
         <Link to='/'>
         <div className="container-logo">
            <img src="https://i.ibb.co/SJZxvT0/lino-logo.jpg" alt="logo"/>
         </div>
         </Link>
         <ul className={`container-list ${menuHam ? 'menuHam' : ''}`}>
            <Link to='/'>
               <li><Button variant="outlined">Inicio</Button></li>
            </Link>
            <Link to='/aboutus'>
               <li><Button variant="outlined">¿Quiénes somos?</Button></li>
            </Link>
            <Link to='/contact'>
               <li><Button variant="outlined">Contacto</Button></li>
            </Link>
            <div className="list-control">
               
            <MaterialUISwitch  color="default" onClick={changeTheme} />
            </div>
         </ul>
         <CardWidget />
      </nav>
      </AppBar>
    )
}

export { Header };
