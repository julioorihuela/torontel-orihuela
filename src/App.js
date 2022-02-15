import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar title='Torontel' />
      <ItemListContainer greeting="Bienvenid@s!" />
      <ItemCount />
    </div>
  );
}

export default App;
