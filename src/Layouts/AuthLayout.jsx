import React from 'react';
import { Outlet } from 'react-router';
import OtherPageNavBar from '../Compoents/Header/OtherPageNavBar';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <OtherPageNavBar></OtherPageNavBar>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayout;