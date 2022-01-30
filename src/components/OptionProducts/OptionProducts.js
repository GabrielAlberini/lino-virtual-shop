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
            button: "Congelados",
            link: "congelados"
        },
        {
            title: "PANIFICADOS",
            body: "Aquí podrás ver con que productos panificados contamos. Pero ojito, hay que estar atentos porque no hacemos todo el tiempo. Solo en ocaciones especiales.",
            className: "select-baked",
            button: "Panificados",
            link: "panificados"
        },
        {
            title: "POR ENCARGUE",
            body: "Estos productos los realizamos en ocaciones especiales como eventos o fiestas patrias. Por eso a estar muy atentx",
            className: "select-commission",
            button: "Por encargue",
            link: "encargues"
        }
    ]

    return (
        <>
        {
            showOption
            &&
            <div className={`container-options ${theme ?  "" : "container-options-dark"}`}>
                {
                    dataOption.map((item, i) => {
                        return <OptionProductsItem key={i} data={item}/>
                    })
                }
            </div>
        }
        </>
    )
}

export { OptionProducts }
 
