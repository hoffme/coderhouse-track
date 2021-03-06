import './style.scss';

import ItemRow from '../row';

const ItemList = ({items, onRemoveItem, onAddItem}) => {
    return <div className={"item-list"}>{
        items.length === 0 ?
            <label className={"without-items"}>No hay items en el carrito</label>
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