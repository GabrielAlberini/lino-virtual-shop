import React, {  useState } from 'react';
import './Accountant.css'
import { Button } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Accountant = ({data, onAdd, addStock, lessStock}) => {
    console.log("addstock", addStock)
    
    const { stock } = data;
    const [mount, setMount] = useState(0)

    const addMount = () => {
        if(mount < stock ) {
            let totalCantidad = mount + 1;
            //La función que sigue captura la cantidad de manera global
            setMount(totalCantidad)
            onAdd(mount + 1)
            addStock(1)
        }
    }

    const lessMount = () => {
        if(mount > 0 ) {
            setMount(mount - 1)
            lessStock(1)
        }
    }

    return (
        <div className='container-accountant'>
            <div className="item-count">
            <Button onClick={lessMount}><RemoveIcon/></Button>
            <p>{mount} unidad</p>
            <Button onClick={addMount}><AddIcon/></Button>
            </div>
        </div>
    )
}

export { Accountant }