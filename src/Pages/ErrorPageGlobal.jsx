import React from 'react';
import error from '../assets/error-404.png'
import { Link } from 'react-router';
import OtherPageNavBar from '../Compoents/Header/OtherPageNavBar';



const ErrorPageGlobal = () => {
    return (

        <div >
            {/* <div className="dynamic-title">
               <Helmet>
                <title>Error-404|</title>
               </Helmet>
            </div> */}
            <header>
                <OtherPageNavBar />
            </header>
            <main className='relative py-24 px-2 lg:px-0 bg-gradient-to-br from-[#000626] to-[#4a92ea]'>
                <div className="container mx-auto flex items-center justify-between gap-6">
                    <div className="title lg:w-[50%]">
                        <h1 className='text-[210px] text-[#20ca6f] '>404</h1>
                        <h2 className='text-6xl font-medium text-white'>Ooops, Page Not Found</h2>
                        <h3 className='text-3xl font-medium text-white my-8'>We Can't Seem to find the page you're looking for.</h3>
                        <Link to='/'>
                            <button className="btn w-9/12 bg-gradient-to-br from-[#00082a] to-[#143a70] p-8 border-pink-300 text-xl text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-bl hover:from-[#e050de] hover:to-[#5b04ed] transition duration-700">Back To Home</button>
                        </Link>
                    </div>
                    <div className="img z-10 lg:w-[50%]">
                        <img className='w-full' src={error} alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ErrorPageGlobal;