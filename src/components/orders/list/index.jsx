import { Link } from 'react-router-dom';
import './style.scss';

import dateFormat from '../../../utils/dateFormat';

const OrderList = ({orders}) => {

    const amount = order => {
        return order.items.reduce((total, item) => {
            total += (item.price * item.count) - item.discount;
            return total;
        }, 0);
    }

    if (!orders) return <label>Loading ...</label>;

    return <div className={"order-list"}>{
        orders.map((order, index) => {
            return <Link to={'/user/orders/' + order.id} className={'order-list-card'} key={index} >
                <label className={'id'}>N° {order.id}</label>
                <b className={"amount"}>$ {amount(order)}</b>
                <label className={'created'}>Creado: {dateFormat(order.created.toDate())}</label>
                <label className={"delivery"}>Entrega: {order.delivery.date}</label>
            </Link>;
        })
    }</div>
}

export default OrderList;