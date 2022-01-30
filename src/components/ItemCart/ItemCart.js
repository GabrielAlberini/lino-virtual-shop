import React, {useContext} from 'react'
import './ItemCart.css'
import { CartContext } from '../../context/cartContext';

const ItemCart = ({data}) => {
    const {id, name, img, quantify, price} = data; 
    const { deleteProductOfCart } = useContext(CartContext)
    
    return ( 
        <div className='cart-shop'>
            <div className='cont-img-shop'>
                <img src={img} alt={img} />
            </div>
            <div className='cont-txt'>
                <h5>{name}</h5>
                <p>Cant: {quantify}</p>
                <p>${price}</p>
                {/*Este boton llama a la funcion del contexto CartContex para modificar el array de products*/}
                <button onClick={(()=> {deleteProductOfCart(id, price, quantify)})} type='checkbox' className='delete-item'>X</button>
            </div>
        </div>
    )
}

export { ItemCart };