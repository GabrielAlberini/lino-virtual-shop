import { React, useState, useContext } from "react";
import './Item.css'
import { CounterProducts } from "../CounterProducts/CounterProducts";
import { ThemeContext } from "../../context/themeContext"

const Item = ({data}) => { 
    const {name, img, description, price, moodOfSale, stock } = data;
    const [stockCurrent, setStockCurrent] = useState(stock)
    const {theme} = useContext(ThemeContext)

    const addStock = (value) => {
        setStockCurrent(stockCurrent - value)
    }

    const lessStock = (value) => {
        setStockCurrent(stockCurrent + value)
    }

    return(
        <div className={`item ${theme ?  "" : "item-dark"}`}>
            <div className='container-item-img'>
                <img className='item-img' src={img} alt={name} />
            </div>
            <h3>{name}</h3>
            <span className="item-price">${price}</span>
            <span className='item-stock'>{stockCurrent === 0 ? "Sin stock" : "Stock: " + stockCurrent}</span>
            <span> x {moodOfSale}</span>
            <p>{description}</p>
            <CounterProducts data={data} addStock={addStock} lessStock={lessStock}/>
        </div>
    )
}

export { Item }; 