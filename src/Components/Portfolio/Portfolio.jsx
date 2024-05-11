import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'


const Portfolio = () => {
  return (
    <div className='portfolio'>
    {/* heading */}
    <span>React Project</span><br/>
    <span>Portfolio</span>
    {/* Slider */}
    <Swiper  spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
          <SwiperSlide>
          <img src="img/sidebar.png" alt="icon is missing" />   
          </SwiperSlide>
          <SwiperSlide>
          <img src="img/ecommerce.png" alt="icon is missing" />   
          </SwiperSlide>
          <SwiperSlide>
          <img src="img/musicapp.png" alt="icon is missing" />   
          </SwiperSlide>
          <SwiperSlide>
          <img src="img/hoc.png" alt="icon is missing" />   
          </SwiperSlide>
    </Swiper>
     
    </div>
  )
}

export default Portfolio
