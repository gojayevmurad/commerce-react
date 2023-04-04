import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuanity } from "../../features/cart/cartSlice";

const AddToCartBtn = (props) => {
  const { id } = props;
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.find((item) => {
      return item.id == id;
    })
  );

  useEffect(() => {
    if (cartItem) {
      setAdded(true);
    }
  }, []);

  const addToCartReducer = () => {
    dispatch(addToCart({ id: +id }));
    !added && setAdded(true);
  };gti 

  const decreaseQuanityReducer = () => {
    cartItem.quantity == 1 && setAdded(false);
    dispatch(decreaseQuanity({ id: +id }));
  };

  if (added)
    return (
      <>
        <button
          className="decrease_quantity_btn"
          onClick={() => decreaseQuanityReducer()}
        >
          -
        </button>
        <input readOnly type="text" value={cartItem.quantity} />
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
