import { useState, useContext } from 'react';
import './CardWidget.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/cartContext";
import { ItemCart } from "../ItemCart/ItemCart"


const CardWidget = () => {
    const [show, setShow] = useState(false)
    const {products} = useContext(CartContext)

    
    const setShowCart = () => {
        setShow(!show)
    }

    return(
        <div>
            <LocalGroceryStoreIcon onClick={setShowCart}/>
            <div className={`animate__bounce container-shop  ${show ? "" : "none"} `}>
                <div className='titles-shop'>
                    <p><b>Producto</b></p>
                    <p><b>Cantidad</b></p>
                    <p><b>Precio</b></p>
                </div>
                {
                    products.map((product) => {
                        console.log("product", product)
                        return (
                            <ItemCart key={product.id} data={product}/>
                        )
                    })
                }
                <Link to="/cart">
                <Button>Ir a cart</Button>
                </Link>
            </div>
        </div>
    )
}

export { CardWidget }