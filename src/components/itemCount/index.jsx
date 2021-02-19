import './style.scss';

const ItemCount = ({
    title = "",
    stock = 0,
    count = 0,
    onAdd = () => {},
    onRemove = () => {}
}) => {
    return <div className={"item-count " + (count > 0 ? "" : "not-added-cart")}>
        {
            (title.length > 0) ?
                <label className={"title"}>{ title }</label> :
                null
        }

        <div className={"count-containter"}>
            <button
                disabled={count <= 0}
                onClick={() => onRemove(1)}
            >-</button>
            <label>{ count }</label>
            <button
                disabled={count >= stock}
                onClick={() => onAdd(1)}
            >+</button>
        </div>
    </div>
}

export default ItemCount;