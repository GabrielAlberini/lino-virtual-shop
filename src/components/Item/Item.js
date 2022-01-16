import { React, useState } from "react";
import './Item.css'
import { Button } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Item = ({data}) => {

    
    const {name, image} = data;
    console.log(image)
    // const [mount, setMount] = useState(0)
    // const [currentStock, setCurrentStock] = useState(stock)

    // const addMount = () => {
    //     if (mount < stock) {
    //         setMount(mount + 1)
    //         setCurrentStock(currentStock - 1)
    //     } 
    // }

    // const lessMount = () => {
    //     if(mount > 0) {
    //         setMount(mount - 1)
    //         setCurrentStock(currentStock + 1)
    //     }
    // }


    return(
        <div className="container-item">
            <img src={image} alt="imagen de capitulo"/>
            <p style={{padding: 19}}>{name}</p>

            {/* <img src={`../../assets/${img}`} alt="Imagen de producto"/>
            <p>Nombre: {name}</p>
            <p>Precio: {price}</p>
            <p>Stock: {currentStock}</p>
            <p>{mount}</p>
            <Button onClick={lessMount}>
                <RemoveIcon />
            </Button>
            <Button onClick={addMount}>
                <AddIcon />
            </Button>
            <Button className="add-to-cart">
                Agregar Al carrito
            </Button>         */}
        </div>
    )
}

export { Item }