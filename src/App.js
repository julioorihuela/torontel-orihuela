import './App.css';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar title='Torontel' color='blue' />
      <ItemListContainer greeting="Torontel" />
    </div>
  );
}

export default App;
