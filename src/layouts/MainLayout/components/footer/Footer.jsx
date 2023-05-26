import React, { useEffect } from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer--content">
          <p className="footer--header">
            D<span className="footer__diff">NP</span>
          </p>
          <div className="footer--main">
            <ul>
              <li>
                <h3>Haqqımızda</h3>
                <p>Biz e-ticarət şirkətiyik)</p>
              </li>
              <li>
                <h3>Əsas</h3>
                <a href="#">Haqqımızda</a>
                <a href="#">Məxfilik siyasəti</a>
                <a href="#">Ən yaxşı məhsullar</a>
              </li>
              <li>
                <h3>Əsas Keçidlər</h3>
                <a href="#">Bloq</a>
                <a href="#">Sifariş İzləmə</a>
                <a href="#">Satıcı ol</a>
              </li>
              <li>
                <h3>Kömək</h3>
                <a href="#">Geri ödəmə</a>
                <a href="#">FAQ</a>
                <a href="#">Dəstək</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
