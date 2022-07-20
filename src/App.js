import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Routes, Route} from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/products" element={<Products></Products>}/>
      <Route path="/products/:id" element={<Product></Product>}/>
      <Route path="/cart" element={<Cart></Cart>}/>
      <Route path="/contact" element={<Contact></Contact>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/register" element={<Register></Register>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
