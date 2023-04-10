import React, { useEffect, useState } from "react";
import "./cartview.scss";
import { useDispatch, useSelector } from "react-redux";
import FetchData from "../../api/api";
import { deleteItem } from "../../features/cart/cartSlice";

const CartView = ({ setVisibleCart }) => {
  let url = "products?";
  const [productsList, setProductsList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  let itemQuantity = 0;

  const dispatch = useDispatch();

  let cart = [];

  cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart.length) {
      cart.forEach((item) => {
        url += `&id=${item.id}`;
      });
      getProducts();
    } else {
      setVisibleCart(false);
    }
  }, [cart]);

  async function getProducts() {
    let fetchData = await FetchData.getData(url);
    setProductsList(fetchData.data);
  }

  useEffect(() => {
    let totalValue = 0;

    cart.forEach((item) => {
      productsList.forEach((product) => {
        if (item.id == product.id) {
          totalValue +=
            (product.offer ? product.offer : product.price) * item.quantity;
        }
      });
    });

    setTotalPrice(totalValue.toFixed(2));
  }, [productsList]);

  return (
    <div className="cart_view">
      <div
        className={
          productsList.length < 4
            ? "cart_view--products scrollbar"
            : "cart_view--products"
        }
      >
        {productsList.map((product) => {
          cart.forEach((item) => {
            if (item.id == product.id) {
              itemQuantity = item.quantity;
            }
          });
          return (
            <div key={product.id} className="cart_view--products__product">
              <div className="cart_view--products__product__image">
                <img src={product.img[0]} alt={product.name} />
              </div>
              <div className="cart_view--products__product__description">
                <p>{product.name}</p>
                <span>
                  ₼ {product.offer ? product.offer : product.price} x {itemQuantity}
                </span>
              </div>
              <button onClick={() => dispatch(deleteItem(product.id))}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart_view--total_price">
        <div className="cart_view--total_price__title">Ümumi məbləğ</div>
        <div className="cart_view--total_price__price">₼ {totalPrice}</div>
      </div>
      <div className="cart_view--cart_page">
        <button>Səbətə bax</button>
      </div>
      <div className="cart_view--checkout">
        <button>Ödəniş</button>
      </div>
      <p className="cart_view--return">30 gün ərzində qaytarmaq imkanı</p>
    </div>
  );
};

export default CartView;
