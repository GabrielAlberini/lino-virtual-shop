import React from 'react'
import './Cart.css'
import { Layout } from '../../components/Layout/Layout'
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext";
import { ItemCart } from '../../components/ItemCart/ItemCart';
import { Title } from '../../components/Title/Title';
import { Button } from '@mui/material';

const Cart = () => {

    const {products, totalPrice} = useContext(CartContext)

    console.log("en cart", products)

    return (
        <Layout>
            <div className='container-section'>
                <Title showTitle={true} title={"Cart"}/>
                {
                    products.length === 0
                    ?
                    <h3>No hay productos en el carrito.</h3>
                    :
                    <div className='cont-flex'>
                <div className='cont-product'>
                    <div className='cont-product-cart'>
                        <p>Producto</p>
                        <p>Cantidad</p>
                        <p>Precio</p>
                    </div>
                    {
                        products.map((product)=> {
                            return (
                                <>
                                    <ItemCart key={product.id} data={product}/>
                                </>
                            )
                        })
                    }
                </div>
                <div className='cont-pay'>
                    <div className='cont-pay-text'>
                        <p><b>TOTAL:</b></p>
                        <p>${totalPrice}</p>
                    </div>
                    <Button variant="contained" color="success">Realizar pago</Button>
                </div>
                </div>
                }
            </div>
        </Layout >
    )
}

export { Cart }