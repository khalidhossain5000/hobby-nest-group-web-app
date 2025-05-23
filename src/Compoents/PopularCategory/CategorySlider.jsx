import React from "react";

// import Swiper core and required modules
import { Navigation,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Lottie from "lottie-react";
import gaming from '../../lottieFile/new-gmingg.json'
import photo from '../../lottieFile/photogrphy.json'
import running from '../../lottieFile/running.json'
import reading from '../../lottieFile/reading.json'
import fishing from '../../lottieFile/fishing.json'
const CategorySlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation,Autoplay]}
        spaceBetween={80}
        slidesPerView={3}
        navigation
        loop={true}
        autoplay={{delay:2000}}
        breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      >
        {/* slider -1 */}
        <SwiperSlide>
            <div className="relative text-center flex flex-col items-center space-y-12">
                <div className="lottie w-7/12 h-7/12 mx-auto ">
                    <Lottie animationData={gaming} />
                </div>
                <div className="content">
                    <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">Video Gaming</h3>
                </div>
            </div>
        </SwiperSlide>         
    {/* slider -2 */}
        <SwiperSlide>
            <div className="relative text-center flex flex-col items-center space-y-12">
                <div className="lottie w-7/12 h-7/12 mx-auto">
                    <Lottie animationData={photo} />
                </div>
                <div className="content">
                    <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">PhotoGraphy</h3>
                </div>
            </div>
        </SwiperSlide>         
    {/* slider -3 */}
        <SwiperSlide>
            <div className="relative text-center flex flex-col items-center space-y-12">
                <div className="lottie w-7/12 h-7/12 mx-auto">
                    <Lottie animationData={running} />
                </div>
                <div className="content">
                    <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">Running</h3>
                </div>
            </div>
        </SwiperSlide>       
     {/* slider -4 */}
        <SwiperSlide>
            <div className="relative text-center flex flex-col items-center space-y-12">
                <div className="lottie w-8/12 h-7/12 mx-auto">
                    <Lottie animationData={reading} />
                </div>
                <div className="content">
                    <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">Reading</h3>
                </div>
            </div>
        </SwiperSlide>      
          {/* slider -5*/}
        <SwiperSlide>
            <div className="relative text-center flex flex-col items-center space-y-12">
                <div className="lottie w-7/12 h-7/12  mx-auto">
                    <Lottie animationData={fishing} />
                </div>
                <div className="content">
                    <h3 className="lg:text-5xl bg-gray-300 p-3 rounded-xl font-bold text-purple-600">fishing</h3>
                </div>
            </div>
        </SwiperSlide>         
     

        
      </Swiper>
    </div>
  );
};

export default CategorySlider;
