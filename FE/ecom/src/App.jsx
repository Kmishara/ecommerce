import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/Cart'
import Footer from './components/footer/Footer'
import men_banner from './components/Assetes/banner_mens.png'
import women_banner from './components/Assetes/banner_women.png'
import kids_banner from './components/Assetes/banner_kids.png'
const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory   banner = {men_banner}category="men" />}/>
      <Route path='/women' element={<ShopCategory banner = {women_banner}category="women" />}/>
      <Route path='/kids' element={<ShopCategory banner = {kids_banner}category="kid" />}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>

      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
     
    </div>
  )
}

export default App