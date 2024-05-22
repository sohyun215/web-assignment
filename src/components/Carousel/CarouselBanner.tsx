'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const DUMMY_IMAGES = [
  'https://cdn.pixabay.com/photo/2018/01/08/09/46/pill-3069032_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/08/02/14/27/vitamin-b-871135_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/01/28/18/28/pills-3114364_1280.jpg',
];

const CarouselBanner = () => {
  return (
    <Swiper
      pagination
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 4000,
      }}
      className="mb-4 h-[154px] w-full rounded-[10px] bg-white md:h-96"
    >
      {DUMMY_IMAGES.map((img) => (
        <SwiperSlide key={img}>
          <Image
            src={img}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-fill"
            alt="배너 이미지"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselBanner;
