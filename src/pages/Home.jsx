
import Banner from "../components/banner/Banner";
import Product from "../components/product/Product";
import Feature from "../components/feature/Feature";
import Event from "../components/Event/Event";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
// import Cart from "../components/cart/Cart";

 export default function Home({handleCart}) {
  
  return (
    <>
      <div className="body">
        <div data-bs-spy="scroll" data-bs-target="#mainNavBar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0">
        <Banner></Banner>
        <Product onClick={ handleCart }></Product>
        <Feature></Feature>
        <Event></Event>
        <About> </About>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
