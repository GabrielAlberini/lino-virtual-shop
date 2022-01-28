import { createContext, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("OrdenDeProductos")) || [])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductsInCart = (product) => {
        console.log("Producto nuevo ", product )
        setProducts([...products, product])
        localStorage.setItem("OrdenDeProductos", JSON.stringify([...products, product]))
        setTotalPrice(totalPrice => totalPrice + (product.price * product.quantify))
    } 

    const statesCart = {
        products,
        addProductsInCart,
        totalPrice
    }
    
    return (
        <CartContext.Provider value={statesCart} >
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}