import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/sidebar.scss";

const SideBar = () => {
  return (
    <div className="profile_sidebar">
      <h3>
        Xoş Gəlmisən, <span>John Doe</span>
      </h3>

      <ul>
        <li>
          <NavLink to="/profile" end>
            <div>
              <i class="fa-solid fa-parachute-box"></i>
              Sifarişlər
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="favorites">
            <div>
              <i class="fa-regular fa-heart"></i>
              Bəyənilənlər
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="personal-data">
            <div>
              <i class="fa-regular fa-user"></i>
              Şəxsi məlumatlar
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="change-password">
            <div>
              <i class="fa-solid fa-fingerprint"></i>
              Şifrəni dəyiş
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="addresses">
            <div>
              <i class="fa-regular fa-map"></i>
              Ünvanlar
            </div>
            <i class="fa-solid fa-chevron-right"></i>
          </NavLink>
        </li>
        <li>
          <div className="profile_sidebar-logout">
            <div>
              <i class="fa-solid fa-arrow-right-to-bracket"></i>Hesabdan çıx
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
