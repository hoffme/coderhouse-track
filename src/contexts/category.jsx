import { createContext, useState, useEffect } from "react";

import { getFirestore } from "../firebase";

import categoryFilter from "../utils/categoryFilter";

const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState({});
    const [loading, setLoading] = useState(true);
    const [collection] = useState(getFirestore().collection('categories'));

    useEffect(() => {
        collection
            .get()
            .catch(console.error)
            .then(snapshot => {
                const categories = {}
                snapshot.docs.forEach(doc => {
                    categories[doc.id] = { id: doc.id, ...doc.data() };
                });

                setCategories(categories);
                setLoading(false);
            });

        return () => {}
    }, [collection])

    const getCategory = async (categoryID) => {
        const doc = await collection
            .doc(categoryID)
            .get();
        
        if (!doc.exists) {
            throw new Error("category '" + categoryID + "' not exist");
        }

        const newCategories = {...categories};
        newCategories[doc.id] = { id: doc.id, ...doc.data() }

        setCategories(newCategories);

        return newCategories[doc.id];
    }

    const searchCategories = (filter) => {
        return new Promise((resolve) => {
            resolve(categoryFilter(Object.values(categories), filter));
        });
    }

    const findCategory = (categoryID) => categories[categoryID];

    return <CategoryContext.Provider value={{
        categories: Object.values(categories),
        loading,
        getCategory,
        findCategory,
        searchCategories
    }}>
        {children}
    </CategoryContext.Provider>
}

export default CategoryContext;
export {CategoryProvider};