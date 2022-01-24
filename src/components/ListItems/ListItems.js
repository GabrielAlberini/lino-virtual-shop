import React from 'react';
import './ListItems.css'
import { Item } from "../Item/Item";

const ListItems = ({listItems}) => {
    return (
        <>
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

export { ListItems };