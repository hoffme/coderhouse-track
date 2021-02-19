import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CartProvider } from './contexts/cart';

import Header from './components/header';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={"/"}>
            <NavBar />
            <ItemListContainer title={"Novedades"} />
          </Route>
          <Route path={"/search/:query"}>
            <ItemListContainer title={"Resultados"} />
          </Route>
          <Route path={"/search/"}>
            <ItemListContainer title={"Resultados"} />
          </Route>
          <Route path={"/category/:categoryId"}>
            <ItemListContainer title={"Resultados"} />
          </Route>
          <Route path={"/item/:itemId"}>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
