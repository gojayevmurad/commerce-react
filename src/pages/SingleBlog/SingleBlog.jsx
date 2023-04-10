import React, { useEffect, useState } from "react";
import "./singleBlog.scss";
import { NavLink, useParams } from "react-router-dom";
import FetchData from "../../api/api";
import Product from "../../components/Product/Product";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [products, setProducts] = useState([]);

  let productsUrl = "products?";
  let productsId = [];

  for (let i = 0; i < 2; i++) {
    let randomNum = Math.ceil(Math.random() * 11);

    if (productsId.includes(randomNum)) {
      i--;
    } else {
      productsId.push(randomNum);
    }
  }

  for (let i = 0; i < productsId.length; i++) {
    productsUrl += `id=${productsId[i]}&`;
  }

  async function getBlog() {
    const data = await FetchData.getData(`blogs/${id}`);
    setBlog(data.data);
  }

  async function getProducts() {
    const data = await FetchData.getData(productsUrl);
    setProducts(data.data);
  }


  useEffect(() => {
    getBlog();
    getProducts();
  }, []);

  return (
    <>
      <div className="about_header">
        <div className="container">
          <div className="about_header--content">
            <div className="location">
              <NavLink style={{ color: "black" }} to="/">
                Əsas Səhifə
              </NavLink>{" "}
              / <span>Bloqlar</span>
            </div>
            <h2 className="margin-20">{blog && blog.title}</h2>
          </div>
        </div>
      </div>

      {blog && (
        <div className="single_blog--main">
          <div className="container">
            <div className="single_blog--content">
              <div className="single_blog--left">
                <div className="single_blog--left--image">
                  <img src={blog.img} alt="" />
                </div>
                <div className="single_blog--left--title">
                  <div>
                    <i className="fa-regular fa-user"></i>
                    <span>{blog.author.name}</span>
                  </div>
                  <div>
                    <i className="fa-regular fa-comment"></i>
                    <span> {blog.comments.length} rəy</span>
                  </div>
                </div>
                <p className="single_blog--left--blog">{blog.text}</p>
              </div>
              <div className="single_blog--right">
                <div className="single_blog--right--popular_products">
                  <h3>Məhsullar</h3>
                  {products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBlog;
