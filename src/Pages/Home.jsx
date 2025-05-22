import React from 'react';
import Slider from '../Compoents/Slider/Slider';
import FeaturedGroup from '../Compoents/FeaturedGroup/FeaturedGroup';
import RadialGradient from '../Compoents/Bg-Gradient/RadialGradient';


const Home = () => {
    return (
        // <Slider></Slider>
        <div>

            <Slider></Slider>

            <main className='container mx-auto relative'>
                <FeaturedGroup></FeaturedGroup>
                <RadialGradient></RadialGradient>
            </main>
        </div>
        
    );
};

export default Home;