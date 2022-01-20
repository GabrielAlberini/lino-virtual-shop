import React, { useState} from 'react';
import './ListItems.css'
import { Item } from "../Item/Item";
import { Button } from '@mui/material';

const ListItems = ({listItems}) => {

    const [active, setActive] = useState("generales")

    const [generales, setGenerales] = useState([])
    const [congelados, setCongelados] = useState([]) 
    const [panificados, setPanificados] = useState([]) 
    const [title, setTitle] = useState("") 

     const productosGenerales = () => {
        setGenerales(listItems)
        setActive("generales")
        setTitle("Todos los productos")
     }

     const getCongelados = () => {
        const filtrados =  listItems.filter(x => x.category === "congelados")
        setCongelados(filtrados);
        setActive("prodCongelados")
        setTitle("Congelados")
     }

     const getPanificados = () => {
        const filtrados =  listItems.filter(x => x.category === "panificados")
        setPanificados(filtrados);
        setActive("prodPanificados")
        setTitle("Panificados")
     }
    
    return (
        <>
        <div className='container-options'>
            <div className="select-all-product">
                <Button variant="outlined" onClick={productosGenerales} active={"generales"}>Todos los productos</Button>
            </div>
            <div className="select-frozen">
                <Button variant="outlined" onClick={getCongelados} >Congelados</Button>
            </div>
            <div className="select-baked">
                <Button variant="outlined" onClick={getPanificados} >Panificados</Button>
            </div>
        </div>
        <div className='container-home-title'>
            <h4 className="title">{title}</h4>
        </div>
        <div className="container-items">
        {
        active === "generales" && generales.map((product) => {
               return <Item key={product.id} data={product} title="Todos nuestros productos" />
            })
        }
        {
        active === "prodCongelados" && congelados.map((product) => {
               return <Item key={product.id} data={product} title="Congelados" />
            })
        }
        {
        active === "prodPanificados" && panificados.map((product) => {
               return <Item key={product.id} data={product} title="Panificados"/>
            })
        }
        </div>
        </>
    )
}

export {ListItems}