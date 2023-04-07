import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuanity } from "../../features/cart/cartSlice";

const AddToCartBtn = (props) => {
  const { id , inStock} = props;
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  
  

  const cartItem = useSelector((state) =>
    state.cart.find((item) => {
      return item.id == id;
    })
  );

  useEffect(() => {
    cartItem && setAdded(true);
  }, []);

  useEffect(() => {
    !cartItem ? setAdded(false) : setAdded(true);
  }, [cartItem]);

  const addToCartReducer = () => {
    dispatch(addToCart({ id: +id }));
    !added && setAdded(true);
  };

  const decreaseQuanityReducer = () => {
    cartItem.quantity == 1 && setAdded(false);
    dispatch(decreaseQuanity({ id: +id }));
  };

  if(!inStock) return <button className="add_to_cart_btn_out_stock" disabled>Stokda Yoxdur</button>

  if (added)
    return (
      <>
        <button
          className="decrease_quantity_btn"
          onClick={() => decreaseQuanityReducer()}
        >
          -
        </button>
        <input
          className={id}
          readOnly
          type="text"
          value={cartItem && cartItem.quantity ? cartItem.quantity : ""}
        />
        <button
          className="increase_quantity_btn"
          onClick={() => addToCartReducer()}
        >
          +
        </button>
      </>
    );

  

  return (
    <button className="add_to_cart_btn" onClick={() => addToCartReducer()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1px"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-shopping-bag"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      Əlavə Et
    </button>
  );
};

export default AddToCartBtn;
