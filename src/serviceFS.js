//Collection trae la colección entera (api) y getDocs los items.
import { collection, getDocs } from 'firebase/firestore/lite';

//Get products trae toda la lista de la base de datos
async function getProducts(db) {
    const productsCol = collection(db, 'API');
    const prductsSnapshot = await getDocs(productsCol);
    const productsList = prductsSnapshot.docs.map(doc => {
        const product = doc.data();
        product.id = doc.id;
        return product;
    });
    return productsList;
}

export { getProducts }

