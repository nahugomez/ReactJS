import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  const onAdd = (units) => {
    alert(`Se han agregado ${units} productos`);
  }

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCount product={'Jeans'} stock={10} func={onAdd} />
    </>
  );
}

export default App;
