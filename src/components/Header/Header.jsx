import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header--content">
          <NavLink to="/" className="header--logo">
            D<span className="header--logo__text">NP</span>
          </NavLink>
          <div className="header--searchbar">
            <input
              type="text"
              className="header--searchbar__text"
              placeholder="Məhsul Axtar..."
            />
            <select name="category" id="category">
              <option defaultValue="asdf" value="s" disabled selected>
                All Categories
              </option>
            </select>
            <button className="header--searchbar__submit">Axtar</button>
          </div>
          <div className="header--actions">
            <div
              className="header--actions__compare activeCount"
              data-count="1"
              data-title="Müqayisə"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-divide-circle"
              >
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="12" y1="16" x2="12" y2="16" />
                <line x1="12" y1="8" x2="12" y2="8" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div
              className="header--actions__wish activeCount"
              data-count="2"
              data-title="İstək siyahısı"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div
              className="header--actions__cart activeCount"
              data-count="3"
              data-title="Alış-veriş kartı"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-bag"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <div
              className="header--actions__user activeCount"
              data-count="4"
              data-title="İstifadəçi"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
