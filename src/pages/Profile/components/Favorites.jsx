import React, { useState } from "react";
import "./styles/favorites.scss";
import Product from "../../../components/Product/Product";
import { useSelector } from "react-redux";
import AddToWishListBtn from "../../../components/AddToWishListBtn/AddToWishListBtn";

const Item = ({ item }) => {
  const [mouseOver, setMouseOver] = useState(false);

  const { name, offer, price, image } = item;

  return (
    <div className={!mouseOver && "hide"}>
      <img src={image[0]} alt={name} />
      <div>
        <h4>{name}</h4>
        <p className={offer > 0 && "old_price"}>
          {price} {offer > 0 && <span>{offer}</span>}
        </p>
      </div>
      <div
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <div className="selected_item"></div>
        <AddToWishListBtn id={item._id} />
      </div>
    </div>
  );
};

const Favorites = () => {
  const isLoading = useSelector((state) => state.favorites.loading.main);
  const products = useSelector((state) => state.favorites.data);

  return (
    <div className="profile_favorites">
      <h3>İstəklər</h3>
      <div>
        {products.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Favorites;
