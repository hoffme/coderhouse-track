import { useContext } from 'react';

import UserContext from '../../../contexts/user';

import './style.scss';

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

    const dateFormat = date => {
        const year = date.getFullYear();
        const mont = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
        const day = (date.getDay() < 10 ? '0' : '') + date.getDay();
        const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        return year + '/' + mont + '/' + day + ' ' + hour + ':' + minutes;
    }

    const addressFormat = address => {
        return  address.city + ', ' + 
                address.address + ' ' + 
                address.height + ' ' + 
                (address.deptoNumber ? address.deptoNumber : '');
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
                    <label className={'item-discount'}>-$ {item.discount}</label>
                    <b className={'item-amount'}>$ {(item.count * item.count) - item.discount}</b>
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