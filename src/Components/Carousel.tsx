import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { book1,book2,book3,book4,book5,book6,book7,book8, } from '../assets/asset';

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
    <SwiperSlide><img className='' src={book1} alt="" /> </SwiperSlide>
    <SwiperSlide><img className=' ' src={book2} alt="" /></SwiperSlide>
    <SwiperSlide><img className=' ' src={book3} alt="" /></SwiperSlide>
    <SwiperSlide><img className=' ' src={book4} alt="" /></SwiperSlide>
    <SwiperSlide><img className=' ' src={book5} alt="" /></SwiperSlide>
    <SwiperSlide><img className=' ' src={book6} alt="" /></SwiperSlide>
    <SwiperSlide><img className=' ' src={book7} alt="" /></SwiperSlide>
    <SwiperSlide><img className=' ' src={book8} alt="" /></SwiperSlide>
          </Swiper>
        </>
      );
}

export default Carousel
