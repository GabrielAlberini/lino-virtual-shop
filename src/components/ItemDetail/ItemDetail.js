import React, {useContext} from "react";
import './ItemDetail.css';
import Arrow from '@mui/icons-material/ArrowForwardIos';
import { CounterProducts } from "../CounterProducts/CounterProducts";
import { ThemeContext } from "@emotion/react";

const ItemDetail = ({data}) => {
    const {name, 
        description,  
        details, 
        img, 
        ingredientes, 
        price,
        moodOfSale} = data; 
    const {theme} = useContext(ThemeContext);


    return(
        <div className={`container-details ${theme ?  "" : "container-details-dark"}`}>
            <div className="img-details">
                <img src={img} alt="Imagen de producto"/>
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