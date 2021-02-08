import './App.scss';

import AppHeader from './components/appHeader';
import NavBar from './components/navBar';
import CartContainer from './components/cartContainer';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <>
      <AppHeader />
      <NavBar />
      <ItemListContainer title={"Listado de Articulos"}/>
      <ItemDetailContainer />
      <CartContainer />
    </>
  );
}

export default App;
