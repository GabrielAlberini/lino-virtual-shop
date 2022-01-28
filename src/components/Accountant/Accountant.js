import React, { useContext, useState } from 'react';
import './Accountant.css'
import { Button } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CountContext } from '../../context/countContext';

const Accountant = ({data, onAdd, showStock = true}) => {
    
    const { stock } = data;

    const [mount, setMount] = useState(0)
    const [stockCurrent, setStockCurrent] = useState(stock)

    const {key} = useContext(CountContext)

    const addMount = () => {
        if(mount < stock ) {
            let totalCantidad = mount + 1;
            setMount(totalCantidad)
            onAdd(mount + 1)
            setStockCurrent(stockCurrent - 1)
        }
    }

    const lessMount = () => {
        if(mount > 0 ) {
            setMount(mount - 1)
            setStockCurrent(stockCurrent + 1)
        }
    }

    return (
        <div >
            {
                showStock && <span className='item-stock'>{stockCurrent === 0 ? "Sin stock" : "Stock: " + stockCurrent}</span>
            }
            <div className="item-count">
            <Button onClick={lessMount}><RemoveIcon/></Button>
            <p>{mount} unidad</p>
            <Button onClick={addMount}><AddIcon/></Button>
            </div>
        </div>
    )
}

export { Accountant }