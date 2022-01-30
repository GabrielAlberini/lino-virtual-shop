import { useState, useContext } from 'react';
import './CardWidget.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/cartContext";
import { ItemCart } from "../ItemCart/ItemCart"
import { CountContext } from '../../context/countContext';


const CardWidget = () => {
    const [show, setShow] = useState(false)
    const {products, totalPrice} = useContext(CartContext)
    const {key, changeSwitchCart, deleteProductOfCart} = useContext(CountContext)

    
    const setShowCart = () => {
        setShow(!show)
        changeSwitchCart(!key)
    }

    return(
        <div>
            <div className='icon-shop'>
            <Button style={{marginLeft:10}} onClick={setShowCart}>
                <LocalGroceryStoreIcon />
            </Button>
            </div>
            <div className={`container-shop  ${key ? "" : "none"}`}>
                {
                    products.length === 0
                    ?
                    <p className='text-cart-empty'><b>No hay productos en el carrito.</b></p>
                    :
                    <>
                    {
                        products.map((product) => {
                            console.log("Desde CardWidget", product)
                            return (<ItemCart  key={product.id} data={product}/>)
                        })
                        
                    }
                    <div className='cont-total-price'>
                    <div className='total-price'>
                        <p>Total:</p>
                        <p>${totalPrice}</p>
                    </div>
                    <Link to="/cart">
                        <Button variant="contained" color="success">Finalizar compra</Button>
                    </Link>
                    </div>
                    </>
                }
                
            </div>
        </div>
    )
}

export { CardWidget }