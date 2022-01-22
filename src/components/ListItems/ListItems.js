import React from 'react';
import './ListItems.css'
import { Item } from "../Item/Item";

import { OptionProducts } from '../OptionProducts/OptionProducts'

const ListItems = ({listItems, title}) => {
    return (
        <>
        <h2>Nuestros productos</h2>
        <div className='container-home-title'>
            <h3 className='title'>{title}</h3>
                <span></span>
        </div>
        <span></span>
        <div className="container-items">
        {
            listItems.map((product) => {
               return <Item key={product.id} data={product} title="Todos nuestros productos" />
            })
        }
        </div>
        </>
    )
}

export {ListItems}