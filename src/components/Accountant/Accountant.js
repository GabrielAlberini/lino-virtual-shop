import React, { useState } from 'react';
import './Accountant.css'
import { Button } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Accountant = ({data, onAdd, showStock = true}) => {
    
    const { stock } = data;

    const [mount, setMount] = useState(0)
    const [stockCurrent, setStockCurrent] = useState(stock)
    const [showUnit, setShowUnit] = useState(false)

    const addMount = () => {
        if(mount < stock ) {
            let totalCantidad = mount + 1;
            setMount(totalCantidad)
            onAdd(mount + 1)
            setStockCurrent(stockCurrent - 1)
            setShowUnit(true)
        }
    }

    const lessMount = () => {
        if(mount > 0 ) {
            setMount(mount - 1)
            setStockCurrent(stockCurrent + 1)
        }
        if(mount === 1) {
            setShowUnit(false)
        }
    }

    return (
        <div >
            {
                showStock && <span className='item-stock'>{stockCurrent === 0 ? "Sin stock" : "Stock: " + stockCurrent}</span>
            }
            <div className="item-count">
            <Button onClick={lessMount}><RemoveIcon/></Button>
            <p>{mount}{showUnit === true ? " unidad": null}</p>
            <Button onClick={addMount}><AddIcon/></Button>
            </div>
        </div>
    )
}

export { Accountant }