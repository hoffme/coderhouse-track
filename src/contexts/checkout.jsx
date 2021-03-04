import { useState, createContext, useContext } from "react";
import UserContext from "./user";
import CartContext from "./cart";

const CheckOutContext = createContext();

const CheckOutProvider = ({ children }) => {
    const user = useContext(UserContext);
    const cart = useContext(CartContext);
    const [delivery, setDelivery] = useState(null);
    const [payment, setPayment] = useState(null);

    const validDelivery = () => {
        if (!delivery) throw new Error("Entrega: Defina un metodo de entraga");
        if (!delivery.date) throw new Error("Entrega: Seleccione una fecha de entrega");
        if (!delivery.address) throw new Error("Entrega: Seleccione una direccion de entrega");
        
        if (delivery.address.id) return;

        if (!delivery.address.city) throw new Error("Entrega: Seleccione una ciudad");
        if (!delivery.address.address) throw new Error("Entrega: Defina una calle");
        if (!delivery.address.height) throw new Error("Entrega: Defina una altura");        
    }

    const validPayment = () => {
        if (!payment) throw new Error("Pago: Seleccione un metodo de pago");
        if (payment !== 'en-puerta' && payment !== 'mercado-pago') {
            throw new Error("Pago: Metodo de pago invalido");
        }
    }

    const buy = () => new Promise(resolve => {
        if (!user.user) throw new Error("Usuario: Debe ingresar como usuario");
        if (cart.isEmpty()) throw new Error("Carrito: El carrito esta vacio");
        validDelivery();
        validPayment();

        resolve('nice');
    });

    return <CheckOutContext.Provider value={{
        cart,
        user,
        delivery,
        setDelivery,
        payment,
        setPayment,
        buy
    }}>
        {children}
    </CheckOutContext.Provider>
};

export default CheckOutContext;
export { CheckOutProvider };