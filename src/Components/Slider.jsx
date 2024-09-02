import React from "react";

import { useEffect, useRef } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import { register } from "swiper/element/bundle";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, A11y } from "swiper/modules";

const Slider = () => {
  const SwiperEl = useRef(null);

  useEffect(() => {
    register();

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    };

    Object.assign(SwiperEl.current, swiperParams);

    SwiperEl.current.initialize();
    SwiperEl.current.swiper.update();
  }, []);

  return (
    <swiper-container ref={SwiperEl} init={false} className="Swiper">
      <div className="swiper-btn__container">
      <div
          onClick={() => {
            SwiperEl.current.swiper.slidePrev();
          }}
          className="swiper-btn__prev-btn"
        ><GrPrevious size={40} color="#333333"/></div>

        <div
          onClick={() => {
            SwiperEl.current.swiper.slideNext();
          }}
          className="swiper-btn__next-btn"
        ><GrNext size={40} color="#333333"/></div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div> {/* пагинация */}
      <swiper-slide>
        <div className="presentation-site-1">
          <div className="content">
            <h1>Лучшие мебели года</h1>
            <h4>собственное произвотсва</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi hic
              quaerat <br /> natus quia! Nobis, laboriosam?
            </p>
            <button>Перейти</button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="presentation-site-2">
          <div className="content">
            <h1>Лучшие мебели года</h1>
            <h4>собственное произвотсва</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi hic
              quaerat <br /> natus quia! Nobis, laboriosam?
            </p>
            <button>Перейти</button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="presentation-site-3">
          <div className="content">
            <h1>Лучшие мебели года</h1>
            <h4>собственное произвотсва</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi hic
              quaerat <br /> natus quia! Nobis, laboriosam?
            </p>
            <button>Перейти</button>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  );
};

export default Slider;
