import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Bookings from './Pages/Bookings'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Buy from './Pages/Buy'
import Sell from './Pages/Sell'
import Rent from './Pages/Rent'
import Fot from './Pages/Fot'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Det from './Pages/Det'





function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='bookings' element={<Bookings />} />
      <Route path='contact' element={<Contact />} />
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
      <Route path='buy' element={<Buy />} />
      <Route path='sell' element={<Sell />} />
      <Route path='rent' element={<Rent />} />
      <Route path='det' element={<Det />} />
    </Routes>
    <Fot />
  
  
    
  
    </BrowserRouter>
  )
}

export default App
