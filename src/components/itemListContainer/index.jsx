import './style.css';

const SinArticulos = () => {
    return <label>No hay articulos</label>
}

const ItemListContainer = ({ items }) => {
    return <div className={"item-list-container app-width"}>
        {(items && items.length > 0) ? items : <SinArticulos/> }
    </div>;
}

export default ItemListContainer;