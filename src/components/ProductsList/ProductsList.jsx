import React from "react";
import "./productsList.scss";
import Product from "../Product/Product";

const ProductsList = (props) => {
  const { data } = props;
  return (
    <div className="productsList">
      {data.map((product) => {
        return <Product key={product["_id"]} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
