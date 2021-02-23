import { createContext, useState } from 'react';

const defaultCart = { items: [] };

const CartContext = createContext();

const CartProvider = ({ cart = defaultCart, children }) => {
    const [items, setItems] = useState(cart.items.reduce((items, item) => {
        return items[item.item.id] = item;
    }, {}));

    const addItem = (item, quantity) => {
        const newItems = {...items};

        if (!newItems[item.id]) newItems[item.id] = { item: item, quantity: 0 };

        newItems[item.id].quantity += quantity;

        if (newItems[item.id].quantity >= newItems[item.id].item.stock) {
            newItems[item.id].quantity = newItems[item.id].item.stock;
        }

        setItems(newItems);
    }

    const removeItem = (itemId, quantity = null) => {
        const newItems = {...items};

        if (!newItems[itemId]) return;
        if (quantity) newItems[itemId].quantity -= quantity;
        if (!quantity || newItems[itemId].quantity <= 0) delete newItems[itemId];
    
        setItems(newItems);
    }

    const clearItems = () => setItems({});

    const itemInCart = (itemID) => itemID in items;

    const getItem = (itemID) => items[itemID];

    const isEmpty = () => Object.keys(items).length === 0;

    const amounts = () => {
        const amounts = {};

        amounts.amount = Object.values(items).reduce((total, item) => {
            return total += (item.item.price * item.quantity);
        }, 0);
        amounts.discount = 0;
        amounts.total = amounts.amount - amounts.discount;

        return amounts;
    }

    const totalCount = () => {
        return Object.values(items).reduce((total, item) => item.quantity, 0);
    }

    const availableItem = (product) => Math.min(product.stock - quantityItem(product.id), 10);

    const quantityItem = (productId) => items[productId] ? items[productId].quantity : 0

    return <CartContext.Provider value={{
        cart: { items: Object.values(items) },
        addItem,
        removeItem,
        clearItems,
        itemInCart,
        getItem,
        quantityItem,
        availableItem,
        amounts: amounts(),
        totalCount: totalCount(),
        isEmpty
    }}>
        {children}
    </CartContext.Provider>
}

export default CartContext;
export { CartProvider };