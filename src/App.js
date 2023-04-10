import { Route, Routes, useLocation } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header/Header";
import LocationHeader from "./components/LocationHeader/LocationHeader";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import SubscribeNews from "./components/SubscribeNews/SubscribeNews";
import Footer from "./components/footer/Footer";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Compare from "./pages/Compare/Compare";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartFromLocalStorage } from "./features/cart/cartSlice";
import { setWishFromLocalStorage } from "./features/wish/wishSlice";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import Auth from "./pages/Auth/Auth";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      dispatch(
        setCartFromLocalStorage(JSON.parse(localStorage.getItem("cart")))
      );
    }

    if (localStorage.getItem("wish")) {
      dispatch(
        setWishFromLocalStorage(JSON.parse(localStorage.getItem("wish")))
      );
    }
  }, []);

  return (
    <div className="commerce">
      <Header />
      <LocationHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/single-blog/:id" element={<SingleBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SubscribeNews />
      <Footer />
    </div>
  );
}

export default App;
