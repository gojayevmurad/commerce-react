import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/sidebar.scss";

const SideBar = () => {
  const logoutHandler = () => {
    localStorage.removeItem("user");
    window.location.replace("/");
  };

  return (
    <div className="profile_sidebar">
      <h3>
        Xoş Gəlmisən, <span>John Doe</span>
      </h3>

      <ul>
        <li>
          <NavLink to="/profile" end>
            <div>
              <i className="fa-solid fa-parachute-box"></i>
              Sifarişlər
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="favorites">
            <div>
              <i className="fa-regular fa-heart"></i>
              İstəklər
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="change-password">
            <div>
              <i className="fa-solid fa-fingerprint"></i>
              Şifrəni yenilə
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="addresses">
            <div>
              <i className="fa-regular fa-map"></i>
              Ünvanlar
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        </li>
        <li>
          <button onClick={logoutHandler} className="profile_sidebar-logout">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>Hesabdan çıx
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
