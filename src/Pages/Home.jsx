import React from 'react';
import Slider from '../Compoents/Slider/Slider';
import FeaturedGroup from '../Compoents/FeaturedGroup/FeaturedGroup';
import RadialGradient from '../Compoents/Bg-Gradient/RadialGradient';
import PopularCategory from '../Compoents/PopularCategory/PopularCategory';
import OurCommunity from '../Compoents/OurCommiunitySection/OurCommunity';


const Home = () => {
    return (
        // <Slider></Slider>
        <div>

            <Slider></Slider>

            <main className='container mx-auto relative'>
                <FeaturedGroup></FeaturedGroup>
                <RadialGradient></RadialGradient>
                <PopularCategory></PopularCategory>
                <OurCommunity></OurCommunity>
            </main>
        </div>
        
    );
};

export default Home;