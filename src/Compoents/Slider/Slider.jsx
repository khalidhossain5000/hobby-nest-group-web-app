import React from "react";
import sliderImg1 from '../../assets/slider-1.jpg'
import sliderImg2 from '../../assets/fishing.jpg'
import sliderImg3 from '../../assets/sky-divingg-.jpg'
// import Swiper core and required modules
import { Navigation,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
const Slider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{delay:2000}}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {/* slider -1 */}
        <SwiperSlide>
            <div className="relative h-[100vh] w-full">
                <img className="w-full h-[100vh] lg:max-h-[100vh]" src={sliderImg2} alt="" />
                {/* text and black overlay */}
                <div className="absolute inset-0 bg-[#00000091] flex flex-col justify-center items-center text-white text-center p-6">
                    <h2>Discover Local Groups That Share Your Interests</h2>
                    <h5>Sub title goes here</h5>
                </div>
            </div>
        </SwiperSlide>         
      {/* slider - 2 */}
        <SwiperSlide>
            <div className="relative h-[100vh] w-full">
                <img className="w-full h-[100vh] lg:max-h-[100vh]" src={sliderImg3} alt="" />
                {/* text and black overlay */}
                <div className="absolute inset-0 bg-[#00000091] flex flex-col justify-center items-center text-white text-center p-6">
                    <h2>Discover Local Groups That Share Your Interests</h2>
                    <h5>Sub title goes here</h5>
                </div>
            </div>
        </SwiperSlide>         
        {/* slider - 3 */}
        <SwiperSlide>
            <div className="relative h-[100vh] w-full">
                <img className="w-full h-[100vh] lg:max-h-[100vh]" src={sliderImg1} alt="" />
                {/* text and black overlay */}
                <div className="absolute inset-0 bg-[#00000091] flex flex-col justify-center items-center text-white text-center p-6">
                    <h2>Discover Local Groups That Share Your Interests</h2>
                    <h5>Sub title goes here</h5>
                </div>
            </div>
        </SwiperSlide> 

        
      
        ...
      </Swiper>
    </div>
  );
};

export default Slider;
