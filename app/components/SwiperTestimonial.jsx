'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Testimonial from './Testimonial';
import Dotsbullet from './Dotsbullet';
import { useState } from 'react';
import DotsTestimonial from './DotsTestimonial';
const SwiperTestimonial = () => {
    const [slideindex, setSlideindex]=useState(0)
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => setSlideindex(swiper.activeIndex)}
      onSwiper={(swiper) => console.log("onswiper index.."+swiper.activeIndex)}
    >
      <SwiperSlide><Testimonial testimonial={{name:'Courtney Bowers E-MEDIA-16'}} /></SwiperSlide>
      <SwiperSlide><Testimonial testimonial={{name:'John Doe CTWL'}}/></SwiperSlide>
      <span
          className=" flex justify-center items-center gap-2 "
          slot="container-end"
        >
          <DotsTestimonial index={slideindex} position={0} setSlideindex={setSlideindex} />
          <DotsTestimonial index={slideindex} position={1} setSlideindex={setSlideindex} />
        </span>
      
    </Swiper>
  )
}

export default SwiperTestimonial