'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const CarouselBanner = () => {
  return (
    <Swiper
      pagination
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 4000,
      }}
      className="mb-4 h-[154px] w-full rounded-[10px] bg-white"
    >
      <SwiperSlide>배너내용</SwiperSlide>
      <SwiperSlide>배너내용</SwiperSlide>
      <SwiperSlide>배너내용</SwiperSlide>
    </Swiper>
  );
};

export default CarouselBanner;
