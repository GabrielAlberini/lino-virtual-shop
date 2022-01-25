import React from "react";
import './ItemDetail.css';
// import { Accountant } from "../Accountant/Accountant";
import Arrow from '@mui/icons-material/ArrowForwardIos';
// import { CartContext } from "../../context/cartContext";
import { CounterProducts } from "../CounterProducts/CounterProducts";

const ItemDetail = ({data}) => {
    const {id, 
        name, 
        description,  
        details, 
        img, 
        ingredientes, 
        price,
        moodOfSale} = data; 

    return(
        <div className="container-details">
            <div className="img-details">
                <img src={`../../assets/${img}`} alt="Imagen de producto"/>
            </div>
            <div className="details-txt">
                <h1>{name}</h1>
                <p>Se vende de a {moodOfSale}</p>
                <h2>Precio: ${price}</h2>
                <h3>{description}</h3>
                <p>{details}</p>
                <p><Arrow />{ingredientes}</p>
                <CounterProducts showDetail={false} data={data}/>
            </div>
        </div>
    )  
}

export { ItemDetail };