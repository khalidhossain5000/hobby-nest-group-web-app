import React from 'react';
import { Outlet } from 'react-router';
import OtherPageNavBar from '../Compoents/Header/OtherPageNavBar';
import NavBar from '../Compoents/Header/NavBar';

const AuthLayout = () => {
    return (
        <div>
            <header>
                {/* <OtherPageNavBar></OtherPageNavBar> */}
                <NavBar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayout;