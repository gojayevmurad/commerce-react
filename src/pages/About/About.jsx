import "./about.scss";
import { NavLink } from "react-router-dom";
import banner from "../../assets/about_banner.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MetaData from "../../components/MetaData";

const About = () => {
  const comment = {
    name: "Arzu",
    surname: "Huseyinova",
    comment:
      "Lorem been the industry's standard dummy  It has survived not only five centuries but also the on leap into electronic typesetting.",
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
      <MetaData title="DNP || HAQQIMIZDA" />
      <div className="about_header">
        <div className="container">
          <div className="about_header--content">
            <div className="location">
              <NavLink to="/">Əsas</NavLink> / <span>Haqqımızda</span>
            </div>
            <h2>Haqqımızda</h2>
          </div>
        </div>
      </div>

      <div className="about_main">
        <div className="container">
          <div className="about_main--content">
            <div className="about_main--img">
              <img
                src="https://www.readycloud.com/wp-content/uploads/2018/08/bigstock-online-shopping-smartphone-tu-233109715-1.jpg"
                alt="about"
              />
            </div>
            <div className="about_main--aside">
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries but also the on leap into
                electronic typesetting.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam!
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
            breakpoints={{
              992: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
            }}
            freeMode={true}
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
