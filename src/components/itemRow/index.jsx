import './style.scss';

const ItemRow = ({item, onRemoveItem, onAddItem}) => {
    return <div className={"item-row"}>
        <div className={"count"}>
            <button onClick={() => onRemoveItem(item.item.id, 1)}>-</button>
            <label>{item.quantity}</label>
            <button onClick={() => onAddItem(item.item, 1)}>+</button>
        </div>
        <label className={"title"}>{item.item.title}</label>
        <b className={"price"}>$ {item.item.price * item.quantity}</b>
        <button className={"button-remove"} onClick={() => onRemoveItem(item.item.id)}>x</button>
    </div>;
}

export default ItemRow;