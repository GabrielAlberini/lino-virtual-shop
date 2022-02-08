import React from 'react';
import './MessageToBuy.css';
import HappyFace from '@mui/icons-material/SentimentSatisfiedAlt';
import { Link } from 'react-router-dom'

const MessageToBuy = ({orderID}) => {
    return (
        <div className='container-message'>
            <HappyFace />
            <p>Muchas gracias por su compra! Su número de compra es: {orderID}</p>
            <Link to="/">
                <button className='btn'>Volver al inicio</button>
            </Link>
        </div>
    )
}

export { MessageToBuy };