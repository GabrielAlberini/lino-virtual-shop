import React from 'react'
import './Cart.css'
import { Layout } from '../../components/Layout/Layout'
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext";
import { ItemCart } from '../../components/ItemCart/ItemCart';
import { Title } from '../../components/Title/Title';
import { Button } from '@mui/material';
import { Form } from '../../components/Form/Form';
import { CartDescription } from '../../components/CartDescription/CartDescription'

const Cart = () => {

    const {products, totalPrice} = useContext(CartContext)

    console.log("en cart", products)

    return (
        <Layout>
            <div className='container-section'>
                <Title className="title-card" showTitle={true} title={"Cart"}/>
                {
                    products.length === 0
                    ?
                    <h3>No hay productos en el carrito.</h3>
                    :
                    <div className='cont-flex'>
                        <CartDescription>
                        {
                            products.map((product, i)=> {
                                return (
                                    <>
                                        <ItemCart key={product.id} data={product}/>
                                    </>
                                )
                            })
                        }
                        </CartDescription>
                    <div className='cont-pay'>
                        <Form products={products} totalPrice={totalPrice}/> 
                    </div>
                </div>
                }
            </div>
        </Layout >
    )
}

export { Cart }