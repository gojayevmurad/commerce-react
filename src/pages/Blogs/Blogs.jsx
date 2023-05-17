import React, { useEffect, useState } from "react";
import "./blogs.scss";
import FetchData from "../../api/api";
import { NavLink } from "react-router-dom";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  async function getBlogs() {
    const data = await FetchData.getData("blogs");
    setBlogs(data.data);
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="about_header">
        <div className="container">
          <div className="about_header--content">
            <div className="location">
              <NavLink style={{color: 'black'}} to="/">Əsas Səhifə</NavLink> / <span>Bloqlar</span>
            </div>
            <h2>Bloqlarımız</h2>
          </div>
        </div>
      </div>

      <div className="blogs_list">
        <div className="container">
          <div className="blogs_list--content">
            {blogs.map((blog) => {
              return (
                <div className="blog_item" key={blog.id}>
                  <div className="blog_item--img">
                    <img src={blog.img} alt="" />
                  </div>
                  <div className="blog_item--info">
                    <div className="blog_item--info--head">
                      <div>
                        <i className="fa-regular fa-user"></i>
                        <span> {blog.author.name}</span>
                      </div>
                      <div>
                        <i className="fa-regular fa-comment"></i>
                        <span> {blog.comments.length} rəy</span>
                      </div>
                    </div>
                    <h3>
                      <NavLink to={`/single-blog/${blog.id}`}>
                        {blog.title}
                      </NavLink>
                    </h3>
                    <p>{blog.text.slice(0, 180) + "..."}</p>
                    <NavLink to={`/single-blog/${blog.id}`} className="btn">
                      Ətraflı
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
