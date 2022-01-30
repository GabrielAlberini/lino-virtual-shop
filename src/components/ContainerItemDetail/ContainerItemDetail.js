import React, {useState, useEffect} from 'react';
import './ContainerItemDetail.css';
import { Layout } from '../Layout/Layout';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
//Collection trae la colección entera (api) y getDocs los items.
import { doc, getDoc } from 'firebase/firestore/lite';
//Conexion a Firebase
import { db } from '../../firebase';
import { CircularProgress } from '@mui/material';
// import { CountContext } from "../../context/countContext"

const ContainerItemDetail = () => {

    const [ products, setProducts ] = useState([]);
    const [ loader, setLoader ] = useState(true);
    const { id } = useParams()

    async function getProducts(db) {
        //Aquí debajo va en orden: La conexón, nombre de la colección y parametro para efectuar el filtro.
        const docRef = doc(db, "API", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const product = docSnap.data();
            product.id = id;
            setProducts(product)
            setLoader(false)
        } else {
            //En caso de que falle la llamada o no exista el doc.
            console.log("No such document!");
    }
    }

    //Se utiliza un useEffect para llamar a la api solo cuando se renderiza el componente.
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