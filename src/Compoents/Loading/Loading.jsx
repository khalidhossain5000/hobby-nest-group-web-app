import React from 'react';
import { GridLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="min-h-screen flex bg-white inset-0 justify-center items-center">
            <GridLoader />
        </div>
    );
};

export default Loading;