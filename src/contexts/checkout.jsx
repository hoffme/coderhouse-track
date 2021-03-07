import { useState, createContext, useContext } from "react";
import UserContext from "./user";
import CartContext from "./cart";
import { firestoreFormatDate } from "../firebase";

const CheckOutContext = createContext();

const CheckOutProvider = ({ children }) => {
    const user = useContext(UserContext);
    const cart = useContext(CartContext);
    const [delivery, setDelivery] = useState(null);
    const [payment, setPayment] = useState(null);

    const validDelivery = async () => {
        if (!delivery) throw new Error("Entrega: Defina un metodo de entraga");
        if (!delivery.date) throw new Error("Entrega: Seleccione una fecha de entrega");
        if (!delivery.address) throw new Error("Entrega: Seleccione una direccion de entrega");
        
        if (delivery.address.id) return;

        if (!delivery.address.city) throw new Error("Entrega: Seleccione una ciudad");
        if (!delivery.address.address) throw new Error("Entrega: Defina una calle");
        if (!delivery.address.height) throw new Error("Entrega: Defina una altura");

        const id = await user.addAddress(delivery.address);
        if (!id) throw new Error("Entrega: error al finalizar compra")

        delivery.address.id = id;
    }

    const validPayment = () => {
        if (!payment) throw new Error("Pago: Seleccione un metodo de pago");
        if (payment !== 'en-puerta' && payment !== 'mercado-pago') {
            throw new Error("Pago: Metodo de pago invalido");
        }
    }

    const buy = async () => {
        if (!user.user) throw new Error("Usuario: Debe ingresar como usuario");
        if (cart.isEmpty()) throw new Error("Carrito: El carrito esta vacio");
        validPayment();
        await validDelivery();
        await cart.check();

        const buy = {
            created: firestoreFormatDate(new Date()),
            delivery: { date: delivery.date, address_id: delivery.address.id },
            payment: { type: payment },
            items: cart.items.map(item => {
                return {
                    itemId: item.item.id,
                    title: item.item.title,
                    count: item.quantity,
                    price: item.item.price,
                    discount: item.item.discount,
                }
            })
        }

        const buyId = await user.addBuy(buy);

        clear();
        
        return buyId;
    };

    const clear = () => {
        cart.clear();
        setPayment(null);
        setDelivery(null);
    }

    return <CheckOutContext.Provider value={{
        cart,
        user,
        delivery,
        setDelivery,
        payment,
        setPayment,
        buy,
        clear
    }}>
        {children}
    </CheckOutContext.Provider>
};

export default CheckOutContext;
export { CheckOutProvider };