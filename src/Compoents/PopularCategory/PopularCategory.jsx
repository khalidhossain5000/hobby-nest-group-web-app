import Lottie from "lottie-react";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { TypeAnimation } from 'react-type-animation';

// import gradientLottie from "../../lottieFile/gradient-lottie.json";
import CategorySlider from "./CategorySlider";
const PopularCategory = () => {
  return (
    <div className="py-24">
      <h5 className="text-center"><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Explore',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Popular',
        1000,
        'Trending',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem', display: 'inline-block',color:'#6004b2',fontWeight:'bold',textAlign:'center'}}
      repeat={Infinity}
    /></h5>
      
      <Slide>
        <h1 className="text-6xl font-bold text-pink-600 text-center pt-3 pb-12">
          
          Popular Category
        </h1>
      </Slide>
      <div className="max-w-full py-12 lg:py-24">
        
            <CategorySlider/>
        
      </div>
    </div>
  );
};

export default PopularCategory;
