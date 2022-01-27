import React, { useContext } from 'react'
import './OptionProducts.css'
import { ThemeContext } from "../../context/themeContext"
import { OptionProductsItem } from '../OptionProductsItem/OptionProductsItem';


const OptionProducts = ({showOption = true}) => {
    const {theme} = useContext(ThemeContext)
    const dataOption = [
        {
            title: "CONGELADOS",
            body: "En esta sección encontrarás nuestros productos freezados. Todos 100% artesanales y listos para comer o guardar hasta que lo precises.",
            className: "select-frozen",
            button: "Congelados"
        },
        {
            title: "PANIFICADOS",
            body: "Aquí podrás ver con que productos panificados contamos. Pero ojito, hay que estar atentos porque no hacemos todo el tiempo. Solo en ocaciones especiales.",
            className: "select-baked",
            button: "Panificados"
        }
    ]

    return (
        <>
        {
            showOption
            &&
            <div className={`container-options ${theme ?  "" : "container-options-dark"}`}>
                {
                    dataOption.map(item => {
                        return <OptionProductsItem data={item}/>
                    })
                }
            </div>
        }
        </>
    )
}

export { OptionProducts }
 
