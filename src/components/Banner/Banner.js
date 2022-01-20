import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container-banner'>
            <img className="img-banner" src={`../../assets/banner.jpg`} alt="Foto de nanner"/>
            <h1 className='title-banner'>LINO | Plan Based</h1>
        </div>
    )
}

export { Banner }