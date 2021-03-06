import React, {useContext, useState} from "react";
import "./Form.css"
import { Button, CircularProgress } from '@mui/material';
import {db} from '../../firebase';
import { collection, addDoc } from 'firebase/firestore/lite';
import { CartContext } from "../../context/cartContext";

const Form = ({products, totalPrice, setMessage, setOrderID}) => {
    const [loader, setLoader] = useState(false)
    const [buyer, setBuyer] = useState({name: "",phone: "",email: "",})

    const { setProducts, setTotalPrice } = useContext(CartContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setBuyer({...buyer, [name] : value})
    }

    const sendDates = (e) => {
        e.preventDefault()
        const order = {}
        order.buyer = buyer;
        order.items = products;
        order.total = totalPrice;
        pushOrder(order)
    }

    const pushOrder = async(order) => {
        setLoader(true)
        //Conección (db) con ordenes en firebase.
        const orderFiresbase = collection(db, 'orders')
        //Guardo la respuesta de la conección con la orden realizada.
        const orden = await addDoc(orderFiresbase, order) 
        // console.log("Orden enviada a FB", orden);  
        setOrderID(orden.id)
        setProducts([])
        setTotalPrice(0)
        localStorage.clear();
        setLoader(false)
        setMessage(true) 
        setBuyer({name: "", phone: "", email: ""})
    }

    return (
        <>
        <div>
            <form className='form'>
                <h3>Ingrese sus datos para realizar la compra por favor</h3>
                <input 
                    label="Nombre" 
                    name="name" 
                    type="text" 
                    placeholder='Nombre' 
                    value={buyer.name} 
                    onChange={handleChange} 
                    required 
                    autoFocus/>
                <input 
                    label="phone" 
                    name="phone" 
                    type="number" 
                    placeholder='Telefono' 
                    value={buyer.phone} 
                    onChange={handleChange} 
                    required/>
                <input 
                    label="email"
                    name="email" 
                    type="email" 
                    placeholder='Email' 
                    value={buyer.email} 
                    onChange={handleChange} 
                    pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                    required/>
                <div className='cont-pay-text'>
                    <p><b>TOTAL:</b></p>
                    <p>${totalPrice}</p>
                </div>
                <Button 
                    onClick={sendDates} 
                    variant="contained" 
                    color="success" 
                    type="submit"
                >
                        Enviar datos
                </Button>
            </form>
            {loader && <CircularProgress />}
        </div>
        </>
    )
}

export { Form };