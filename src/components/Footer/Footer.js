import React from "react";
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p>Seguinos en instagram!</p>
                <a href="https://www.instagram.com/linocomidas.santafe/" rel='noreferrer' target="_blank" >
                    <InstagramIcon />
                </a>
            </div>
            <div>
                <h5>Páginas</h5>
                <Link to='/'>
                    <p>Home</p>
                </Link>
                <Link to='/aboutus'>
                    <p>¿Quienes somos?</p>
                </Link>
                <Link to='/contact'>
                    <p>Contacto</p>
                </Link>
            </div>
            <div>
                <p>Lino | Plant Based</p>
            </div>
            <div>
                <p>Powered by <a href="https://www.linkedin.com/in/gabriel-alberini/" rel="noreferrer" target="_blank"> Gabriel Alberini</a></p>
            </div>
        </div>
    )
}

export { Footer };