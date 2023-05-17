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
                <h3>About Us</h3>
                <p>
                  We know there are a lot of threa developers our but we pride
                  into a firm in the industry.
                </p>
              </li>
              <li>
                <h3>Feature</h3>
                <a href="#">About Us</a>
                <a href="#">Terms Condition</a>
                <a href="#">Best Products</a>
              </li>
              <li>
                <h3>General Links</h3>
                <a href="#">Blog</a>
                <a href="#">Tracking Order</a>
                <a href="#">Become Seller</a>
              </li>
              <li>
                <h3>Helpful</h3>
                <a href="#">Flash Sale</a>
                <a href="#">FAQ</a>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
