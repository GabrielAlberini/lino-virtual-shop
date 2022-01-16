import React, {useState} from "react";
import { Button } from "@material-ui/core";

const CambiarNombre = (prop) => {
    const [nombre, setNombre] = useState(prop.name);
    
    const actualizarNombre = () => {
        setNombre(nombre === "Juan" ? "Pepito" : "Juan")
    }

    return (
        <div>
            <p>Hola, me llamo {nombre}</p>
            <Button onClick={actualizarNombre}>Cambiar nombre</Button>
        </div> 
    )
}

export { CambiarNombre }