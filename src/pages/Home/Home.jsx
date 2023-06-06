import React, { useEffect, useState } from "react";
import "./home.scss";
import { getGamerWorldProductsAsync } from "../../redux/products/productsSlice";
import { toast } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";

//#endregion images

import Loading from "../../components/Loading/Loading";
import Product from "../../components/Product/Product";
import MainSwiper from "./components/MainSwiper";
import OurDiff from "./components/OurDiff";
import Promotion from "./components/Promotion";
import PopularSales from "./components/PopularSales";
import MetaData from "../../components/MetaData";

const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const gamerWorldPopularProducts = useSelector(
    (state) => state.products.gamerWorldProducts
  );

  async function getGamerWorldPopularProducts() {
    dispatch(getGamerWorldProductsAsync(toast));
  }

  useEffect(() => {
    getGamerWorldPopularProducts();
    setIsLoading(false);
  }, []);

  const promotions = [
    {
      imgUrl:
        "https://portotheme.com/html/wolmart/assets/images/demos/demo1/categories/1-1.jpg",
      text: "20% endirim əldə et",
      header: "İDMAN MƏHSULLARI",
      type: "KOLLEKSİYASI",
      priceText: "BAŞLAYIR",
      price: "$170.00",
      dark: false,
    },
    {
      imgUrl:
        "https://portotheme.com/html/wolmart/assets/images/demos/demo1/categories/1-2.jpg",
      text: "Yeni Məhsullar",
      header: "AKSESSUARLAR",
      type: "KOLLEKSİYASI",
      priceText: "BAŞLAYIR",
      price: "$90.00",
      dark: true,
    },
  ];

  return (
    <>
      <MetaData title='DNP || ƏSAS'/>
      <Loading isLoading={isLoading} />
      <MainSwiper />
      <OurDiff />

      <div className="container">
        <div className="promotions--section">
          {promotions.length > 0 &&
            promotions.map((item, index) => {
              return <Promotion item={item} key={index} />;
            })}
        </div>
      </div>

      <div className="gamer_world">
        <div className="container">
          <div className="gamer_world--content">
            <p className="gamer_world--head">
              <span>Əyləncə</span> və <span>Hobbi</span> Dünyası
            </p>
            <div className="productsList">
              {gamerWorldPopularProducts.data &&
                gamerWorldPopularProducts.data.map((item) => {
                  return <Product product={item} key={item["_id"]} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <PopularSales />
    </>
  );
};

export default Home;
