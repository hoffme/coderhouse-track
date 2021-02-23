import './style.scss';

import Item from '../item';
import { Link } from 'react-router-dom';

const ListItems = ({items, onRemoveItem, onAddItem}) => {
    return <div className={"list-items"}>{
        items.length === 0 ?
            <label className={"without-items"}>
                No hay items en el carrito <br></br><Link to={"/"}>Volver</Link>
            </label>
            :
            items.map((item, index) => {
                return <Item
                    item={item}
                    key={index}
                    onAddItem={onAddItem}
                    onRemoveItem={onRemoveItem}
                />
            })
    }</div>;
}

export default ListItems;