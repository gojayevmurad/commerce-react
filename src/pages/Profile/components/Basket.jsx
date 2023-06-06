import React, { useEffect, useState } from "react";
import "./styles/basket.scss";
import { useDispatch, useSelector } from "react-redux";
import emptyBasket from "../../../assets/empty-cart.webp";
import AddToCartBtn from "../../../components/AddToCartBtn/AddToCartBtn";
import {
  getBasketItemsDatasAsync,
  removeBasketItemsAsync,
  setBasketProductsDetails,
} from "../../../redux/basket/basketSlice";
import Loading from "../../../components/Loading/Loading";
import { toast } from "react-hot-toast";

const BasketItem = ({ loading, item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const removeItemHandler = () => {
    dispatch(removeBasketItemsAsync({ productId: item._id, count: 0 }));
  };

  return (
    <li data-loading={loading}>
      <div>
        <div>
          <img src={item.image[0]} alt="" />
        </div>
        <div>
          <h5>{item.name}</h5>
          <p>Qiymət : {item.offer > 0 ? item.offer : item.price}</p>
        </div>
      </div>
      <div>
        <AddToCartBtn
          id={item["_id"]}
          inStock={item.stock_count > 0}
          setQuantity={setQuantity}
        />
      </div>
      <div className="total">
        {(quantity * (item.offer ? item.offer : item.price)).toFixed(2)} ₼
      </div>
      <button className="remove-basket-item" onClick={removeItemHandler}>
        Sil
      </button>
    </li>
  );
};

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.basketItems);
  const products = useSelector((state) => state.basket.productsDetails);
  const loading = useSelector((state) => state.basket.loading.main);

  const [orderMessage, setOrderMessage] = useState("Sifarişi tamamla");

  useEffect(() => {
    dispatch(getBasketItemsDatasAsync(toast));
    return () => {
      dispatch(setBasketProductsDetails([]));
    };
  }, []);

  useEffect(() => {
    dispatch(getBasketItemsDatasAsync(toast));
    window.scrollTo(0, 0);
  }, [basketItems.data.length]);

  return (
    <div className="profile_basket">
      <h3>Səbət</h3>
      {loading && <Loading isLoading={loading} />}

      {products.length > 0 && (
        <ul>
          {products.map((item, index) => {
            return <BasketItem key={index} item={item} loading={loading} />;
          })}
        </ul>
      )}

      {!loading && products.length == 0 && (
        <div className="profile_basket--empty">
          <img src={emptyBasket} alt="empty basket" height={300} />
          <p>Səbətinizdə heçbir məhsul yoxdur.</p>
        </div>
      )}
      {products.length > 0 && (
        <button
          className="order_finally"
          onMouseEnter={() => setOrderMessage("Tezliklə")}
          onMouseLeave={() => setOrderMessage("Sifarişi tamamla")}
        >
          {orderMessage}
        </button>
      )}
    </div>
  );
};

export default Basket;
