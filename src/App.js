import './App.css';

import NavBar from './components/navBar';
import CartWidget from './components/cartWidget';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer items={["asd"]}/>
      <CartWidget/>
    </>
  );
}

export default App;
