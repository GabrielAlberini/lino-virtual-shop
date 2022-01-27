import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container-banner'>
            <img className="img-banner" src="https://i.ibb.co/7JBTLyq/banner.jpg" alt="Foto de nanner"/>
            <h1 className='title-banner'>LINO<br/>Plan Based</h1>
        </div>
    )
}

export { Banner }