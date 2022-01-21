import { useState, useEffect } from "react";
import { ListItems } from "../ListItems/ListItems"
import './ContainerListItems.css'
import { API } from "../../API";
// import CircularProgress from '@mui/material/CircularProgress';
import { LinearProgress } from "@mui/material";


const ContainerListItems = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    

    useEffect(()=> {
        new Promise((resolve, reject) => {
            setTimeout( ()=> {
                resolve(API);
            }, 500)
        }).then((data) => {
            setProducts(data);
        }).catch((reject)=> {
            alert(reject)
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
                 <div className='container-home-title'>
                    <h4 className='title'>Nuestros productos</h4>
                    <span></span>
                </div>
                 <ListItems listItems={products}/>  
                 </>  
             }
         </div>
    )
}

export { ContainerListItems };  