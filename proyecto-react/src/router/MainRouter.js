import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Detail } from '../components/Detail'
import { Error404 } from '../components/Error404'
import { Footer } from '../components/Footer'
import { ItemListContainer } from '../components/ItemListContainer'
import { NavBar } from '../components/NavBar'
import { Products } from '../components/Products'

export const MainRouter = () => {
    let welcome = 'Bienvenido a nuestra tienda virtual'
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path='/' element={<Navigate to='/inicio' />} />
                    <Route path='/inicio' element={<ItemListContainer greeting={welcome}/>} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:product' element={<Detail />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}
