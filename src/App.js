import './App.css';
import { Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import { CartProvider } from './CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='*' element={
          <>
          <h2>error</h2>
          <h1 style={{display:"flex", justifyContent:"center", textAlign:"center", fontSize:"150px", color:"blueviolet"}}>
            Error 404 Page
          </h1>
          </>
        }/>
      </Routes>
    </CartProvider>
    </>
  );
}

export default App;
