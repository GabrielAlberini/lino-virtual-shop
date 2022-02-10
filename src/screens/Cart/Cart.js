import React, {useState} from 'react'
import './Cart.css'
import { Layout } from '../../components/Layout/Layout'
import { useContext } from 'react';
import { CartContext } from "../../context/cartContext";
import { ItemCart } from '../../components/ItemCart/ItemCart';
import { Title } from '../../components/Title/Title';
import { Form } from '../../components/Form/Form';
import { CartDescription } from '../../components/CartDescription/CartDescription'
import { MessageToBuy } from '../../components/MessageToBuy/MessageToBuy'

const Cart = () => {
    const {products, totalPrice} = useContext(CartContext)
    const [message, setMessage] = useState(false)
    const [orderID, setOrderID] = useState()

    return (
        <Layout>
            <>
            <div className='container-section section-cart'>
                <Title className="title-card" showTitle={true} title={"Cart"}/>
                {
                    <div className='cont-flex'>
                        <CartDescription>
                        {
                            products.map((product) => <ItemCart key={product.id} data={product}/>) 
                        }
                        </CartDescription>
                    <div className='cont-pay'>
                        <Form 
                            products={products} 
                            totalPrice={totalPrice} 
                            setMessage={setMessage} 
                            setOrderID={setOrderID}
                        /> 
                    </div>
                    
                </div>
                }
            </div>
            {message && <MessageToBuy orderID={orderID}/>}
            </>
        </Layout >
    )
}

export { Cart }