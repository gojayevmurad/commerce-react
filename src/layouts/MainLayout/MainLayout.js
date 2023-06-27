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
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [progress, setProgress] = useState(0)

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

  //! reading progress bar
  window.addEventListener('scroll', updateProgressBar);

  function updateProgressBar() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollPosition / windowHeight) * 100;
    setProgress((progress).toFixed(0));
  }

  return (
    <>
      <div onClick={() => window.scrollTo(0, 0)} className={progress > 10 ? 'progress-bar_container active' : 'progress-bar_container'} >
        <div className="progress-bar" style={{ "--progress-percent": progress, color: 'white' }}>
          <i class="fa-solid fa-chevron-up"></i>
        </div>
      </div>
      {showWelcomePopup && <WelcomePopup closePopup={setShowWelcomePopup} />}
      <Header auth={auth} />
      <Outlet />
      <SubscribeNews />
      <Footer />
    </>
  );
};

export default MainLayout;
