import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/footer/Footer";
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'


//1:31:06

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banners={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory  banners={women_banner}  category="women" />} />
            <Route path="/kids" element={<ShopCategory  banners={kid_banner} category="kid" />} />
            <Route path="product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<LoginSignup/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
