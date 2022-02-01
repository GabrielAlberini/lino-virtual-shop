import React from 'react'
import './OptionProductsItem.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

const OptionProductsItem = ({data}) => {
    const {title, body, className, button, link} = data;
    return (
        <>
            <div className={className}>
                <h3>{title}</h3>
                <p>{body}</p>
                <Link to={`/products/${link}`}>
                    <Button className='button-option' variant="outlined" active={"generales"}>{button}</Button>
                </Link>
            </div>
        </>
    )
}

export { OptionProductsItem };