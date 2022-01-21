import React from 'react'
import {Home, Contact, AboutUs, Products, Cart, ContainerItemDetail, NotFound} from '../componentsRoutes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../../context/cartContext'

const Router = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/products' element={<Products /> } />
                    <Route path='/products/category/:id' element={<ContainerItemDetail /> } />
                    <Route path='/aboutus' element={ <AboutUs /> } />
                    <Route path='/contact' element={ <Contact /> } />
                    <Route path='/cart' element={ <Cart /> } />
                    <Route path='/*' element={ <NotFound /> } />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
};
 
export { Router };  