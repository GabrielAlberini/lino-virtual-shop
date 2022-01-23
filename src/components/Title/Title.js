import React from 'react'
import './Title.css'


const Title = ({title, showTitle = false}) => {
    return (
        showTitle 
        &&
        <div className='container-title'>
            <h4 className='title'>{title}</h4>
            <span></span>
        </div>
    )
}

export { Title }