import React from "react";
import "./productsList.scss";
import Product from "../Product/Product";

const ProductsList = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="productsList">
      {data.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
