import './App.css';

import NavBar from './components/navBar';
import CartWidget from './components/cartWidget';
import ItemListContainer from './components/itemListContainer';
import ItemCount from './components/itemCount';

function App() {
  let itemStock = 4;

  return (
    <>
      <NavBar/>
      <ItemListContainer>
        <ItemCount
          title={"Agregar Articulo"}
          stock={itemStock}
          onChange={(newCount) => { console.log(newCount) }}
        />
      </ItemListContainer>
      <CartWidget/>
    </>
  );
}

export default App;
