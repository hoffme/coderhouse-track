import './style.scss';

const ListItems = ({items, onRemoveItem}) => {
    return <div className={"list-items"}>{
        items.length === 0 ?
            <label className={"without-items"}>No hay items en el carrito</label> :
            items.map((item, index) => {
                return <div className={"item-list"} key={index}>
                    <label className={"quantity"}>{item.quantity}</label>
                    <label className={"title"}>{item.item.title}</label>
                    <b className={"price"}>$ {item.item.price * item.quantity}</b>
                    <button onClick={() => onRemoveItem(item.item.id)}>x</button>
                </div>
            })
    }</div>;
}

export default ListItems;