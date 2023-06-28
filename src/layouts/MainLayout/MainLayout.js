import { Outlet } from "react-router-dom";
import SubscribeNews from "./components/SubscribeNews/SubscribeNews";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import WelcomePopup from "./components/WelcomePopup/WelcomePopup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-hot-toast'
import { getBasketItemsAsync, getBasketItemsDatasAsync, removeBasketItemsAsync } from "../../redux/basket/basketSlice";
import { getFavoritesProductsAsync } from "../../redux/favorites/favoritesSlice";
import { confirmDialog } from "primereact/confirmdialog";

const MainLayout = () => {
  const dispatch = useDispatch()
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
  const [progress, setProgress] = useState(0)
  const [sideBasket, setSideBasket] = useState(false);
  const products = useSelector((state) => state.basket.productsDetails);
  const loadingProducts = useSelector((state) => state.basket.loading.main);
  const basketItems = useSelector((state) => state.basket.basketItems.data);
  const [totalPrice, setTotalPrice] = useState(0);

  const auth = localStorage.getItem("user");

  const calculateTotalPrice = () => {
    products.forEach(product => {
      basketItems.forEach((basketItem) => {
        if (basketItem.product == product._id) {
          const itemPrice = product.offer > 0 ? product.offer : product.price
          setTotalPrice(price => price + (basketItem.count * itemPrice))
        }
      })
    })
  }

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
  useEffect(() => {
    if (sideBasket == true && basketItems.length > 0) {
      dispatch(getBasketItemsDatasAsync(toast));
      setTotalPrice(0);
    }
  }, [sideBasket])

  useEffect(() => {

  }, [products])

  //! reading progress bar
  window.addEventListener('scroll', updateProgressBar);
  function updateProgressBar() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollPosition / windowHeight) * 100;
    setProgress((progress).toFixed(0));
  }

  const removeItemHandler = (id) => {
    dispatch(removeBasketItemsAsync({ productId: id, count: 0 }))
  };

  useEffect(() => {
    setTotalPrice(0)
    dispatch(getBasketItemsDatasAsync(toast));
    calculateTotalPrice();
  }, [basketItems])

  return (
    <>
      <div onClick={() => window.scrollTo(0, 0)} className={progress > 10 ? 'progress-bar_container active' : 'progress-bar_container'} >
        <div className="progress-bar" style={{ "--progress-percent": progress, color: 'white' }}>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </div>
      {/* SideBar Basket */}
      <div onMouseDown={() => setSideBasket(false)} className="sidebar_basket--overlay" data-visible={sideBasket}></div>
      <div data-visible={sideBasket} className="sidebar_basket">
        <div className="sidebar_basket--head">
          <h5>Səbət</h5>
          <button onClick={() => setSideBasket(false)}>Bağla <i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
        <div className="content">
          {loadingProducts && basketItems.length > 0 && <div className="loading"></div>}
          {!loadingProducts && basketItems.length > 0 &&
            products.map((item, index) => {
              let count
              basketItems.forEach((basketItem) => {
                if (basketItem.product == item._id) {
                  count = basketItem.count
                  return;
                }
              })
              return <div key={index} className="item">
                <div className="desc">
                  <p>{item.name}</p>
                  <p className="count">{count} X <span className="price">₼{item.offer ? item.offer : item.price}</span></p>
                </div>
                <img src={item.image[0]} />
                <button onClick={() => removeItemHandler(item._id)} className="delete" >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            })
          }
        </div>
        {
          basketItems.length > 0 ? (
            <div className="actions">
              <p>Ümumi <span>${totalPrice.toFixed(2)}</span></p>
              <div className="bottom">
                <button className="view_cart">Səbətə keç</button>
                <button className="checkout">Sifariş</button>
              </div>
            </div>
          ) : (
            <p className="empty-cart">Səbətiniz boşdur</p>
          )
        }

      </div>
      {showWelcomePopup && <WelcomePopup closePopup={setShowWelcomePopup} />}
      <Header setSideBasket={setSideBasket} auth={auth} />
      <Outlet />
      <SubscribeNews />
      <Footer />
    </>
  );
};

export default MainLayout;
