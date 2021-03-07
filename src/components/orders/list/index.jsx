import { Link } from 'react-router-dom';
import './style.scss';

const OrderList = ({orders}) => {

    const amount = order => {
        return order.items.reduce((total, item) => {
            total += (item.price * item.count) - item.discount;
            return total;
        }, 0);
    }

    const dateFormat = date => {
        const year = date.getFullYear();
        const mont = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
        const day = (date.getDay() < 10 ? '0' : '') + date.getDay();
        const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        return year + '/' + mont + '/' + day + ' ' + hour + ':' + minutes;
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