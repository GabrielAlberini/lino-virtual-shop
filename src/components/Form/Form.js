import React, {useState} from "react";
import "./Form.css"
import { Title } from "../Title/Title";
import { Button } from '@mui/material';
import {db} from '../../firebase';
import { collection, addDoc } from 'firebase/firestore/lite';

const Form = ({products, totalPrice}) => {
    const [buyer, setBuyer] = useState({
        name: null,
        phone: null,
        mail: null,
    })

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
        //Conección (db) con ordenes en firebase.
        const orderFiresbase = collection(db, 'orders')
        //Guardo la respuesta de la conección con la orden realizada.
        const orden = await addDoc(orderFiresbase, order) 
        console.log("Orden enviada a FB", orden);  
    }
 
    return (
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
                    label="Numero" 
                    name="phone" 
                    type="number" 
                    placeholder='Telefono' 
                    value={buyer.phone} 
                    onChange={handleChange} 
                    required/>
                <input 
                    label="Mail"
                    name="mail" 
                    type="email" 
                    placeholder='Email' 
                    value={buyer.mail} 
                    onChange={handleChange} 
                    required/>
                <div className='cont-pay-text'>
                    <p><b>TOTAL:</b></p>
                    <p>${totalPrice}</p>
                </div>
                <Button 
                    onClick={sendDates} 
                    variant="contained" 
                    color="success" 
                    type="submit">
                        Enviar datos
                </Button>
            </form>
        </div>
    )
}

export { Form };