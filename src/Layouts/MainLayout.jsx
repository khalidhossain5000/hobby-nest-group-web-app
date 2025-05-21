import React from 'react';
import NavBar from '../Compoents/Header/NavBar';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div>
            <header className='w-full relative ' > 
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;