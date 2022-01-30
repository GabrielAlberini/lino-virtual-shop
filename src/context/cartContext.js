import { createContext, useEffect, useState } from 'react';

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("OrdenDeProductos")) || [])
    const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.getItem("TotalPrice")) || 0)

    useEffect(()=> {
        localStorage.setItem("TotalPrice", JSON.parse(totalPrice))
    }, [totalPrice])

    const addProductsInCart = (product) => {
        setProducts([...products, product])
        setTotalPrice(totalPrice => totalPrice + (product.price * product.quantify))
        localStorage.setItem("OrdenDeProductos", JSON.stringify([...products, product]))
    }

    const deleteProductOfCart = (id, price, quantify) => {
        const filterProducts = products.filter((product)=> product.id !== id );
        setProducts(filterProducts);
        localStorage.setItem("OrdenDeProductos", JSON.stringify(filterProducts));
        setTotalPrice(totalPrice => totalPrice - (price * quantify));
        localStorage.setItem("TotalPrice", JSON.parse(totalPrice));
    };

    const statesCart = {
        products,
        addProductsInCart,
        totalPrice,
        deleteProductOfCart
    }

    return (
        <CartContext.Provider value={statesCart} >
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}