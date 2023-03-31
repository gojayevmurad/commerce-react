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
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="commerce">
      <Header />
      <LocationHeader />
      <div className="container">
        <Product />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
