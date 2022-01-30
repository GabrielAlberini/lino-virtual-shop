import React, {useState, useEffect} from 'react';
import './ContainerItemDetail.css';
import { Layout } from '../Layout/Layout';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
//Collection trae la colección entera (api) y getDocs los items.
import { doc, getDoc } from 'firebase/firestore/lite';
//Conexion a Firebase
import { db } from '../../firebase';

const ContainerItemDetail = () => {

    const [products, setProducts] = useState([]);
    const {id} = useParams()

    async function getProducts(db) {
        //Aquí debajo va en orden: La conexón, nombre de la colección y parametro para efectuar el filtro.
        const docRef = doc(db, "API", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const product = docSnap.data();
            product.id = id;
            setProducts(product)
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
                <ItemDetail data={products}/>
            </div>
        </Layout>
    )
}

export { ContainerItemDetail };