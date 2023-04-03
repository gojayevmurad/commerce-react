import React from "react";
import "./subscribeNews.scss";
import bannerImg from "../../assets/subscribe_news.jpg";

const SubscribeNews = () => {
  return (
    <div className="subscribe_news">
      <img src={bannerImg} alt="" />
      <form>
        <h3>
          <span className="subscribe_news--color">20%</span>
          Endirim Əldə Et
        </h3>
        <p>Yalnız Abunə Olmağınız Kifayətdir</p>
        <div className="subscribe_news--inputgroup">
          <label htmlFor="email">
          <i className="fa-regular fa-envelope"></i>
            <input  type="email" id="email" placeholder="EMAİL ÜNVANI"/>
          </label>
          <button type="submit">Kupon Al</button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeNews;
