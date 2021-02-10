import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <NavBar />
          <ItemListContainer title={"Novedades"} />
        </Route>
        <Route path={"/search/"}>
          <ItemListContainer title={"Resultados"} />
        </Route>
        <Route path={"/search/:query"}>
          <ItemListContainer title={"Resultados"} />
        </Route>
        <Route path={"/category/:id"}>
          <ItemListContainer title={"Resultados"} />
        </Route>
        <Route path={"/item/:id"}>
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
