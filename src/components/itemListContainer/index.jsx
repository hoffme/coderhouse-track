import './style.css';

import ItemCount from '../itemCount';

const ItemListContainer = ({ title }) => {
    let itemStock = 4;
    
    return <div className={"item-list-container app-width"}>
        <h2>{ title }</h2>
        <div className={"items-list"}>
            <ItemCount
            title={"Agregar Articulo"}
            stock={itemStock}
            onChange={(newCount) => { console.log(newCount) }}
            />
        </div>
    </div>;
}

export default ItemListContainer;