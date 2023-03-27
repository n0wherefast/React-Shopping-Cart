import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay,Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Carousel() {
    return (
        <>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 10500,
                disableOnInteraction: false,
              }}
              
            pagination={{
              clickable: true,
            }}
          
            modules={[Autoplay,]}
           
            className="mySwiper"
          >
    <SwiperSlide><img className='' src="/src/assets/img/pexels-element-digital-1370295.jpg" alt="" /> </SwiperSlide>
    <SwiperSlide><img className=' ' src="/src/assets/img/pexels-emily-768125.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className=' ' src="/src/assets/img/pexels-stanislav-kondratiev-2908984.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className=' ' src="/src/assets/img/pexels-wendy-van-zyl-1112048.jpg" alt="" /></SwiperSlide>
          </Swiper>
        </>
      );
}

export default Carousel
