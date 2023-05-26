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
