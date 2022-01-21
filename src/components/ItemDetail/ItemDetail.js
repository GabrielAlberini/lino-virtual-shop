import React, { useState, useContext, useEffect } from "react";
import './ItemDetail.css';
import { Accountant } from "../Accountant/Accountant";
import Arrow from '@mui/icons-material/ArrowForwardIos';
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({data}) => {
    const [itemCart, setItemCart] = useState({
        img : data.img,
        name : data.name,
        id: data.id,
        price: data.price,
        quantify : 0
    })
    
    const {products, addProductsInCart} = useContext(CartContext)
    
    console.log(products)

    const {id, 
        name, 
        description, 
        details, 
        img, 
        ingredientes, 
        price,
        moodOfSale} = data; 

    const onAdd = (value) => {
        itemCart.quantify = value;
    }

    const sendItems = () => {
        addProductsInCart(itemCart)
    }

    return(
        <div className="container-details">
            <div className="img-details">
                <img src={`../../assets/${img}`} alt="Imagen de producto"/>
            </div>
            <div className="details-txt">
                <h1>{name}</h1>
                <p>Se vende de a {moodOfSale}</p>
                <h2>Precio: ${price}</h2>
                <p className="sku-detail">SKU: {id}</p>
                <h3>{description}</h3>
                <p>{details}</p>
                <p><Arrow />{ingredientes}</p>
                <Accountant onClick={sendItems} onAdd={onAdd} data={data} showStock={false} showDetail={false}/>
                <button onClick={sendItems} className='btn'>Agregar al carrito</button>
            </div>
        </div>
    )  
}

export { ItemDetail };