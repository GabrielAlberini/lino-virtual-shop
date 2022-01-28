import React from 'react'
import './ItemCart.css'

const ItemCart = ({data}) => {
    const {name, img, quantify, price} = data;
    
    return ( 
        <div className='cart-shop'>
            <div className='cont-img-shop'>
                <img src={img} alt={img} />
            </div>
            <div className='cont-txt'>
                <h5>{name}</h5>
                <p>Cant: {quantify}</p>
                <p>${price}</p>
                <button className='deleteItem'>X</button>
            </div>
        </div>
    )
}

export { ItemCart };