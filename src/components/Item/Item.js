import { React } from "react";
import './Item.css'
import { CounterProducts } from "../CounterProducts/CounterProducts";

const Item = ({data}) => {  
    const {name, img, description, price, moodOfSale } = data;
    
    return(
        <div className='item'>
            <div className='container-item-img'>
                <img className='item-img' src={`../../assets/${img}`} alt={name} />
            </div>
            <h3>{name}</h3>
            <span className="item-price">${price}</span>
            <span> x {moodOfSale}</span>
            <p>{description}</p>
            <CounterProducts data={data}/>
        </div>
    )
}

export { Item }; 