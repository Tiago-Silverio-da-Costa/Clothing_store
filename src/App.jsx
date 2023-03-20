// import Product from "./pages/Product";
import {Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/prodlist" element={<ProductsList/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/log" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
};

export default App;