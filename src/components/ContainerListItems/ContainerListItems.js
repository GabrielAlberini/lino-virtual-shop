import { React, useState, useEffect } from "react";
import './ContainerListItems.css'
import { API } from "../../API";
import { ListItems } from "../ListItems/ListItems"
import { LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";

const ContainerListItems = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const {category} = useParams()

    useEffect(()=> {
        new Promise((resolve, reject) => {
            setTimeout( ()=> {
                resolve(API);
            }, 500)
        }).then((data) => {
            if (category) {
                data.filter((resultProduct) => {
                    if(resultProduct.category === category){
                        setProducts(products => [...products, resultProduct])
                    } 
                }) 
            } else {
                setProducts(data);
            }
        }).catch((err)=> {
            alert(err)
        }).finally(() => {
            setLoader(false);
        })
    }, [category])

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