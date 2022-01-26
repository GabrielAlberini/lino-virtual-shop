import React from 'react'
import './CartDescription.css'
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext";


const CartDescription = ({children}) => {
    const {totalPrice} = useContext(CartContext)

    return (
        <div className='cont-product'>
            <div className='cont-product-cart'>
                <p>Producto</p>
                <p>Cantidad</p>
                <p>Precio</p>
            </div>
            {children}
            <div className='cont-price-cart'>
                <p>TOTAL:</p>
                <p>${totalPrice}</p>
            </div>
        </div>
    )
}

export { CartDescription }