import React from 'react'
import './BannerLoader.css'
import CircularProgress from '@mui/material/CircularProgress';

const BannerLoader = () => {

    return (
        <div className='container-loader'>
            <CircularProgress color="success" />
        </div>
    )
}

export { BannerLoader }