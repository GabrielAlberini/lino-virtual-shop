import React, { useState, useContext } from 'react'
import './CounterProducts.css'
import { Accountant } from '../Accountant/Accountant'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { CountContext } from '../../context/countContext';

const CounterProducts = ({data, showDetail = true, addStock, lessStock}) => {

    const {category, id} = data;
    const [itemCart] = useState({
        img : data.img,
        name : data.name,
        id: data.id,
        price: data.price,
        quantify : 0
    });

    const {products, addProductsInCart} = useContext(CartContext)
    const {changeSwitch} = useContext(CountContext)
    
    const onAdd = (value) => {
        itemCart.quantify = value;
    }
    
    console.log("products desde counterproducts", products)

    const sendItems = () => {
        if(itemCart.quantify > 0) {
            addProductsInCart(itemCart)
            changeSwitch(true)     
        } 
    }

    return (
        <>
            <Accountant onClick={sendItems} onAdd={onAdd} data={data} addStock={addStock} showStock={true} showDetail={false} lessStock={lessStock}/>
            <Link to={`/products/${category}/${id}`}>
                {showDetail && <button className='btn btn-detail'>Ver producto</button>}
            </Link>
            <button onClick={sendItems} className='btn'>Agregar al carrito</button>
        </>
    )
}

export { CounterProducts }