import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './OptionProducts.css'
import { ThemeContext } from "../../context/themeContext"


const OptionProducts = ({showOption = true}) => {
    const {theme} = useContext(ThemeContext)

    return (
        <>
        {
            showOption
            &&
            <div className={`container-options ${theme ?  "" : "container-options-dark"}`}>
                <div className="select-frozen">
                <Link to="/congelados">
                    <Button className='button-option' variant="outlined" active={"generales"}>Congelados</Button>
                </Link>
                </div>
                <div className="select-baked">
                <Link to="/panificados">
                    <Button className='button-option' variant="outlined" active={"generales"}>Panificados</Button>
                </Link>
                </div>
            </div>
        }
        </>
    )
}

export { OptionProducts }
 
