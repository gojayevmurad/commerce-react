import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
} from "../../features/wish/wishSlice";

const AddToWishListBtn = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const { id } = props;
  const dispatch = useDispatch();

  const wishItem = useSelector((state) => {
    return state.wish.find((item) => {
      return item.id == id;
    });
  });

  const WishListReducer = () => {
    if (isAdded) {
      dispatch(removeFromWishList({ id: id }));
      setIsAdded(false);
    } else {
      dispatch(addToWishList({ id: id }));
      setIsAdded(true);
    }
  };

  useEffect(() => {
    wishItem && setIsAdded(true);
    console.log(wishItem);
  }, []);

  return (
    <div
      onClick={() => WishListReducer()}
      className="product--actions__wish"
      data-title="İstək Siyahısı"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isAdded ? "red" : "none"}
        stroke="currentColor"
        strokeWidth={!isAdded ? 1 : 0}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-heart"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </div>
  );
};

export default AddToWishListBtn;
