import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CartProvider } from './contexts/cart';

import Header from './components/header';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import ProductDetailPage from './pages/productDetail';
import CartPage from './pages/cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/search/:query"} component={SearchPage} />
          <Route path={"/search/"} component={SearchPage} />
          <Route path={"/category/:categoryId"} component={SearchPage} />
          <Route path={"/product/:productId"} component={ProductDetailPage} />
          <Route path={"/cart/"} component={CartPage} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
