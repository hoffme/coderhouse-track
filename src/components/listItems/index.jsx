import './style.scss';

const ListItems = ({items, onRemoveItem, onAddItem}) => {
    return <div className={"list-items"}>{
        items.length === 0 ?
            <label className={"without-items"}>No hay items en el carrito</label> :
            items.map((item, index) => {
                return <div className={"item-list"} key={index}>
                    <div className={"count"}>
                        <button onClick={() => onRemoveItem(item.item.id, 1)}>-</button>
                        <label>{item.quantity}</label>
                        <button onClick={() => onAddItem(item.item, 1)}>+</button>
                    </div>
                    <label className={"title"}>{item.item.title}</label>
                    <b className={"price"}>$ {item.item.price * item.quantity}</b>
                    <button className={"button-remove"} onClick={() => onRemoveItem(item.item.id)}>x</button>
                </div>
            })
    }</div>;
}

export default ListItems;