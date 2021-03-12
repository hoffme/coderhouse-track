import { SettingsProvider } from './settings';
import { CartProvider } from './cart';
import { ProductsProvider } from './products';
import { UserProvider } from './user';
import { CheckOutProvider } from './checkout';

const AppContext = ({children}) => {
  return <>
    <SettingsProvider>
      <ProductsProvider>
        <UserProvider>
          <CartProvider>
            <CheckOutProvider>
              { children }
            </CheckOutProvider>
          </CartProvider>
        </UserProvider>
      </ProductsProvider>
    </SettingsProvider>
  </>
}

export default AppContext;