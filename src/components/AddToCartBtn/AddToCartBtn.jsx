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
  };

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
      Səbətə At
    </button>
  );
};

export default AddToCartBtn;
