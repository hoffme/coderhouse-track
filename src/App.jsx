import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CartProvider } from './contexts/cart';
import { ProductsProvider } from './contexts/products';

import Header from './components/header';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import ProductPage from './pages/product';
import CartPage from './pages/cart';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route path={"/search/:query"} component={SearchPage} />
            <Route path={"/search/"} component={SearchPage} />
            <Route path={"/category/:categoryId"} component={SearchPage} />
            <Route path={"/product/:productUrl"} component={ProductPage} />
            <Route path={"/cart/"} component={CartPage} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
