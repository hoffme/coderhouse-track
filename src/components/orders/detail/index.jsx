import { useContext } from 'react';

import UserContext from '../../../contexts/user';

import './style.scss';

import dateFormat from '../../../utils/dateFormat';
import addressFormat from '../../../utils/addressFormat';

const OrderDetail = ({orderId}) => {
    const {loading, getBuy, getAddress} = useContext(UserContext);

    const order = getBuy(orderId);

    const amount = order => {
        return order.items.reduce((r, item) => {
            r.amount += (item.price * item.count);
            r.discount += item.discount;
            r.total += (item.price * item.count) - item.discount;
            return r;
        }, {total: 0, amount: 0, discount: 0});
    }

    if (loading) return <label>Loading ...</label>;

    return <div className={"order-detail"}>
        <div className={"card"}>
            <h3>Info</h3>
            <label className={'id'}>N° {order.id}</label>
            <label className={'created'}>
                Creado: {dateFormat(order.created.toDate())}
            </label>
        </div>
        <div className={"card"}>
            <h3>Items</h3>
            {order.items.map((item, index) => {
                return <div className={"row"} key={index}>
                    <label className={'item-count'}>{item.count}</label>
                    <label className={'item-title'}>{item.title}</label>
                    <label className={'item-price'}>$ {item.price}</label>
                    <b className={'item-amount'}>$ {(item.price * item.count) - item.discount}</b>
                </div>
            })}
        </div>
        <div className={"card"}>
            <h3>Entrega</h3>
            <label className={"date-delivery"}>Fecha: {order.delivery.date}</label>
            <label className={"address-delivery"}>
                Direccion: {addressFormat(getAddress(order.delivery.address_id))}
            </label>
        </div>
        <div className={"card"}>
            <h3>Importe</h3>
            <label className={"amount-amount"}>Importe: ${amount(order).amount}</label>
            <label className={"discount-amount"}>Descuento: ${amount(order).discount}</label>
            <label className={"total-amount"}>Total: ${amount(order).total}</label>
        </div>
        <div className={"card"}>
            <h3>Pago</h3>
            <label className={"type-payment"}>Tipo: '{order.payment.type}'</label>
        </div>
    </div>
}

export default OrderDetail;