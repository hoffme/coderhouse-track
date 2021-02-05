import './App.css';

import NavBar from './components/navBar';
import CartWidget from './components/cartWidget';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer title={"Listado de Articulos"}/> */}
      <ItemDetailContainer />
      <CartWidget/>
    </>
  );
}

export default App;
