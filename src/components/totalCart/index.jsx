import './style.scss';

const TotalCart = ({amount = 0, discount = 0, total = 0}) => {
    return <div className={"total-cart"}>
        <div className={"field-money"}>
            <label>Importe</label>
            <b>$ {amount}</b>
        </div>
        <div className={"field-money"}>
            <label>Descuento</label>
            <b>-$ {discount}</b>
        </div>
        <div className={"field-money"}>
            <label>Total</label>
            <b>$ {total}</b>
        </div>
    </div>   
}

export default TotalCart;