import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Styles/Styles.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="h-[440px] mt-20">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/F8sZytF/store-image.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/rm17pXN/img1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/Yc6qg1h/slider-img-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/7nGKPL6/slider-img-3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/TTDnsHn/slider-img-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/zGwGZN5/slider-img-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/zfxnJ0D/slider-img-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/RjB2RYp/slider-img-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/mN0NSCr/IuvTsj.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
