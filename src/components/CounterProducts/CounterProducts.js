import React, { useState, useContext } from 'react'
import './CounterProducts.css'
import { Accountant } from '../Accountant/Accountant'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CounterProducts = ({data, showDetail = true}) => {

    const [itemCart] = useState({
        img : data.img,
        name : data.name,
        id: data.id,
        price: data.price,
        quantify : 0
    })

        const {addProductsInCart} = useContext(CartContext)

        const onAdd = (value) => {
            itemCart.quantify = value;
        }

    
        const sendItems = () => {
            addProductsInCart(itemCart)
        }

    return (
        <>
            <Accountant onClick={sendItems} onAdd={onAdd} data={data} showStock={true} showDetail={false}/>
            <Link to={`/products/${data.category}/${data.id}`}>
                {showDetail && <button className='btn btn-detail'>Ver producto</button>}
            </Link>
            <button onClick={sendItems} className='btn'>Agregar al carrito</button>
        </>
    )
}

export { CounterProducts }