import React, {useState, useEffect} from 'react';
import './ContainerItemDetail.css';
import { Layout } from '../../components/Layout/Layout';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
//Collection trae la colección entera (api) y getDocs los items.
import { doc, getDoc } from 'firebase/firestore/lite';
//Conexion a Firebase
import { db } from '../../firebase';

const ContainerItemDetail = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const {id} = useParams()

    async function getProducts(db) {
        //Aquí debajo va en orden: La conexón, nombre de la colección y parametro para efectuar el filtro.
        const docRef = doc(db, "API", id);
        const docSnap = await getDoc(docRef);
        console.log("productasdasd", docSnap)

        if (docSnap.exists()) {
            const product = docSnap.data();
            product.id = id;
            setProducts(product)
            setLoader(false)
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }

    useEffect(()=> {
        getProducts(db)
    }, []);


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