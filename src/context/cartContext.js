import { createContext, useEffect, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("OrdenDeProductos")) || [])
    const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem("TotalPrice")) || 0)
    console.log("totalPrice", products)
    
    useEffect(()=> {
        localStorage.setItem("TotalPrice", JSON.parse(totalPrice))
    }, [totalPrice])

    const addProductsInCart = (product) => {
        setProducts([...products, product])
        setTotalPrice(totalPrice => totalPrice + (product.price * product.quantify))
        localStorage.setItem("OrdenDeProductos", JSON.stringify([...products, product]))
    } 

    // const deleteProductOfCart = (value) => {
    //     products.filter(el => {
    //         console.log("elementooooooooooo", el)
    //         if(el.id !== value) {
                
    //         }
    //     })
    // }

    const statesCart = {
        products,
        addProductsInCart,
        totalPrice,
        // deleteProductOfCart
    }

    
    return (
        <CartContext.Provider value={statesCart} >
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}