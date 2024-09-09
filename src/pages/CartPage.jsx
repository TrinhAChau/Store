//cart.jsx

import Footer from "../components/footer/Footer";
import {emptyCart} from "../assets/index";
import { Link } from "react-router-dom";
import Cart from "../components/cart/Cart";
import './cart.css';
import { useEffect } from "react";

const CartPage = ({ cart ,deleteCart}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="container">
      <div style={{margin: '0px 0px 50px'}}>
        <h1 style={{ fontWeight: "bold", paddingTop: "70px" }}>Giỏ hàng</h1>
        </div>
      {cart.length > 0 ? (
        <Cart props={cart} deleteCart={deleteCart}></Cart>
      ) : (
        <div>
           <div className="row" style={{marginBottom:'100px'}}>
           <div className="col-lg-6" >
            <img
              className="image-style"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="col-lg-6 YourCartfeelslonely">
            <h1 className="text-style ">
              Chưa có sản phẩm trong giỏ hàng
            </h1>
            <p className="app-container">
             Khám phá các sản phẩm tại cửa hàng để lựa chọn được sản phẩm phù hợp 
            </p>
            <Link to="/">
              <button className="background-color">
                Xem sản phẩm
              </button>
            </Link>
          </div>
        </div>
        </div>
      )}
      <div className="" >
        <Footer />
      </div>
    </div>
  );
};

export default CartPage;
