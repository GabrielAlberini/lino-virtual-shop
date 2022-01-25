import React, {useState} from "react";
import "./Form.css"
import { Title } from "../Title/Title";
import { Button } from '@mui/material';


const Form = () => {
    const [state, setState] = useState(true)

    const sendDates = (e) => {
        e.preventDefault()
        setState(false)
    }
 
    return (
        <div>
            <form className='form'>
                <Title showTitle={true} title={"Ingrese sus datos"}/>
                <input type="text" placeholder='Nombre' required autoFocus/>
                <input type="number" placeholder='Telefono'/>
                <input type="email" placeholder='Email'/>
                <Button onClick={sendDates} variant="contained" color="success" type="submit">Enviar datos</Button>
            </form>
        </div>
    )
}

export { Form };