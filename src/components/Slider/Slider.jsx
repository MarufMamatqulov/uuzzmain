import React, { useState, useRef, useEffect, useMemo } from "react";
import cn from "classnames";

import { Swiper, SwiperSlide } from "@/components/Slider/Swiper";
import Icon from "@/icons";

const Slider = (props) => {
  const {
    autoplay,
    children,
    swiperInit,
    breakpoints,
    slidesPerView,
    spaceBetween,
    navigationClassName,
    ...rest
  } = props;

  const [swiper, setSwiper] = useState(() => swiperInit || null);

  const previousSlideButtonRef = useRef(null);
  const nextSlideButtonRef = useRef(null);

  const handleSwiperInit = (swiper) => {
    return typeof onInit === "function" ? onInit(swiper) : setSwiper(swiper);
  };

  return (
    <Swiper
      wrapperTag="ul"
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      autoplay={autoplay}
      navigation={{
        prevEl: previousSlideButtonRef.current,
        nextEl: nextSlideButtonRef.current,
      }}
      onInit={handleSwiperInit}
      className="relative"
      {...rest}
    >
      <div
        className={cn({
          ["flex gap-2 justify-end  "]: true,
          ["hidden"]: navigationClassName,
        })}
      >
        <button ref={previousSlideButtonRef}>
          <Icon
            icon="left"
            size={32}
            className="hover:text-primary ease-in duration-300 active:text-primary"
          />
        </button>
        <button ref={nextSlideButtonRef}>
          <Icon
            icon="right"
            size={32}
            className="hover:text-primary ease-in duration-300 active:text-primary"
          />
        </button>
      </div>
      {React.Children.map(children, (child) => (
        <SwiperSlide tag="li">{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
