import React, {useContext} from 'react'
import './Title.css'
import { ThemeContext } from "../../context/themeContext"


const Title = ({title, showTitle = false}) => {
    const {theme} = useContext(ThemeContext)

    return (
        showTitle 
        &&
        <div className={`container-title ${theme ?  "" : "container-title-dark"}`}>
            <h4 className='title'>{title}</h4>
            <span></span>
        </div>
    )
}

export { Title }