import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Cart } from './components/Cart'
import { Contact } from './components/Contact'
import { Detail } from './components/Detail'
import { Error404 } from './components/Error404'
import { Footer } from './components/Footer'
import { Info } from './components/Info'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'
import { Products } from './components/Products'

function App() {
  let welcome = 'Bienvenido a nuestra tienda virtual'
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
            <Routes>
              <Route
                  path='/'
                  element={<Navigate to='/inicio' />} />
              <Route
                  path='/inicio'
                  element={<ItemListContainer greeting={welcome}/>} />
              <Route
                  path='/category/info'
                  element={<Info />} />
              <Route
                  path='/category/products'
                  element={<Products />} />
              <Route
                  path='/category/contact'
                  element={<Contact />} />
              <Route
                  path='/item/:id'
                  element={<Detail />} />
              <Route
                  path='/item/:id/:buy'
                  element={ <Cart />} />
              <Route
                  path='*'
                  element={<Error404 />} />
            </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;