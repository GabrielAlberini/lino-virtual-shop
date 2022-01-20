import { React } from "react";
import './Item.css'
import { Accountant } from "../Accountant/Accountant";

const Item = ({data}) => {  
    
    const { name, img, description } = data;

    const onAdd = (value, num) => {
        let total = value + num;
        return console.log(total)
    }
    const onLess = (value, num) => {
        let total = value - num;
        return console.log(total)
    }
    
    return(
        <div className='item'>
            <div className='container-item-img'>
                <img className='item-img' src={`../../assets/${img}`} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <Accountant restarTotal={onLess} sumarTotal={onAdd} data={data}/> 
        </div>
    )
}

export { Item }