import './style.scss';

import { useContext, useEffect, useState } from 'react';

import CategoryContext from '../../../contexts/category';
import Loading from '../../loading';

import CategoryList from '../list';

const CategoryListContainer = ({ title, filters, settings_list, settings_item}) => {
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
        { title && <h2>{ title }</h2> }
        {
            (loading) ?
                <Loading /> :
                <CategoryList
                    categories={categories}    
                    settings={settings_list}
                    settingsItem={settings_item}
                />
        }
    </div>;
}

export default CategoryListContainer;