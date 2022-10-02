import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Products } from './components/Products';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
        <NavBar/>
        <ItemListContainer greeting='Bienvenido a nuestra tienda virtual'/>
        <Products />
        <Footer />
    </>
  );
}

export default App;