import React from "react";
import { Link } from "react-router-dom";

const TopHeader = ({ auth }) => {
  return (
    <div className="header--top">
      <div className="container">
        <div className="header--top--content">
          <p>MAĞAZAMIZA XOŞ GƏLMİŞSİNİZ!</p>
          <div className="header--top__actions">
            <ul>
              <Link to="/contact">Əlaqə</Link>
              <Link to="/profile">Hesabım</Link>
            </ul>
            {!auth && (
              <div className="header--top__actions--auth">
                <i className="fa-regular fa-user"></i>
                <Link to="login">Giriş</Link>
                <span>/</span>
                <Link to="register">Qeydiyyat</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
