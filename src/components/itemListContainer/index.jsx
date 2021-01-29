import './style.css';

import { Children } from "react";

const SinArticulos = () => {
    return <label>No hay articulos</label>
}

const ItemListContainer = ({ children }) => {
    return <div className={"item-list-container app-width"}>
        { Children.count(children) > 0 ? children : <SinArticulos/> }
    </div>;
}

export default ItemListContainer;