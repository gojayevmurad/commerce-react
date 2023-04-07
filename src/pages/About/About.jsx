import "./about.scss";
import { NavLink } from "react-router-dom";
import banner from "../../assets/about_banner.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";

const About = () => {
  const comment = {
    name: "Elvin",
    surname: "Huseynov",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.",
  };

  const comments = [
    comment,
    comment,
    comment,
    comment,
    comment,
    comment,
    comment,
    comment,
  ];

  return (
    <>
      <div className="about_header">
        <div className="container">
          <div className="about_header--content">
            <div className="location">
              <NavLink to="/">Home</NavLink> / <span>Haqqımızda</span>
            </div>
            <h2>Haqqımızda</h2>
          </div>
        </div>
      </div>

      <div className="about_main">
        <div className="container">
          <div className="about_main--content">
            <div className="about_main--img">
              <img src={banner} alt="about" />
            </div>
            <div className="about_main--aside">
              <h3>E-commerce biznes nədir?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries but also the on leap into
                electronic typesetting.
              </p>
              <ul>
                <li>slim body with metal cover</li>
                <li>
                  latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                </li>
                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                <li>
                  NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard
                </li>
              </ul>
              <NavLink to="/contact">Əlaqə</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="services about_services">
        <div className="container">
          <div className="services--content">
            <div className="services--content__item">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H5.63636V24.1818H35"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M34.9982 1H11.8164V18H34.9982V1Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M11.8164 7.18164H34.9982"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div>
                <h3>Pulsuz Kargo</h3>
                <p>100₼ və yuxarı sifarişlərə</p>
              </div>
            </div>
            <div className="services--content__item">
              <svg
                width="32"
                height="34"
                viewBox="0 0 32 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M30.7 2L29.5 10.85L20.5 9.65"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div>
                <h3>Pulsuz Qaytarma</h3>
                <p>30 gün ərzində</p>
              </div>
            </div>
            <div className="services--content__item">
              <svg
                width="32"
                height="38"
                viewBox="0 0 32 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div>
                <h3>Təhlükasiz Ödəniş</h3>
                <p>100% təhlükəsiz online ödəniş</p>
              </div>
            </div>
            <div className="services--content__item">
              <svg
                width="32"
                height="35"
                viewBox="0 0 32 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M16 28V22"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
                <path
                  d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                ></path>
              </svg>
              <div>
                <h3>Ən Yaxşı Keyfiyyət</h3>
                <p>Orijinal Məhsul Zəmanəti</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_feedback">
        <div className="about_feedback--content">
          <h3>İstifadəçi Rəyləri</h3>
          <Swiper
            className="about_slider"
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
          >
            {comments.map((comment, index) => {
              return (
                <SwiperSlide className="about_slide" key={index}>
                  <div className="about_feedback--comment">
                    <p>{comment.comment}</p>
                    <div className="about_feedback--comment--user">
                      <div className="user_img">
                        <img src="https://i.pravatar.cc/150?img=1" alt="user" />
                      </div>
                      <div className="user_info">
                        <h4>
                          {comment.name} {comment.surname}
                        </h4>
                        <span>12.12.2021</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default About;
