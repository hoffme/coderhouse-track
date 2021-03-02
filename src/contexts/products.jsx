import {createContext, useEffect, useState} from "react";

import {getFirestore} from "../firebase";

import productsFilter from "../utils/productsFilter";

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [collection] = useState(getFirestore().collection('products'));

    useEffect(() => {
        collection
            .where("show", "==", true)
            .get()
            .catch(console.error)
            .then(snapshot => {
                const products = {}
                snapshot.docs.forEach(doc => {
                    products[doc.id] = { id: doc.id, ...doc.data() };
                });

                setProducts(products);
                setLoading(false);
            });

        return () => {}
    }, [collection])

    const searchProducts = (filter) => {
        return new Promise((resolve) => {
            resolve(productsFilter(Object.values(products), filter));
        });
    }

    return <ProductsContext.Provider value={{
        products: Object.values(products),
        loading,
        searchProducts
    }}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsContext;
export {ProductsProvider};

/*

    const getProduct = async (product) => {
        const doc = await collection
            .doc(product.id)
            .where("show", "==", true)
            .get();
        
        if (!doc.exists) {
            throw new Error("product '" + product.id + "' not exist");
        }

        const products = {...products};
        products[doc.id] = { id: doc.id, ...doc.data() }

        setProducts(products);

        return products[doc.id];
    }

*/