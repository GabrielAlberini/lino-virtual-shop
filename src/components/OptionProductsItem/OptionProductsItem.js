import React from 'react'
import './OptionProductsItem.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

const OptionProductsItem = ({data}) => {
    console.log(data)
    const {title, body, className, button} = data;
    console.log({title, body, className, button})

    return (
        <>
            <div className={className}>
                <h3>{title}</h3>
                <p>{body}</p>
                <Link to="/congelados">
                    <Button className='button-option' variant="outlined" active={"generales"}>{button}</Button>
                </Link>
            </div>
        </>
    )
}

export { OptionProductsItem };