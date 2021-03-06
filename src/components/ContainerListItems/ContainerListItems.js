import { React, useState, useEffect, useContext } from "react";
import './ContainerListItems.css'
import { ListItems } from "../ListItems/ListItems"
import { useParams } from "react-router-dom";
//Firestore
import { db } from '../../firebase';
//Llamada a la base de datos
import { getProducts } from '../../serviceFS'
//Theme Provider
import { ThemeContext } from "../../context/themeContext"
import { CountContext } from "../../context/countContext"

const ContainerListItems = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const {category} = useParams()
    const {theme} = useContext(ThemeContext)
    const { stateLouderState, stateLouder } = useContext(CountContext)

    console.log("products", products)

    useEffect(()=> {
        getProducts(db).then((data) => {
            if (category) {
                data.filter((resultProduct) => {
                    if(resultProduct.category === category){
                        setProducts(products => [...products, resultProduct])
                    } 
                    return products;
                }) 
            } else {
                setProducts(data);
            }
        }).catch((err)=> {
            alert(err)
        }).finally(() => {
            stateLouderState()
            setLoader(false);
        })
    }, [])

    return (
    <div className={`container-item-list ${theme ?  "" : "container-item-list-dark"}`}>
        {
            loader
            ?
            stateLouder
            :
            <>
            <ListItems title={category} listItems={products}/>  
            </> 
        }
    </div>
   )
}
export { ContainerListItems }; 