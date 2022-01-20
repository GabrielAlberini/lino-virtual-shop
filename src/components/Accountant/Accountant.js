import React, {useState} from 'react';
import './Accountant.css'
import { Button } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

const Accountant = ({data, sumarTotal, restarTotal, showStock = true, showDetail = true}) => {
    
    const { id, stock } = data; 

    const [mount, setMount] = useState(0)
    const [stockCurrent, setStockCurrent] = useState(stock)
    const [showUnit, setShowUnit] = useState(false)

    const addMount = () => {
        if(mount < stock ) {
            setMount(mount + 1)
            setStockCurrent(stockCurrent - 1)
            setShowUnit(true)  
            sumarTotal(mount, 1)
        }
    }

    const lessMount = () => {
        if(mount > 0 ) {
            setMount(mount - 1)
            setStockCurrent(stockCurrent + 1)
            restarTotal(mount, 1)
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
            <Link to="/cart">
                <button className='btn'>Agregar al carrito</button>
            </Link>
            {
                showDetail && <Link to={`/products/category/${id}`}>
                <button className='btn btn-detail'>Ver producto</button>
                </Link>
            }
        </div>
    )
}

export { Accountant }