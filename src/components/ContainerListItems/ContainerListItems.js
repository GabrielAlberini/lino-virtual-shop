import { useState, useEffect } from "react";
import { ListItems } from "../ListItems/ListItems"
import './ContainerListItems.css'
import { API } from "../../API";
// import CircularProgress from '@mui/material/CircularProgress';
import { LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { OptionProducts } from "../OptionProducts/OptionProducts";
import { Title } from "../Title/Title"

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
    }, [])

    return (
         <div className="container-list">
             {
                 loader
                 ?
                    <LinearProgress className="loader" color="success" />
                 :
                 <>
                 <Title />
                 <ListItems title={category} listItems={products}/>  
                 </>  
             }
         </div>
    )
}

export { ContainerListItems };  