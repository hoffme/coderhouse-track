import './style.scss';

import ItemRow from '../itemRow';
import { Link } from 'react-router-dom';

const ItemList = ({items, onRemoveItem, onAddItem}) => {
    return <div className={"item-list"}>{
        items.length === 0 ?
            <label className={"without-items"}>
                No hay items en el carrito <br></br><Link to={"/"}>Volver</Link>
            </label>
            :
            items.map((item, index) => {
                return <ItemRow
                    item={item}
                    key={index}
                    onAddItem={onAddItem}
                    onRemoveItem={onRemoveItem}
                />
            })
    }</div>;
}

export default ItemList;