import { React } from "react";
import './Item.css'
import { Accountant } from "../Accountant/Accountant";
import { Link } from "react-router-dom";

const Item = ({data}) => {  
    const {id, name, img, description, price, moodOfSale } = data;
    
    return(
        <div className='item'>
            <div className='container-item-img'>
                <img className='item-img' src={`../../assets/${img}`} alt={name} />
            </div>
            <h3>{name}</h3>
            <span className="item-price">${price}</span>
            <span> x {moodOfSale}</span>
            <p>{description}</p>
            <Accountant data={data}/> 
            <Link to="/cart">
                <button className='btn'>Agregar al carrito</button>
            </Link>
            <Link to={`/products/category/${id}`}>
            <button className='btn btn-detail'>Ver producto</button>
            </Link>
        </div>
    )
}

export { Item } 