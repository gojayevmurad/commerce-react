import React from "react";

import "./locationheader.scss";

const LocationHeader = () => {
  return (
    <div className="locationheader">
      <div className="container">
        <div className="locationheader--content">
          <ul className="locationheader--list">
            <li className="locationheader--list__categories">
              <div className="locationheader--list__categories__leftside">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-align-left"
                >
                  <line x1="17" y1="10" x2="3" y2="10" />
                  <line x1="21" y1="6" x2="3" y2="6" />
                  <line x1="21" y1="14" x2="3" y2="14" />
                  <line x1="17" y1="18" x2="3" y2="18" />
                </svg>
                Bütün kateqoriyalar
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <ul className="locationheader--list__categories--absolutecategories">
                <li>
                  <div className="absolutecategories--leftside">
                    <i class="fa-solid fa-laptop-code"></i>
                    Mobil və Laptop
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
                <li>
                  <div className="absolutecategories--leftside">
                    <i class="fa-solid fa-gamepad"></i>
                    Əyləncə
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
                <li>
                  <div className="absolutecategories--leftside">
                    <i class="fa-solid fa-photo-film"></i>
                    Şəkil və Video
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
                <li>
                  <div className="absolutecategories--leftside">
                    <i class="fa-solid fa-motorcycle"></i>
                    Nəqliyyat
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
              </ul>
            </li>
            <li className="locationheader--list__items">
              <a href="#">Əsas Səhifə</a>
            </li>
            <li className="locationheader--list__items">
              <a href="#">Mağaza</a>
            </li>
            <li className="locationheader--list__items">
              <a href="#">Səhifələr</a>
            </li>
            <li className="locationheader--list__items">
              <a href="#">Haqqımızda</a>
            </li>
            <li className="locationheader--list__items">
              <a href="#">Bloq</a>
            </li>
            <li className="locationheader--list__items">
              <a href="#">Əlaqə</a>
            </li>
          </ul>
          <div className="locationheader--seller">
            <button>
              Become a Seller
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHeader;
