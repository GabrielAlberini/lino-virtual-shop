import React from 'react';
import './ListItems.css'
import { Item } from "../Item/Item";
import { BannerSection } from '../BannerSection/BannerSection';
import { useParams } from 'react-router-dom';

const ListItems = ({listItems}) => {
    const { category } = useParams()

    return (
        <>
        <div className="container-items">
        {category && <BannerSection title={category}/>}
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