import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppContext from './contexts/app';

import HomePage from './pages/home';
import SearchPage from './pages/search';
import ProductPage from './pages/product';
import CheckOutPage from './pages/checkout';
import UserPage from './pages/user';

const App = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/search/:query?"} component={SearchPage} forceRefresh={true} />
          <Route path={"/category/:categoryId"} component={SearchPage} forceRefresh={true} />
          <Route path={"/product/:productUrl"} component={ProductPage} />
          <Route path={"/checkout/"} component={CheckOutPage} />
          <Route path={"/user/"} component={UserPage} />
        </Switch>  
      </AppContext>      
    </BrowserRouter>
  );
}

export default App;
