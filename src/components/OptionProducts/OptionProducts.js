import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const OptionProducts = ({showOption = true}) => {
    return (
        <>
        {
            showOption
            &&
            <div className='container-options'>
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
 
