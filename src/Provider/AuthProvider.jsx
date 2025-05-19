import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userInfo={
        name:'Khalid hO'
    }
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    )
};

export default AuthProvider;