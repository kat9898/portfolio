import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { EffectFlip, Navigation, Pagination } from 'swiper';
import "swiper/swiper.scss";

import './Slider.scss';

type Props = {
    direction?: string,
    baseImgPath?: string,
    list?: []
}

const Slider = (props: Props) => {
    const {direction, baseImgPath, list} = props; 
  return (
    <Swiper
        loop={true}
        direction="vertical"
    >
        <SwiperSlide>
                    <img
                      src={`${baseImgPath}${list}`}
                      alt="Project"
                      className="slide-image"
                    />
                  </SwiperSlide>
    </Swiper>
  )
}

export default Slider