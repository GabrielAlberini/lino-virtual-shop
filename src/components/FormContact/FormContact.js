import React from 'react'
import './FormContact.css'

const FormContact = () => {

    const sentMessajeContact = (e) => {
            e.preventDefault();
            fetch("https://formsubmit.co/ajax/gabialberini733@gmail.com", {
                method: "POST",
                body: new FormData(e.target)
            }).then((res)=> (res.ok ? res.json() : Promise.reject(res)))
            .then(json =>{
                console.log(json)
            })
            .catch(err => {
                console.log(err)
                let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
                console.log(message)
            }).finally(()=> {
                console.log("Excitos")
            });   
    }

    return (
        <form className='contact-form'>
        <input 
            type="text" 
            name="name" 
            placeholder="Ingresa tu nombre" 
            title="Nombre sólo acepta letras y espacios en blanco" 
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" 
            required/>
        <input 
            type="email" 
            name="email" 
            placeholder="Ingresa tu correo" 
            title="Email incorrecto" 
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"/>
        <textarea 
            name="comments" 
            cols="50" 
            rows="5" 
            placeholder="Déjame tus comentarios" 
            required/>
        <input 
            onSubmit={sentMessajeContact}
            type="submit" 
            className="btn" 
            value="Enviar mensaje" />
    </form>
    )
}

export { FormContact };