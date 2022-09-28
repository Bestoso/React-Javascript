import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='Bienvenido a nuestra tienda virtual'/>
    </div>
  );
}

export default App;