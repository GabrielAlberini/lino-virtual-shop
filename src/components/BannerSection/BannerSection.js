import React from 'react';
import { useParams } from 'react-router-dom';
import './BannerSection.css'

const BannerSection = () => {
    const {category} = useParams()

    return (
        <div className='container-banner-section'>
            <h1 className='title-banner-section'>{category ? category : "¿Quienes somos?"}</h1>
        </div>
    )
}

export { BannerSection }