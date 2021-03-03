import { CartProvider } from './cart';
import { ProductsProvider } from './products';
import { UserProvider } from './user';
import { CheckOutProvider } from './checkout';

const AppContext = ({children}) => {
  return <>
    <ProductsProvider>
      <UserProvider>
        <CartProvider>
          <CheckOutProvider>
           {children}
          </CheckOutProvider>
        </CartProvider>
      </UserProvider>
    </ProductsProvider>
  </>
}

export default AppContext;