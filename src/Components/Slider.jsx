import React, { useState } from "react";

import { useEffect, useRef } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import { register } from "swiper/element/bundle";

const Slider = () => {
  const SwiperEl = useRef(null);

  const [isHydrated, setIsHydrated] = useState(false); // переменная в которо содержится ответ на вопрос произошла ли гидратация JS

  useEffect(() => {
    register();

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true, // зацикленность слайдов
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    };

    Object.assign(SwiperEl.current, swiperParams);

    SwiperEl.current.initialize();
    SwiperEl.current.swiper.update();

    setIsHydrated(true); // гидратация произошла

    return () => {
      setIsHydrated(false); // очистить гидратацию при размонтировании
    };
  }, []);

  return (
    <div className="swiper__wrapper">
      <div
        onClick={() => {
          SwiperEl.current.swiper.slidePrev();
        }}
        className="swiper-btn__prev-btn"
      >
        <GrPrevious size={40} color="#333333" />
      </div>

      <div
        onClick={() => {
          SwiperEl.current.swiper.slideNext();
        }}
        className="swiper-btn__next-btn"
      >
        <GrNext size={40} color="#333333" />
      </div>
      <swiper-container ref={SwiperEl} init={false} className="Swiper">
        <div className="swiper-pagination" slot="pagination"></div>

        <swiper-slide>
          {/* Первый слайд */}
          <div className="presentation-site-1">
            <div className="content">
              <h1>Лучшие мебели года</h1>
              <h4>собственное произвотсва</h4>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                hic quaerat <br /> natus quia! Nobis, laboriosam?
              </p>
              <button>Перейти</button>
            </div>
          </div>
        </swiper-slide>
        {isHydrated /* осли JS ещё не применился (не произошло гидратации), то мы не показываем остальные слайды (показываем только первый) */ && (
          <>
            {/* если хочешь добавить слайды, добавляй в этот контейнер */}
            <swiper-slide>
              <div className="presentation-site-2">
                <div className="content">
                  <h1>Лучшие мебели года</h1>
                  <h4>собственное произвотсва</h4>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi hic quaerat <br /> natus quia! Nobis, laboriosam?
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi hic quaerat <br /> natus quia! Nobis, laboriosam?
                  </p>
                  <button>Перейти</button>
                </div>
              </div>
            </swiper-slide>
          </>
        )}
      </swiper-container>
    </div>
  );
};

export default Slider;
