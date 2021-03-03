import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppContext from './contexts/app';

import Header from './components/header';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import ProductPage from './pages/product';
import CartPage from './pages/cart';

const App = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/search/:query?"} component={SearchPage} forceRefresh={true} />
          <Route path={"/category/:categoryId"} component={SearchPage} forceRefresh={true} />
          <Route path={"/product/:productUrl"} component={ProductPage} />
          <Route path={"/cart/"} component={CartPage} />
        </Switch>  
      </AppContext>      
    </BrowserRouter>
  );
}

export default App;
