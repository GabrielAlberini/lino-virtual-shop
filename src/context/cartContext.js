import { createContext, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const addProductsInCart = (product) => {
        setProducts([...products, product])
        console.log("producto por props", products)
    }
    
    const statesCart = {
        products,
        addProductsInCart
    }
    
    return (
        <CartContext.Provider value={statesCart} >
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}