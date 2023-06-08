import React, { useState } from "react";
import "./subscribeNews.scss";
import bannerImg from "../../../../assets/subscribe_news.jpg";
import { toast } from "react-hot-toast";

const SubscribeNews = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    toast.error("Bu formda funksionallıq yoxdur.");
  };

  return (
    <div className="subscribe_news">
      <img src={bannerImg} alt="" />
      <form onSubmit={submitHandler}>
        <h3>
          <span className="subscribe_news--color">20%</span>
          Endirim Əldə Et
        </h3>
        <p>Yalnız Abunə Olmağınız Kifayətdir</p>
        <div className="subscribe_news--inputgroup">
          <label htmlFor="email">
            <i className="fa-regular fa-envelope"></i>
            <input
              type="email"
              id="email"
              placeholder="EMAİL ÜNVANI"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit">Kupon Al</button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeNews;
