import './style.scss';

import { useContext, useEffect, useState } from 'react';

import CategoryContext from '../../../contexts/category';

import CategoryList from '../list';

const CategoryListContainer = ({ title, filters}) => {
    const {loading, searchCategories} = useContext(CategoryContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {        
        if (loading) return;

        searchCategories(filters)
            .then(setCategories)
            .catch(err => {
                console.error("Error al obtener las categorias: " + err);
            });

        return () => {}
    }, [loading, searchCategories, setCategories, filters])

    return <div className={"category-list-container app-width"}>
        <h2>{ title }</h2>
        {
            (loading) ?
                <label>Loading ...</label> :
                <CategoryList categories={categories} />
        }
    </div>;
}

export default CategoryListContainer;