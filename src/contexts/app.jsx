import { SettingsProvider } from './settings';
import { CartProvider } from './cart';
import { CategoryProvider } from './category';
import { ProductsProvider } from './products';
import { UserProvider } from './user';
import { CheckOutProvider } from './checkout';

const AppContext = ({children}) => {
  return <>
    <SettingsProvider>
      <CategoryProvider>
        <ProductsProvider>
          <UserProvider>
            <CartProvider>
              <CheckOutProvider>
                { children }
              </CheckOutProvider>
            </CartProvider>
          </UserProvider>
        </ProductsProvider>
      </CategoryProvider>
    </SettingsProvider>
  </>
}

export default AppContext;