import './style.css';

import ItemList from '../itemList';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ title }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadItems = setTimeout(() => {
            setItems([
                { title: "Fernet 1L", initial: 5, stock: 40, price: 500.00, pictureAlt: "beer", pictureUrl: "https://images.vexels.com/media/users/3/129956/isolated/preview/27c9746749f6da553d790fbbac71c986-copa-de-icono-de-bebida-de-cerveza-by-vexels.png" },
                { title: "Fernet 750", initial: 1, stock: 3, price: 400.00, pictureAlt: "beer", pictureUrl: "https://images.vexels.com/media/users/3/129956/isolated/preview/27c9746749f6da553d790fbbac71c986-copa-de-icono-de-bebida-de-cerveza-by-vexels.png" },
                { title: "Fernet 500", initial: 0, stock: 0, price: 300.00, pictureAlt: "beer", pictureUrl: "https://images.vexels.com/media/users/3/129956/isolated/preview/27c9746749f6da553d790fbbac71c986-copa-de-icono-de-bebida-de-cerveza-by-vexels.png" },
                { title: "Fernet 50", initial: 0, stock: 10, price: 200.00, pictureAlt: "beer", pictureUrl: "https://images.vexels.com/media/users/3/129956/isolated/preview/27c9746749f6da553d790fbbac71c986-copa-de-icono-de-bebida-de-cerveza-by-vexels.png" },
            ])
        }, 2000)

        return () => { clearInterval(loadItems) }
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