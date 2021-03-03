import { CartProvider } from './contexts/cart';
import { ProductsProvider } from './contexts/products';
import { UserProvider } from './contexts/user';

const AppContext = ({children}) => {
    <ProductsProvider>
        <UserProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </UserProvider>
      </ProductsProvider>
}

export default AppContext;