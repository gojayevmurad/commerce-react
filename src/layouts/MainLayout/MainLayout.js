import { Outlet } from "react-router-dom";
import LocationHeader from "./components/LocationHeader/LocationHeader";
import SubscribeNews from "./components/SubscribeNews/SubscribeNews";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header auth={true} />
      <LocationHeader />
      <Outlet />
      <SubscribeNews />
      <Footer />
    </>
  );
};

export default MainLayout;
