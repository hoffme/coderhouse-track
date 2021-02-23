import './style.scss';

const CartAmounts = ({amounts}) => {
    return <div className={"cart-amounts"}>
        <div className={"field-money"}>
            <label>Importe</label>
            <b>$ {amounts.amount}</b>
        </div>
        <div className={"field-money"}>
            <label>Descuento</label>
            <b>-$ {amounts.discount}</b>
        </div>
        <div className={"field-money"}>
            <label>Total</label>
            <b>$ {amounts.total}</b>
        </div>
    </div>   
}

export default CartAmounts;