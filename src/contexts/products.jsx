import {createContext, useContext, useEffect, useState} from "react";

import {getFirestore} from "../firebase";

import CategoryContext from "./category";

import productsFilter from "../utils/productsFilter";

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const {loading, findCategory} = useContext(CategoryContext);
    const categoriesLoading = loading;
    
    const [products, setProducts] = useState({});
    const [loadingProducts, setLoading] = useState(true);
    const [collection] = useState(getFirestore().collection('products'));

    useEffect(() => {
        if (categoriesLoading) return;

        collection
            .where("show", "==", true)
            .get()
            .catch(console.error)
            .then(snapshot => {
                const products = {}
                snapshot.docs.forEach(doc => {
                    products[doc.id] = doc.data();
                    products[doc.id].id = doc.id;
                    products[doc.id].category = findCategory(products[doc.id].category);
                });

                setProducts(products);
                setLoading(false);
            });

        return () => {}
    }, [categoriesLoading, findCategory, collection])

    const getProduct = async (productId) => {
        const doc = await collection
            .doc(productId)
            .get();
        
        if (!doc.exists) {
            throw new Error("product '" + productId + "' not exist");
        }

        const newProducts = {...products};
        newProducts[doc.id] = { id: doc.id, ...doc.data() }

        setProducts(newProducts);

        return newProducts[doc.id];
    }

    const searchProducts = (filter) => {
        return new Promise((resolve) => {
            resolve(productsFilter(Object.values(products), filter));
        });
    }

    return <ProductsContext.Provider value={{
        products: Object.values(products),
        loading: loadingProducts,
        getProduct,
        searchProducts
    }}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsContext;
export {ProductsProvider};