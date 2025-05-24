import React from 'react';
import Slider from '../Compoents/Slider/Slider';
import FeaturedGroup from '../Compoents/FeaturedGroup/FeaturedGroup';
import RadialGradient from '../Compoents/Bg-Gradient/RadialGradient';
import PopularCategory from '../Compoents/PopularCategory/PopularCategory';
import OurCommunity from '../Compoents/OurCommiunitySection/OurCommunity';
import Footer from '../Compoents/Footer/Footer';



const Home = () => {

    return (
        // <Slider></Slider>
        <div>
            
            <header className='overflow-x-hidden'> 

            <Slider></Slider>
            </header>

            <main className='container mx-auto relative'>
                <FeaturedGroup></FeaturedGroup>
                <RadialGradient></RadialGradient>
                <PopularCategory></PopularCategory>
                <OurCommunity></OurCommunity>
            </main>
            <footer>
                <Footer></Footer>
                
            </footer>
        </div>
        
    );
};

export default Home;