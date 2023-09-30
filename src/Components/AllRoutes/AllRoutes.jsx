import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from '../Pages/Products/ProductList'
import ProductDetails from '../Pages/Products/Components/ProductDetails'
import HomePage from '../Pages/Home/HomePage'
import Login from '../Pages/Others/Login'
import Register from '../Pages/Others/Register'
import Cart from '../Pages/Cart/Cart'
import PermissionToCart from './PermissionToCart'
import OrderPage from '../Pages/Orders/OrderPage'
import Dashboard from '../Pages/Dashboard/Dashboard'
import PageNotFound from '../Pages/Others/PageNotFound'



const AllRoutes = () => {

    return (

        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/cart' element={<PermissionToCart> <Cart /> </PermissionToCart>} />
            <Route path='/orderPage' element={<PermissionToCart> <OrderPage /> </PermissionToCart>} />
            <Route path='/dashBoard' element={<PermissionToCart> <Dashboard /> </PermissionToCart>} />
            <Route path='*' element={<PageNotFound />} />

        </Routes>

    )
}

export default AllRoutes