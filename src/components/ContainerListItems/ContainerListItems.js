import { React, useState, useEffect } from "react";
import './ContainerListItems.css'
// import { API } from "../../API";
import { ListItems } from "../ListItems/ListItems"
import { LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
//Firestore
import { db } from '../../firebase';
//Llamada a la base de datos
import { getProducts } from '../../serviceFS'


const ContainerListItems = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const {category} = useParams()

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
            setLoader(false);
        })
    }, [])

    return (
         <div className="container-list">
             {
                 loader
                 ?
                    <LinearProgress className="loader" color="success" />
                 :
                 <>
                 <ListItems title={category} listItems={products}/>  
                 </>  
             }
         </div>
    )
}

export { ContainerListItems };  