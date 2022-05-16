import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'
import Content from './Components/Content'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Pageone from './Components/Pageone'


function App() {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart)
  };


  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
    <div>
      <BrowserRouter>
      <Navbar cart={cart}/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/menu' element={<Content add={handleClick} cart={setCart}/>}/>
      <Route path='/one' element={<Pageone add={handleClick} cart={setCart}/>}/>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
