// App.jsx

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";


const App = () => {
  
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(false);
  const [count, setCount] = useState(0);
  const handleCart = (item) => {
    setCart([...cart, item]);
    // setCount(count + 1);
    // // console.log(cart);
    setNotification(true);
    const timmer = setTimeout(() => {
      setNotification(false);
    }, 100);
    return () => clearTimeout(timmer);
  };
  useEffect(() => {
    const number = cart.length;
      setCount(number)
    },[cart]);
  const deleteCart = (items) => {
    setCart(items);
    setNotification(true);
  };
  return (
    <Router>
      <div>
        <NavBar cart={ cart } amount={ count} notice={notification}></NavBar>
        <Routes>
          {/* Pass addToCart function and cartItems to Home component */}
          <Route
            path="/"
            element={<Home  cart={cart} count={count} handleCart={ handleCart } />}
          />
          {/* Pass cartItems to Cart component */}
          <Route
            path="CartPage"
            element={<CartPage cart={cart} deleteCart={deleteCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



