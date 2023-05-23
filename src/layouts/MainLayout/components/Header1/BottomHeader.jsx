import React from "react";
import { NavLink } from "react-router-dom";

const BottomHeader = () => {
  return (
    <div className="header--bottom">
      <div className="container">
        <div className="header--bottom__content">
          <div>
            <div className="header--bottom__mega_menu">
              <div className="header--bottom__mega_menu--main">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                  >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                  Kateqoriyalar
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-up"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-mobile"></i>
                  <p>Mobil və Laptoplar</p>
                </li>
                <li>
                  <i className="fa-solid fa-gamepad"></i>
                  <p>Əyləncə</p>
                </li>
                <li>
                  <i className="fa-solid fa-camera"></i>
                  <p>Şəkil & Video</p>
                </li>
                <li>
                  <i className="fa-solid fa-house"></i>
                  <p>Məişət</p>
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <NavLink to="/">Əsas</NavLink>
              </li>
              <li>
                <NavLink to="shop">Mağaza</NavLink>
              </li>
              <li>
                <NavLink to="about">Haqqımızda</NavLink>
              </li>
              <li>
                <NavLink to="blogs">Bloqlar</NavLink>
              </li>
              <li>
                <NavLink to="contact">Əlaqə</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="header--bottom__track_order">
              <i className="fa-solid fa-location-dot"></i>
              Sifarişi İzlə
            </div>
            <div className="header--bottom__daily_deals">
              <i className="fa-solid fa-percent"></i>
              Günlük Fürsətlər
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
