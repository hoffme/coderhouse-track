import './style.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../itemList';

const getItems = (filter) => {
    return new Promise((resolve, reject) => {
        // https://www.npoint.io/docs/5d5547aef66f65d0d13c edit
        fetch("https://api.npoint.io/5d5547aef66f65d0d13c")
            .then(data => data.json())
            .then(resolve)
            .catch(reject);
    });
}

const ItemListContainer = ({ title }) => {
    const [items, setItems] = useState([]);

    const { categoryId } = useParams('categoryId');
    const { query } = useParams('query');

    useEffect(() => {
        let filter = {};
   
        if (categoryId) filter.category = { id: categoryId };
        if (query) filter.query = query;
        
        getItems(filter)
            .then(items => { setItems(items) })
            .catch(err => alert("Error al obtener los items: " + err))

        return () => {}
    }, [categoryId, query])

    return <div className={"item-list-container app-width"}>
        <h2>{ title }</h2>
        {
            (!items || items.length === 0) ?
                <label>Loading ...</label> :
                <ItemList items={items} />
        }
    </div>;
}

export default ItemListContainer;