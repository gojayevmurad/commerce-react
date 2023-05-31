import { Outlet } from "react-router-dom";
import SubscribeNews from "./components/SubscribeNews/SubscribeNews";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import WelcomePopup from "./components/WelcomePopup/WelcomePopup";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from 'react-hot-toast'
import { getBasketItemsAsync } from "../../redux/basket/basketSlice";
import { getFavoritesProductsAsync } from "../../redux/favorites/favoritesSlice";

const MainLayout = () => {
  const dispatch = useDispatch()
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  const auth = localStorage.getItem("user");

  useEffect(() => {
    if (auth) {
      dispatch(getBasketItemsAsync(toast));
      dispatch(getFavoritesProductsAsync(toast))
    }
    //#region welcome popup
    const welcomePopup = JSON.parse(localStorage.getItem("welcomePopup"));
    if (!welcomePopup) {
      localStorage.setItem(
        "welcomePopup",
        JSON.stringify({
          show: true,
          date: new Date(),
        })
      );
      setShowWelcomePopup(true);
    } else {
      const date = new Date();
      const diffTime = Math.abs(date - new Date(welcomePopup.date));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 1) {
        localStorage.setItem(
          "welcomePopup",
          JSON.stringify({
            show: true,
            date: new Date(),
          })
        );
        setShowWelcomePopup(true);
      }
    }
    //#endregion
  }, [])
  return (
    <>
      {showWelcomePopup && <WelcomePopup closePopup={setShowWelcomePopup} />}
      <Header auth={auth} />
      <Outlet />
      <SubscribeNews />
      <Footer />
    </>
  );
};

export default MainLayout;
