import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from "./components/Footer"
import Header from "./components/header"
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Users from './components/users';
import Login from './components/Login';
import Products from './components/products';
import ProductDetails from './components/ProductDetails';
import Register from './components/Register';

function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <h1>This is My First App</h1>
        <Header />

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='users' element={<Users />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<ProductDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
