import React from "react";
import sliderImg1 from '../../assets/SliderImg/skyi.jpg'
import sliderImg2 from '../../assets/SliderImg/evening-i.jpg'
import sliderImg3 from '../../assets/SliderImg/sea--.jpg'
// import Swiper core and required modules
import { Navigation,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Zoom } from "react-awesome-reveal";
const Slider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{delay:5000}}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {/* slider -1 */}
        <SwiperSlide>
            <div className="relative h-[100vh] w-full">
                <img className="w-full h-[100vh] lg:max-h-[100vh]" src={sliderImg2} alt="" />
                {/* text and black overlay */}
                <div className="absolute inset-0 bg-[#0000008b] flex flex-col justify-center items-center text-center p-6">

                <Zoom duration={2000}>
                    <h2 className="lg:text-6xl font-bold text-[#feecff]">Find Your People With Hobby Hub</h2>
                  </Zoom>
                    <h5 className="lg:text-xl font-medium text-[#fef0ff] w-full lg:w-6/12 mx-auto mt-6"> Hey looking for your passion related Group and your passion related People,We are here to help you to find it.Explore Our Website for more information.</h5>
                </div>
            </div>
        </SwiperSlide>         
      {/* slider - 2 */}
        <SwiperSlide>
            <div className="relative h-[100vh] w-full">
                <img className="w-full h-[100vh] lg:max-h-[100vh]" src={sliderImg3} alt="" />
                {/* text and black overlay */}
                <div className="absolute inset-0 bg-[#0000008b] flex flex-col justify-center items-center text-center p-6">
                  <Zoom duration={2000}>
                    <h2 className="lg:text-6xl font-bold text-[#feecff]">Turn Your Hobbies Into FriendShip!</h2>
                    </Zoom>
                    <h5 className="lg:text-xl font-medium text-[#fef0ff] w-full lg:w-6/12 mx-auto mt-6">Using our website you can create your hobbie group and find your related passion people.</h5>
                </div>
            </div>
        </SwiperSlide>         
        {/* slider - 3 */}
        <SwiperSlide>
            <div className="relative h-[100vh] w-full">
                <img className="w-full h-[100vh] lg:max-h-[100vh]" src={sliderImg1} alt="" />
                {/* text and black overlay */}
                <div className="absolute inset-0 bg-[#0000008b] flex flex-col justify-center items-center text-center p-6">
                  <Zoom duration={2000}>
                    <h2 className="lg:text-6xl font-bold text-[#feecff]">Your Next Hobbie Adventure Start Here With Us</h2>
                    </Zoom>
                    <h5 className="lg:text-xl font-medium text-[#fef0ff] w-full lg:w-6/12 mx-auto mt-6">Create account and join our website and find your hobbie realted people and start your next adventure.Start Today!</h5>
                </div>
            </div>
        </SwiperSlide> 

        
      
        
      </Swiper>
    </div>
  );
};

export default Slider;
