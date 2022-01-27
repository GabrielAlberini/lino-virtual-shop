import { React, useContext } from "react";
import './Item.css'
import { CounterProducts } from "../CounterProducts/CounterProducts";
import { ThemeContext } from "../../context/themeContext"


const Item = ({data}) => { 
    const {name, img, description, price, moodOfSale } = data;
    const {theme} = useContext(ThemeContext)

    
    return(
        <div className={`item ${theme ?  "" : "item-dark"}`}>
            <div className='container-item-img'>
                <img className='item-img' src={img} alt={name} />
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