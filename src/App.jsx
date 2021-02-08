import './App.scss';

import AppHeader from './components/appHeader';
import CartContainer from './components/cartContainer';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <>
      <AppHeader />
      <ItemListContainer title={"Listado de Articulos"}/>
      <ItemDetailContainer />
      <CartContainer />
    </>
  );
}

export default App;
