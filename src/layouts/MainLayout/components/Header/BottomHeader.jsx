import React from "react";
import { NavLink } from "react-router-dom";

const BottomHeader = () => {
  return (
    <div className="header--bottom">
      <div className="container">
        <div className="header--bottom__content">
          <div>
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
              {/* <li> */}
              {/* <NavLink to="blogs">Bloqlar</NavLink> */}
              {/* </li> */}
              <li>
                <NavLink to="contact">Əlaqə</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <NavLink to="/profile" className="header--bottom__track_order">
              <i className="fa-solid fa-location-dot"></i>
              Sifarişi İzlə
            </NavLink>
            <NavLink to="/cooming-soon" className="header--bottom__daily_deals">
              <i className="fa-solid fa-percent"></i>
              Günlük Fürsətlər
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
