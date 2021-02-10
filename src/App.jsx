import './App.scss';

import Header from './components/header';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer title={"Listado de Articulos"} />
      <ItemDetailContainer />
    </>
  );
}

export default App;
