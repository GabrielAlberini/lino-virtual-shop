import React from 'react'
import './ItemCart.css'

const ItemCart = ({data}) => {
    const {name, img, quantify, price} = data;

    return (
        <div className='cart-shop'>
            <div className='cont-img-shop'>
                <img src={`../../assets/${img}`} alt="imagen de producto" />
            </div>
            <div className='cont-txt'>
                <h5>{name}</h5>
                <p>{quantify}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export { ItemCart }