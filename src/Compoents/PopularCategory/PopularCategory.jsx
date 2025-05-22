import Lottie from "lottie-react";
import React from "react";
import { Slide } from "react-awesome-reveal";
// import gradientLottie from "../../lottieFile/gradient-lottie.json";
import CategorySlider from "./CategorySlider";
const PopularCategory = () => {
  return (
    <div className="py-24">
      <h5 className="text-xl text-pink-500 font-bold text-center">Explore</h5>
      <Slide>
        <h1 className="text-6xl font-bold text-pink-600 text-center pt-6 pb-12">
          
          Popular Category
        </h1>
      </Slide>
      <div className="w-full py-12 lg:py-24">
        
            <CategorySlider/>
        
      </div>
    </div>
  );
};

export default PopularCategory;
