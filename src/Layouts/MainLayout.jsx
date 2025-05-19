import React from 'react';
import NavBar from '../Compoents/Header/NavBar';
import { Outlet } from 'react-router';
import Slider from '../Compoents/Slider/Slider';

const MainLayout = () => {
    return (
        <div>
            <header className='w-full relative ' > 
                <NavBar></NavBar>
                <Slider></Slider>
            </header>
            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;