import { CartProvider } from './cart';
import { ProductsProvider } from './products';
import { UserProvider } from './user';

const AppContext = ({children}) => {
  return <>
    <ProductsProvider>
      <UserProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </UserProvider>
    </ProductsProvider>
  </>
}

export default AppContext;