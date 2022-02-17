import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar title='Torontel' />
      </div>
            
      <ItemListContainer greeting="Bienvenid@s!" />
      <ItemCount />
    </div>
  );
}

export default App;
