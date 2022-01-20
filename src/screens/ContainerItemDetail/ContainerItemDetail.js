import React, {useState, useEffect} from 'react';
import './ContainerItemDetail.css';
import { Layout } from '../../components/Layout/Layout';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { API } from '../../API';
import CircularProgress from '@mui/material/CircularProgress';

const ContainerItemDetail = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const {id} = useParams([]);

    useEffect(()=> {
        const getProducts = new Promise((resolve, reject) => {
            resolve(API)
            reject("Falló la carga de la API")
        })
        setTimeout(()=> {
            getProducts.then((data) => {
                data.filter((resultProduct) => {
                    if(resultProduct.id === parseInt(id)){
                        setProducts(resultProduct)
                    }
                    return setProducts(resultProduct)
                })  
            }).catch((err) => {
                console.log(err.message)
            }).finally(()=> {
                setLoader(false)
            })
        }, 500);
        
    }, [id]);

    return (
        <Layout>
            <div className='container-section section-detail'>
            {
                loader
                ?
                <CircularProgress />
                :
                <ItemDetail data={products}/>
            }
            </div>
        </Layout>
    )
}

export { ContainerItemDetail };