import React, { useState } from 'react'
import './Contact.css'
import { Layout } from '../../components/Layout/Layout'

const Contact = () => {

    const [vocales, setVocales] = useState(false);

    const presionarTecla = (e) => {
        switch(e.keyCode){
            case 65:
            case 69:
            case 73:
            case 79:
            case 85:
                setVocales(true)
                e.preventDefault()
            break;
            default:
                setVocales(false)
        }
    }

    return (
        <Layout>
            <div className='container-section'>
            <p>Presiona el boton</p>
            <input className={vocales ? "vocales" : ""} onKeyDown={presionarTecla}
                type="text"
                placeholder="Escribe solo letras consonantes"
            />
            {vocales ? <p>No se pueden ingresar vocales.</p> : null}
            <button style={{ display: "block", margin: "auto"}} type="submit" >
                Presiona el boton
            </button>
            </div>
        </Layout>
    )
}

export { Contact };