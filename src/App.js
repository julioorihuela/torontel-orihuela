import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <div>
        <NavBar title='Torontel' />
      </div>            
      <ItemListContainer greeting="Bienvenid@s!" /> 
      <ItemDetailContainer />     
    </div>
  );
}

export default App;
