import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Compoents/Loading/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading}=use(AuthContext);
        if(loading){
        return <Loading/>
    }
    if(user || user?.email) return children;

    return <Navigate to="/auth/login" state={{from:location.pathname}} replace ></Navigate>
};

export default PrivateRoute;