import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper";

const SwiperBtnNext = () => {
  const swiper = useSwiper();
  return (
    <button className="swiper-next-btn" onClick={() => swiper.slideNext()}>
      <i className="fa-solid fa-chevron-right"></i>
    </button>
  );
};

const SwiperBtnPrev = () => {
  const swiper = useSwiper();
  return (
    <button className="swiper-prev-btn" onClick={() => swiper.slidePrev()}>
      <i className="fa-solid fa-chevron-left"></i>
    </button>
  );
};

const MainSwiper = () => {
  const items = [
    {
      img: "https://portotheme.com/html/wolmart/assets/images/demos/demo1/sliders/skate.png",
      labelEn: "man",
      backgroundImage:
        "https://portotheme.com/html/wolmart/assets/images/demos/demo1/sliders/slide-2.jpg",
      reverse: true,
    },
    {
      img: "https://portotheme.com/html/wolmart/assets/images/demos/demo1/sliders/men.png",
      labelEn: "man",
      backgroundImage:
        "https://portotheme.com/html/wolmart/assets/images/demos/demo1/sliders/slide-3.jpg",
    },
    {
      img: "https://portotheme.com/html/wolmart/assets/images/demos/demo1/sliders/skate.png",
      backgroundImage:
        "https://portotheme.com/html/wolmart/assets/images/demos/demo1/sliders/slide-1.jpg",

      labelEn: "man",
    },
  ];

  const slideChangeHandler = (swiper) => {
    const elements = swiper.pagination.bullets;
    const nextBtn = document.querySelector(".swiper-next-btn");
    const prevBtn = document.querySelector(".swiper-prev-btn");

    if (elements[elements.length - 1].classList.contains("active")) {
      nextBtn.classList.add("hide");
    } else {
      nextBtn.classList.remove("hide");
    }

    if (elements[0].classList.contains("active")) {
      prevBtn.classList.add("hide");
    } else {
      prevBtn.classList.remove("hide");
    }
  };

  return (
    <Swiper
      className="header_swiper"
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet ",
        bulletActiveClass: "swiper-pagination-bullet-active active",
      }}
      onSlideChange={slideChangeHandler}
      modules={[Pagination]}
      slidesPerGroup={1}
      slidesPerView={1}
      onMouseLeave={(e) => e.target.swiper.autoplay.start()}
    >
      <SwiperBtnPrev />
      <SwiperBtnNext />
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          className="header_swiper--slide"
          style={{ width: "max-content" }}
        >
          <div
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
            className={item.reverse ? "reverse_slide" : ""}
          >
            <img className="parallax-image" src={item.img} alt="" />
            <div className="header_swiper--slide__content">
              <p className="text-light">
                İdman-
                <span className="text-orange">Əyləncə</span>
              </p>
              <h3 className="text-secondary">Yeni & Keyfiyyətli</h3>
              <span className="text-light">Yalnız bu həftə sonunadək.</span>
              <button>
                İNDİ AL <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
