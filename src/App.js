import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header/Header";
import LocationHeader from "./components/LocationHeader/LocationHeader";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import SubscribeNews from "./components/SubscribeNews/SubscribeNews";
import Footer from "./components/footer/Footer";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Compare from "./pages/Compare/Compare";
import { useEffect } from "react";


function App() {


  useEffect(()=>{
    
  },[])
  
  
  
  return (
    <div className="commerce">
      <Header />
      <LocationHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SubscribeNews />
      <Footer />
    </div>
  );
}

export default App;
