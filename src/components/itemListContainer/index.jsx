import './style.css';

import ItemList from '../itemList';
import { useEffect, useState } from 'react';

const getItems = () => {
    const itemExample = {
        id: "asd",
        title: "Fernet 1L",
        description:"bebida alcohólica amarga del tipo amaro elaborada a partir de varios tipos de hierbas, que son maceradas en alcohol de vino.",
        price: 500.00,
        pictureAlt: "beer",
        pictureUrl: "https://images.vexels.com/media/users/3/129956/isolated/preview/27c9746749f6da553d790fbbac71c986-copa-de-icono-de-bebida-de-cerveza-by-vexels.png"
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                itemExample, 
                itemExample, 
                itemExample, 
                itemExample
            ]);
        }, 2000)
    })
}

const ItemListContainer = ({ title }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems()
            .then(items => { setItems(items) })
            .catch(err => alert("Error al obtener los items: " + err))

        return () => {}
    }, [])

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