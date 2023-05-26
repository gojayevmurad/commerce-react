import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
  addFavoriteProductAsync,
  deleteFavoriteProductAsync,
} from "../../redux/favorites/favoritesSlice";

const AddToWishListBtn = ({ id }) => {
  const dispatch = useDispatch();

  const isAdded = useSelector((state) =>
    state.favorites.data.find((item) => {
      return item._id == id;
    })
  );
  const loading = useSelector((state) => state.favorites.loading[id]);

  const wishListReducer = () => {
    if (isAdded) {
      dispatch(deleteFavoriteProductAsync(id, toast));
    } else {
      dispatch(addFavoriteProductAsync({ productId: id }));
    }
  };
  return (
    <div
      onClick={() => {
        wishListReducer();
      }}
      className={
        loading
          ? "product--actions__wish wish_loading"
          : isAdded
          ? "product--actions__wish added"
          : "product--actions__wish"
      }
      data-title="İstək Siyahısı"
    >
      <div></div>
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
