import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getPopularSalesproductsAsync } from "../../../redux/products/productsSlice";

const PopularSales = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const popularSales = useSelector(
    (state) => state.products.popularSalesProducts
  );
  async function getPopularSales() {
    dispatch(getPopularSalesproductsAsync(toast));
  }

  const navigateShop = () => {
    navigate("/shop");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPopularSales();
  }, []);
  return (
    <div className="popular_sales">
      <div className="container">
        <div className="popular_sales--content">
          <div className="popular_sales--head">
            <p>
              <span>Məhşur</span> Məhsullar
            </p>
            <div className="popular_sales--head__button">
              <button onClick={navigateShop}>Daha çox</button>
            </div>
          </div>
          <div className="popular_sales--products">
            {popularSales.data &&
              popularSales.data.map((item, index) => {
                return (
                  <div className="popular_sales--products__item" key={index}>
                    <div className="popular_sales--products__item--image">
                      <img src={item.image[0]} alt={index} />
                    </div>
                    <div className="popular_sales--products__item--desc">
                      <NavLink to={"/product-detail/" + item._id}>
                        {item.name}
                      </NavLink>
                      <div className="popular_sales--products__item--desc--prices">
                        <span className={item.offer > 0 && "old_price"}>
                          ₼ {item.price}
                        </span>
                        {item.offer > 0 && (
                          <span className="new_price">₼ {item.offer}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSales;
