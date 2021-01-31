import './style.css';

import ItemCount from '../itemCount';

const ItemListContainer = ({ title }) => {
    return <div className={"item-list-container app-width"}>
        <h2>{ title }</h2>
        <div className={"items-list"}>
            <ItemCount
                title={"Agregar Articulo"}
                initial={1}
                stock={5}
                onAdd={(newCount) => { console.log(newCount) }}
            />
        </div>
    </div>;
}

export default ItemListContainer;