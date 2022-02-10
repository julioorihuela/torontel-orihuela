import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar title='Torontel' />
      <ItemListContainer greeting="Bienvenid@s!" />
    </div>
  );
}

export default App;
